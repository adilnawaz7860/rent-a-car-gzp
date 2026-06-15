import React, { useState } from 'react';
import { TRANSLATIONS, Language, Theme } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomerReviewsProps {
  language: Language;
  theme: Theme;
}

export default function CustomerReviews({ language, theme }: CustomerReviewsProps) {
  const t = TRANSLATIONS[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Abhishek Mishra',
      role: language === 'en' ? 'Senior Executive, Gomti Nagar Bank' : 'वरिष्ठ बैंक अधिकारी, गोमती नगर',
      location: 'Lucknow',
      rating: 5,
      comment: language === 'en' 
        ? 'Best shared cab company connecting Ghazipur with Lucknow. Extremely punctual - the 6:00 AM trip gets me to Lucknow before office hours. The AC Ertiga is clean, and driver was highly professional!' 
        : 'गाज़ीपुर से लखनऊ के लिए सबसे अच्छी शेयरिंग कैब। बेहद समयनिष्ठ - सुबह 6:00 बजे की गाड़ी मुझे समय से पहले लखनऊ पहुंचा देती है। एर्टिगा कार बिल्कुल नई और साफ थी।',
      date: 'June 2, 2026'
    },
    {
      name: 'Dr. S. K. Rai',
      role: language === 'en' ? 'Senior Consultant Physician' : 'वरिष्ठ चिकित्सक',
      location: 'Ghazipur',
      rating: 5,
      comment: language === 'en' 
        ? 'Traveling with family was super comfortable. We purchased middle seats for our trip. Dual AC blower kept the cabin very cool on a hot summer noon on Purvanchal Expressway. Pricing is fair and transparent.' 
        : 'परिवार के साथ यात्रा करना बेहद आरामदायक रहा। हमने बीच वाली सीटें बुक की थीं। चिलचिलाती गर्मी में भी डबल ब्लोअर एसी ने केबिन को बहुत ठंडा रखा। पूर्वांचल एक्सप्रेसवे पर कमाल का अनुभव।',
      date: 'May 28, 2026'
    },
    {
      name: 'Riya Gupta',
      role: language === 'en' ? 'B.Tech Student, Lucknow University' : 'छात्रा, लखनऊ यूनिवर्सिटी',
      location: 'Ghazipur',
      rating: 5,
      comment: language === 'en' 
        ? 'As a solo female traveler, safety is my absolute primary priority. The driver drove extremely responsibly within expressway speed limits. Very polite atmosphere and reliable drop near Kamta crossing.' 
        : 'एक महिला यात्री के लिए सुरक्षा सबसे महत्वपूर्ण है। ड्राइवर ने एक्सप्रेसवे की गति सीमा के भीतर बहुत जिम्मेदारी से गाड़ी चलाई। बहुत ही शालीन और सुरक्षित माहौल मिला। धन्यवाद।',
      date: 'May 15, 2026'
    },
    {
      name: 'Mohammad Tariq',
      role: language === 'en' ? 'Corporate Trader' : 'थोक व्यवसायी',
      location: 'Lucknow',
      rating: 5,
      comment: language === 'en' 
        ? 'The WhatsApp booking flow is incredibly instant. I generated a booking request link near Banshi Bazar office, and got my seat confirmed in 5 minutes. The rear economy seats represent outstanding value.' 
        : 'व्हाट्सएप बुकिंग प्रणाली बेहद तेज है। मैंने बंशी बाजार कार्यालय के पास बुकिंग संदेश भेजा और 5 मिनट में सीट कन्फर्म हो गई। पीछे की आर्थिक सीटें बहुत बढ़िया वैल्यू प्रदान करती हैं।',
      date: 'April 30, 2026'
    }
  ];

  const nextSlider = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlider = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="passenger-reviews" className={`py-16 md:py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-brand-charcoal' : 'bg-neutral-50 text-brand-black border-t border-b border-neutral-200'
    }`}>
      {/* Background radial elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red font-mono text-xs font-bold uppercase tracking-widest bg-brand-red/10 px-3 py-1.5 rounded-full border border-brand-red/20 inline-block">
            {language === 'en' ? 'Verified Rider Experience' : 'यात्रियों के वास्तविक विचार'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            {t.reviewsTitle}
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.reviewsSubtitle}
          </p>
        </div>

        {/* Carousel / Multi-card Testimonials container */}
        <div className="relative max-w-4xl mx-auto" id="reviews-carousel-outer">
          
          {/* Main Selected Slide */}
          <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
            theme === 'dark' ? 'bg-neutral-900 border-white/5' : 'bg-white border-neutral-300 shadow-xl'
          }`} id={`review-slide-${currentIndex}`}>
            
            {/* Massive block quote icon decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 opacity-5 pointer-events-none text-brand-red">
              <Quote className="w-full h-full" />
            </div>

            {/* Slide Body */}
            <div className="space-y-6 relative z-10">
              
              {/* Stars Display */}
              <div className="flex space-x-1">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, rIdx) => (
                  <Star key={rIdx} className="w-5 h-5 text-brand-gold fill-current" />
                ))}
              </div>

              {/* Review Comment text */}
              <p className={`text-base sm:text-lg italic leading-relaxed font-display font-medium ${
                theme === 'dark' ? 'text-white' : 'text-neutral-800'
              }`}>
                "{reviews[currentIndex].comment}"
              </p>

              {/* Reviewer Meta details */}
              <div className="pt-6 border-t border-dashed border-neutral-800/10 dark:border-white/10 flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className={`font-semibold text-base sm:text-lg ${theme === 'dark' ? 'text-white' : 'text-neutral-800'}`}>
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest mt-0.5">
                    {reviews[currentIndex].role} &bull; {reviews[currentIndex].location}
                  </p>
                </div>
                <span className="text-xs font-mono text-neutral-500 shrink-0">
                  {reviews[currentIndex].date}
                </span>
              </div>

            </div>
          </div>

          {/* Carousel Slider Navigation controllers */}
          <div className="flex justify-between items-center mt-6">
            <span className="text-xs font-mono text-neutral-500">
              {currentIndex + 1} / {reviews.length}
            </span>
            <div className="flex space-x-3">
              <button
                onClick={prevSlider}
                className={`p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                  theme === 'dark' ? 'border-white/10 hover:bg-neutral-900 text-white' : 'border-neutral-200 hover:bg-neutral-100 text-brand-black'
                }`}
                title="Previous Review"
                id="reviewer-prev-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlider}
                className={`p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                  theme === 'dark' ? 'border-white/10 hover:bg-neutral-900 text-white' : 'border-neutral-200 hover:bg-neutral-100 text-brand-black'
                }`}
                title="Next Review"
                id="reviewer-next-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
