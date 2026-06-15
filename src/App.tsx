import React, { useState, useEffect } from 'react';
import { Language, Theme, SeatBookingPrefill } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import RoutesSection from './components/RoutesSection';
import PricingSection from './components/PricingSection';
import WhyChooseUs from './components/WhyChooseUs';
import RouteHighlights from './components/RouteHighlights';
import VehicleSection from './components/VehicleSection';
import CustomerReviews from './components/CustomerReviews';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import TourPackages from './components/TourPackages';
import MobileBottomNav from './components/MobileBottomNav';
import { Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  // Initialize states with local persistence
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('cab_language');
    if (saved === 'en' || saved === 'hi') {
      return saved;
    }
    return 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('cab_theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    // Default theme is dark
    return 'dark';
  });

  const [activeTab, setActiveTab] = useState<'home' | 'routes' | 'pricing' | 'tours' | 'about' | 'contact'>('home');

  // Carries the fare-estimator's selection (persons, seat type, route) into the booking form
  const [seatBookingPrefill, setSeatBookingPrefill] = useState<SeatBookingPrefill | null>(null);

  const handleRequestSeatBooking = (prefill: SeatBookingPrefill) => {
    setSeatBookingPrefill(prefill);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Side-effect to inject correct dark mode class on mounting
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Direct CTA targets
  const handleBookingClick = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      theme === 'dark' ? 'bg-brand-black text-brand-slate' : 'bg-white text-brand-black'
    }`}>
      
      {/* 1. BRAND GLOBAL ANNOUNCEMENT TIP BAR */}
      <div className={`w-full text-center py-2 px-4 text-xs font-semibold select-none flex items-center justify-center space-x-1.5 transition-all ${
        theme === 'dark' 
          ? 'bg-neutral-900 text-brand-gold border-b border-white/5' 
          : 'bg-neutral-100 text-neutral-800 border-b border-black/5'
      }`}>
        <Sparkles className="w-4 h-4 text-brand-red animate-pulse-slow" />
        <span>
          {language === 'en' 
            ? '🚀 Daily Certified Sharing Cab: Ghazipur ⇄ Lucknow. Booking seats starting at just ' 
            : '🚀 दैनिक शेयरिंग कैब: गाज़ीपुर ⇄ लखनऊ। किराये की शुरुआत मात्र '}
          <strong className="text-brand-red">₹649</strong>!
        </span>
      </div>

      {/* 2. NAVIGATION HEADER */}
      <Header
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 3. DYNAMIC PAGES ROUTER BODY CONTAINER */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="space-y-0" id="home-landing-page">
            {/* Hero module */}
            <Hero language={language} theme={theme} setActiveTab={setActiveTab} />
            
            {/* Routes timetable */}
            <RoutesSection language={language} theme={theme} />
            
            {/* Seat Pricing schema */}
            <PricingSection language={language} theme={theme} onRequestBooking={handleRequestSeatBooking} />

            {/* Why Travelers Choose us Grid */}
            <WhyChooseUs language={language} theme={theme} />
            
            {/* Purvanchal route landmarks bento */}
            <RouteHighlights language={language} theme={theme} />
            
            {/* Fleet showcase */}
            <VehicleSection language={language} theme={theme} />
            
            {/* Testimonials */}
            <CustomerReviews language={language} theme={theme} />
            
            {/* Frequently Asked Questions */}
            <FAQSection language={language} theme={theme} />

            {/* LOWER RETENTION CALL TO ACTION BANNER */}
            <section className={`py-16 text-center relative overflow-hidden border-t border-b ${
              theme === 'dark' 
                ? 'bg-linear-to-br from-brand-charcoal to-brand-black border-white/5' 
                : 'bg-linear-to-br from-neutral-50 to-neutral-100 border-neutral-200'
            }`} id="lower-cta-highlights">
              {/* Decorative side blurs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
                <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-wider bg-brand-red/10 px-3 py-1 rounded-full border border-brand-red/20 inline-block">
                  {language === 'en' ? 'Get Direct Ticket' : 'नियत किराए पर टिकट'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight">
                  {language === 'en' ? 'Book Your Executive Seat Today' : 'आज ही अपनी आरामदायक सीट आरक्षित करें'}
                </h2>
                <p className={`text-sm sm:text-base max-w-xl mx-auto ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {language === 'en' 
                    ? 'Connecting Ghazipur and Lucknow daily via Purvanchal High-Speed Expressway. Zero booking fee, safe and family-friendly.' 
                    : 'पूर्वांचल एक्सप्रेसवे के माध्यम से गाज़ीपुर और लखनऊ के बीच दैनिक आरामदायक सफर। आसान बुकिंग, सुरक्षित चालक।'}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={handleBookingClick}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer text-center"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>
                      {language === 'en' ? 'WhatsApp Reservation Link' : 'व्हाट्सएप से टिकट खरीदें'}
                    </span>
                  </button>

                  <a
                    href="tel:+919161666009"
                    className={`w-full sm:w-auto flex items-center justify-center space-x-2.5 font-bold text-base px-8 py-4 rounded-xl border transition-all ${
                      theme === 'dark' 
                        ? 'border-white/10 hover:bg-neutral-800 text-white' 
                        : 'border-neutral-200 hover:bg-neutral-100 text-brand-black'
                    }`}
                  >
                    <PhoneCall className="w-5 h-5 text-brand-red" />
                    <span className="font-mono text-xs">+91 91616 66009</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Dedicated Routes Screen */}
        {activeTab === 'routes' && (
          <div className="fade-in" id="routes-tab-screen">
            <RoutesSection language={language} theme={theme} />
            <RouteHighlights language={language} theme={theme} />
          </div>
        )}

        {/* Dedicated Pricing Screen */}
        {activeTab === 'pricing' && (
          <div className="fade-in" id="pricing-tab-screen">
            <PricingSection language={language} theme={theme} onRequestBooking={handleRequestSeatBooking} />
            <WhyChooseUs language={language} theme={theme} />
          </div>
        )}

        {/* Dedicated Tour Packages Screen */}
        {activeTab === 'tours' && (
          <div className="fade-in" id="tours-tab-screen">
            <TourPackages language={language} theme={theme} />
          </div>
        )}

        {/* Dedicated About Screen */}
        {activeTab === 'about' && (
          <div className="fade-in" id="about-tab-screen">
            <AboutSection language={language} theme={theme} />
            <VehicleSection language={language} theme={theme} />
          </div>
        )}

        {/* Dedicated Contact Screen */}
        {activeTab === 'contact' && (
          <div className="fade-in" id="contact-tab-screen">
            <ContactForm
              language={language}
              theme={theme}
              prefill={seatBookingPrefill}
              onPrefillConsumed={() => setSeatBookingPrefill(null)}
            />
            <FAQSection language={language} theme={theme} />
          </div>
        )}
      </main>

      {/* 4. FOOTER COLUMN INFO */}
      <Footer language={language} theme={theme} setActiveTab={setActiveTab} />

      {/* 5. FLOATING QUICK ACTION BAR (Essential Mobile bottom bar) */}
      <MobileBottomNav
        language={language}
        theme={theme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </div>
  );
}
