import React, { useState } from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { Landmark, Compass, Route, MapPin, Sparkles, Building, ArrowUpRight } from 'lucide-react';

interface RouteHighlightsProps {
  language: Language;
  theme: Theme;
}

export default function RouteHighlights({ language, theme }: RouteHighlightsProps) {
  const t = TRANSLATIONS[language];
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const landmarks = [
    {
      title: 'Banshi Bazar (Ghazipur)',
      titleHi: 'बंशी बाजार (गाज़ीपुर)',
      icon: MapPin,
      desc: language === 'en' ? 'Our main boarding office. Enjoy climate-controlled passenger waiting lounges with fresh mineral water before boarding starts.' : 'हमारा मुख्य बोर्डिंग कार्यालय। सफर आरंभ होने से पहले यात्रियों के लिए बैठने की आरामदायक ठंडी जगह और पीने का साफ पानी उपलब्ध है।',
      coord: 'Near Ghazipur Main',
      role: language === 'en' ? 'Main Boarding Station' : 'मुख्य बोर्डिंग स्टेशन'
    },
    {
      title: 'Purvanchal Expressway',
      titleHi: 'पूर्वांचल एक्सप्रेसवे',
      icon: Compass,
      desc: language === 'en' ? 'Seamless high-speed corridor bypassing slow local village lanes. Save commute hours in comfort and premium suspension.' : 'बिना रुकवाट का आधुनिक एक्सप्रेसवे। स्थानीय बस्तियों और संकरे रास्तों से मुक्ति ताकि आप कम समय में सीधे गंतव्य तक सुरक्षित पहुंच सकें।',
      coord: 'India\'s Greenfield Highway',
      role: language === 'en' ? 'High-speed Corridor' : 'तेज गति वाला कॉरिडोर'
    },
    {
      title: 'Polytechnic Crossing (Lucknow)',
      titleHi: 'पॉलिटेक्निक चौराहा (लखनऊ)',
      icon: Landmark,
      desc: language === 'en' ? 'Boarding point adjacent to UIDAI Regional Office. Connected directly to Metro lines and regional auto stations for convenience.' : 'UIDAI क्षेत्रीय कार्यालय के बगल में हमारा मुख्य बोर्डिंग पॉइंट। यह सीधे लखनऊ मुख्य मेट्रो लाइनों और स्थानीय ऑटो स्टेशन से जुड़ा है।',
      coord: 'Lucknow Central Crossing',
      role: language === 'en' ? 'Terminal Boarding Zone' : 'टर्मिनल बोर्डिंग ज़ोन'
    },
    {
      title: 'Gomti Nagar (Lucknow)',
      titleHi: 'गोमती नगर (लखनऊ)',
      icon: Building,
      desc: language === 'en' ? 'Enjoy drop services adjacent to elite shopping spaces, upscale offices, and premium residential layouts with no extra charges.' : 'मुख्य और सबसे वीआईपी बाजार क्षेत्र। गोमती नगर के बड़े कार्यालयों, मुख्य शॉपिंग सेंटरों और रिहायशी क्षेत्रों तक बिना किसी अतिरिक्त शुल्क के ड्रॉप सेवा।',
      coord: 'Elite Institutional Hub',
      role: language === 'en' ? 'Dropping Route Coverage' : 'ड्रॉपिंग मार्ग कवरेज'
    },
    {
      title: 'Ekana Stadium Corner',
      titleHi: 'इकाना स्टेडियम क्रिकेट हब',
      icon: Sparkles,
      desc: language === 'en' ? 'Convenient drop point near Shaheed Path, bypassing heavy central traffic. Outstandingly helpful for sports fans and corporate commuters.' : 'शहीद पथ के निकट सुविधाजनक मार्ग कट। शहर की भीड़भाड़ से बचते हुए स्पोर्ट्स प्रेमियों और कॉर्पोरेट कम्यूटरों के लिए सबसे आसान और तेज रास्ता।',
      coord: 'International Cricket Stadium Area',
      role: language === 'en' ? 'Expressway Connector' : 'एक्सप्रेसवे कनेक्टर'
    },
    {
      title: 'CCS Airport Airport Link',
      titleHi: 'अमौसी हवाई अड्डा कनेक्टिविटी',
      icon: Route,
      desc: language === 'en' ? 'Need immediate link to flights? Secure direct airport drops through private sedan requests or custom sharing coordination.' : 'चॉधरी चरण सिंह अंतरराष्ट्रीय हवाई अड्डे तक त्वरित सीधे ड्रॉप। प्राइवेट किराए अथवा विशेष शेयरिंग तालमेल के द्वारा डायरेक्ट टर्मिनल ड्रॉप सुविधा।',
      coord: 'Chaudhary Charan Singh Airport',
      role: language === 'en' ? 'Airport Connectivity Only' : 'हवाई अड्डा कनेक्टिविटी'
    }
  ];

  return (
    <section id="route-highlights" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-charcoal' : 'bg-neutral-50 text-brand-black border-t border-b border-neutral-200'
    }`}>
      {/* Absolute graphic lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-red/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Scenic & Smart Routing' : 'स्मार्ट एक्सप्रेसवे मार्ग'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {t.highlightsTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.highlightsSubtitle}
          </p>
        </div>

        {/* Landmarks Bento Grid representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((landmark, idx) => {
            const Icon = landmark.icon;
            const heading = language === 'en' ? landmark.title : landmark.titleHi;
            const isHovered = activeHighlight === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveHighlight(idx)}
                onMouseLeave={() => setActiveHighlight(null)}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 relative overflow-hidden group border ${
                  theme === 'dark'
                    ? 'bg-neutral-950/60 border-white/5 hover:border-brand-red/30'
                    : 'bg-white border-neutral-300 hover:shadow-xl hover:border-brand-red/20'
                }`}
                id={`highlight-bento-${idx}`}
              >
                {/* Background decorative path overlay on hover */}
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-brand-red/5 rounded-full transition-all duration-500 transform ${
                  isHovered ? 'scale-150' : 'scale-100'
                }`}></div>

                {/* Top Badge information */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded font-bold">
                    {landmark.role}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">
                    {landmark.coord}
                  </span>
                </div>

                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2.5 rounded-lg border shrink-0 ${
                    theme === 'dark' 
                      ? 'bg-neutral-900 border-white/5 text-brand-red' 
                      : 'bg-neutral-100 border-neutral-200 text-brand-red'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-display font-bold text-base sm:text-lg ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-800'
                  }`}>
                    {heading}
                  </h3>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {landmark.desc}
                </p>

                {/* Inline link decoration */}
                <div className="pt-4 mt-4 border-t border-neutral-800/5 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-brand-red opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>{language === 'en' ? 'Boarding Hub Info' : 'पिकअप हब जानकारी'}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
