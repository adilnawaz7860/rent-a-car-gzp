import React, { useState } from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { Sun, Moon, Globe, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export default function Header({
  language,
  setLanguage,
  theme,
  setTheme,
  activeTab,
  setActiveTab
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'routes', label: t.navRoutes },
    { id: 'pricing', label: t.navPricing },
    { id: 'tours', label: t.navTours },
    { id: 'about', label: t.navAbout },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
    localStorage.setItem('cab_language', newLang);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('cab_theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-brand-black/90 text-brand-slate border-b border-white/10 backdrop-blur-md' 
        : 'bg-white/90 text-brand-black border-b border-black/5 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO - Executed precisely according to the professional theme logo layout */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2.5 cursor-pointer group select-none"
          id="header-logo-container"
        >
          {/* Logo Badge Styling */}
          <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center font-bold italic text-white transition-all duration-300 group-hover:scale-105 shadow-md shadow-brand-red/20 shrink-0">
            RC
          </div>
          
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight uppercase leading-none">
              Rent A <span className="text-brand-red">Car</span>
            </span>
            <span className={`text-[10px] uppercase tracking-wider font-mono leading-none mt-1 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
              {language === 'en' ? 'Comfort Cabin' : 'आरामदायक यात्रा'}
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 relative ${
                activeTab === item.id
                  ? theme === 'dark'
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20'
                    : 'bg-brand-red text-white shadow-lg shadow-brand-red/15'
                  : 'hover:text-brand-red text-inherit'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </nav>

        {/* CONTROL PANEL: UTILITIES & QUICK ACTION */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center space-x-1 px-3 text-[11px] font-bold uppercase tracking-wider cursor-pointer ${
              theme === 'dark'
                ? 'border-white/10 hover:border-brand-red/40 bg-neutral-900 text-brand-slate'
                : 'border-neutral-200 hover:border-brand-red/30 bg-neutral-50 text-brand-black'
            }`}
            title="Switch Language / भाषा बदलें"
            id="lang-toggle-desktop"
          >
            <Globe className="w-3.5 h-3.5 text-brand-red" />
            <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              theme === 'dark'
                ? 'border-white/10 hover:border-brand-gold/40 bg-neutral-900 text-brand-gold'
                : 'border-neutral-200 hover:border-brand-red/30 bg-neutral-50 text-neutral-600'
            }`}
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            id="theme-toggle-desktop"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* 24/7 Live Support Desk status overlay & CTA button */}
          <div className="flex items-center gap-4 border-l border-white/10 pl-4">
            <div className="text-right">
              <p className={`text-[10px] uppercase tracking-widest leading-none mb-1 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>24/7 Support</p>
              <a href="tel:+919161666009" className="text-sm font-bold text-brand-gold hover:text-brand-gold-glow font-mono transition-colors leading-none">+91 91616 66009</a>
            </div>
            
            <a
              href="tel:+919161666009"
              className="bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand-red/20 cursor-pointer inline-flex items-center"
            >
              {language === 'en' ? 'Book Now' : 'सीट बुक करें'}
            </a>
          </div>
        </div>

        {/* MOBILE TRIGGER & STATUS */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Quick Lang Switch */}
          <button
            onClick={toggleLanguage}
            className={`p-2 py-1.5 rounded-md border text-[11px] font-bold flex items-center space-x-1 ${
              theme === 'dark' ? 'border-white/10 bg-neutral-900' : 'border-neutral-200 bg-neutral-50'
            }`}
            id="lang-toggle-mobile"
          >
            <Globe className="w-3.5 h-3.5 text-brand-red" />
            <span>{language === 'en' ? 'हिन्दी' : 'ENG'}</span>
          </button>

          {/* Quick Theme Switch */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md border ${
              theme === 'dark' ? 'border-white/10 bg-neutral-900 text-brand-gold' : 'border-neutral-200 bg-neutral-50 text-neutral-600'
            }`}
            id="theme-toggle-mobile"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${theme === 'dark' ? 'text-white' : 'text-brand-black'}`}
            id="menu-trigger-mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-20 left-0 w-full border-b shadow-2xl transition-all duration-300 z-40 ${
          theme === 'dark'
            ? 'bg-brand-charcoal text-brand-slate border-white/5 shadow-black/80'
            : 'bg-white text-brand-black border-neutral-200 shadow-neutral-200/50'
        }`} id="mobile-navigation-drawer">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-brand-red text-white'
                    : 'hover:bg-neutral-500/10'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] font-mono tracking-wider opacity-60">
                  {item.id.toUpperCase()}
                </span>
              </button>
            ))}
            
            <div className="pt-4 border-t border-dashed border-neutral-200/10 space-y-3">
              <a
                href="tel:+919161666009"
                className="w-full flex items-center justify-center space-x-3 bg-brand-red text-white py-3.5 rounded-lg font-bold text-center border border-brand-red shadow-md"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>+91 91616 66009 (Primary)</span>
              </a>
              <a
                href="tel:+919454003387"
                className={`w-full flex items-center justify-center space-x-3 py-3.5 rounded-lg font-bold text-center border ${
                  theme === 'dark'
                    ? 'bg-neutral-800 text-white border-neutral-700'
                    : 'bg-neutral-100 text-brand-black border-neutral-200'
                }`}
              >
                <Phone className="w-5 h-5" />
                <span>+91 94540 03387 (Secondary)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
