import React, { useState } from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  language: Language;
  theme: Theme;
}

export default function FAQSection({ language, theme }: FAQSectionProps) {
  const t = TRANSLATIONS[language];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: language === 'en' ? 'How do I book a seat?' : 'मैं अपनी सीट कैसे बुक कर सकता हूँ?',
      a: language === 'en' 
        ? 'Booking is extremely simple and takes less than 2 minutes: Click any booking button which will automatically open a custom prefilled message in WhatsApp containing the route and seat type. Just enter your name and date, send, and our representative will confirm availability instantly.' 
        : 'सीट बुकिंग की प्रक्रिया बहुत आसान है: किसी भी बुकिंग बटन पर क्लिक करें जो आपके व्हाट्सएप पर एक संदेश बनाएगा। उसमें अपनी यात्रा की तारीख और नाम दर्ज कर भेजें। हमारे प्रतिनिधि आपको तुरंत उपलब्धता की जानकारी और भुगतान का विवरण भेजेंगे।'
    },
    {
      q: language === 'en' ? 'What are the exact departure timings?' : 'गाड़ियों के छूटने का सही समय क्या है?',
      a: language === 'en'
        ? 'Currently, we run daily fixed journeys: 1. From Ghazipur (Banshi Bazar office) departing at 6:00 AM sharp. 2. From Lucknow (Polytechnic Crossing near UIDAI office) departing at 3:00 PM and another departing at 4:00 PM.' 
        : 'वर्तमान में हमारी दैनिक गाड़ियां नियत समय पर चलती हैं: १. गाज़ीपुर (बंशी बाजार कार्यालय) से सुबह 6:00 बजे प्रस्थान। २. लखनऊ (पॉलिटेक्निक चौराहा, UIDAI कार्यालय के पास) से दोपहर 3:00 बजे तथा शाम 4:00 बजे प्रस्थान।'
    },
    {
      q: language === 'en' ? 'Is AC available in all vehicles?' : 'क्या सभी गाड़ियों में एसी (AC) उपलब्ध है?',
      a: language === 'en'
        ? 'Yes, absolutely. We operate a dedicated, fully air-conditioned Maruti Suzuki Ertiga MUV fleet. The vehicle has dual-zone climate control with dedicated overhead AC vents for all rows (front, middle, and rear) ensuring a chilled, comfortable cabin.' 
        : 'हाँ, बिल्कुल। हमारी सभी गाड़ियां पूरी तरह से वातानुकूलित (AC) हैं। मारुति सुजुकी एर्टिगा केबिन में डबल ब्लोअर एसी लगा है जिससे आगे, मध्य और पीछे की सभी सीटों पर समान रूप से बेहतर ठंडक मिलती है।'
    },
    {
      q: language === 'en' ? 'How do I pay for my booked seat?' : 'सीट बुकिंग का भुगतान कैसे करना होगा?',
      a: language === 'en'
        ? 'Once availability is confirmed by our representative on WhatsApp, you will receive our verified UPI ID / Google Pay / PhonePe details. You can make a secure online payment before departure or during boarding at our local office.' 
        : 'व्हाट्सएप पर सीट उपलब्धता की पुष्टि के बाद, आपको हमारे ऑपरेटर का सुरक्षित UPI ID / Google Pay अथवा PhonePe का विवरण प्राप्त होगा। आप यात्रा शुरू होने से पहले या बोर्डिंग पॉइंट ऑफिस पर नकद/ऑनलाइन भुगतान कर सकते हैं।'
    },
    {
      q: language === 'en' ? 'Can I cancel or reschedule my booking?' : 'क्या मैं अपनी बुकिंग रद्द या बदल सकता हूँ?',
      a: language === 'en'
        ? 'Yes. You can cancel or reschedule your booking free of cost up to 4 hours before the scheduled departure time. Just send a simple request message on our primary WhatsApp number (+91 91616 66009) and our team will adjust it instantly.' 
        : 'हाँ। आप नियत प्रस्थान समय से 4 घंटे पहले तक अपनी सीट बुकिंग बिल्कुल मुफ्त रद्द या पुनः निर्धारित कर सकते हैं। बस हमारे व्हाट्सएप नंबर (+91 91616 66009) पर एक संदेश भेजें और प्रतिनिधि आपकी सहायता करेंगे।'
    },
    {
      q: language === 'en' ? 'Where exactly are the pickup and dropping points?' : 'पिकअप और ड्रॉपिंग के मुख्य स्थान कहाँ हैं?',
      a: language === 'en'
        ? '1. In Ghazipur: Main Boarding office is at Banshi Bazar, Ghazipur. 2. In Lucknow: Boarding point is near the UIDAI Regional Office near Polytechnic Crossing. We cover routes including Gomti Nagar, Ekana Stadium cut, and Kamta for ultimate convenience.' 
        : '१. गाज़ीपुर में: हमारा मुख्य बोर्डिंग कार्यालय बंशी बाजार, गाज़ीपुर में है। २. लखनऊ में: पिकअप और ड्रॉप पॉइंट पॉलिटेक्निक चौराहे के पास UIDAI क्षेत्रीय कार्यालय के बगल में है। हम गोमती नगर, शहीद पथ और इकाना स्टेडियम कट भी कवर करते हैं।'
    }
  ];

  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="faq-accordions" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-black' : 'bg-white text-brand-black'
    }`}>
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Got Questions?' : 'अक्सर उठने वाले सवाल'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {t.faqTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQs Accordion items */}
        <div className="space-y-4" id="faq-container-list">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-300 ${
                  theme === 'dark'
                    ? isExpanded 
                      ? 'bg-neutral-900 border-brand-red/30' 
                      : 'bg-brand-charcoal border-white/5 hover:bg-neutral-900/40'
                    : isExpanded
                      ? 'bg-white border-brand-red/30 shadow-lg'
                      : 'bg-neutral-50 border-neutral-200 hover:bg-white'
                }`}
              >
                {/* Trigger Button bar */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${
                      isExpanded ? 'text-brand-red' : theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                    }`} />
                    <span className={`font-display font-semibold text-sm sm:text-base ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-800'
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  <span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-brand-red shrink-0" />
                    ) : (
                      <ChevronDown className={`w-5 h-5 shrink-0 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`} />
                    )}
                  </span>
                </button>

                {/* Explanatory Expandable Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-1 border-t border-dashed border-neutral-800/10 dark:border-white/5 text-xs sm:text-sm leading-relaxed text-balance" id={`faq-answer-${idx}`}>
                    <p className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
