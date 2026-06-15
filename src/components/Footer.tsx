import React from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { Phone, MapPin, Sparkles, MessageSquare, ArrowUpRight, ShieldCheck, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  language: Language;
  theme: Theme;
  setActiveTab: (tab: any) => void;
}

export default function Footer({ language, theme, setActiveTab }: FooterProps) {
  const t = TRANSLATIONS[language];

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative overflow-hidden pt-16 pb-24 md:pb-12 border-t ${
      theme === 'dark'
        ? 'bg-brand-charcoal text-neutral-400 border-white/5'
        : 'bg-neutral-50 text-neutral-600 border-black/5'
    }`}>
      {/* Decorative absolute glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-800/10 dark:border-white/5">
          
          {/* Main Column - Brand Card */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-black border border-brand-red/20">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current text-brand-red">
                  <path d="M 75,30 A 25,25 0 1,0 75,70" stroke="#d32f2f" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 45,50 L 90,50" stroke="#f4f5f6" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-tight text-lg text-brand-red">CAR</span>
                <span className={`text-[10px] font-mono font-bold tracking-wider leading-none text-brand-gold`}>RENT A CAR</span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-balance">
              {language === 'en' 
                ? 'Eastern Uttar Pradesh\'s premier executive shared cab community. Making your daily commute between Ghazipur and Lucknow affordable, safe, and outstandingly cozy.' 
                : 'पूर्वी उत्तर प्रदेश की अग्रणी प्रीमियम शेयरिंग कैब सेवा। गाज़ीपुर और लखनऊ के बीच आपकी दैनिक यात्रा को किफायती, सुरक्षित और शानदार रुप से आरामदायक बनाते हुए।'}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <span className="inline-flex items-center space-x-1 bg-brand-red/10 border border-brand-red/20 text-brand-red px-2.5 py-1 rounded-md text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                {language === 'en' ? 'Certified Ride' : 'प्रमाणित सफर'}
              </span>
              <span className="inline-flex items-center space-x-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-md text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                {language === 'en' ? 'Elite Executive' : 'एलीट क्लास'}
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <p className={`text-[10px] font-bold uppercase tracking-wider mb-2.5 font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {language === 'en' ? 'Follow Us' : 'सोशल मीडिया पर जुड़ें'}
              </p>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-brand-black border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-neutral-400 hover:text-white transition-all duration-300 shadow-md"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-brand-black border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-neutral-400 hover:text-white transition-all duration-300 shadow-md"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-brand-black border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-neutral-400 hover:text-white transition-all duration-300 shadow-md"
                  title="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-brand-black border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-neutral-400 hover:text-white transition-all duration-300 shadow-md"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-6 md:col-span-4 lg:col-span-2 space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-red">
              {language === 'en' ? 'Sitemap Links' : 'उपयोगी लिंक्स'}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-brand-red transition-colors flex items-center">
                  <span>{t.navHome}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('routes')} className="hover:text-brand-red transition-colors flex items-center">
                  <span>{t.navRoutes}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('pricing')} className="hover:text-brand-red transition-colors flex items-center">
                  <span>{t.navPricing}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('tours')} className="hover:text-brand-red transition-colors flex items-center">
                  <span>{t.navTours}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-brand-red transition-colors flex items-center">
                  <span>{t.navAbout}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-brand-red transition-colors flex items-center">
                  <span>{t.navContact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Core Routes Column */}
          <div className="col-span-6 md:col-span-4 lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-red">
              {language === 'en' ? 'Regular Services' : 'नियमित सेवाएं'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start space-x-1 text-balance">
                <span className="text-brand-gold font-bold">✓</span>
                <span>{language === 'en' ? 'Daily Sharing Cab Ghazipur ⇄ Lucknow' : 'दैनिक शेयरिंग कैब गाज़ीपुर ⇄ लखनऊ'}</span>
              </li>
              <li className="flex items-start space-x-1">
                <span className="text-brand-gold font-bold">✓</span>
                <span>{language === 'en' ? 'Lucknow Chaudhary Charan Singh Airport Transfers' : 'लखनऊ अमौसी हवाई अड्डा (CCS) ट्रांसफर'}</span>
              </li>
              <li className="flex items-start space-x-1">
                <span className="text-brand-gold font-bold">✓</span>
                <span>{language === 'en' ? 'Outstation Family Travel' : 'आउटस्टेशन पारिवारिक यात्राएं'}</span>
              </li>
              <li className="flex items-start space-x-1">
                <span className="text-brand-gold font-bold">✓</span>
                <span>{language === 'en' ? 'Corporate Fleet Rental' : 'कॉरपोरेट कार रेंटल समाधान'}</span>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Info Card */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-red">
              {language === 'en' ? 'Operator Office Contact' : 'ऑपरेटर कार्यालय संपर्क'}
            </h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+919161666009" className="flex items-center space-x-2.5 hover:text-brand-red transition-colors">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <span className="font-mono text-xs">+91 91616 66009 (Primary)</span>
              </a>
              <a href="tel:+919454003387" className="flex items-center space-x-2.5 hover:text-brand-red transition-colors">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <span className="font-mono text-xs">+91 94540 03387 (Secondary)</span>
              </a>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-balance">
                  {language === 'en' 
                    ? 'Banshi Bazar Office (Ghazipur) & Polytechnic Crossing UIDAI (Lucknow)' 
                    : 'बंशी बाजार कार्यालय (गाज़ीपुर) एवं पॉलिटेक्निक चौराहा UIDAI (लखनऊ)'}
                </span>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="pt-2">
              <a 
                href="https://wa.me/919161666009?text=Hello%2c%20I%20would%20like%20to%20inquire%20about%20Ghazipur%20-%20Lucknow%20daily%20cab."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-brand-slate font-semibold bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 px-3 py-1.5 rounded-md border border-emerald-500/30 transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Ask on WhatsApp' : 'व्हाट्सएप पूछताछ'}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal, Disclaimer and SEO Keywords container */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium border-t border-neutral-800/5 dark:border-white/5">
          <div className="text-center md:text-left space-y-1">
            <p className={theme === 'dark' ? 'text-white' : 'text-brand-black'}>
              &copy; {new Date().getFullYear()} RENT A CAR (Ghazipur ⇄ Lucknow Sharing Cab). All Rights Reserved.
            </p>
            <p className="opacity-60 max-w-prose">
              {language === 'en' 
                ? 'Disclaimer: All reservations actions are processed through WhatsApp for reliable real-time human coordination.' 
                : 'अस्वीकरण: वास्तविक समय में सटीक मानवीय तालमेल सुनिश्चित करने के लिए सभी बुकिंग व्हाट्सएप के माध्यम से संचालित की जाती हैं।'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-xs md:max-w-md">
            <span className="px-2 py-0.5 rounded bg-brand-charcoal border border-white/5 text-[10px] opacity-70">Ghazipur to Lucknow Cab</span>
            <span className="px-2 py-0.5 rounded bg-brand-charcoal border border-white/5 text-[10px] opacity-70">Lucknow to Ghazipur Cab</span>
            <span className="px-2 py-0.5 rounded bg-brand-charcoal border border-white/5 text-[10px] opacity-70">Sharing Cab Purvanchal Expressway</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
