export type Language = 'en' | 'hi';
export type Theme = 'light' | 'dark';

export interface RouteDetail {
  id: string;
  from: string;
  to: string;
  departure: string;
  pickup: string;
  duration: string;
  basePrice: number;
}

export interface SeatDetail {
  id: string;
  name: string;
  price: number;
  comfort: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

// Pre-filled data carried from the fare estimator into the Sharing Cab booking form
export interface SeatBookingPrefill {
  numPersons: number;
  seatType: string;
  route: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TranslationSet {
  navHome: string;
  navAbout: string;
  navRoutes: string;
  navPricing: string;
  navTours: string;
  navContact: string;

  heroTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCTAWhatsApp: string;
  heroCTACall: string;
  heroCTASeeSchedule: string;
  heroRatingText: string;
  heroDailyService: string;
  heroACVehicle: string;

  routeTitle: string;
  routeSubtitle: string;
  pickupPoint: string;
  departureTime: string;
  eta: string;
  routeBanshiBazar: string;
  routePolytechnic: string;
  routeUidai: string;

  pricingTitle: string;
  pricingSubtitle: string;
  pricingFrontSeat: string;
  pricingMiddleSeat: string;
  pricingRearSeat: string;
  pricingBookSeat: string;
  pricingSeatIncluded: string;

  whyTitle: string;
  whySubtitle: string;
  whyAC: string;
  whyACDesc: string;
  whyDrivers: string;
  whyDriversDesc: string;
  whyComfort: string;
  whyComfortDesc: string;
  whySafe: string;
  whySafeDesc: string;
  whyDaily: string;
  whyDailyDesc: string;
  whyOnTime: string;
  whyOnTimeDesc: string;
  whyPricing: string;
  whyPricingDesc: string;
  whyPremium: string;
  whyPremiumDesc: string;
  whySupport: string;
  whySupportDesc: string;

  highlightsTitle: string;
  highlightsSubtitle: string;
  highlightGhazipur: string;
  highlightGhazipurDesc: string;
  highlightLucknow: string;
  highlightLucknowDesc: string;
  highlightExpressway: string;
  highlightExpresswayDesc: string;
  highlightPointsTitle: string;

  fleetTitle: string;
  fleetSubtitle: string;
  fleetErtigaName: string;
  fleetErtigaDesc: string;
  fleetCapacity: string;
  fleetLuggage: string;
  fleetFeatures: string;

  reviewsTitle: string;
  reviewsSubtitle: string;

  faqTitle: string;
  faqSubtitle: string;

  ctaTitle: string;
  ctaSubtitle: string;

  contactTitle: string;
  contactSubtitle: string;
  contactFormName: string;
  contactFormPhone: string;
  contactFormDate: string;
  contactFormSeat: string;
  contactFormRoute: string;
  contactFormMsgPlaceholder: string;
  contactFormSubmit: string;
  contactOfficeHours: string;
  contactOfficeHoursVal: string;
  contactOfficeAddress: string;
  contactOfficeAddressVal: string;

  bookingFormHeading: string;
  bookingTabSharing: string;
  bookingTabSharingDesc: string;
  bookingTabReserve: string;
  bookingTabReserveDesc: string;
  bookingFormPersons: string;
  bookingFormFrom: string;
  bookingFormTo: string;
  bookingFormToPlaceholder: string;
  bookingFormCarType: string;
  bookingFormGenerate: string;

  aboutTitle: string;
  aboutSubtitle: string;
  aboutStoryTitle: string;
  aboutStoryText: string;
  aboutMissionTitle: string;
  aboutMissionText: string;
  aboutVisionTitle: string;
  aboutVisionText: string;
  aboutCoreValues: string;

  toursTitle: string;
  toursSubtitle: string;
  toursDuration: string;
  toursPrice: string;
  toursIncludes: string;
  toursBookBtn: string;
}

export const TRANSLATIONS: Record<Language, TranslationSet> = {
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navRoutes: 'Routes',
    navPricing: 'Pricing',
    navTours: 'Tour Packages',
    navContact: 'Contact',

    heroTagline: 'Affordable, Comfortable & Luxurious',
    heroHeadline: 'Daily Sharing Cab Service Between Ghazipur & Lucknow',
    heroSubheadline: 'Travel style, leisure, and executive comfort in our dedicated AC Ertiga fleet. Connecting locations with precision.',
    heroCTAWhatsApp: 'Book Seat on WhatsApp',
    heroCTACall: 'Call Now for Reservation',
    heroCTASeeSchedule: 'View Route Schedule',
    heroRatingText: '4.9 ★ (1,200+ Happy Riders)',
    heroDailyService: 'Daily Certified Service',
    heroACVehicle: 'Fully Air Conditioned',

    routeTitle: 'Daily Route Schedule',
    routeSubtitle: 'Highly punctual, convenient departures with fixed passenger boarding zones.',
    pickupPoint: 'Boarding Point',
    departureTime: 'Departure Time',
    eta: 'Duration',
    routeBanshiBazar: 'Banshi Bazar Rent-a-Car Office, Ghazipur',
    routePolytechnic: 'Near UIDAI Office (Polytechnic Crossing), Lucknow',
    routeUidai: 'Near UIDAI Office, Lucknow',

    pricingTitle: 'Premium Seat Pricing',
    pricingSubtitle: 'Transparent per-seat pricing. Choose your preference for maximum comfort.',
    pricingFrontSeat: 'Front Executive Seat',
    pricingMiddleSeat: 'Middle Premium Cabin',
    pricingRearSeat: 'Rear Economy Seat',
    pricingBookSeat: 'Reserve This Seat',
    pricingSeatIncluded: 'Included Features',

    whyTitle: 'Why Travelers Choose Our Service',
    whySubtitle: 'Combining luxury, punctuality, and affordability for Eastern UP riders.',
    whyAC: 'Smart Air Conditioning',
    whyACDesc: 'Multi-zone climate control ensures cool air for every single row, regardless of outdoor heat.',
    whyDrivers: 'Certified Professional Drivers',
    whyDriversDesc: 'Polite, heavily vetted, family-friendly, and highly experienced expressway chauffeurs.',
    whyComfort: 'Executive Cabin Comfort',
    whyComfortDesc: 'Ergonomically supported seats, extra room, cleanliness, and subtle ambient fragrances.',
    whySafe: 'Safe Highways Journey',
    whySafeDesc: 'Equipped with basic safety protocols, strict speed limits, and stable driving.',
    whyDaily: 'Punctual Daily Service',
    whyDailyDesc: 'We operate 365 days a year without surprise cancellations or unexpected delays.',
    whyOnTime: 'On-Time Pickups',
    whyOnTimeDesc: 'Strict departure times ensuring you reach your destination exactly as promised.',
    whyPricing: 'Zero Hidden Charges',
    whyPricingDesc: '100% transparent pricing. You pay only the seat fare without baggage extras.',
    whyPremium: 'Luxurious Atmosphere',
    whyPremiumDesc: 'Professional environment, neat interiors, and high-end riding feel.',
    whySupport: 'Dedicated Call Support',
    whySupportDesc: 'Active operators available from 6:00 AM to 10:00 PM for all route updates.',

    highlightsTitle: 'Expressway Route Highlights',
    highlightsSubtitle: 'Traveling through Purvanchal Expressway for the fastest, most reliable ride.',
    highlightGhazipur: 'Ghazipur Station & City',
    highlightGhazipurDesc: 'Historical hub in Eastern UP - pickup office conveniently located at Banshi Bazar.',
    highlightLucknow: 'Lucknow Metro Central',
    highlightLucknowDesc: 'The capital city - direct dropping at Gomti Nagar, Polytechnic, and Airport.',
    highlightExpressway: 'Purvanchal Expressway',
    highlightExpresswayDesc: 'India\'s spectacular high-speed corridor ensuring an elegant, non-stop ride.',
    highlightPointsTitle: 'Core Connecting Hubs',

    fleetTitle: 'Our Premium Fleet',
    fleetSubtitle: 'Travel in our meticulously maintained executive multi-utility vehicles.',
    fleetErtigaName: 'Maruti Suzuki Ertiga (LXI/VXI Smart Hybrid)',
    fleetErtigaDesc: 'Known for its elegant layout, dual-zone AC, smooth suspension, and exceptional posture support. Clean, sanitized before every single journey.',
    fleetCapacity: '6 Passenger Seats + 1 Chauffeur',
    fleetLuggage: 'Ample Boot Space for Baggage',
    fleetFeatures: 'Phone Chargers, Dual AC blower, Music System, Mineral Water Bottle',

    reviewsTitle: 'What Our Regular Passengers Say',
    reviewsSubtitle: 'Real experiences from corporate, family, and solo executive travelers.',

    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know about reserving your sharing cab seat.',

    ctaTitle: 'Ready to Book Your Ride?',
    ctaSubtitle: 'Secure your comfortable seat today via WhatsApp or a direct call. Immediate confirmation.',

    contactTitle: 'Reach Out Direct Operator',
    contactSubtitle: 'Have custom requirements or outstation queries? We are here to help.',
    contactFormName: 'Your Full Name',
    contactFormPhone: 'WhatsApp Number',
    contactFormDate: 'Date of Travel',
    contactFormSeat: 'Preferred Seat Type',
    contactFormRoute: 'Choose Route',
    contactFormMsgPlaceholder: 'Any specific instructions/pickup questions? (Optional)',
    contactFormSubmit: 'Generate Custom Booking Link',
    contactOfficeHours: 'Business Hours',
    contactOfficeHoursVal: 'Daily: 5:00 AM - 11:00 PM',
    contactOfficeAddress: 'Main Boarding Offices',
    contactOfficeAddressVal: 'Rent a car, RKBK petrol pump, near Awadh Honda Agency, Bansibazar, Lanka, Ghazipur, UP 233001 | Lucknow: Polytechnic Crossing near UIDAI Office',

    bookingFormHeading: 'Seat Booking Lead Form',
    bookingTabSharing: 'Sharing Cab',
    bookingTabSharingDesc: 'Daily Ghazipur ⇄ Lucknow seat booking',
    bookingTabReserve: 'Reserve Cab',
    bookingTabReserveDesc: 'Outstation private cab on rent',
    bookingFormPersons: 'Number of Persons',
    bookingFormFrom: 'From',
    bookingFormTo: 'Destination City',
    bookingFormToPlaceholder: 'Type city name (e.g. Lucknow, Varanasi)',
    bookingFormCarType: 'Select Car Type',
    bookingFormGenerate: 'Generate Booking',

    aboutTitle: 'About Our Fleet',
    aboutSubtitle: 'Connecting Ghazipur and Lucknow with unmatched comfort and precision.',
    aboutStoryTitle: 'Our Journey',
    aboutStoryText: 'We started with a single promise: to change how passengers travel between Ghazipur and Lucknow. Standard buses were slow and uncomfortable, while private booking was too expensive for daily commuters. Our Daily Sharing Cab Service combines the affordability of public transit with the elite luxury, comfort, and speed of a private premium sedan.',
    aboutMissionTitle: 'Our Dedicated Mission',
    aboutMissionText: 'To offer Eastern Uttar Pradesh passengers an unmatched premium commute experience which is completely safe, highly punctual, deeply comfortable, and remarkably affordable.',
    aboutVisionTitle: 'Our Vision',
    aboutVisionText: 'To expand as the absolute standard of premium, high-speed regional travel in Uttar Pradesh and lead with outstanding customer satisfaction.',
    aboutCoreValues: 'Core Foundations: trust, premium hygiene, expressway discipline, absolute comfort',

    toursTitle: 'Incredible Tour Packages from Ghazipur',
    toursSubtitle: 'Hand-curated multi-day & day-trip packages with AC vehicle, driver, fuel & toll included. Sit back and let us handle the journey.',
    toursDuration: 'Duration',
    toursPrice: 'Starting Price (Per Person)',
    toursIncludes: 'Package Includes',
    toursBookBtn: 'Book This Package'
  },
  hi: {
    navHome: 'होम',
    navAbout: 'हमारे बारे में',
    navRoutes: 'मार्ग और समय',
    navPricing: 'किराया',
    navTours: 'टूर पैकेज',
    navContact: 'संपर्क करें',

    heroTagline: 'किफायती, आरामदायक और शानदार',
    heroHeadline: 'गाज़ीपुर ⇄ लखनऊ दैनिक शेयरिंग कैब सेवा',
    heroSubheadline: 'हमारी विशेष एसी एर्टिगा फ्लीट में बेहतरीन स्टाइल, आराम और सुरक्षा का अनुभव करें। सही समय, सुरक्षित यात्रा।',
    heroCTAWhatsApp: 'व्हाट्सएप पर सीट बुक करें',
    heroCTACall: 'तुरंत बुकिंग के लिए कॉल करें',
    heroCTASeeSchedule: 'समय सारणी देखें',
    heroRatingText: '4.9 ★ (1,200+ खुश यात्री)',
    heroDailyService: 'दैनिक प्रमाणित सेवा',
    heroACVehicle: 'पूरी तरह से वातानुकूलित (AC)',

    routeTitle: 'दैनिक यात्रा समय सारणी',
    routeSubtitle: 'नियत समय पर रवानगी और निश्चित यात्री बोर्डिंग पॉइंट के साथ समयनिष्ठ सेवा।',
    pickupPoint: 'बोर्डिंग पॉइंट (बैठने का स्थान)',
    departureTime: 'प्रस्थान समय (छूटने का समय)',
    eta: 'अनुमानित समय',
    routeBanshiBazar: 'बंशी बाजार रेंट-ए-कार ऑफिस, गाज़ीपुर',
    routePolytechnic: 'UIDAI ऑफिस के पास (पॉलिटेक्निक चौराहा), लखनऊ',
    routeUidai: 'UIDAI ऑफिस के पास, लखनऊ',

    pricingTitle: 'सीट के अनुसार प्रीमियम किराया',
    pricingSubtitle: 'पारदर्शी प्रति-सीट किराया। अधिकतम सुविधा और बजट के आधार पर अपनी सीट चुनें।',
    pricingFrontSeat: 'फ्रंट एक्जीक्यूटिव सीट (आगे की सीट)',
    pricingMiddleSeat: 'मिडिल प्रीमियम केबिन (बीच की सीट)',
    pricingRearSeat: 'रियर इकोनॉमी केबिन (पीछे की सीट)',
    pricingBookSeat: 'यह सीट बुक करें',
    pricingSeatIncluded: 'शामिल सुविधाएं',

    whyTitle: 'यात्री हमें क्यों चुनते हैं?',
    whySubtitle: 'गाज़ीपुर-लखनऊ मार्ग पर लग्जरी, समयबद्धता और गोपनीयता का सही संतुलन।',
    whyAC: 'स्मार्ट क्लाइमेट एसी',
    whyACDesc: 'डबल ब्लोअर एसी हर सीट पर समान ठंडक पहुंचाता है, चाहे बाहर धूप कितनी भी हो।',
    whyDrivers: 'प्रशिक्षित प्रोफेशनल ड्राइवर',
    whyDriversDesc: 'बेहद शालीन, एक्सप्रेसवे पर चलने के अनुभवी और परिवार के लिए सुरक्षित चालक।',
    whyComfort: 'आरामदायक केबिन',
    whyComfortDesc: 'एर्गोनोमिक कुशन सपोर्ट, साफ़-सुथरे इंटीरियर और मनभावन भीनी खुशबू।',
    whySafe: 'सुरक्षित एक्सप्रेसवे यात्रा',
    whySafeDesc: 'जीपीएस ट्रैकिंग, आवश्यक सुरक्षा उपकरण और गति सीमाओं का पूर्ण पालन।',
    whyDaily: 'नियमित दैनिक सेवा',
    whyDailyDesc: 'बिना किसी अचानक रद्दीकरण या देरी के साल के पूरे 365 दिन सेवाएं उपलब्ध।',
    whyOnTime: 'समय पर रवानगी',
    whyOnTimeDesc: 'समय पर प्रस्थान ताकि आप अपने गंतव्य पर सही समय पर पहुंच सकें।',
    whyPricing: 'कोई छुपा हुआ शुल्क नहीं',
    whyPricingDesc: '100% पारदर्शी किराया। आपको केवल आपकी चुनी गई सीट का किराया देना होगा।',
    whyPremium: 'लग्जरी और वीआईपी फील',
    whyPremiumDesc: 'व्यावसायिक वातावरण, साफ खिड़कियां और प्रीमियम कार का आरामदायक अहसास।',
    whySupport: 'समर्पित टेलीफोन सहायता',
    whySupportDesc: 'सुबह 6:00 बजे से रात 10:00 बजे तक हमारे ऑपरेटर सहायता के लिए उपलब्ध हैं।',

    highlightsTitle: 'पूर्वांचल एक्सप्रेसवे मार्ग की मुख्य विशेषताएं',
    highlightsSubtitle: 'पूर्वांचल एक्सप्रेसवे के माध्यम से सबसे तेज़, सबसे आसान और सुरक्षित यात्रा।',
    highlightGhazipur: 'गाज़ीपुर शहर और स्टेशन',
    highlightGhazipurDesc: 'पूर्वी उत्तर प्रदेश का ऐतिहासिक क्षेत्र - बंशी बाजार में हमारा मुख्य कार्यालय उपलब्ध है।',
    highlightLucknow: 'लखनऊ मेट्रो और हब',
    highlightLucknowDesc: 'राजधानी एक्सप्रेसवे टर्मिनल - पॉलिटेक्निक चौराहा, गोमती नगर और एयरपोर्ट कनेक्टिविटी।',
    highlightExpressway: 'पूर्वांचल एक्सप्रेसवे कॉरिडोर',
    highlightExpresswayDesc: 'भारत का आधुनिक एक्सप्रेसवे जो बिना झटके की यात्रा और समय की बचत सुनिश्चित करता है।',
    highlightPointsTitle: 'मुख्य संपर्क हब',

    fleetTitle: 'हमारी प्रीमियम गाड़ियाँ',
    fleetSubtitle: 'नियमित सैनिटाइज्ड और पूर्ण रूप से संवर्धित नई गाड़ियों में यात्रा करें।',
    fleetErtigaName: 'मारुति सुजुकी एर्टिगा (स्मार्ट हाइब्रिड)',
    fleetErtigaDesc: 'लंबी दूरी के लिए सबसे आरामदायक गाड़ी। बेहतरीन सस्पेंशन, लेगरूम और मोबाइल चार्जिंग पॉइंट से सुसज्जित।',
    fleetCapacity: '6 यात्री सीटें + 1 ड्राइवर',
    fleetLuggage: 'सामान रखने के लिए पर्याप्त बूट स्पेस',
    fleetFeatures: 'फास्ट चार्जर, डबल एसी, बेहतरीन साउंड सिस्टम, मिनरल वाटर बोतल',

    reviewsTitle: 'हमारे नियमित यात्रियों के अनुभव',
    reviewsSubtitle: 'पारिवारिक यात्रियों, व्यापारियों और दैनिक यात्रियों के वास्तविक विचार।',

    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
    faqSubtitle: 'सीट बुकिंग और यात्रा संबंधी सभी आवश्यक जानकारियों के उत्तर।',

    ctaTitle: 'क्या आप यात्रा के लिए तैयार हैं?',
    ctaSubtitle: 'व्हाट्सएप या डायरेक्ट कॉल के जरिए आज ही अपनी सीट आरक्षित करें और तत्काल बुकिंग संदेश प्राप्त करें।',

    contactTitle: 'ऑपरेटर से सीधे बात करें',
    contactSubtitle: 'कोई विशिष्ट मार्ग पूछताछ या विशेष बुकिंग? हम आपकी सेवा में तत्पर हैं।',
    contactFormName: 'आपका पूरा नाम',
    contactFormPhone: 'व्हाट्सएप नंबर',
    contactFormDate: 'यात्रा की तारीख',
    contactFormSeat: 'पसंदीदा सीट का प्रकार',
    contactFormRoute: 'यात्रा का मार्ग चुनिए',
    contactFormMsgPlaceholder: 'कोई विशेष निर्देश या पिकअप से जुड़ा सवाल? (वैकल्पिक)',
    contactFormSubmit: 'व्हाट्सएप बुकिंग लिंक बनाएं',
    contactOfficeHours: 'कार्यकाल का समय',
    contactOfficeHoursVal: 'प्रतिदिन: सुबह 5:00 बजे से रात 11:00 बजे तक',
    contactOfficeAddress: 'मुख्य बोर्डिंग कार्यालय',
    contactOfficeAddressVal: 'रेंट ए कार, RKBK पेट्रोल पंप, अवध होंडा एजेंसी के पास, बंशीबाज़ार, लंका, गाज़ीपुर, उत्तर प्रदेश 233001 | लखनऊ: पॉलिटेक्निक चौराहा (UIDAI ऑफिस के पास)',

    bookingFormHeading: 'सीट बुकिंग फॉर्म',
    bookingTabSharing: 'शेयरिंग कैब',
    bookingTabSharingDesc: 'दैनिक गाज़ीपुर ⇄ लखनऊ सीट बुकिंग',
    bookingTabReserve: 'रिज़र्व कैब',
    bookingTabReserveDesc: 'आउटस्टेशन प्राइवेट कैब बुकिंग',
    bookingFormPersons: 'यात्रियों की संख्या',
    bookingFormFrom: 'कहाँ से',
    bookingFormTo: 'गंतव्य शहर',
    bookingFormToPlaceholder: 'शहर का नाम लिखें (जैसे लखनऊ, वाराणसी)',
    bookingFormCarType: 'गाड़ी का प्रकार चुनें',
    bookingFormGenerate: 'बुकिंग जनरेट करें',

    aboutTitle: 'हमारी सेवा के बारे में',
    aboutSubtitle: 'प्रतिबद्धता, आराम और बेजोड़ समयबद्धता के साथ गाज़ीपुर और लखनऊ को जोड़ना।',
    aboutStoryTitle: 'हमारी कहानी',
    aboutStoryText: 'हमने एक ही मूल लक्ष्य के साथ यात्रा शुरू की: गाज़ीपुर और लखनऊ के बीच सफर को बेहद आसान और थकान-मुक्त बनाना। सरकारी बसें धीमी व असुविधाजनक थीं और निजी टैक्सी का किराया रोज सफर करने वालों के बजट से बाहर था। हमारी दैनिक शेयरिंग कैब सर्विस ने बस की बचत और प्रीमियम कार की लग्जरी को एक साथ मिला दिया है।',
    aboutMissionTitle: 'हमारा संकल्प',
    aboutMissionText: 'पूर्वी उत्तर प्रदेश के लोगों को सुरक्षित, आधुनिक और समय पर चलने वाली वातानुकूलित कार यात्रा प्रदान करना जो सीधे उनके बजट में बैठे।',
    aboutVisionTitle: 'हमारा भविष्य',
    aboutVisionText: 'उत्तर प्रदेश में पूर्वांचल क्षेत्रीय परिवहन का सबसे विश्वसनीय ब्रांड बनना और देश की सर्वश्रेष्ठ यात्री संतुष्टि अर्जित करना।',
    aboutCoreValues: 'हमारे मुख्य स्तंभ: ईमानदारी, स्वच्छता, एक्सप्रेसवे राइडिंग अनुशासन और अटूट विश्वास।',

    toursTitle: 'गाज़ीपुर से शानदार टूर पैकेज',
    toursSubtitle: 'AC गाड़ी, ड्राइवर, ईंधन और टोल सहित पूरी तरह से व्यवस्थित मल्टी-डे और डे-ट्रिप पैकेज। आराम से बैठें, यात्रा की पूरी ज़िम्मेदारी हमारी।',
    toursDuration: 'अवधि',
    toursPrice: 'शुरुआती किराया (प्रति व्यक्ति)',
    toursIncludes: 'पैकेज में शामिल',
    toursBookBtn: 'यह पैकेज बुक करें'
  }
};
