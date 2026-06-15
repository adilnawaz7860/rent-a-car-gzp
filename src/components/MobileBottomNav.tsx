import React from 'react';
import { Language, Theme } from '../types';
import { Home, Compass, CircleDollarSign, Mountain, PhoneCall, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  language: Language;
  theme: Theme;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export default function MobileBottomNav({
  language,
  theme,
  activeTab,
  setActiveTab
}: MobileBottomNavProps) {
  const handleMobileNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prefilled WhatsApp link
  const whatsappNumber = '919161666009';
  const messageEn = `Hello, I'd like to book/inquire about a sharing cab on the Ghazipur & Lucknow expressway.`;
  const messageHi = `नमस्ते, मैं गाज़ीपुर और लखनऊ के बीच चलने वाली दैनिक शेयरिंग कैब के बारे में पूछताछ/बुकिंग करना चाहता हूँ।`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(language === 'en' ? messageEn : messageHi)}`;

  return (
    <>
      {/* 1. STICKY DUAL CTA FLOATING BUTTONS (Bottom right of the screen for modern look) */}
      <div className="fixed bottom-20 right-4 z-40 flex flex-col space-y-2 md:hidden" id="mobile-sticky-floating-cta-handles">
        {/* Call Sticky button */}
        <a
          href="tel:+919161666009"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-red text-white shadow-xl border border-brand-red shadow-brand-red/30 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-brand-red active:scale-95 transition-transform"
          title="Call Coordinator"
          id="sticky-floating-call"
        >
          <PhoneCall className="w-5.5 h-5.5 animate-bounce-slow" />
        </a>

        {/* WhatsApp Sticky button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-xl border border-emerald-400 shadow-emerald-500/30 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 active:scale-95 transition-transform"
          title="WhatsApp Agent"
          id="sticky-floating-whatsapp"
        >
          <MessageSquare className="w-5.5 h-5.5 fill-current" />
        </a>
      </div>

      {/* 2. MOBILE BOTTOM TAB NAVIGATION BAR (Sticky 44px+ touch targets) */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden border-t py-1.5 px-4 shadow-2xl transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-brand-black/95 border-white/5 shadow-black/60 backdrop-blur-md' 
          : 'bg-white/95 border-neutral-200 shadow-neutral-200/50 backdrop-blur-md'
      }`} id="mobile-sticky-bottom-tab-bar">
        
        <div className="grid grid-cols-5 gap-1 items-center">
          {/* Home Tab Button */}
          <button
            onClick={() => handleMobileNavClick('home')}
            className={`flex flex-col items-center justify-center h-12 rounded-xl transition-colors ${
              activeTab === 'home' 
                ? 'text-brand-red' 
                : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-brand-black'
            }`}
            id="mobile-bottom-tab-home"
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">
              {language === 'en' ? 'Home' : 'होम'}
            </span>
          </button>

          {/* Routes Tab Button */}
          <button
            onClick={() => handleMobileNavClick('routes')}
            className={`flex flex-col items-center justify-center h-12 rounded-xl transition-colors ${
              activeTab === 'routes' 
                ? 'text-brand-red' 
                : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-brand-black'
            }`}
            id="mobile-bottom-tab-routes"
          >
            <Compass className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">
              {language === 'en' ? 'Routes' : 'मार्ग'}
            </span>
          </button>

          {/* Pricing Tab Button */}
          <button
            onClick={() => handleMobileNavClick('pricing')}
            className={`flex flex-col items-center justify-center h-12 rounded-xl transition-colors ${
              activeTab === 'pricing' 
                ? 'text-brand-red' 
                : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-brand-black'
            }`}
            id="mobile-bottom-tab-pricing"
          >
            <CircleDollarSign className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">
              {language === 'en' ? 'Pricing' : 'किराया'}
            </span>
          </button>

          {/* Tour Packages Tab Button */}
          <button
            onClick={() => handleMobileNavClick('tours')}
            className={`flex flex-col items-center justify-center h-12 rounded-xl transition-colors ${
              activeTab === 'tours'
                ? 'text-brand-red'
                : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-brand-black'
            }`}
            id="mobile-bottom-tab-tours"
          >
            <Mountain className="w-5 h-5" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">
              {language === 'en' ? 'Tours' : 'टूर'}
            </span>
          </button>

          {/* Contact calling Button */}
          <a
            href="tel:+919161666009"
            className={`flex flex-col items-center justify-center h-12 rounded-xl transition-colors ${
              activeTab === 'contact'
                ? 'text-brand-red'
                : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-brand-black'
            }`}
            id="mobile-bottom-tab-contact"
          >
            <PhoneCall className="w-5 h-5 text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold mt-1 tracking-tight">
              {language === 'en' ? 'Book Now' : 'बुक करें'}
            </span>
          </a>
        </div>

      </div>
    </>
  );
}
