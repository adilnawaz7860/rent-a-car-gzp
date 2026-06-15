import React from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { Shield, Sparkles, Snowflake, UserCheck, Star, Clock, Flame, CreditCard, Headphones } from 'lucide-react';

interface WhyChooseUsProps {
  language: Language;
  theme: Theme;
}

export default function WhyChooseUs({ language, theme }: WhyChooseUsProps) {
  const t = TRANSLATIONS[language];

  const benefits = [
    {
      icon: Snowflake,
      color: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
      title: t.whyAC,
      desc: t.whyACDesc
    },
    {
      icon: UserCheck,
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      title: t.whyDrivers,
      desc: t.whyDriversDesc
    },
    {
      icon: Sparkles,
      color: 'text-brand-gold bg-brand-gold/10 border-brand-gold/20',
      title: t.whyComfort,
      desc: t.whyComfortDesc
    },
    {
      icon: Shield,
      color: 'text-red-400 bg-red-400/10 border-red-400/20',
      title: t.whySafe,
      desc: t.whySafeDesc
    },
    {
      icon: Flame,
      color: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
      title: t.whyDaily,
      desc: t.whyDailyDesc
    },
    {
      icon: Clock,
      color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      title: t.whyOnTime,
      desc: t.whyOnTimeDesc
    },
    {
      icon: CreditCard,
      color: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
      title: t.whyPricing,
      desc: t.whyPricingDesc
    },
    {
      icon: Star,
      color: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
      title: t.whyPremium,
      desc: t.whyPremiumDesc
    },
    {
      icon: Headphones,
      color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      title: t.whySupport,
      desc: t.whySupportDesc
    }
  ];

  return (
    <section id="why-choose-us" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-black' : 'bg-white text-brand-black'
    }`}>
      {/* Absolute Decorative Circles */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Quality Uncompromised' : 'गुणवत्ता और विश्वसनीयता'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {t.whyTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.whySubtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                id={`benefit-card-${index}`}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col items-start ${
                  theme === 'dark'
                    ? 'bg-brand-charcoal border-white/5 hover:bg-neutral-900/60'
                    : 'bg-neutral-50 border-neutral-200 hover:bg-white hover:shadow-lg'
                } group`}
              >
                {/* Icon Container with border highlight */}
                <div className={`p-3 rounded-xl border mb-5 transition-transform duration-300 group-hover:scale-110 ${benefit.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className={`font-display font-semibold text-lg mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-800'
                }`}>
                  {benefit.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
