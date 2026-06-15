import React from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { Compass, Users, Star } from 'lucide-react';
import interiorImg from "../assets/images/luxury_car_interior_1781337087579.jpg";


interface AboutSectionProps {
  language: Language;
  theme: Theme;
}

export default function AboutSection({ language, theme }: AboutSectionProps) {
  const t = TRANSLATIONS[language];
  

  return (
    <section id="about-us-section" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-black' : 'bg-white text-brand-black'
    }`}>
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Our Legacy' : 'हमारा परिचय'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {language === 'en' ? 'Connecting Hearts & Cities' : 'दिलों और शहरों को जोड़ना'}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.aboutSubtitle}
          </p>
        </div>

        {/* 2-Column Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <h3 className={`text-xl sm:text-2xl font-display font-semibold ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>
              {t.aboutStoryTitle}
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
              {t.aboutStoryText}
            </p>

            <div className={`p-6 rounded-2xl border ${
              theme === 'dark' ? 'bg-brand-charcoal/50 border-white/5' : 'bg-neutral-50 border-neutral-200'
            }`}>
              <div className="flex items-center space-x-2 text-brand-gold font-bold mb-2">
                <Star className="w-5 h-5 fill-current" />
                <span>{language === 'en' ? 'Commuted over 10,000+ Passengers' : '१०,०००+ से अधिक यात्रियों का विश्वास'}</span>
              </div>
              <p className="text-xs sm:text-sm">
                {language === 'en' 
                  ? 'We strictly abide by the rules of Purvanchal Expressway, passenger comfort boundaries, speed governance, and top hygiene maintenance.'
                  : 'हम पूर्वांचल एक्सप्रेसवे सुरक्षा नियमों, गति सीमा नियंत्रण और केबिन स्वच्छता का कड़ाई से पालन करते हैं।'}
              </p>
            </div>
          </div>

          {/* Interactive Layout showcasing interior generated photo */}
          <div className="lg:col-span-6 relative">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl border ${
              theme === 'dark' ? 'border-white/10 bg-neutral-900' : 'border-neutral-200 bg-neutral-50'
            }`}>
              <img
                src={interiorImg}
                alt="Cozy interior cabin layout"
                className="w-full h-full object-cover object-center max-h-[360px] transform hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                id="about-visual-interior-img"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-mono text-brand-gold uppercase tracking-wider mb-1 font-bold">
                  {language === 'en' ? 'Pristine Hygiene Standard' : 'उत्कृष्ट स्वच्छता मापदंड'}
                </p>
                <h4 className="text-white font-bold text-lg">
                  {language === 'en' ? 'Ertiga Executive Premium Cabin' : 'एर्टिगा एक्जीक्यूटिव आरामदायक इंटीरियर'}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision double bento block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden flex flex-col justify-between ${
            theme === 'dark' ? 'bg-neutral-900 border-white/5' : 'bg-neutral-50 border-neutral-200 shadow-xs'
          }`}>
            <div className="space-y-4">
              <div className="p-3 w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center">
                <Compass className="w-6 h-6 shrink-0" />
              </div>
              <h3 className={`text-xl font-display font-semibold ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>
                {t.aboutMissionTitle}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {t.aboutMissionText}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden flex flex-col justify-between ${
            theme === 'dark' ? 'bg-neutral-900 border-white/5' : 'bg-neutral-50 border-neutral-200 shadow-xs'
          }`}>
            <div className="space-y-4">
              <div className="p-3 w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold flex items-center justify-center">
                <Users className="w-6 h-6 shrink-0 animation-pulse" />
              </div>
              <h3 className={`text-xl font-display font-semibold ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>
                {t.aboutVisionTitle}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {t.aboutVisionText}
              </p>
            </div>
          </div>
        </div>

        {/* Centralised core values text */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold italic">
            &ldquo;{t.aboutCoreValues}&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
