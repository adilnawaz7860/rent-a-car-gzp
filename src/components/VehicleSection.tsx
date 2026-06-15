import React, { useState } from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import heroImage from "../assets/images/luxury_car_hero_1781337068092.jpg";
import interiorImage from "../assets/images/luxury_car_interior_1781337087579.jpg";

import { ShieldCheck, Snowflake, Radio, Power, Eye, Users, Briefcase, Star } from 'lucide-react';

interface VehicleSectionProps {
  language: Language;
  theme: Theme;
}

export default function VehicleSection({ language, theme }: VehicleSectionProps) {
  const t = TRANSLATIONS[language];
  const [activeImageTab, setActiveImageTab] = useState<'exterior' | 'interior'>('exterior');

  const fleetSpecs = [
    { icon: Users, label: language === 'en' ? 'Seating Capacity' : 'यात्री क्षमता', val: t.fleetCapacity },
    { icon: Briefcase, label: language === 'en' ? 'Baggage Compartment' : 'सामान रखने की जगह', val: t.fleetLuggage },
    { icon: Snowflake, label: language === 'en' ? 'Climate System' : 'वातानुकूलित एसी', val: language === 'en' ? 'Roof AC Blowers for all 3 rows' : 'तीनों रो के लिए छत एसी ब्लोअर' },
    { icon: Power, label: language === 'en' ? 'In-Cabin Chargers' : 'मोबाइल चार्जिंग', val: language === 'en' ? 'High-speed Multi USB Chargers' : 'हाई-स्पीड मल्टी यूएसबी चार्जर' },
    { icon: Radio, label: language === 'en' ? 'Entertainment' : 'मनोरंजन उपकरण', val: language === 'en' ? 'Premium Stereo Surround Sound' : 'प्रीमियम सराउंड साउंड ब्लूटूथ स्टीरियो' },
    { icon: ShieldCheck, label: language === 'en' ? 'Safety Rating' : 'सुरक्षा प्रमाण', val: language === 'en' ? 'Expressway-vetted speed governance' : 'गति नियंत्रक (Speed Governor) से लैस' }
  ];

  return (
    <section id="vehicle-fleet" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-black' : 'bg-white text-brand-black'
    }`}>
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Luxury on Wheels' : 'प्रीमियम व्हीकल फ्लीट'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {t.fleetTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.fleetSubtitle}
          </p>
        </div>

        {/* 2-Column interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMN 1: INTERACTIVE EXPERIENTIAL IMAGES DISPLAY */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl border ${
              theme === 'dark' ? 'border-white/10 bg-neutral-900' : 'border-neutral-200 bg-neutral-50'
            }`}>
              {/* Aspect Ratio 4:3 display card */}
              <div className="aspect-4/3 w-full relative">
                {activeImageTab === 'exterior' ? (
                  <img
                  src={heroImage}
                    alt="Maruti Suzuki Ertiga Smart Hybrid Exterior"
                    className="w-full h-full object-cover object-center transform scale-100 hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    id="vehicle-image-exterior"
                  />
                ) : (
                  <img
                    src={interiorImage}
                    alt="Maruti Suzuki Ertiga Interior Leather Seating Comfort"
                    className="w-full h-full object-cover object-center transform scale-100 hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    id="vehicle-image-interior"
                  />
                )}

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 bg-brand-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-lg select-none">
                  <Star className="w-3.5 h-3.5 text-brand-gold fill-current" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                    {activeImageTab === 'exterior' ? 'Purvanchal Certified' : 'Luxury Interior Cabin'}
                  </span>
                </div>
              </div>

              {/* Selection Toggle bar */}
              <div className={`flex border-t p-2 ${
                theme === 'dark' ? 'border-white/5 bg-neutral-900/40' : 'border-neutral-200 bg-neutral-100'
              }`}>
                <button
                  onClick={() => setActiveImageTab('exterior')}
                  className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    activeImageTab === 'exterior'
                      ? 'bg-brand-red text-white shadow shadow-brand-red/20'
                      : theme === 'dark'
                        ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                        : 'text-neutral-600 hover:text-brand-black hover:bg-neutral-200'
                  }`}
                  id="tab-exterior-image"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{language === 'en' ? 'Exterior Cruiser View' : 'गाडी बाहरी दृश्य'}</span>
                </button>
                <button
                  onClick={() => setActiveImageTab('interior')}
                  className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    activeImageTab === 'interior'
                      ? 'bg-brand-red text-white shadow shadow-brand-red/20'
                      : theme === 'dark'
                        ? 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                        : 'text-neutral-600 hover:text-brand-black hover:bg-neutral-200'
                  }`}
                  id="tab-interior-image"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{language === 'en' ? 'Interior Cozy View' : 'गाडी आरामदायक केबिन दृश्य'}</span>
                </button>
              </div>
            </div>

            {/* Micro quote below vehicle */}
            <p className="text-xs text-center text-neutral-500 italic">
              {language === 'en' 
                ? 'Note: All photos represent actual fleet standard. Cars are washed and chemically sanitized before every single expressway ride.'
                : 'नोट: सभी तस्वीरें वास्तविक वाहन मानकों को प्रदर्शित करती हैं। प्रत्येक यात्रा से पहले गाड़ियों को साफ और सैनिटाइज किया जाता है।'}
            </p>
          </div>

          {/* COLUMN 2: SPECS LIST */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-2.5 py-1 rounded inline-block">
                {language === 'en' ? 'Primary Vehicle' : 'मुख्य प्रयुक्त वाहन'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium tracking-tight">
                {t.fleetErtigaName}
              </h3>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {t.fleetErtigaDesc}
              </p>
            </div>

            {/* List Specs Grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fleetSpecs.map((spec, specIdx) => {
                const SpecIcon = spec.icon;
                return (
                  <div
                    key={specIdx}
                    className={`p-4 rounded-xl border flex items-start space-x-3 ${
                      theme === 'dark' ? 'bg-brand-charcoal/50 border-white/5' : 'bg-neutral-50 border-neutral-200'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-brand-red/10 border border-brand-red/20 text-brand-red shrink-0">
                      <SpecIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{spec.label}</h4>
                      <p className={`text-xs sm:text-sm font-semibold mt-1 leading-snug ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-800'
                      }`}>
                        {spec.val}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature lists item badges */}
            <div className="space-y-2 border-t border-dashed border-neutral-800/10 dark:border-white/10 pt-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{t.fleetFeatures}</h4>
              <div className="flex flex-wrap gap-2">
                {['Dual AC blower', 'Android Auto / Apple CarPlay', 'Tissue box Included', 'Fresh hand sanitizer', 'First aid support kit', 'Large Leg Space'].map((feature, featureIdx) => (
                  <span
                    key={featureIdx}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-brand-red/5 border border-brand-red/15 text-neutral-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
