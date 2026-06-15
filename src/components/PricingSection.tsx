import React, { useState } from 'react';
import { TRANSLATIONS, Language, Theme, SeatBookingPrefill } from '../types';
import { Armchair, CheckCircle2, MessageSquare, AlertCircle, Calculator, Plus, Minus, ClipboardList } from 'lucide-react';

interface PricingSectionProps {
  language: Language;
  theme: Theme;
  onRequestBooking: (prefill: SeatBookingPrefill) => void;
}

export default function PricingSection({ language, theme, onRequestBooking }: PricingSectionProps) {
  const t = TRANSLATIONS[language];
  const [selectedRow, setSelectedRow] = useState<'front' | 'middle' | 'rear'>('middle');
  const [numSeats, setNumSeats] = useState<number>(1);
  const [calcRoute, setCalcRoute] = useState<string>('Ghazipur → Lucknow');
  const [calcTimeSlot, setCalcTimeSlot] = useState<string>('6:00 AM');

  const handleSelectRow = (row: 'front' | 'middle' | 'rear') => {
    setSelectedRow(row);
    const limit = row === 'front' ? 1 : 3;
    setNumSeats(prev => Math.min(prev, limit));
  };

  const seatTypes = {
    front: {
      id: 'front',
      name: t.pricingFrontSeat,
      nameHi: t.pricingFrontSeat,
      price: 849,
      comfort: [
        language === 'en' ? 'Extra Wide Co-Driver Position' : 'चिकनकारी लेदर एक्स्ट्रा वाइड सीट',
        language === 'en' ? '180° Panoramic Windshield View' : 'पैनोरमिक एक्सप्रेसवे दृश्य (आगे की खिड़की)',
        language === 'en' ? 'Exclusive Dashboard Charger Access' : 'डैशबोर्ड फास्ट चार्जर की सीधी सुविधा',
        language === 'en' ? 'Maximum Legroom & Recline posture' : 'अधिकतम लेगरूम और रिक्लाइनिंग पोस्चर',
        language === 'en' ? 'Priority boarding & easy egress' : 'आसान प्रस्थान और त्वरित निकास'
      ],
      description: language === 'en' ? 'Perfect for executives, photographers, and seniors who prefer leg stretchability.' : 'व्यापारियों, वरिष्ठ नागरिकों और एक्सप्रेसवे प्रेमियों के लिए अत्यधिक आरामदायक आगे का केबिन।',
      comfortLevel: '★★★★★',
      capacity: 1
    },
    middle: {
      id: 'middle',
      name: t.pricingMiddleSeat,
      nameHi: t.pricingMiddleSeat,
      price: 749,
      comfort: [
        language === 'en' ? 'Premium Row with Adjustable Backrest' : 'एडजस्टेबल बैकरेस्ट के साथ प्रीमियम रो',
        language === 'en' ? 'Independent Roof AC Blower Control' : 'स्वतंत्र छत एसी ब्लोअर कंट्रोल नोजल',
        language === 'en' ? 'Armrest with Integrated Cup-Holders' : 'इंटीग्रेटेड कप-होल्डर्स आर्मरेस्ट',
        language === 'en' ? 'Incredibly plush cushioning feeling' : 'लंबी यात्रा के लिए सुपर कोजी गद्देदार सीटें',
        language === 'en' ? 'Balanced, low-vibration ride zone' : 'कम कंपन वाला संतुलित सवारी ज़ोन'
      ],
      description: language === 'en' ? 'The absolute standard for supreme relaxation. Ideal for sleeping or remote work.' : 'परम विश्राम के लिए सबसे उपयुक्त। नींद लेने या लंबी दूरी के काम के लिए सर्वोत्तम बीच का केबिन।',
      comfortLevel: '★★★★☆',
      capacity: 3
    },
    rear: {
      id: 'rear',
      name: t.pricingRearSeat,
      nameHi: t.pricingRearSeat,
      price: 649,
      comfort: [
        language === 'en' ? 'Most Budget-Friendly Pricing' : 'सबसे किफायती किराया और मूल्य',
        language === 'en' ? 'Excellent privacy for single travelers' : 'अकेले यात्रियों के लिए बेहतर प्राइवेसी',
        language === 'en' ? 'Full roof ventilation cold airflow' : 'पूर्ण छत वायु प्रवाह कूल वेंटिलेशन',
        language === 'en' ? 'Dedicated cup holders & side storage' : 'साइड स्टोरेज बिन और कप होल्डर पॉकेट',
        language === 'en' ? 'Ample space for standard backpacks' : 'ऊपर बैग रखने के लिए सुविधाजनक रो'
      ],
      description: language === 'en' ? 'Outstanding value for solo student commuters or budget-conscious travelers.' : 'पारंपरिक बसों से कई गुना तेज। अकेले यात्रियों और बजट-अनुकूल दैनिक यात्रियों के लिए बेस्ट वैल्यू।',
      comfortLevel: '★★★☆☆',
      capacity: 3
    }
  };

  const currentSeat = seatTypes[selectedRow];

  const handleSeatBooking = (rowKey: 'front' | 'middle' | 'rear') => {
    const seatObj = seatTypes[rowKey];
    const seatLabel = language === 'en' ? seatObj.name : seatObj.nameHi;
    const whatsappNumber = '919161666009';
    const msgText = `Hello,\n\nI would like to book a seat.\n\nName: \nTravel Date: \nRoute: Ghazipur ⇄ Lucknow\nSeat Type: ${seatLabel} (₹${seatObj.price})\n\nPlease share availability details. Thank you.`;
    const formatUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msgText)}`;
    window.open(formatUrl, '_blank', 'noreferrer');
  };

  return (
    <section id="pricing-section" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-charcoal text-brand-slate' : 'bg-neutral-50 text-brand-black border-t border-b border-neutral-200'
    }`}>
      {/* Visual glowing patterns */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Affordable Luxury' : 'किफायती लग्जरी किराया'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {t.pricingTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.pricingSubtitle}
          </p>
        </div>

        {/* 2-Column interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMN 1: INTERACTIVE VEHICLE CAB MAP VISUALIZER */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 text-center">
              {language === 'en' ? 'Click row to view features & pricing' : 'फ़ीचर और किराया देखने के लिए रो को क्लिक करें'}
            </h4>

            {/* Simulated Car Body Frame container */}
            <div className={`w-64 sm:w-72 border-4 rounded-t-[4rem] rounded-b-[2rem] p-6 pt-12 pb-8 relative flex flex-col items-center shadow-2xl transition-all duration-300 ${
              theme === 'dark' ? 'bg-[#151515] border-[#252525]' : 'bg-white border-neutral-300'
            }`}>
              {/* Windshield */}
              <div className="absolute top-2 w-48 h-6 rounded-t-full bg-neutral-800 flex items-center justify-center border-b border-neutral-700">
                <span className="text-[8px] font-mono tracking-widest text-neutral-500 uppercase">{language === 'en' ? 'Windshield' : 'सामने की विंडशील्ड'}</span>
              </div>
              
              {/* Front Dashboard row */}
              <div className="w-full flex justify-between items-center px-4 mb-6 pt-4 border-b border-dashed border-neutral-800/10 dark:border-white/5 pb-4">
                <div className="text-center">
                  <div className="w-10 h-10 rounded bg-[#222] border border-white/5 flex items-center justify-center text-neutral-400 text-[10px] font-bold" title="Driver Position">
                    {language === 'en' ? 'DRIVER' : 'चालक'}
                  </div>
                  <span className="text-[9px] text-neutral-500 uppercase block mt-1 font-mono">{language === 'en' ? 'Captain' : 'कैप्टन'}</span>
                </div>
                
                {/* ACTIVE SEATING SENSOR BTN: FRONT ROW */}
                <button
                  onClick={() => handleSelectRow('front')}
                  className={`flex flex-col items-center relative p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    selectedRow === 'front'
                      ? 'bg-[#222] border-2 border-brand-red shadow-xl ring-1 ring-white/20 scale-105'
                      : theme === 'dark'
                        ? 'bg-[#222]/40 border border-white/5 hover:border-brand-gold/50'
                        : 'bg-neutral-100 border border-neutral-200 hover:border-brand-gold/50'
                  }`}
                  id="seat-sensor-front"
                >
                  <Armchair className={`w-7 h-7 ${selectedRow === 'front' ? 'text-brand-red' : 'text-neutral-500'}`} />
                  <span className={`text-[10px] font-black block leading-none pt-1 ${selectedRow === 'front' ? 'text-white' : theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>₹849</span>
                  <span className="text-[8px] uppercase tracking-wider text-brand-gold font-bold">{language === 'en' ? 'Front' : 'आगे'}</span>
                  {selectedRow === 'front' && <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-brand-red rounded-full"></div>}
                </button>
              </div>

              {/* ACTIVE SEATING SENSOR BTN: MIDDLE ROW (3 seats combined in premium utility) */}
              <button
                onClick={() => handleSelectRow('middle')}
                className={`w-full flex justify-around items-center py-4 px-3 rounded-2xl mb-6 transition-all duration-300 cursor-pointer relative ${
                  selectedRow === 'middle'
                    ? 'bg-[#222] border-2 border-brand-indigo outline-hidden ring-1 ring-white/20 border-brand-red scale-105 shadow-xl'
                    : theme === 'dark'
                      ? 'bg-[#222]/40 border border-white/5 hover:border-brand-gold/50'
                      : 'bg-neutral-100 border border-neutral-200 hover:border-brand-gold/50'
                }`}
                id="seat-sensor-middle"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="flex justify-center space-x-1 sm:space-x-2">
                    <Armchair className={`w-7 h-7 ${selectedRow === 'middle' ? 'text-brand-red' : 'text-neutral-500'}`} />
                    <Armchair className={`w-7 h-7 ${selectedRow === 'middle' ? 'text-brand-red' : 'text-neutral-500'}`} />
                    <Armchair className={`w-7 h-7 ${selectedRow === 'middle' ? 'text-brand-red' : 'text-neutral-500'}`} />
                  </div>
                  <div className="text-[10px] font-mono font-bold pt-1.5 flex items-center justify-between w-full px-2">
                    <span className="text-brand-gold uppercase tracking-wider text-[8px]">{language === 'en' ? 'Middle Row' : 'बीच की सीट'}</span>
                    <span className={selectedRow === 'middle' ? 'text-white' : theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}>₹749 <span className="text-[8px] font-normal opacity-75">/seat</span></span>
                  </div>
                </div>
                {selectedRow === 'middle' && <div className="absolute bottom-1 left-6 right-6 h-0.5 bg-brand-red rounded-full"></div>}
              </button>

              {/* ACTIVE SEATING SENSOR BTN: REAR ROW (3 seats space option) */}
              <button
                onClick={() => handleSelectRow('rear')}
                className={`w-full flex justify-around items-center py-4 px-3 rounded-2xl mb-6 transition-all duration-300 cursor-pointer relative ${
                  selectedRow === 'rear'
                    ? 'bg-[#222] border-2 border-brand-red scale-105 shadow-xl ring-1 ring-white/20'
                    : theme === 'dark'
                      ? 'bg-[#222]/40 border border-white/5 hover:border-brand-gold/50'
                      : 'bg-neutral-100 border border-neutral-200 hover:border-brand-gold/50'
                }`}
                id="seat-sensor-rear"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="flex justify-center space-x-1 sm:space-x-2">
                    <Armchair className={`w-7 h-7 ${selectedRow === 'rear' ? 'text-brand-red' : 'text-neutral-500'}`} />
                    <Armchair className={`w-7 h-7 ${selectedRow === 'rear' ? 'text-brand-red' : 'text-neutral-500'}`} />
                    <Armchair className={`w-7 h-7 ${selectedRow === 'rear' ? 'text-brand-red' : 'text-neutral-500'}`} />
                  </div>
                  <div className="text-[10px] font-mono font-bold pt-1.5 flex items-center justify-between w-full px-4">
                    <span className="text-brand-gold uppercase tracking-wider text-[8px]">{language === 'en' ? 'Rear Row' : 'पीछे की सीट'}</span>
                    <span className={selectedRow === 'rear' ? 'text-white' : theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}>₹649 <span className="text-[8px] font-normal opacity-75">/seat</span></span>
                  </div>
                </div>
                {selectedRow === 'rear' && <div className="absolute bottom-1 left-8 right-8 h-0.5 bg-brand-red rounded-full"></div>}
              </button>

              {/* Trunk/Boot Space indication */}
              <div className="w-full mt-6 border-t border-dashed border-neutral-800/10 dark:border-white/5 pt-4 text-center">
                <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-widest">{language === 'en' ? 'Baggage Boot Compartment' : 'सामान रखने की जगह (डिक्की)'}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CUSTOM PREMIUM SEAT FEATURES DETAIL CARD */}
          <div className="lg:col-span-7" id="pricing-details-card">
            <div className={`p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-neutral-900/60 border border-white/5 backdrop-blur-md' 
                : 'bg-white border border-neutral-200'
            }`}>
              
              <div className="absolute top-0 right-0 p-4 shrink-0">
                <span className="text-brand-gold text-lg">{currentSeat.comfortLevel}</span>
              </div>

              {/* Header Title */}
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase font-mono tracking-widest px-2.5 py-1 bg-brand-red/10 text-brand-red border border-brand-red/20 rounded inline-block font-bold">
                  {language === 'en' ? 'Selected Seat Zone' : 'चयनित सीट क्षेत्र'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-semibold transition-all duration-300">
                  {currentSeat.name}
                </h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {currentSeat.description}
                </p>
              </div>

              {/* Pricing Display */}
              <div className="pb-6 mb-6 border-b border-dashed border-neutral-800/5 dark:border-white/10 flex items-baseline space-x-2">
                <span className="text-brand-red text-4xl sm:text-5xl font-display font-bold">₹{currentSeat.price}</span>
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  / {language === 'en' ? 'passenger per journey' : 'प्रति यात्री एकतरफा यात्रा'}
                </span>
              </div>

              {/* Comfort highlights with Checkmarks */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  {t.pricingSeatIncluded}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSeat.comfort.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <span className={theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reserve action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => handleSeatBooking(selectedRow)}
                  className="flex-grow flex items-center justify-center space-x-2.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg transition-all duration-150 cursor-pointer"
                  id="pricing-book-btn"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>{t.pricingBookSeat}</span>
                </button>

                <a
                  href="tel:+919161666009"
                  className={`flex items-center justify-center space-x-2 font-bold px-6 py-4 rounded-xl border transition-all duration-150 ${
                    theme === 'dark' ? 'border-white/10 hover:bg-neutral-800 text-white' : 'border-neutral-200 hover:bg-neutral-100 text-brand-black'
                  }`}
                  id="pricing-call-btn"
                >
                  <span>{language === 'en' ? 'Or Call Chauffeur' : 'या ऑपरेटर को कॉल करें'}</span>
                </a>
              </div>

              {/* Hygiene indicator */}
              <div className="pt-4 mt-4 border-t border-dashed border-neutral-800/5 dark:border-white/5 text-[11px] text-neutral-500 flex items-center space-x-1.5 justify-center">
                <AlertCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>{language === 'en' ? 'Note: Standard hand hygiene protocols follow inside cabin.' : 'ध्यान दें: यात्रा से पहले संपूर्ण केबिन ओजोन से सैनिटाइज किया जाता है।'}</span>
              </div>

            </div>
          </div>

        </div>

        {/* HIGH-FIDELITY LIVE JOURNEY FARE ESTIMATOR WIDGET AREA */}
        <div className={`mt-16 rounded-3xl border overflow-hidden shadow-2xl transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-[#121212] border-white/10 shadow-brand-red/5' 
            : 'bg-white border-neutral-200'
        }`} id="journey-fare-calculator">
          {/* Header row */}
          <div className="p-6 sm:p-8 bg-linear-to-r from-brand-red/10 via-brand-red/5 to-transparent border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-inner">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-display font-black tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-brand-black'
                }`}>
                  {language === 'en' ? 'Live Expressway Fare & Seat Estimator' : 'त्वरित एक्सप्रेसवे किराया और सीट कैलकुलेटर'}
                </h3>
                <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {language === 'en' 
                    ? 'Verify ticket prices and departure times for your journey.' 
                    : 'अपनी यात्रा के लिए टिकट दर और प्रस्थान समय का त्वरित अनुमान लगाएं।'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800/10 dark:divide-white/10">
            {/* COLUMN 1: CONTROLS INPUTS */}
            <div className="p-6 sm:p-8 lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-fade-in">
                {/* 1. Traveling Direction */}
                <div className="space-y-2">
                  <label className={`text-[10px] font-mono font-bold uppercase tracking-widest block ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    {language === 'en' ? 'Select Way Direction' : 'यात्रा की दिशा चुनें'}
                  </label>
                  <select
                    value={calcRoute}
                    onChange={(e) => setCalcRoute(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider border outline-hidden cursor-pointer transition-all ${
                      theme === 'dark' 
                        ? 'bg-brand-charcoal border-white/5 focus:border-brand-red/40 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-brand-red text-brand-black'
                    }`}
                  >
                    <option value="Ghazipur → Lucknow">Ghazipur → Lucknow (6:00 AM)</option>
                    <option value="Lucknow → Ghazipur">Lucknow → Ghazipur (3:00 PM)</option>
                    <option value="Lucknow → Ghazipur (Late)">Lucknow → Ghazipur (4:00 PM)</option>
                  </select>
                </div>

                {/* 2. Traveling Time slot */}
                <div className="space-y-2">
                  <label className={`text-[10px] font-mono font-bold uppercase tracking-widest block ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    {language === 'en' ? 'Selected Departure' : 'प्रस्थान का समय'}
                  </label>
                  <select
                    value={calcTimeSlot}
                    onChange={(e) => setCalcTimeSlot(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider border outline-hidden cursor-pointer transition-all ${
                      theme === 'dark' 
                        ? 'bg-brand-charcoal border-white/5 focus:border-brand-red/40 text-white' 
                        : 'bg-neutral-50 border-neutral-300 focus:border-brand-red text-brand-black'
                    }`}
                  >
                    <option value="6:00 AM">06:00 AM (Morning Cruise)</option>
                    <option value="3:00 PM">03:00 PM (Afternoon Fleet)</option>
                    <option value="4:00 PM">04:00 PM (Sunset Run)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {/* 3. Linkage to Seat Selection Row */}
                <div className="space-y-2">
                  <label className={`text-[10px] font-mono font-bold uppercase tracking-widest block ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    {language === 'en' ? 'Selected Comfort Tier' : 'पसंदीदा केबिन सीट'}
                  </label>
                  <div className="flex gap-2">
                    {(['front', 'middle', 'rear'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => handleSelectRow(r)}
                        className={`flex-1 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${
                          selectedRow === r
                            ? 'bg-brand-red border-brand-red text-white shadow-md shadow-brand-red/25 font-black'
                            : theme === 'dark'
                              ? 'bg-brand-charcoal/20 border-white/5 text-neutral-400 hover:border-brand-gold/30'
                              : 'bg-neutral-100 border-neutral-200 text-neutral-600 hover:border-brand-gold/30'
                        }`}
                      >
                        {r === 'front' ? 'Front' : r === 'middle' ? 'Middle' : 'Rear'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Ticket seat tickets counter code */}
                <div className="space-y-2">
                  <label className={`text-[10px] font-mono font-bold uppercase tracking-widest block ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    {language === 'en' ? 'Number of passenger tickets' : 'कुल यात्रियों की सीट संख्या'}
                  </label>
                  <div className={`flex items-center justify-between p-1.5 rounded-xl border ${
                    theme === 'dark' ? 'bg-brand-charcoal/40 border-white/5' : 'bg-neutral-50 border-neutral-200'
                  }`}>
                    <button
                      type="button"
                      disabled={numSeats <= 1}
                      onClick={() => setNumSeats(prev => Math.max(1, prev - 1))}
                      className="w-9 h-9 rounded-lg bg-brand-charcoal border border-white/5 hover:border-brand-red/30 flex items-center justify-center text-white disabled:pointer-events-none disabled:opacity-40 transition-all cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-base font-black px-4">{numSeats}</span>
                    <button
                      type="button"
                      disabled={numSeats >= (selectedRow === 'front' ? 1 : 3)}
                      onClick={() => setNumSeats(prev => Math.min(selectedRow === 'front' ? 1 : 3, prev + 1))}
                      className="w-9 h-9 rounded-lg bg-brand-charcoal border border-white/5 hover:border-brand-red/30 flex items-center justify-center text-white disabled:pointer-events-none disabled:opacity-40 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Special Value add bullet highlights */}
              <div className="pt-2 border-t border-dashed border-neutral-800/10 dark:border-white/5 space-y-3">
                <div className={`flex items-start space-x-2.5 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0"></span>
                  <p>
                    {language === 'en' 
                      ? 'Guaranteed Seats: Safe, timely departure of air-conditioned vehicles.' 
                      : 'निश्चित सीटें: वातानुकूलित वाहनों की सुरक्षित एवं समयबद्ध रवानगी।'}
                  </p>
                </div>
                <div className={`flex items-start space-x-2.5 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                  <p>
                    {language === 'en' 
                      ? 'Hassle-Free Boarding: Complete luggage assistance & expressway toll taxes are fully included.' 
                      : 'परेशानी मुक्त यात्रा: सभी सीट बुकिंग के साथ एक्सप्रेसवे टोल टैक्स पहले से शामिल हैं, कोई अतिरिक्त शुल्क नहीं।'}
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2: BILLING SLIP PREVIEW */}
            <div className={`p-6 sm:p-8 lg:col-span-5 flex flex-col justify-between ${
              theme === 'dark' ? 'bg-[#151515]/80' : 'bg-neutral-50/70'
            }`}>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-xs border border-brand-gold/30 inline-block mb-4">
                  {language === 'en' ? 'Estimated Invoice Slip' : 'अनुमानित किराया रसीद'}
                </span>

                {/* Pricing rows list */}
                <div className="space-y-3.5 border-b border-dashed border-neutral-800/20 dark:border-white/10 pb-4 mb-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className={`uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{language === 'en' ? 'Seat Preference' : 'चुनी गई सीट श्रेणी'}</span>
                    <span className="font-bold">{language === 'en' ? seatTypes[selectedRow].name : seatTypes[selectedRow].nameHi}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>{language === 'en' ? 'Ticket Rates' : 'प्रति सीट मूल्य'}</span>
                    <span className="font-mono font-bold">₹{seatTypes[selectedRow].price} × {numSeats}</span>
                  </div>
                  <div className={`flex justify-between items-center text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    <span className="uppercase tracking-wider">{language === 'en' ? 'Expressway Toll Fee' : 'एक्सप्रेसवे टोल शुल्क'}</span>
                    <span className="font-semibold text-emerald-400">{language === 'en' ? 'Pre-covered' : 'शामिल है'} (₹0)</span>
                  </div>
                </div>

                {/* Grand total payable section */}
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className={`text-xs font-mono uppercase tracking-widest block leading-none mb-1 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {language === 'en' ? 'Total Payable' : 'कुल देय किराया'}
                    </span>
                    <span className="text-[10px] text-neutral-500">({language === 'en' ? 'Pay to Operator/Driver' : 'चालक/कैप्टन को सीधे भुगतान'})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-display font-black text-brand-red">
                      ₹{numSeats * seatTypes[selectedRow].price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Instant Booking Action Trigger */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    const seatTypeLabelMap: Record<'front' | 'middle' | 'rear', string> = {
                      front: 'Front Executive Seat (₹849)',
                      middle: 'Middle Premium Cabin Seat (₹749)',
                      rear: 'Rear Economy Seat (₹649)'
                    };
                    const routeLabelMap: Record<string, string> = {
                      'Ghazipur → Lucknow': 'Ghazipur → Lucknow (06:00 AM Departure)',
                      'Lucknow → Ghazipur': 'Lucknow → Ghazipur (03:00 PM Departure)',
                      'Lucknow → Ghazipur (Late)': 'Lucknow → Ghazipur (04:00 PM Departure)'
                    };

                    onRequestBooking({
                      numPersons: numSeats,
                      seatType: seatTypeLabelMap[selectedRow],
                      route: routeLabelMap[calcRoute] ?? routeLabelMap['Ghazipur → Lucknow']
                    });
                  }}
                  className="w-full py-4 rounded-xl bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-650 hover:to-emerald-700 text-white font-extrabold text-sm uppercase tracking-widest shadow-lg shadow-emerald-500/10 flex items-center justify-center space-x-2 cursor-pointer"
                  id="estimator-secure-book-btn"
                >
                  <ClipboardList className="w-4 h-4 mr-1 text-white" />
                  <span>{language === 'en' ? 'Book Seat Now' : 'सीट बुक करें'}</span>
                </button>

                <p className="text-[10px] text-center text-neutral-500 italic leading-snug">
                  {language === 'en'
                    ? 'No immediate credit card required! Ride now and pay after arriving safely at your destination.'
                    : 'कोई अग्रिम भुगतान आवश्यक नहीं! गंतव्य पर सुरक्षित पहुंचने के बाद ही चालक को भुगतान करें।'}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
