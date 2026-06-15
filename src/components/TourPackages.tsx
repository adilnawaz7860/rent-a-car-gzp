import React from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { Mountain, Landmark, Waves, Sparkles, Droplets, Clock, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';

interface TourPackagesProps {
  language: Language;
  theme: Theme;
}

export default function TourPackages({ language, theme }: TourPackagesProps) {
  const t = TRANSLATIONS[language];

  const packages = [
    {
      id: 'nepal',
      icon: Mountain,
      badge: language === 'en' ? 'International Trip' : 'अंतरराष्ट्रीय यात्रा',
      title: language === 'en' ? 'Ghazipur → Nepal Tour' : 'गाज़ीपुर → नेपाल टूर',
      route: language === 'en' ? 'Kathmandu • Pokhara • Lumbini' : 'काठमांडू • पोखरा • लुम्बिनी',
      duration: language === 'en' ? '5 Nights / 6 Days' : '5 रात / 6 दिन',
      price: '₹13,999',
      highlights: language === 'en' ? [
        'AC Innova/Ertiga for the full trip',
        'Pashupatinath Temple & Kathmandu Durbar',
        'Pokhara Phewa Lake & Sarangkot sunrise',
        'Lumbini - Buddha\'s birthplace visit',
        '3-Star hotel stay with breakfast',
        'Driver allowance, toll & fuel included'
      ] : [
        'पूरी यात्रा के लिए AC इनोवा/एर्टिगा',
        'पशुपतिनाथ मंदिर व काठमांडू दरबार स्क्वायर',
        'पोखरा फेवा झील व सारंगकोट सूर्योदय',
        'लुम्बिनी - बुद्ध जन्मस्थान दर्शन',
        '3-स्टार होटल स्टे, नाश्ता शामिल',
        'ड्राइवर भत्ता, टोल व फ्यूल शामिल'
      ]
    },
    {
      id: 'chardham',
      icon: Landmark,
      badge: language === 'en' ? 'Spiritual Yatra' : 'धार्मिक यात्रा',
      title: language === 'en' ? 'Ghazipur → Chardham Yatra' : 'गाज़ीपुर → चारधाम यात्रा',
      route: language === 'en' ? 'Yamunotri • Gangotri • Kedarnath • Badrinath' : 'यमुनोत्री • गंगोत्री • केदारनाथ • बद्रीनाथ',
      duration: language === 'en' ? '10 Nights / 11 Days' : '10 रात / 11 दिन',
      price: '₹24,999',
      highlights: language === 'en' ? [
        'Complete all 4 Dham shrine coverage',
        'AC Ertiga/Innova with hill-trained driver',
        'Hotel / dharamshala stay (twin sharing)',
        'Helicopter ticket assistance (optional)',
        'All toll, parking & driver charges included',
        '24x7 on-route support & emergency help'
      ] : [
        'सभी चार धामों का संपूर्ण कवरेज',
        'पहाड़ी अनुभवी ड्राइवर के साथ AC एर्टिगा/इनोवा',
        'होटल/धर्मशाला स्टे (टू-शेयरिंग)',
        'हेलीकॉप्टर टिकट सहायता (वैकल्पिक)',
        'सभी टोल, पार्किंग व ड्राइवर शुल्क शामिल',
        '24x7 रूट सहायता व आपातकालीन मदद'
      ]
    },
    {
      id: 'banaras',
      icon: Waves,
      badge: language === 'en' ? 'Weekend Getaway' : 'वीकेंड ट्रिप',
      title: language === 'en' ? 'Ghazipur → Banaras Tour' : 'गाज़ीपुर → बनारस टूर',
      route: language === 'en' ? 'Kashi Vishwanath • Ganga Aarti • Sarnath' : 'काशी विश्वनाथ • गंगा आरती • सारनाथ',
      duration: language === 'en' ? '1 Night / 2 Days' : '1 रात / 2 दिन',
      price: '₹2,999',
      highlights: language === 'en' ? [
        'Kashi Vishwanath Temple darshan assistance',
        'Evening Ganga Aarti boat ride at Dashashwamedh Ghat',
        'Sarnath Buddhist heritage site visit',
        'AC Dzire/Ertiga round trip',
        'Local food & Banarasi paan tour',
        'Hotel stay booking assistance available'
      ] : [
        'काशी विश्वनाथ मंदिर दर्शन सहायता',
        'दशाश्वमेध घाट पर शाम की गंगा आरती व नौका विहार',
        'सारनाथ बौद्ध धरोहर स्थल यात्रा',
        'AC डिज़ायर/एर्टिगा से राउंड ट्रिप',
        'स्थानीय खानपान व बनारसी पान टूर',
        'होटल स्टे बुकिंग सहायता उपलब्ध'
      ]
    },
    {
      id: 'ayodhya',
      icon: Sparkles,
      badge: language === 'en' ? 'Day Trip' : 'डे ट्रिप',
      title: language === 'en' ? 'Ghazipur → Ayodhya Tour' : 'गाज़ीपुर → अयोध्या टूर',
      route: language === 'en' ? 'Ram Mandir • Hanuman Garhi • Saryu Aarti' : 'राम मंदिर • हनुमान गढ़ी • सरयू आरती',
      duration: language === 'en' ? '1 Day Trip' : '1 दिन की यात्रा',
      price: '₹2,199',
      highlights: language === 'en' ? [
        'Shri Ram Janmabhoomi Mandir darshan',
        'Queue guidance & local route assistance',
        'Hanuman Garhi & Kanak Bhawan visit',
        'Saryu River evening aarti',
        'AC Dzire/Ertiga round trip from Ghazipur',
        'Breakfast & drinking water included'
      ] : [
        'श्री राम जन्मभूमि मंदिर दर्शन',
        'दर्शन लाइन व स्थानीय रूट सहायता',
        'हनुमान गढ़ी व कनक भवन यात्रा',
        'सरयू नदी की शाम की आरती',
        'गाज़ीपुर से AC डिज़ायर/एर्टिगा राउंड ट्रिप',
        'नाश्ता व पानी की बोतल शामिल'
      ]
    },
    {
      id: 'prayagraj',
      icon: Droplets,
      badge: language === 'en' ? 'Day Trip' : 'डे ट्रिप',
      title: language === 'en' ? 'Ghazipur → Prayagraj Tour' : 'गाज़ीपुर → प्रयागराज टूर',
      route: language === 'en' ? 'Triveni Sangam • Akshay Vat • Alopi Devi' : 'त्रिवेणी संगम • अक्षय वट • अलोपी देवी',
      duration: language === 'en' ? '1 Day Trip' : '1 दिन की यात्रा',
      price: '₹1,999',
      highlights: language === 'en' ? [
        'Triveni Sangam (Ganga-Yamuna-Saraswati) boat ride',
        'Akshay Vat & Hanuman Mandir visit',
        'Alopi Devi Temple darshan',
        'AC Dzire round trip from Ghazipur',
        'Experienced local route driver',
        'Ideal for Magh Mela / Kumbh season'
      ] : [
        'त्रिवेणी संगम (गंगा-यमुना-सरस्वती) नौका विहार',
        'अक्षय वट व हनुमान मंदिर दर्शन',
        'अलोपी देवी मंदिर दर्शन',
        'गाज़ीपुर से AC डिज़ायर राउंड ट्रिप',
        'अनुभवी स्थानीय रूट ड्राइवर',
        'माघ मेला / कुंभ सीजन के लिए उपयुक्त'
      ]
    }
  ];

  const handlePackageEnquiry = (pkg: typeof packages[number]) => {
    const greetingText = language === 'en'
      ? `Hello,\n\nI am interested in the "${pkg.title}" package.`
      : `नमस्ते,\n\nमुझे "${pkg.title}" पैकेज में रुचि है।`;

    const msg = `${greetingText}\n\n${language === 'en' ? 'Route' : 'मार्ग'}: ${pkg.route}\n${language === 'en' ? 'Duration' : 'अवधि'}: ${pkg.duration}\n${language === 'en' ? 'Starting Price' : 'शुरुआती किराया'}: ${pkg.price} ${language === 'en' ? 'per person' : 'प्रति व्यक्ति'}\n\n${language === 'en' ? 'Please share availability, exact dates and total quotation for our group.' : 'कृपया उपलब्धता, सही तारीख और हमारे ग्रुप के लिए कुल किराया बताएं।'}\n\n${language === 'en' ? 'Thank you.' : 'धन्यवाद।'}`;

    const url = `https://wa.me/919161666009?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <section id="tour-packages-section" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-black text-brand-slate' : 'bg-white text-brand-black'
    }`}>
      {/* Decorative absolute layouts */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Explore With Us' : 'हमारे साथ यात्रा करें'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {t.toursTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.toursSubtitle}
          </p>
        </div>

        {/* Tour Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 group ${
                  theme === 'dark'
                    ? 'bg-brand-charcoal border-white/5 hover:border-brand-red/30 hover:shadow-2xl'
                    : 'bg-neutral-50 border-neutral-200 hover:border-brand-red/30 hover:shadow-xl'
                }`}
                id={`tour-package-${pkg.id}`}
              >
                {/* Card header banner */}
                <div className="p-6 pb-4 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-28 h-28 bg-brand-red/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className={`p-3 rounded-xl border shrink-0 ${
                      theme === 'dark'
                        ? 'bg-neutral-900 border-white/5 text-brand-red'
                        : 'bg-white border-neutral-200 text-brand-red'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded font-bold border border-brand-gold/20">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-lg sm:text-xl mb-1.5 relative z-10 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-800'
                  }`}>
                    {pkg.title}
                  </h3>
                  <div className="flex items-start space-x-1.5 relative z-10">
                    <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {pkg.route}
                    </p>
                  </div>
                </div>

                {/* Duration & Price row */}
                <div className={`px-6 py-4 grid grid-cols-2 gap-4 border-y ${
                  theme === 'dark' ? 'border-white/5 bg-neutral-950/30' : 'border-neutral-200 bg-white'
                }`}>
                  <div className="space-y-1">
                    <span className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{t.toursDuration}</span>
                    </span>
                    <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>
                      {pkg.duration}
                    </p>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 block">
                      {t.toursPrice}
                    </span>
                    <p className="text-lg font-display font-black text-brand-red">
                      {pkg.price}
                    </p>
                  </div>
                </div>

                {/* Inclusions list */}
                <div className="p-6 flex-grow space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    {t.toursIncludes}
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handlePackageEnquiry(pkg)}
                    className="w-full flex items-center justify-center space-x-2 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer text-sm"
                    id={`tour-book-btn-${pkg.id}`}
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>{t.toursBookBtn}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
