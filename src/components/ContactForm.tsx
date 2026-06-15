import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, Language, Theme, SeatBookingPrefill } from '../types';
import { Phone, MessageSquare, MapPin, Clock, Navigation, Users, Car, Plus, Minus, ArrowRightLeft, Sparkles } from 'lucide-react';

interface ContactFormProps {
  language: Language;
  theme: Theme;
  prefill?: SeatBookingPrefill | null;
  onPrefillConsumed?: () => void;
}

// Suggestion list for the destination city field (matches as soon as the
// first 1-2 letters are typed, via the native <datalist> behaviour).
const INDIAN_CITIES = [
  'Lucknow', 'Ghazipur', 'Varanasi (Banaras)', 'Prayagraj (Allahabad)', 'Ayodhya',
  'Kanpur', 'Gorakhpur', 'Patna', 'Delhi', 'Noida', 'Ghaziabad', 'Agra', 'Mathura',
  'Vrindavan', 'Haridwar', 'Rishikesh', 'Dehradun', 'Mau', 'Ballia', 'Azamgarh',
  'Jaunpur', 'Mirzapur', 'Chandauli', 'Bhadohi', 'Bareilly', 'Faizabad', 'Sultanpur',
  'Pratapgarh', 'Jaipur', 'Chandigarh', 'Indore', 'Bhopal', 'Ahmedabad', 'Surat',
  'Mumbai', 'Pune', 'Kolkata', 'Kathmandu (Nepal)', 'Pokhara (Nepal)', 'Lumbini (Nepal)',
];

// The Front row only has 1 seat; the Middle and Rear rows have 3 seats each.
const getMaxPersonsForSeatType = (seat: string): number => {
  if (seat === 'Front Executive Seat (₹849)') return 1;
  if (seat === 'Middle Premium Cabin Seat (₹749)' || seat === 'Rear Economy Seat (₹649)') return 3;
  return 6;
};

// Persists the form so a returning visitor's details are restored automatically
const BOOKING_FORM_STORAGE_KEY = 'cab_booking_form_data';

const loadSavedFormData = () => {
  try {
    const saved = localStorage.getItem(BOOKING_FORM_STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

export default function ContactForm({ language, theme, prefill, onPrefillConsumed }: ContactFormProps) {
  const t = TRANSLATIONS[language];

  // Whether this form was opened with pre-selected data from the fare estimator
  const [appliedPrefill] = useState(prefill ?? null);

  // Previously submitted form details restored from this browser
  const [savedFormData] = useState(loadSavedFormData);

  // Which booking flow is currently active
  const [bookingMode, setBookingMode] = useState<'sharing' | 'reserve'>(savedFormData?.bookingMode ?? 'sharing');

  // Shared lead fields
  const [name, setName] = useState(savedFormData?.name ?? '');
  const [phone, setPhone] = useState(savedFormData?.phone ?? '');
  const [date, setDate] = useState(savedFormData?.date ?? '');
  const [customMsg, setCustomMsg] = useState(savedFormData?.customMsg ?? '');

  // Sharing Cab specific fields (pre-filled from the fare estimator when available)
  const [route, setRoute] = useState(appliedPrefill?.route ?? savedFormData?.route ?? 'Ghazipur → Lucknow (06:00 AM Departure)');
  const [seatType, setSeatType] = useState(appliedPrefill?.seatType ?? savedFormData?.seatType ?? 'Middle Premium Cabin Seat (₹749)');
  const [numPersons, setNumPersons] = useState(appliedPrefill?.numPersons ?? savedFormData?.numPersons ?? 1);

  // Reserve Cab specific fields
  const [fromCity, setFromCity] = useState(savedFormData?.fromCity ?? 'Ghazipur');
  const [toCity, setToCity] = useState(savedFormData?.toCity ?? '');
  const [carType, setCarType] = useState(savedFormData?.carType ?? 'Maruti Suzuki Dzire');

  // Clear the lifted prefill once it has been applied so it doesn't re-apply later
  useEffect(() => {
    if (appliedPrefill) {
      onPrefillConsumed?.();
    }
  }, []);

  const whatsappNum = '919161666009';

  // Form Submission handles
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let outputMessage = '';

    if (bookingMode === 'sharing') {
      const greetingText = language === 'en'
        ? 'Hello,\n\nI would like to book a seat in the Sharing Cab.'
        : 'नमस्ते,\n\nमैं शेयरिंग कैब में सीट बुक करना चाहता हूँ।';

      outputMessage = `${greetingText}\n\nName: ${name || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nTravel Date: ${date || 'Not provided'}\nRoute: ${route}\nNumber of Persons: ${numPersons}\nSeat Type: ${seatType}\nInstructions: ${customMsg || 'None'}\n\nPlease share booking confirmation details and availability status.\n\nThank you.`;
    } else {
      const greetingText = language === 'en'
        ? 'Hello,\n\nI would like to reserve a private cab.'
        : 'नमस्ते,\n\nमैं एक प्राइवेट कैब रिज़र्व करना चाहता हूँ।';

      outputMessage = `${greetingText}\n\nName: ${name || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nFrom: ${fromCity || 'Not provided'}\nDestination: ${toCity || 'Not provided'}\nTravel Date: ${date || 'Not provided'}\nCar Type: ${carType}\nInstructions: ${customMsg || 'None'}\n\nPlease share booking confirmation details and availability status.\n\nThank you.`;
    }

    // Persist the filled-in details locally so they're restored on the next visit
    try {
      localStorage.setItem(BOOKING_FORM_STORAGE_KEY, JSON.stringify({
        bookingMode, name, phone, date, customMsg,
        route, seatType, numPersons,
        fromCity, toCity, carType,
      }));
    } catch {
      // Ignore storage failures (e.g. private browsing mode)
    }

    const formattedUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(outputMessage)}`;
    window.open(formattedUrl, '_blank', 'noreferrer');
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg text-sm font-medium border transition-colors outline-hidden ${
    theme === 'dark'
      ? 'bg-neutral-900 border-white/5 focus:border-brand-red/40 text-white'
      : 'bg-white border-neutral-300 focus:border-brand-red text-brand-black'
  }`;

  const labelClasses = `text-xs font-bold uppercase tracking-wider block ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`;

  return (
    <section id="contact-us-section" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-black' : 'bg-white text-brand-black'
    }`}>
      {/* Decorative absolute layouts */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Direct Operators Booking' : 'ऑपरेटर से सीधे सम्पर्क करें'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight animate-pulse-slow">
            {t.contactTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.contactSubtitle}
          </p>
        </div>

        {/* 2-Column form - maps section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* COLUMN 1: INTERACTIVE CONVERSION FORM */}
          <div className="lg:col-span-7" id="contact-interactive-form-container">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              theme === 'dark' ? 'bg-brand-charcoal border-white/5 shadow-2xl' : 'bg-neutral-50 border-neutral-200'
            }`}>

              <div className="flex items-center space-x-2 mb-6">
                <Navigation className="w-5 h-5 text-brand-red" />
                <h3 className="font-display font-medium text-lg leading-none">
                  {t.bookingFormHeading}
                </h3>
              </div>

              {/* Pre-fill confirmation banner (only shown when arriving from the Fare Estimator) */}
              {appliedPrefill && bookingMode === 'sharing' && (
                <div className={`flex items-start space-x-2.5 mb-6 p-3.5 rounded-xl border text-xs sm:text-sm ${
                  theme === 'dark'
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                }`} id="prefill-confirmation-banner">
                  <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    {language === 'en'
                      ? 'Your selection from the Fare Estimator has been pre-filled below. Just add your name & phone to generate the booking.'
                      : 'फेयर एस्टिमेटर से आपकी पसंद नीचे पहले से भर दी गई है। बुकिंग बनाने के लिए केवल अपना नाम व फोन नंबर डालें।'}
                  </span>
                </div>
              )}

              {/* BOOKING TYPE SWITCHER */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6" id="booking-type-switcher">
                <button
                  type="button"
                  onClick={() => setBookingMode('sharing')}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                    bookingMode === 'sharing'
                      ? 'border-brand-red bg-brand-red/10 shadow-lg'
                      : theme === 'dark'
                        ? 'border-white/5 bg-neutral-900 hover:border-brand-red/30'
                        : 'border-neutral-200 bg-white hover:border-brand-red/30'
                  }`}
                  id="booking-mode-sharing"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Users className={`w-5 h-5 ${bookingMode === 'sharing' ? 'text-brand-red' : theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`} />
                    <span className={`font-display font-bold text-sm sm:text-base ${
                      bookingMode === 'sharing' ? 'text-brand-red' : theme === 'dark' ? 'text-white' : 'text-brand-black'
                    }`}>
                      {t.bookingTabSharing}
                    </span>
                  </div>
                  <p className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {t.bookingTabSharingDesc}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setBookingMode('reserve')}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                    bookingMode === 'reserve'
                      ? 'border-brand-red bg-brand-red/10 shadow-lg'
                      : theme === 'dark'
                        ? 'border-white/5 bg-neutral-900 hover:border-brand-red/30'
                        : 'border-neutral-200 bg-white hover:border-brand-red/30'
                  }`}
                  id="booking-mode-reserve"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Car className={`w-5 h-5 ${bookingMode === 'reserve' ? 'text-brand-red' : theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`} />
                    <span className={`font-display font-bold text-sm sm:text-base ${
                      bookingMode === 'reserve' ? 'text-brand-red' : theme === 'dark' ? 'text-white' : 'text-brand-black'
                    }`}>
                      {t.bookingTabReserve}
                    </span>
                  </div>
                  <p className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {t.bookingTabReserveDesc}
                  </p>
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">

                {/* Name and Phone Inputs grids (shared by both flows) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className={labelClasses}>
                      {t.contactFormName} *
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'en' ? 'Enter full name' : 'अपना पूरा नाम दर्ज करें'}
                      className={inputClasses}
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className={labelClasses}>
                      {t.contactFormPhone} *
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={language === 'en' ? 'Enter 10-digit number' : '१०-अंकों का नंबर दर्ज करें'}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* === SHARING CAB FIELDS === */}
                {bookingMode === 'sharing' && (
                  <div className="space-y-5" id="sharing-cab-fields">
                    {/* Date Input */}
                    <div className="space-y-1.5">
                      <label className={labelClasses}>
                        {t.contactFormDate} *
                      </label>
                      <input
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`${inputClasses} cursor-pointer`}
                      />
                    </div>

                    {/* Route selector dropdown */}
                    <div className="space-y-1.5">
                      <label className={labelClasses}>
                        {t.contactFormRoute}
                      </label>
                      <select
                        value={route}
                        onChange={(e) => setRoute(e.target.value)}
                        className={`${inputClasses} cursor-pointer`}
                      >
                        <option value="Ghazipur → Lucknow (06:00 AM Departure)">Ghazipur → Lucknow (06:00 AM Departure)</option>
                        <option value="Lucknow → Ghazipur (03:00 PM Departure)">Lucknow → Ghazipur (03:00 PM Departure)</option>
                        <option value="Lucknow → Ghazipur (04:00 PM Departure)">Lucknow → Ghazipur (04:00 PM Departure)</option>
                        <option value="Private Booking / Custom Airport Drop Request">Private Booking / Custom Airport Drop Request</option>
                      </select>
                    </div>

                    {/* Number of persons & Seat Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Number of Persons counter */}
                      <div className="space-y-1.5">
                        <label className={labelClasses}>
                          {t.bookingFormPersons}
                        </label>
                        <div className={`flex items-center justify-between p-1.5 rounded-lg border ${
                          theme === 'dark' ? 'bg-neutral-900 border-white/5' : 'bg-white border-neutral-300'
                        }`}>
                          <button
                            type="button"
                            disabled={numPersons <= 1}
                            onClick={() => setNumPersons((prev) => Math.max(1, prev - 1))}
                            className="w-9 h-9 rounded-md bg-brand-charcoal border border-white/5 hover:border-brand-red/30 flex items-center justify-center text-white disabled:pointer-events-none disabled:opacity-40 transition-all cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-base font-black px-2 flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-brand-red" />
                            {numPersons}
                          </span>
                          <button
                            type="button"
                            disabled={numPersons >= getMaxPersonsForSeatType(seatType)}
                            onClick={() => setNumPersons((prev) => Math.min(getMaxPersonsForSeatType(seatType), prev + 1))}
                            className="w-9 h-9 rounded-md bg-brand-charcoal border border-white/5 hover:border-brand-red/30 flex items-center justify-center text-white disabled:pointer-events-none disabled:opacity-40 transition-all cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Seat Type drop down */}
                      <div className="space-y-1.5">
                        <label className={labelClasses}>
                          {t.contactFormSeat}
                        </label>
                        <select
                          value={seatType}
                          onChange={(e) => {
                            const newSeatType = e.target.value;
                            setSeatType(newSeatType);
                            setNumPersons((prev) => Math.min(prev, getMaxPersonsForSeatType(newSeatType)));
                          }}
                          className={`${inputClasses} cursor-pointer`}
                        >
                          <option value="Front Executive Seat (₹849)">Front Executive Seat (₹849)</option>
                          <option value="Middle Premium Cabin Seat (₹749)">Middle Premium Cabin Seat (₹749)</option>
                          <option value="Rear Economy Seat (₹649)">Rear Economy Seat (₹649)</option>
                          <option value="Multiple Row Booking / Private Fleet renting">Multiple Row Booking / Private Fleet renting</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* === RESERVE CAB FIELDS === */}
                {bookingMode === 'reserve' && (
                  <div className="space-y-5" id="reserve-cab-fields">
                    {/* From / To Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                      {/* From Input */}
                      <div className="space-y-1.5">
                        <label className={labelClasses}>
                          {t.bookingFormFrom} *
                        </label>
                        <input
                          required
                          type="text"
                          value={fromCity}
                          onChange={(e) => setFromCity(e.target.value)}
                          placeholder="Ghazipur"
                          className={inputClasses}
                        />
                      </div>

                      {/* To Input with city suggestions */}
                      <div className="space-y-1.5">
                        <label className={labelClasses}>
                          {t.bookingFormTo} *
                        </label>
                        <input
                          required
                          type="text"
                          list="indian-city-suggestions"
                          value={toCity}
                          onChange={(e) => setToCity(e.target.value)}
                          placeholder={t.bookingFormToPlaceholder}
                          className={inputClasses}
                        />
                        <datalist id="indian-city-suggestions">
                          {INDIAN_CITIES.map((city) => (
                            <option key={city} value={city} />
                          ))}
                        </datalist>
                      </div>
                    </div>

                    {/* Swap hint row */}
                    <div className="flex items-center justify-center -mt-2 -mb-1">
                      <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-wider font-bold text-neutral-500">
                        <ArrowRightLeft className="w-3 h-3" />
                        <span>{fromCity || '—'} → {toCity || (language === 'en' ? 'Destination' : 'गंतव्य')}</span>
                      </span>
                    </div>

                    {/* Date Input */}
                    <div className="space-y-1.5">
                      <label className={labelClasses}>
                        {t.contactFormDate} *
                      </label>
                      <input
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`${inputClasses} cursor-pointer`}
                      />
                    </div>

                    {/* Car Type selector */}
                    <div className="space-y-1.5">
                      <label className={labelClasses}>
                        {t.bookingFormCarType}
                      </label>
                      <select
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                        className={`${inputClasses} cursor-pointer`}
                      >
                        <option value="Maruti Suzuki Dzire">Maruti Suzuki Dzire (Sedan, 4 Seater)</option>
                        <option value="Kia Carens">Kia Carens (6/7 Seater)</option>
                        <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga (6 Seater)</option>
                        <option value="Toyota Innova Crysta">Toyota Innova Crysta (7 Seater)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Custom Optional instructions */}
                <div className="space-y-1.5">
                  <label className={labelClasses}>
                    {language === 'en' ? 'Special Instructions (Optional)' : 'विशेष निर्देश (वैकल्पिक)'}
                  </label>
                  <textarea
                    rows={3}
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder={t.contactFormMsgPlaceholder}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* Submit button generating direct whatsapp redirect */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
                  id="contact-form-submit-btn"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>{bookingMode === 'sharing' ? t.contactFormSubmit : t.bookingFormGenerate}</span>
                </button>

              </form>

            </div>
          </div>

          {/* COLUMN 2: OFFICE INFO, TELEPHONY LINKS & COMPOSITE MOCK MAP */}
          <div className="lg:col-span-5 space-y-6" id="contact-info-map-container">

            {/* Quick business hours & contacts card */}
            <div className={`p-6 rounded-2xl border ${
              theme === 'dark' ? 'bg-brand-charcoal border-white/5 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-600'
            }`}>
              <h3 className={`font-display font-semibold text-lg mb-4 ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>
                {language === 'en' ? 'Core Support desk' : 'सहायता काउंटर'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Office hours */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className={`font-bold uppercase tracking-wider text-[10px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.contactOfficeHours}</h4>
                    <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>{t.contactOfficeHoursVal}</p>
                  </div>
                </div>

                {/* Office locations */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className={`font-bold uppercase tracking-wider text-[10px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{t.contactOfficeAddress}</h4>
                    <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>{t.contactOfficeAddressVal}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct telephony calling links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919161666009"
                className="p-4 rounded-xl bg-brand-red/10 hover:bg-brand-red/15 border border-brand-red/20 text-center transition-all duration-250 flex flex-col items-center justify-center space-y-2 group"
                id="contact-call-1-btn"
              >
                <Phone className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
                <span className={`text-[10px] uppercase tracking-wider font-bold font-sans ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{language === 'en' ? 'Primary Call' : 'मुख्य कॉल'}</span>
                <span className={`text-xs font-mono font-bold block ${theme === 'dark' ? 'text-brand-slate' : 'text-brand-black'}`}>+91 91616 66009</span>
              </a>

              <a
                href="tel:+919454003387"
                className="p-4 rounded-xl bg-brand-gold/10 hover:bg-brand-gold/15 border border-brand-gold/20 text-center transition-all duration-250 flex flex-col items-center justify-center space-y-2 group"
                id="contact-call-2-btn"
              >
                <Phone className="w-5 h-5 text-brand-gold group-hover:scale-110 transition-transform" />
                <span className={`text-[10px] uppercase tracking-wider font-bold font-sans ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{language === 'en' ? 'Secondary Call' : 'सहयोगी कॉल'}</span>
                <span className={`text-xs font-mono font-bold block ${theme === 'dark' ? 'text-brand-slate' : 'text-brand-black'}`}>+91 94540 03387</span>
              </a>
            </div>

            {/* REAL INTERACTIVE GOOGLE MAP EMBED */}
            <div className={`rounded-2xl border overflow-hidden relative shadow-xl ${
              theme === 'dark' ? 'border-white/10 bg-brand-black shadow-brand-red/5' : 'border-neutral-200 bg-white'
            }`} id="contact-google-map-container">
              <div className={`p-4 border-b flex items-center justify-between ${
                theme === 'dark' ? 'border-white/10 bg-neutral-950/25' : 'border-neutral-200 bg-neutral-100'
              }`}>
                <span className={`text-[11px] uppercase tracking-wider font-mono font-bold ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {language === 'en' ? 'Verified Office Location - Rent a car' : 'सत्यापित कार्यालय स्थान - रेंट ए कार'}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse"></span>
              </div>

              {/* Responsive Google Maps Embed Frame */}
              <div className="relative w-full h-80 bg-neutral-900 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1822676.0724111167!2d79.7957042422204!3d26.842681025261747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991ff13c620a771%3A0x4e4d031fe1ac703a!2sRent%20a%20car!5e0!3m2!1sen!2sin!4v1781340867420!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rent a car Office Location Google Map"
                  className="w-full h-full transition-all duration-300 dark:opacity-85 filter dark:contrast-125 dark:brightness-95"
                ></iframe>
              </div>

              {/* Address detail tray underneath map */}
              <div className={`p-4 text-xs leading-relaxed space-y-1 border-t font-sans ${
                theme === 'dark' ? 'border-white/10 bg-neutral-950/20' : 'border-neutral-200 bg-neutral-100'
              }`}>
                <p className="font-extrabold text-brand-red text-[11px] uppercase tracking-wider">
                  {language === 'en' ? 'Ghazipur Registered Address' : 'गाज़ीपुर पंजीकृत कार्यालय पता'}
                </p>
                <p className={`font-medium ${theme === 'dark' ? 'text-white/90' : 'text-neutral-800'}`}>
                  Rent a car
                </p>
                <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}>
                  RKBK petrol pump, near Awadh Honda Agency, Bansibazar, Lanka, Ghazipur, Uttar Pradesh 233001
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
