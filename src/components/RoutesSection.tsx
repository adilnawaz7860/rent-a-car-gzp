import React from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { ArrowRight, MapPin, Clock, Navigation, MessageSquare } from 'lucide-react';

interface RoutesSectionProps {
  language: Language;
  theme: Theme;
}

export default function RoutesSection({ language, theme }: RoutesSectionProps) {
  const t = TRANSLATIONS[language];

  const routes = [
    {
      id: 'r1',
      from: 'Ghazipur',
      to: 'Lucknow',
      fromHindi: 'गाज़ीपुर',
      toHindi: 'लखनऊ',
      departure: '6:00 AM',
      pickup: t.routeBanshiBazar,
      duration: '4.5 - 5 Hrs',
      durationHi: '४.५ - ५ घंटे',
      stops: ['Banshi Bazar Office', 'Chauvia Crossing', 'Purvanchal Expressway Corridor', 'Kamta Crossing', 'Polytechnic Crossing'],
      stopsHi: ['बंशी बाजार कार्यालय', 'चौविया चौराहा', 'पूर्वांचल एक्सप्रेसवे कॉरिडोर', 'कमता चौराहा', 'पॉलिटेक्निक चौराहा'],
      tagBg: 'from-brand-red to-brand-red-dark',
      whatsappMsg: `Hello, I'd like to book space on the Ghazipur to Lucknow Cab leaving at 6:30 AM.`
    },
    {
      id: 'r2',
      from: 'Lucknow',
      to: 'Ghazipur',
      fromHindi: 'लखनऊ',
      toHindi: 'गाज़ीपुर',
      departure: '3:00 PM',
      pickup: t.routePolytechnic,
      duration: '4.5 - 5 Hrs',
      durationHi: '४.५ - ५ घंटे',
      stops: ['Near UIDAI Office (Polytechnic Crossing)', 'Gomti Nagar Ekana Stadium Cut', 'Purvanchal Expressway', 'Ghazipur entry point', 'Banshi Bazar'],
      stopsHi: ['UIDAI ऑफिस के पास (पॉलिटेक्निक)', 'गोमती नगर इकाना स्टेडियम कट', 'पूर्वांचल एक्सप्रेसवे', 'गाज़ीपुर एंट्री पॉइंट', 'बंशी बाजार'],
      tagBg: 'from-brand-gold to-yellow-600',
      whatsappMsg: `Hello, I'd like to book space on the Lucknow to Ghazipur Cab leaving at 3:00 PM.`
    },
    {
      id: 'r3',
      from: 'Lucknow',
      to: 'Ghazipur',
      fromHindi: 'लखनऊ',
      toHindi: 'गाज़ीपुर',
      departure: '4:00 PM',
      pickup: t.routePolytechnic,
      duration: '4.5 - 5 Hrs',
      durationHi: '४.५ - ५ घंटे',
      stops: ['Near UIDAI Office (Polytechnic Crossing)', 'Gomti Nagar Ekana Stadium Cut', 'Purvanchal Expressway', 'Ghazipur entry point', 'Banshi Bazar'],
      stopsHi: ['UIDAI ऑफिस के पास (पॉलिटेक्निक)', 'गोमती नगर इकाना स्टेडियम कट', 'पूर्वांचल एक्सप्रेसवे', 'गाज़ीपुर एंट्री पॉइंट', 'बंशी बाजार'],
      tagBg: 'from-brand-red to-brand-red-dark',
      whatsappMsg: `Hello, I'd like to book space on the Lucknow to Ghazipur Cab leaving at 4:00 PM.`
    }
  ];

  const handleBooking = (msgText: string) => {
    const formatUrl = `https://wa.me/919161666009?text=${encodeURIComponent(msgText)}`;
    window.open(formatUrl, '_blank', 'noreferrer');
  };

  return (
    <section id="routes-section" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-black' : 'bg-white text-brand-black'
    }`}>
      {/* Background visual graphics */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Expressway Time Table' : 'एक्सप्रेसवे समय सारणी'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {t.routeTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.routeSubtitle}
          </p>
        </div>

        {/* Route Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, idx) => {
            const startCity = language === 'en' ? route.from : route.fromHindi;
            const endCity = language === 'en' ? route.to : route.toHindi;
            const stopsToDisplay = language === 'en' ? route.stops : route.stopsHi;
            const dur = language === 'en' ? route.duration : route.durationHi;

            return (
              <div
                key={route.id}
                id={`route-card-${route.id}`}
                className={`flex flex-col rounded-2xl relative overflow-hidden shadow-xl transition-all duration-300 ${
                  theme === 'dark' ? 'bg-brand-charcoal border border-white/5' : 'bg-neutral-50 border border-neutral-200'
                } group hover:border-brand-red/40 hover:-translate-y-1`}
              >
                {/* Route Header Badge decoration */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${route.tagBg}`}></div>

                {/* Card Header */}
                <div className="p-6 pb-4 border-b border-neutral-800/5 dark:border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2 py-1.5 rounded ${
                      theme === 'dark' ? 'bg-neutral-900 border border-white/5 text-neutral-400' : 'bg-neutral-200 text-neutral-700'
                    }`}>
                      {language === 'en' ? `DAILY ROUTE 0${idx + 1}` : `दैनिक मार्ग 0${idx + 1}`}
                    </span>
                    <span className="flex items-center text-xs font-semibold text-brand-gold">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {route.departure}
                    </span>
                  </div>

                  {/* Route Dest Direction Header */}
                  <div className="flex items-center space-x-3">
                    <div className={`font-display font-bold text-xl tracking-tight uppercase ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-800'
                    }`}>
                      {startCity}
                    </div>
                    <ArrowRight className="w-5 h-5 text-brand-red animate-pulse" />
                    <div className={`font-display font-bold text-xl tracking-tight uppercase ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-800'
                    }`}>
                      {endCity}
                    </div>
                  </div>
                </div>

                {/* Card Details Body */}
                <div className="p-6 flex-grow space-y-6">
                  {/* Departure Zone Bullet */}
                  <div className="space-y-1.5">
                    <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      <MapPin className="w-4 h-4 text-brand-red mr-1.5 shrink-0" />
                      <span>{t.pickupPoint}</span>
                    </div>
                    <p className={`text-sm font-bold pl-5 leading-relaxed text-balance ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-800'
                    }`}>
                      {route.pickup}
                    </p>
                  </div>

                  {/* Estimated Time Bullet */}
                  <div className="space-y-1.5">
                    <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      <Navigation className="w-4 h-4 text-brand-gold mr-1.5 shrink-0" />
                      <span>{t.eta}</span>
                    </div>
                    <p className="text-sm font-semibold pl-5 text-brand-gold">
                      {dur} ({language === 'en' ? 'Direct Expressway' : 'डायरेक्ट एक्सप्रेसवे'})
                    </p>
                  </div>

                  {/* Boarding Points Visualizer list */}
                  <div className="border-t border-neutral-800/5 dark:border-white/5 pt-4 space-y-3">
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                      {language === 'en' ? 'Core Boarding Zones' : 'मुख्य बोर्डिंग ज़ोन'}
                    </h5>
                    <div className="space-y-2 pl-2">
                      {stopsToDisplay.map((stop, sIdx) => (
                        <div key={sIdx} className="flex items-center space-x-2 text-xs">
                          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                          <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>{stop}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action CTA Button */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => handleBooking(route.whatsappMsg)}
                    className="w-full flex items-center justify-center space-x-2 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                    id={`route-book-btn-${route.id}`}
                  >
                    <MessageSquare className="w-4 h-4 fill-current mr-1" />
                    <span>{language === 'en' ? 'Book Seat' : 'सीट बुक करें'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Extra Information Callout card */}
        <div className={`mt-12 p-6 rounded-2xl border text-center ${
          theme === 'dark' ? 'bg-brand-charcoal/50 border-white/5' : 'bg-neutral-50 border-neutral-200'
        }`}>
          <p className="text-sm leading-relaxed max-w-3xl mx-auto">
            <span className="text-brand-red font-bold">★ </span>
            <strong>{language === 'en' ? 'Need customized Outstation or Airport transfers?' : 'कस्टम आउटस्टेशन या एयरपोर्ट ट्रांसफर की आवश्यकता है?'}</strong>{' '}
            {language === 'en' 
              ? 'Our Ertiga fleet is fully available for family tours, corporate events, and direct Lucknow Chaudhary Charan Singh Airport drop/pickup on special demand. Contact primary operator at ' 
              : 'विशेष मांग पर हमारी एर्टिगा गाड़ियां पारिवारिक पर्यटन, कॉर्पोरेट कार्यक्रमों और प्रत्यक्ष लखनऊ अमौसी हवाई अड्डे के लिए पूर्ण रूप से उपलब्ध हैं। संपर्क करें: '}{' '}
            <a href="tel:+919161666009" className="text-brand-red font-bold hover:underline font-mono">+91 91616 66009</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
