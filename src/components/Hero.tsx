import React from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import heroImage from "../assets/images/luxury_car_hero_1781337068092.jpg";
import { MessageSquare, Phone, Calendar, Compass } from 'lucide-react';

interface HeroProps {
  language: Language;
  theme: Theme;
  setActiveTab: (tab: any) => void;
}

export default function Hero({ language, theme, setActiveTab }: HeroProps) {
  const t = TRANSLATIONS[language];

  // Prefilled WhatsApp message
  const whatsappNumber = '919161666009';
  const messageEn = `Hello,\n\nI would like to book a seat.\n\nName: \nTravel Date: \nRoute: Ghazipur ⇄ Lucknow\nSeat Type: `;
  const messageHi = `नमस्ते,\n\nमैं एक सीट बुक करना चाहता हूँ।\n\nनाम: \nयात्रा की तारीख: \nमार्ग: गाज़ीपुर ⇄ लखनऊ\nसीट का प्रकार: `;
  const currentMessage = encodeURIComponent(language === 'en' ? messageEn : messageHi);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${currentMessage}`;

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-8 pb-16 md:pt-16 md:pb-24">
      {/* BACKGROUND GRAPHIC & GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-neutral-950/80 md:bg-neutral-950/60 mix-blend-multiply z-10"></div>
        {/* Real Generated Premium Image Banner of car on expressway */}
        <img
          src={heroImage}
          alt="Premium Luxury Car Driving on Purvanchal Expressway"
          className="w-full h-full object-cover object-center transform scale-100 hover:scale-102 transition-transform duration-10000"
          id="hero-background-image"
          referrerPolicy="no-referrer"
        />
        {/* Dynamic Vignette / Fade Gradient */}
        <div className={`absolute inset-0 bg-linear-to-t ${
          theme === 'dark' 
            ? 'from-brand-black via-transparent to-brand-black/40' 
            : 'from-brand-black via-brand-black/30 to-transparent'
        } z-10`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & BADGES */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left relative">
            <div className="absolute -top-6 left-0 w-20 h-[2px] bg-brand-red hidden lg:block"></div>
            
            {/* BADGES ROW */}
            <div className="mb-4 inline-flex items-center gap-2.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
              <span className="text-brand-gold font-bold text-sm">4.9 ★</span>
              <span className="w-[1px] h-3 bg-white/25"></span>
              <span className="text-[10px] uppercase tracking-wider text-white/70 font-semibold font-mono">
                {language === 'en' ? 'Verified Customer Satisfaction' : 'सत्यापित यात्री संतोष'}
              </span>
            </div>

            {/* MAIN CORE HEADINGS */}
            <div className="space-y-4">
              <h4 className="text-brand-gold font-mono uppercase tracking-widest text-xs md:text-sm font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-ping"></span>
                {t.heroTagline}
              </h4>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white">
                {language === 'en' ? (
                  <>
                    Premium Daily <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-red-400">
                      Sharing Cab Service
                    </span>
                  </>
                ) : (
                  <>
                    दैनिक प्रीमियम <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-red-400">
                      शेयरिंग कैब सेवा
                    </span>
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
                {t.heroSubheadline}
              </p>
            </div>

            {/* Checkmark Bento Grid for core values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:border-brand-red/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red font-bold text-xs shrink-0">✓</div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/80 leading-snug">{t.heroACVehicle}</p>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:border-brand-red/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red font-bold text-xs shrink-0">✓</div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/80 leading-snug">{t.heroDailyService}</p>
              </div>
            </div>

            {/* CTA TRIGGERS BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              {/* WhatsApp Booking */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all duration-200 text-center"
                id="hero-whatsapp-booking-btn"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{t.heroCTAWhatsApp}</span>
              </a>

              {/* Direct Calling */}
              <a
                href="tel:+919161666009"
                className="flex items-center justify-center space-x-2 bg-brand-charcoal hover:bg-neutral-900 text-white border border-white/10 hover:border-brand-red/40 font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 text-center"
                id="hero-call-now-btn"
              >
                <Phone className="w-4 h-4 text-brand-red animate-pulse" />
                <span className="font-mono text-xs">+91 91616 66009</span>
              </a>

              {/* See Schedule */}
              <button
                onClick={() => {
                  setActiveTab('routes');
                  const target = document.getElementById('routes-section');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center justify-center space-x-2 text-white hover:text-brand-gold font-medium text-sm py-2 px-4 transition-colors cursor-pointer"
                id="hero-schedule-btn"
              >
                <Calendar className="w-4 h-4 text-brand-gold" />
                <span>{t.heroCTASeeSchedule}</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE ROUTE CARD OVERLAY */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 animate-fade-in" id="hero-quick-card-container">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl relative border border-white/10 group overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-brand-red/10 via-transparent to-transparent opacity-50"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center space-x-2">
                    <Compass className="w-5 h-5 text-brand-red" />
                    <span className="font-display font-bold text-lg text-white">
                      {language === 'en' ? 'Quick Route Fare' : 'त्वरित मार्ग किराया'}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold bg-neutral-900 border border-brand-gold/30 px-2 py-0.5 rounded">
                    {language === 'en' ? 'Best Fare Guarantee' : 'सबसे सस्ता किराया'}
                  </span>
                </div>

                {/* GHAZIPUR TO LUCKNOW ROUTE QUICK DETAIL */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-wider text-neutral-400">{language === 'en' ? 'Route 1' : 'मार्ग १'}</p>
                      <h4 className="text-white font-bold text-base">Ghazipur ⇄ Lucknow</h4>
                      <p className="text-xs text-neutral-300 font-medium">
                        {language === 'en' ? 'Banshi Bazar ⇄ Polytechnic (UIDAI)' : 'बंशी बाजार ⇄ पॉलिटेक्निक (UIDAI)'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-neutral-400 capitalize">{language === 'en' ? 'Starting From' : 'किराया शुरू'}</p>
                      <p className="text-brand-gold font-display font-medium text-xl leading-none pt-1">₹649<span className="text-xs text-neutral-400 font-sans">/seat</span></p>
                    </div>
                  </div>

                  {/* Route Timeline Step Visualizer */}
                  <div className="relative pl-5 border-l-2 border-brand-red/40 py-1 space-y-3">
                    <div className="absolute top-0 -left-1.5 w-3 h-3 bg-brand-red rounded-full border-2 border-brand-black"></div>
                    <p className="text-xs text-white/90">
                      <strong>06:00 AM Departure:</strong> {language === 'en' ? 'Ghazipur (Banshi Bazar Office)' : 'गाज़ीपुर (बंशी बाजार कार्यालय)'}
                    </p>

                    <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-brand-gold rounded-full border-2 border-brand-black transform -translate-y-1/2"></div>
                    <p className="text-xs text-white/90">
                      <strong>03:00 PM Departure:</strong> {language === 'en' ? 'Lucknow (Polytechnic Crossing)' : 'लखनऊ (पॉलिटेक्निक चौराहा)'}
                    </p>

                    <div className="absolute bottom-0 -left-1.5 w-3 h-3 bg-brand-red rounded-full border-2 border-brand-black"></div>
                    <p className="text-xs text-white/90">
                      <strong>04:00 PM Departure:</strong> {language === 'en' ? 'Lucknow (Polytechnic Crossing)' : 'लखनऊ (पॉलिटेक्निक चौराहा)'}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      {language === 'en' ? 'Fleet Type: Maruti Ertiga AC' : 'वाहन: मारुति सुजुकी एर्टिगा एसी'}
                    </span>
                    <button 
                      onClick={() => setActiveTab('routes')}
                      className="text-xs text-brand-red hover:text-brand-gold font-bold transition-colors flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Explore Routes' : 'मार्गों का विवरण देखें'}</span>
                      <span> → </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
