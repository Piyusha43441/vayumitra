/**
 * VayuMitra (वायुमित्र) - Urban Air Quality Assistant
 * Refined, Highly Optimized Client Engine
 * 
 * Features:
 * 1. Centralized State Store with Persistent Settings
 * 2. Optimized Asynchronous API Calls with TTL Caching & AbortController
 * 3. Robust Offline State Management & Auto-Sync
 * 4. Streamlined DOM Updates with DocumentFragment & RAF Debounce
 * 5. Full Bilingual English & Simple Hindi Support
 */

(function () {
  'use strict';

  // --- COMPREHENSIVE BILINGUAL TRANSLATION DICTIONARY ---
  const I18N = {
    en: {
      tagline: "Your Family's Urban Smog & Clean Air Companion",
      navPlanText: "Family Plan",
      navMapText: "Live AQI Map",
      navAlertsText: "Health Alerts",
      navTrackerText: "Daily Tracker",
      navCommunityText: "Smog Reporting",
      smogSeason: "❄️ Winter Smog Advisory:",
      smogNotice: "Cold morning air traps vehicle fumes near ground level (Inversion). Protect children and elders today.",
      heroPill: "Winter Smog Survival & Action Guide",
      heroTitle: "Clean, Healthy Air for Every Generation at Home",
      heroDesc: "Winter smog is not just fog—it's toxic PM2.5 smoke held down by cold air. In 2 minutes, get a tailored daily action plan to keep your kids, parents, and lungs safe without breaking your budget.",
      feat1: "Low-Emission Routines",
      feat2: "Budget Indoor Hacks",
      feat3: "Clean Sustainable Swaps",
      feat4: "'Why This Matters' Badges",
      feat5: "Street-Level Live Map",
      feat6: "Predictive Health Alerts",
      dialTitle: "Today's Smog Index",
      dialNoteText: "Ground-level PM2.5 peaks between 6:00 AM - 9:30 AM due to thermal inversion.",
      
      // Connectivity & Offline
      connOnline: "Live API Connected",
      connOffline: "Offline Mode (Cached)",
      offlineNoticeText: "Offline Mode Active: Using cached neighborhood readings & offline safety plans. New reports and tracker checks will be saved locally.",
      btnRadarView: "📡 Radar View",
      btnMapView: "🗺️ Map View",

      // Feature 1: Map
      mapTag: "Feature 1 • Street-Level Monitoring",
      mapTitle: "Hyperlocal Live AQI Map",
      mapSubtitle: "Real-time street & neighborhood pollution readings to pinpoint pollution hotspots near your home.",
      btnLocateMe: "Locate My Street",
      legendLabel: "Smog Severity:",
      nearbySensorsTitle: "Live Neighborhood Micro-Sensors (Click to inspect street conditions)",

      // Feature 2: Predictive Alerts
      predictTag: "Feature 2 • Automated Preventive Safeguards",
      predictTitle: "Predictive Health Risk Alerts",
      predictSubtitle: "Automated 24-hour smog spike forecasts paired with tailored medical warnings to avert acute distress.",
      btnEnableAlerts: "Enable Spike Warnings",
      btnSimulate: "⚡ Test Smog Spike Alert",
      forecast24Title: "24-Hour Predictive Smog Curve (Ground-Level Inversion Dynamics)",
      forecastScrubHint: "Hover or tap on hours to see atmospheric triggers & medical precautions",
      forecastScienceText: "Thermal inversion compresses 12 hours of vehicle and industrial emissions into the bottom 150 meters between 5:30 AM and 9:00 AM. Spikes are predictable—taking preventive medication 45 minutes before the peak prevents emergency hospital visits.",

      // Feature 3: Tracker
      trackerTag: "Feature 3 • Daily Routine Accountability",
      trackerTitle: "Interactive Household Compliance Tracker",
      trackerSubtitle: "Check off your family's morning, afternoon, and night safety habits to build a continuous clean-air shield.",
      btnResetTracker: "Reset Checklist",
      btnShareScore: "Share Today's Score",
      scoreTitle: "Today's Family Smog Shield",
      scoreSubInit: "Check off items below as your household completes them today.",
      streakLabel: "Clean Air Habit Streak",
      tierInitial: "Vulnerable • Start Routine",
      phase1Title: "Morning Smog Shield (6:00 AM - 10:00 AM)",
      phase1Desc: "Mitigate peak ground-level inversion smoke",
      phase2Title: "Midday Solar Window (11:30 AM - 3:30 PM)",
      phase2Desc: "Cross-ventilation, wet mopping & safe sunlight",
      phase3Title: "Evening & Night Sanctuary (5:30 PM Onward)",
      phase3Desc: "Clean cooking, door seals, bedroom filtration",

      // Feature 4: Community Smog
      commTag: "Feature 4 • Citizen Action & Accountability",
      commTitle: "Community Smog Reporting",
      commSubtitle: "Log and flag local pollution sources—waste burning, construction dust, or industrial chimneys—to alert neighbors and municipal helplines.",
      btnLogIncident: "Report Local Smoke / Dust",
      formReportHead: "Log a New Pollution Source",
      labelIncidentType: "Pollution Category",
      typeWaste: "🔥 Open Garbage / Garden Leaves Burning",
      typeConst: "🏗️ Uncovered Construction / Demolition Dust",
      typeFactory: "🏭 Factory Chimney / Illegal Boiler Smoke",
      typeVehicle: "🚚 Heavy Vehicle / Visible Black Diesel Exhaust",
      typeSweeping: "🧹 Dry Street Sweeping Kicking Heavy Dust",
      labelLocationStreet: "Street Address / Landmark",
      labelSeverityLevel: "Smoke / Dust Intensity",
      sevModerate: "Moderate • Localized haze & smell",
      sevThick: "Thick Black Smoke • Obstructs vision",
      sevHazard: "Severe Breathing Hazard • Eye burning",
      labelNotes: "Observations / Details",
      btnSubmitReportText: "Publish Report & Alert Community",
      feedTitle: "Active Community Reports Feed",
      filterAll: "All",
      filterBurning: "Burning",
      filterDust: "Dust",
      filterFactory: "Factory",

      // Assessment Form
      planTag: "Core Generator • Household Shield",
      formTitle: "Personalize Your Household's Air Plan",
      formSubtitle: "Tell us about your home and routine so we can give you realistic, actionable steps.",
      resetDefaults: "Reset to Defaults",
      step1Label: "Location & Smog Level",
      labelCity: "City or Region",
      labelAqiLevel: "Expected Winter Smog Severity:",
      aqiModerate: "150 Moderate",
      aqiPoor: "250 Poor",
      aqiVeryPoor: "350 Very Poor",
      aqiSevere: "450+ Severe",
      step2Label: "Household Setup & Health Concerns",
      step2Hint: "Select all members living in your home. Smog impacts different bodies differently.",
      hhInfants: "Babies / Toddlers (0-5 yrs)",
      hhInfantsDesc: "Breathe 2x faster, delicate airways",
      hhKids: "School Children (6-16 yrs)",
      hhKidsDesc: "Morning school bus, outdoor games",
      hhElders: "Elders / Grandparents (60+ yrs)",
      hhEldersDesc: "Heart & chronic lung vulnerability",
      hhAsthma: "Asthma / Bronchitis / Allergies",
      hhAsthmaDesc: "High risk of acute smog attacks",
      hhPregnant: "Pregnant Family Member",
      hhPregnantDesc: "PM2.5 crosses placental barrier",
      hhPets: "Domestic Pets (Dogs / Cats)",
      hhPetsDesc: "Close to floor dust & particulate deposit",
      step3Label: "Daily Routine & Daily Habits",
      step3Hint: "Understanding your hours and appliances helps find the easiest swaps.",
      labelCommuteMode: "Daily Commute Mode",
      optTwoWheeler: "🛵 Two-Wheeler / Motorcycle / Scooter",
      optAuto: "🛺 Open Auto-Rickshaw / E-Rickshaw",
      optBus: "🚌 Public Bus / Non-AC Transit",
      optMetro: "🚇 Metro Rail / AC Sealed Car",
      optWalk: "🚶 Walking / Cycling to work/college",
      optWfh: "💻 Work From Home / Stay Indoors",
      labelCommuteTime: "Primary Outdoor / Commute Hours",
      optEarlyMorning: "🌅 Early Morning Peak (6:30 AM - 8:30 AM)",
      optRegMorning: "☀️ Standard Morning (8:30 AM - 10:30 AM)",
      optMidday: "🌤️ Midday / Afternoon (11:00 AM - 3:30 PM)",
      optEvening: "🌆 Evening Rush (5:30 PM - 8:30 PM)",
      optNight: "🌙 Late Night (After 8:30 PM)",
      labelCookingSetup: "Kitchen Cooking Setup",
      optLpgNoExhaust: "🔥 Gas Stove WITHOUT Exhaust / Chimney",
      optLpgExhaust: "💨 Gas Stove WITH Working Exhaust / Chimney",
      optInduction: "⚡ Electric Induction / Clean Cooktop",
      optChulha: "🪵 Biomass / Wood Fire / Traditional Chulha",
      optFrying: "🍳 Daily Deep Frying / Heavy Tadka Smoking",
      labelHeatingSetup: "Winter Room Heating Method",
      optAngithi: "🪵 Coal Angithi / Wood Bonfire / Open Embers",
      optHalogen: "☀️ Halogen / Coil / Quartz Glowing Heater",
      optBlower: "🌀 Fan / Blower Room Heater (Drying air)",
      optOil: "🛡️ Oil-Filled Radiator (Sealed, Safe)",
      optNone: "🧣 Blankets, Hot Water Bottles & Woolens Only",
      labelExerciseHabit: "Morning Walks & Outdoor Exercise",
      optEarlyWalk: "🚶‍♂️ Grandparents / Self Early Morning Walk (6-8 AM)",
      optEveningWalk: "🏃 Evening Jog / Kids Outdoor Sports (5-7 PM)",
      optAfternoonSun: "☀️ Afternoon Sunny Stroll (12-3 PM)",
      optIndoorOnly: "🧘 Indoor Yoga / Home Exercise Only",
      labelVentHabit: "Current Window & Ventilation Habit",
      optMorningOpen: "🪟 Windows opened early morning for 'fresh air'",
      optClosedAllDay: "🔒 Windows shut tightly all 24 hours",
      optAfternoonOpen: "☀️ Windows opened around sunny midday (1-3 PM)",
      optAgarbatti: "🪔 Daily Agarbatti / Dhoop / Incense Sticks burned",
      btnGenerateText: "Generate My Family's Daily Action Plan",
      submitNote: "Takes 1 second • Tailored to your household's exact health vulnerabilities and smog conditions.",
      
      // Results
      resultsBadge: "Personalized Action Plan Active",
      resultsTitle: "Today's Smog Shield for Your Family",
      listenPlan: "Read Aloud",
      stopListening: "Stop Audio",
      shareWhatsApp: "Share with Family",
      printPlan: "Print Plan",
      card1Category: "Card 1 • Timing & Travel",
      card1Title: "Low-Emission Daily Routines",
      card1Desc: "Safer commute hours, shifting outdoor activities, and reducing exposure peaks.",
      card2Category: "Card 2 • Home & Budget",
      card2Title: "Indoor Air Quality Hacks",
      card2Desc: "Budget-friendly DIY fixes, optimal ventilation timing, and natural green purifiers.",
      card3Category: "Card 3 • Cleaner Habits",
      card3Title: "Sustainable Swaps",
      card3Desc: "Cleaner alternatives for everyday cooking, heating, masks, and community habits.",
      badgeWhy: "Why This Matters:",
      
      // DIY & Plants
      diyPill: "💡 Budget-Friendly Community Secret",
      diyTitle: "Build a ₹900 DIY Air Cleaner (Corsi-Rosenthal Box Fan)",
      diyDesc: "Commercial air purifiers cost ₹10,000 to ₹35,000. You can build an equally powerful air filter using a simple box or table fan and a MERV-13 / True HEPA AC filter strapped tightly with masking tape.",
      diyCostLabel: "DIY Filter Cost",
      diyCleanRate: "PM2.5 Drop in 30 Mins",
      brandPurifier: "Branded Machine Cost",
      btnDiyGuide: "View 3-Step DIY Assembly",
      diyStepsTitle: "How to Assemble at Home in 10 Minutes:",
      diyStep1Head: "Step 1: Get a MERV-13 or HEPA AC Filter:",
      diyStep1Text: "Available on Amazon or local AC parts market for ₹400-₹600. Look for dimensions matching your table fan or box fan (e.g. 16x16 or 12x12 inch).",
      diyStep2Head: "Step 2: Seal Against the INTAKE (Back):",
      diyStep2Text: "Place the filter firmly against the back intake grill of the fan (arrow pointing TOWARD the fan blades). Secure all 4 edges with brown packing tape or duct tape so zero air leaks around the sides.",
      diyStep3Head: "Step 3: Run on Medium in Bedroom:",
      diyStep3Text: "Run for 45 minutes in a closed bedroom before bedtime. It quietly scrubs airborne particles down to safe levels for kids and elders.",
      diyWhyText: "Air purifiers are simply a fan pulling dirty air through a dense fibrous mesh. The DIY version moves the same volume of air through certified filter media at 1/15th the price.",
      plantsTitle: "🌿 Recommended NASA-Clean Indoor Green Allies",
      plantsDesc: "These hardy, low-cost plants thrive in winter, require watering only once a week, and safely freshen indoor living spaces.",
      plant1Name: "Snake Plant (Sansevieria)",
      plant1Badge: "Nighttime Oxygen Star",
      plant1Text: "Unlike most plants, it converts CO2 into oxygen during the night. Perfect for elders' and children's bedrooms.",
      plant2Name: "Areca Palm (सुपारी पाम)",
      plant2Badge: "Natural Humidifier",
      plant2Text: "Restores natural moisture to winter-dry indoor air, soothing irritated bronchial tubes and dry coughing.",
      plant3Name: "Money Plant (Pothos)",
      plant3Badge: "VOC & Formaldehyde Absorber",
      plant3Text: "Absorbs volatile organic compounds released by synthetic carpets, varnishes, and gas burning.",
      plant4Name: "Spider Plant",
      plant4Badge: "Resilient & Safe for Pets",
      plant4Text: "Completely non-toxic for dogs and cats while filtering out carbon monoxide and xylene fumes.",
      sosTitle: "Emergency Winter Smog Checklist for Vulnerable Family Members",
      sosSubtitle: "Keep these safeguards ready at home during Severe (AQI 400+) episodes:",
      sos1: "Keep Inhalers Primed: Check counter dates on rescue inhalers (Salbutamol) and maintain a spare cylinder at home.",
      sos2: "Saline Nasal Rinse / Gargle: Lukewarm saline gargle washes trapped particulate soot out of the throat mucosa after outdoor transit.",
      sos3: "Hydration with Warm Fluids: Warm water, tulsi-ginger decoction keeps mucous membranes hydrated to trap dust before it reaches lungs.",
      sos4: "Fit-Check Certified N95 Mask: Ensure nose clip is pressed firmly to cheekbones with no gap for air leakage.",
      btnEditInputs: "← Modify My Household Inputs",
      faqHeading: "Why Winter Smog Is Different: Quick Answers",
      faqSub: "Understanding the science makes protecting your family intuitive.",
      faq1Q: "What is 'Thermal Inversion' and why is 6:00 AM the most dangerous time?",
      faq1A: "In winter, the ground cools rapidly overnight. A layer of warm air sits above like a giant invisible lid (an 'inversion layer'), trapping vehicle exhaust, dust, and smoke right down at breathing height. Only when the midday sun (11:30 AM to 3:00 PM) warms the earth does this ceiling lift and pollutants disperse upward.",
      faq2Q: "Why does a cloth handkerchief or surgical mask not protect against PM2.5?",
      faq2A: "PM2.5 particles are microscopic—about 3% the width of a single human hair. A cotton handkerchief has gaps measuring 100 to 200 microns, allowing toxic particles to slide through unobstructed. Only certified N95, KN95, or FFP2 respirators with electrostatically charged meltblown fabric can trap over 95% of fine particles.",
      faq3Q: "Why is dry brooming (jhadu) worse than wet mopping indoors?",
      faq3A: "Dry brooming vigorously kicks settled dust and micro-soot back into the air, where it stays suspended at lung height for up to 4 hours. Wet mopping with a damp cloth traps dust particles on the floor surface and rinses them away safely.",
      footerText: "An urban public health initiative for families navigating winter smog. Simple steps, cleaner lungs, resilient communities.",
      communityPledge: "Together for Clean Air: Never burn leaves or waste. Report smog spots to municipal apps.",
      copiedToast: "Daily Action Plan copied to clipboard for WhatsApp!"
    },
    hi: {
      tagline: "सर्दियों के स्मॉग में आपके परिवार की सुरक्षा और स्वच्छ वायु का साथी",
      navPlanText: "दैनिक योजना",
      navMapText: "लाइव मैप",
      navAlertsText: "स्वास्थ्य अलर्ट",
      navTrackerText: "सुरक्षा ट्रैकर",
      navCommunityText: "प्रदूषण रिपोर्ट",
      smogSeason: "❄️ शीतकालीन स्मॉग चेतावनी:",
      smogNotice: "सर्दियों की सुबह ठंडी हवा गाड़ियों के जहरीले धुएं को जमीन के पास रोक लेती है (इंवर्जन)। बच्चों और बुजुर्गों का खास ख्याल रखें।",
      heroPill: "सर्दियों के स्मॉग से सुरक्षा गाइड",
      heroTitle: "घर के हर सदस्य के लिए स्वच्छ और सुरक्षित हवा",
      heroDesc: "सर्दियों का स्मॉग सिर्फ कोहरा नहीं, बल्कि जहरीला PM2.5 धुआं है। सिर्फ 2 मिनट में अपने परिवार, बच्चों और बुजुर्गों के लिए कम बजट में तैयार की गई दैनिक कार्ययोजना पाएं।",
      feat1: "कम उत्सर्जन दिनचर्या",
      feat2: "सस्ते घरेलू उपाय",
      feat3: "स्वच्छ आदतें व विकल्प",
      feat4: "'यह क्यों जरूरी है' बैज",
      feat5: "गली-मोहल्ला लाइव मैप",
      feat6: "पूर्वानुमान स्वास्थ्य अलर्ट",
      dialTitle: "आज का स्मॉग इंडेक्स (AQI)",
      dialNoteText: "तापमान इंवर्जन के कारण सुबह 6:00 से 9:30 बजे तक जमीन के पास सबसे अधिक जहरीला धुआं जमा रहता है।",
      
      // Connectivity & Offline
      connOnline: "लाइव API कनेक्टेड",
      connOffline: "ऑफलाइन मोड (कैश्ड डेटा)",
      offlineNoticeText: "ऑफलाइन मोड सक्रिय: सुरक्षित स्थानीय डेटा और ऑफलाइन योजनाओं का उपयोग हो रहा है। नई रिपोर्ट्स और चेकलिस्ट फोन में सुरक्षित रहेंगी।",
      btnRadarView: "📡 रडार व्यू",
      btnMapView: "🗺️ मैप व्यू",

      // Feature 1: Map
      mapTag: "फीचर 1 • मोहल्ला-स्तरीय निगरानी",
      mapTitle: "हाइपरलोकल लाइव वायु मैप",
      mapSubtitle: "आपके घर और मोहल्ले के पास के सटीक प्रदूषण स्तर को जानने के लिए रीयल-टाइम डेटा।",
      btnLocateMe: "मेरी गली ढूंढें",
      legendLabel: "स्मॉग की गंभीरता:",
      nearbySensorsTitle: "नजदीकी माइक्रो-सेंसर (सड़क के हालात देखने के लिए क्लिक करें)",

      // Feature 2: Predictive Alerts
      predictTag: "फीचर 2 • स्वचालित पूर्व-चेतावनी प्रणाली",
      predictTitle: "पूर्वानुमान स्वास्थ्य जोखिम अलर्ट",
      predictSubtitle: "अगले 24 घंटों में स्मॉग के अचानक बढ़ने की भविष्यवाणी और परिवार की बीमारियों के अनुसार बचाव के उपाय।",
      btnEnableAlerts: "चेतावनी अलर्ट चालू करें",
      btnSimulate: "⚡ स्मॉग स्पाइक अलर्ट टेस्ट करें",
      forecast24Title: "24-घंटे का स्मॉग पूर्वानुमान (इंवर्जन का असर)",
      forecastScrubHint: "हर घंटे के धुएं और स्वास्थ्य प्रभाव को देखने के लिए समय पर टैप करें",
      forecastScienceText: "सर्दियों में रात की ठंड सुबह 5:30 से 9:00 बजे के बीच गाड़ियों के धुएं को जमीन से सिर्फ 150 मीटर की ऊंचाई पर दबा देती है। यह बढ़ोतरी तय समय पर होती है—पीक समय से 45 मिनट पहले दवा लेने से अचानक सांस फूलने का दौरा रुक सकता है।",

      // Feature 3: Tracker
      trackerTag: "फीचर 3 • दैनिक आदतों की निगरानी",
      trackerTitle: "पारिवारिक सुरक्षा एवं नियम ट्रैकर",
      trackerSubtitle: "सुबह, दोपहर और रात के सुरक्षा नियमों पर टिक करें और देखें कि आपका परिवार आज कितना सुरक्षित है।",
      btnResetTracker: "चेकलिस्ट रीसेट करें",
      btnShareScore: "आज का स्कोर शेयर करें",
      scoreTitle: "आज का पारिवारिक सुरक्षा कवच",
      scoreSubInit: "जैसे-जैसे परिवार के सदस्य नियम पूरे करते जाएं, नीचे टिक करते रहें।",
      streakLabel: "स्वच्छ हवा की आदत की लकीर",
      tierInitial: "कमजोर • आज से नियम शुरू करें",
      phase1Title: "सुबह का स्मॉग सुरक्षा कवच (6:00 AM - 10:00 AM)",
      phase1Desc: "जमीन पर जमे जहरीले धुएं से फेफड़ों का बचाव",
      phase2Title: "दोपहर की धूप का समय (11:30 AM - 3:30 PM)",
      phase2Desc: "खिड़की से हवा बदलना, गीला पोछा और सुरक्षित धूप",
      phase3Title: "शाम और रात का सुरक्षित घर (5:30 PM के बाद)",
      phase3Desc: "धुआं-मुक्त रसोई, दरवाजे की सीलिंग और बेडरूम फिल्टर",

      // Feature 4: Community Smog
      commTag: "फीचर 4 • नागरिक सजगता और शिकायत",
      commTitle: "स्थानीय प्रदूषण रिपोर्टिंग केंद्र",
      commSubtitle: "अपने मोहल्ले में कचरा जलने, निर्माण धूल या अवैध चिमनी के धुएं की तुरंत रिपोर्ट दर्ज करें और नगर निगम को सूचित करें।",
      btnLogIncident: "धुएं या धूल की शिकायत दर्ज करें",
      formReportHead: "प्रदूषण के नए स्रोत की जानकारी दें",
      labelIncidentType: "प्रदूषण का प्रकार",
      typeWaste: "🔥 खुले में कचरा या सूखे पत्ते जलाना",
      typeConst: "🏗️ बिना ढकी निर्माण सामग्री / धूल",
      typeFactory: "🏭 कारखाने की चिमनी / अवैध बॉयलर का काला धुआं",
      typeVehicle: "🚚 अत्यधिक काला धुआं फेंकने वाली भारी गाड़ियां",
      typeSweeping: "🧹 सड़क पर सूखी झाड़ू से उड़ती भारी धूल",
      labelLocationStreet: "गली का पता / नजदीकी लैंडमार्क",
      labelSeverityLevel: "धुएं की सघनता",
      sevModerate: "मध्यम • हल्का धुआं और बदबू",
      sevThick: "घना काला धुआं • देखने में परेशानी",
      sevHazard: "गंभीर आपातकाल • आंखों में तेज जलन व दम घुटना",
      labelNotes: "विवरण या स्थिति",
      btnSubmitReportText: "रिपोर्ट प्रकाशित करें व पड़ोसियों को सचेत करें",
      feedTitle: "मोहल्ले से आ रही लाइव रिपोर्ट्स",
      filterAll: "सभी",
      filterBurning: "कचरा जलाना",
      filterDust: "निर्माण धूल",
      filterFactory: "कारखाना",

      // Assessment Form
      planTag: "कोर जनरेटर • पारिवारिक सुरक्षा कवच",
      formTitle: "अपने परिवार के अनुसार योजना बनाएं",
      formSubtitle: "अपने घर और दिनचर्या की जानकारी दें ताकि हम आपको व्यावहारिक और आसान उपाय बता सकें।",
      resetDefaults: "डिफ़ॉल्ट सेटिंग्स पर रीसेट करें",
      step1Label: "स्थान और स्मॉग का स्तर",
      labelCity: "शहर या इलाका चुनें",
      labelAqiLevel: "स्मॉग की गंभीरता (AQI स्तर):",
      aqiModerate: "150 मध्यम",
      aqiPoor: "250 खराब",
      aqiVeryPoor: "350 बहुत खराब",
      aqiSevere: "450+ गंभीर",
      step2Label: "परिवार के सदस्य और स्वास्थ्य स्थिति",
      step2Hint: "घर में रहने वाले सभी सदस्यों को चुनें। स्मॉग का असर अलग-अलग उम्र पर अलग होता है।",
      hhInfants: "छोटे बच्चे / शिशु (0-5 वर्ष)",
      hhInfantsDesc: "बड़ों से दोगुनी तेजी से सांस लेते हैं, नाजुक फेफड़े",
      hhKids: "स्कूली बच्चे (6-16 वर्ष)",
      hhKidsDesc: "सुबह बस का इंतजार, मैदान में खेल-कूद",
      hhElders: "बुजुर्ग / दादा-दादी (60+ वर्ष)",
      hhEldersDesc: "दिल और पुरानी सांस की बीमारियों का जोखिम",
      hhAsthma: "अस्थमा / ब्रोंकाइटिस / एलर्जी",
      hhAsthmaDesc: "स्मॉग के अचानक अटैक का बहुत अधिक खतरा",
      hhPregnant: "गर्भवती महिला",
      hhPregnantDesc: "सूक्ष्म PM2.5 कण गर्भ तक पहुंच सकते हैं",
      hhPets: "पालतू जानवर (कुत्ता / बिल्ली)",
      hhPetsDesc: "फर्श की धूल और नीचे तैरते धुएं के सबसे करीब",
      step3Label: "दैनिक दिनचर्या और आदतें",
      step3Hint: "आपके आने-जाने के समय और घरेलू आदतों को समझकर हम सबसे आसान विकल्प सुझाते हैं।",
      labelCommuteMode: "रोजाना आने-जाने का साधन",
      optTwoWheeler: "🛵 टू-व्हीलर / बाइक / स्कूटर",
      optAuto: "🛺 खुला ऑटो-रिक्शा / ई-रिक्शा",
      optBus: "🚌 सामान्य बस / नॉन-एसी वाहन",
      optMetro: "🚇 मेट्रो ट्रेन / शीशे बंद एसी कार",
      optWalk: "🚶 पैदल या साइकिल से आना-जाना",
      optWfh: "💻 वर्क फ्रॉम होम / घर पर ही रहना",
      labelCommuteTime: "बाहर निकलने का मुख्य समय",
      optEarlyMorning: "🌅 सुबह-सुबह का समय (6:30 AM - 8:30 AM)",
      optRegMorning: "☀️ सामान्य सुबह (8:30 AM - 10:30 AM)",
      optMidday: "🌤️ दोपहर का समय (11:00 AM - 3:30 PM)",
      optEvening: "🌆 शाम का व्यस्त समय (5:30 PM - 8:30 PM)",
      optNight: "🌙 देर रात (रात 8:30 बजे के बाद)",
      labelCookingSetup: "रसोई में खाना पकाने की व्यवस्था",
      optLpgNoExhaust: "🔥 गैस चूल्हा (बिना एग्जॉस्ट फैन या चिमनी के)",
      optLpgExhaust: "💨 गैस चूल्हा (एग्जॉस्ट फैन या चिमनी के साथ)",
      optInduction: "⚡ इंडक्शन चूल्हा / बिजली का कुकटॉप",
      optChulha: "🪵 लकड़ी का चूल्हा / उपले / पारंपरिक चूल्हा",
      optFrying: "🍳 रोज गहरी तलाई (डीप फ्राई) / ज्यादा धुएं वाला तड़का",
      labelHeatingSetup: "सर्दियों में कमरा गर्म रखने का तरीका",
      optAngithi: "🪵 कोयले की अंगीठी / लकड़ी की अलाव / खुला कोयला",
      optHalogen: "☀️ लाल रॉड वाला हैलोजन / कॉइल हीटर",
      optBlower: "🌀 ब्लोअर / पंखे वाला हीटर (हवा सुखाने वाला)",
      optOil: "🛡️ ऑयल हीटर (पूरी तरह सील और सुरक्षित)",
      optNone: "🧣 सिर्फ रजाई, कंबल और गर्म पानी की बोतल",
      labelExerciseHabit: "सुबह की सैर और व्यायाम की आदत",
      optEarlyWalk: "🚶‍♂️ सुबह-सुबह की सैर (6:00 से 8:00 बजे)",
      optEveningWalk: "🏃 शाम की सैर या बच्चों का खेल (5:00 से 7:00 बजे)",
      optAfternoonSun: "☀️ दोपहर की धूप में हल्की सैर (12:00 से 3:00 बजे)",
      optIndoorOnly: "🧘 सिर्फ घर के अंदर योग या कसरत",
      labelVentHabit: "खिड़कियां खोलने की आदत",
      optMorningOpen: "🪟 सुबह 'ताजी हवा' समझकर खिड़कियां खोलना",
      optClosedAllDay: "🔒 पूरे 24 घंटे खिड़कियां कसकर बंद रखना",
      optAfternoonOpen: "☀️ दोपहर की गुनगुनी धूप में खिड़की खोलना (1-3 PM)",
      optAgarbatti: "🪔 रोज अगरबत्ती, धूपबत्ती या मच्छर कॉइल जलाना",
      btnGenerateText: "मेरे परिवार की दैनिक कार्ययोजना तैयार करें",
      submitNote: "केवल 1 सेकंड का समय • आपके परिवार की सेहत और स्मॉग के अनुसार एकदम सटीक उपाय।",
      
      // Results
      resultsBadge: "आपकी व्यक्तिगत कार्ययोजना तैयार है",
      resultsTitle: "आज के स्मॉग से आपके परिवार का सुरक्षा कवच",
      listenPlan: "योजना सुनें",
      stopListening: "आवाज बंद करें",
      shareWhatsApp: "व्हाट्सएप पर शेयर करें",
      printPlan: "प्रिंट करें",
      card1Category: "कार्ड 1 • समय और सफर",
      card1Title: "कम उत्सर्जन वाली दैनिक दिनचर्या",
      card1Desc: "सफर का सही समय, बाहर निकलने के घंटे बदलना और जहरीले धुएं से बचाव।",
      card2Category: "कार्ड 2 • घर और बजट",
      card2Title: "घर की हवा सुधारने के आसान उपाय",
      card2Desc: "कम खर्च में घरेलू फिल्टर, खिड़कियों का सही समय और प्राकृतिक पौधे।",
      card3Category: "कार्ड 3 • स्वच्छ आदतें",
      card3Title: "दैनिक आदतों के स्वच्छ विकल्प",
      card3Desc: "रसोई, हीटिंग, मास्क और समाज के लिए धुआं-मुक्त बेहतर आदतें।",
      badgeWhy: "यह क्यों जरूरी है:",
      
      // DIY & Plants
      diyPill: "💡 कम बजट वाला जादुई नुस्खा",
      diyTitle: "मात्र ₹900 में घर पर बनाएं असरदार एयर फिल्टर",
      diyDesc: "दुकानों पर एयर प्यूरीफायर ₹10,000 से ₹35,000 के मिलते हैं। आप घर के टेबल फैन या बॉक्स फैन के पीछे एक MERV-13 या HEPA एसी फिल्टर टेप से चिपकाकर वैसा ही असरदार प्यूरीफायर बना सकते हैं।",
      diyCostLabel: "घरेलू फिल्टर की लागत",
      diyCleanRate: "30 मिनट में PM2.5 की कमी",
      brandPurifier: "महंगे प्यूरीफायर का दाम",
      btnDiyGuide: "3 आसान चरणों में बनाने का तरीका देखें",
      diyStepsTitle: "घर पर 10 मिनट में ऐसे जोड़ें:",
      diyStep1Head: "कदम 1: MERV-13 या HEPA एसी फिल्टर लें:",
      diyStep1Text: "यह ऑनलाइन या एसी पार्ट्स की दुकान पर ₹400-₹600 में मिल जाता है। अपने टेबल फैन के नाप का फिल्टर चुनें।",
      diyStep2Head: "कदम 2: पंखे के पीछे जाली पर चिपकाएं:",
      diyStep2Text: "फिल्टर को पंखे की पिछली जाली पर रखें (हवा का तीर पंखे की पंखुड़ी की तरफ हो)। चारों किनारों को चौड़े भूरे टेप से अच्छी तरह सील कर दें ताकि किनारे से हवा न छूटे।",
      diyStep3Head: "कदम 3: सोने से पहले बेडरूम में चलाएं:",
      diyStep3Text: "कमरा बंद करके इसे 45 मिनट मध्यम गति पर चलाएं। यह हवा में तैरते बारीक जहरीले धुएं को छानकर हवा साफ कर देता है।",
      diyWhyText: "प्यूरीफायर का काम सिर्फ पंखे से हवा खींचकर फिल्टर जाली से निकालना है। यह घरेलू जुगाड़ 15 गुना कम खर्च में हूबहू वही सफाई देता है।",
      plantsTitle: "🌿 घर के अंदर हवा साफ करने वाले 4 असरदार पौधे",
      plantsDesc: "ये पौधे सर्दियों में आसानी से पनपते हैं, हफ्ते में सिर्फ एक बार पानी मांगते हैं और घर की हवा को तरोताजा रखते हैं।",
      plant1Name: "स्नेक प्लांट (सैनसेवियरिया)",
      plant1Badge: "रात में ऑक्सीजन देने वाला",
      plant1Text: "अन्य पौधों के विपरीत, यह रात में कार्बन डाइऑक्साइड को ऑक्सीजन में बदलता है। बेडरूम के लिए सबसे उत्तम पौधा है।",
      plant2Name: "अरेका पाम (सुपारी पाम)",
      plant2Badge: "प्राकृतिक नमी (ह्यूमिडिफायर)",
      plant2Text: "सर्दियों की सूखी हवा में नमी लौटाता है, जिससे सूखी खांसी और गले की जलन में तुरंत आराम मिलता है।",
      plant3Name: "मनी प्लांट",
      plant3Badge: "जहरीले केमिकल्स सोखने वाला",
      plant3Text: "पेंट, वार्निश और रसोई के धुएं से निकलने वाले नुकसानदेह वीओसी (VOC) केमिकल्स को सोख लेता है।",
      plant4Name: "स्पाइडर प्लांट",
      plant4Badge: "पालतू जानवरों के लिए पूरी तरह सुरक्षित",
      plant4Text: "कुत्तों और बिल्लियों के लिए बिल्कुल सुरक्षित है और कमरे से कार्बन मोनोऑक्साइड के धुएं को छानता है।",
      sosTitle: "बुजुर्गों और सांस के मरीजों के लिए आपातकालीन स्मॉग चेकलिस्ट",
      sosSubtitle: "गंभीर स्मॉग (AQI 400+) के दिनों में इन 4 बातों का तुरंत पालन करें:",
      sos1: "इनहेलर की जांच: दमे के मरीज अपने इनहेलर की एक्सपायरी डेट जांच लें और घर में एक अतिरिक्त सिलेंडर जरूर रखें।",
      sos2: "गुनगुने नमक के पानी से गरारे: बाहर से आने के बाद गुनगुने पानी से गरारे करें, जिससे गले में फंसा काला धुआं साफ हो जाता है।",
      sos3: "गर्म पानी और काढ़ा पिएं: तुलसी-अदरक का काढ़ा और गुनगुना पानी सांस की नलियों को गीला रखता है, जिससे धूल फेफड़ों में नहीं बैठती।",
      sos4: "N95 मास्क को सही से दबाएं: मास्क की नाक वाली पत्ती को नाक की हड्डी पर कसकर दबाएं ताकि चेहरे के बगल से जहरीली हवा न घुसे।",
      btnEditInputs: "← अपनी जानकारी बदलें",
      faqHeading: "सर्दियों का स्मॉग अलग क्यों है: आसान वैज्ञानिक सच",
      faqSub: "इसके पीछे का विज्ञान समझकर अपने परिवार को बचाना बहुत आसान हो जाता है।",
      faq1Q: "थर्मल इंवर्जन क्या है और सुबह 6 बजे सैर करना सबसे खतरनाक क्यों है?",
      faq1A: "सर्दियों में रात के समय जमीन बहुत तेजी से ठंडी हो जाती है। ऊपर गर्म हवा की एक परत अदृश्य ढक्कन की तरह जम जाती है, जो गाड़ियों के धुएं और धूल को जमीन के पास सांस लेने की ऊंचाई पर ही दबा देती है। दोपहर 12 बजे जब धूप खिलती है, तभी यह धुआं ऊपर आसमान में उड़ पाता है।",
      faq2Q: "साधारण सूती रुमाल या सर्जिकल मास्क PM2.5 से क्यों नहीं बचा सकता?",
      faq2A: "PM2.5 कण इंसान के बाल से भी 30 गुना बारीक होते हैं। सूती कपड़े में 100 से 200 माइक्रोन के बड़े छेद होते हैं, जिनमें से यह बारीक धुआं सीधा फेफड़ों में चला जाता है। सिर्फ प्रमाणित N95 या FFP2 मास्क का विशेष कपड़ा ही इन 95% जहरीले कणों को रोक सकता है।",
      faq3Q: "घर के अंदर सूखी झाड़ू लगाना गीले पोछे से ज्यादा नुकसानदेह क्यों है?",
      faq3A: "सूखी झाड़ू लगाने से फर्श पर बैठा बारीक काला धुआं और धूल हवा में उड़ जाती है और 4 घंटे तक हवा में तैरती रहती है। गीले पोछे से यह धूल पोछे पर चिपककर सीधे पानी में धुल जाती है और फेफड़ों में नहीं जाती।",
      footerText: "सर्दियों के स्मॉग से परिवारों को बचाने की एक लोक-कल्याणकारी पहल। आसान कदम, स्वस्थ फेफड़े, मजबूत समाज।",
      communityPledge: "स्वच्छ हवा के लिए हमारा संकल्प: सूखी पत्तियां या कचरा कभी न जलाएं। धुआं दिखने पर सरकारी ऐप पर शिकायत दर्ज करें।",
      copiedToast: "दैनिक कार्ययोजना व्हाट्सएप पर भेजने के लिए कॉपी कर ली गई है!"
    }
  };

  // --- CENTRALIZED STATE STORE ---
  const Store = {
    state: {
      lang: 'en',
      fontSize: 'normal',
      isOnline: navigator.onLine,
      currentCityKey: 'delhi',
      selectedStation: null,
      radarMode: false,
      activeHourIndex: 2,
      alertsEnabled: false,
      trackerChecks: {},
      trackerStreak: 3,
      communityReports: [],
      activeFeedFilter: 'all',
      isSpeaking: false,
      speechUtterance: null,
      isGenerated: false,
      currentPlan: null,
      formData: {
        cityKey: 'delhi-anand-vihar',
        customCityName: '',
        aqi: 385,
        household: ['kids', 'elders', 'asthma'],
        commuteMode: 'two-wheeler',
        commuteTime: 'early-morning',
        cookingSetup: 'lpg-no-exhaust',
        heatingSetup: 'halogen',
        exerciseHabit: 'early-walk',
        ventilationHabit: 'morning-open'
      }
    },

    init() {
      // Load stored preferences
      try {
        const savedLang = localStorage.getItem('vayumitra_lang');
        if (savedLang === 'en' || savedLang === 'hi') {
          this.state.lang = savedLang;
        }
        const savedFont = localStorage.getItem('vayumitra_fontsize');
        if (savedFont === 'normal' || savedFont === 'large') {
          this.state.fontSize = savedFont;
        }
        const savedChecks = localStorage.getItem('vayumitra_tracker_v1');
        if (savedChecks) {
          this.state.trackerChecks = JSON.parse(savedChecks);
        }
        const savedStreak = localStorage.getItem('vayumitra_streak');
        if (savedStreak) {
          this.state.trackerStreak = parseInt(savedStreak, 10) || 3;
        }
      } catch (e) {
        console.warn("Storage access restricted", e);
      }
    },

    setLang(lang) {
      this.state.lang = lang;
      try { localStorage.setItem('vayumitra_lang', lang); } catch (e) {}
    },

    setFontSize(size) {
      this.state.fontSize = size;
      try { localStorage.setItem('vayumitra_fontsize', size); } catch (e) {}
    }
  };

  // --- REGIONAL BASELINE DATASETS ---
  const CITY_PRESETS = {
    'delhi-anand-vihar': { nameEn: 'Delhi - Anand Vihar / East Delhi', nameHi: 'दिल्ली - आनंद विहार / पूर्वी दिल्ली', aqi: 435, status: 'severe', lat: 28.6468, lng: 77.3160 },
    'delhi-rohini': { nameEn: 'Delhi - Rohini / North Delhi', nameHi: 'दिल्ली - रोहिणी / उत्तरी दिल्ली', aqi: 395, status: 'verypoor', lat: 28.7325, lng: 77.1190 },
    'delhi-south': { nameEn: 'Delhi - South Delhi / Saket', nameHi: 'दिल्ली - दक्षिण दिल्ली / साकेत', aqi: 340, status: 'verypoor', lat: 28.5244, lng: 77.2167 },
    'noida': { nameEn: 'Noida / Greater Noida', nameHi: 'नोएडा / ग्रेटर नोएडा', aqi: 415, status: 'severe', lat: 28.6280, lng: 77.3650 },
    'gurugram': { nameEn: 'Gurugram / DLF', nameHi: 'गुरुग्राम / डीएलएफ', aqi: 375, status: 'verypoor', lat: 28.4950, lng: 77.0890 },
    'lucknow': { nameEn: 'Lucknow - Gomti Nagar / Charbagh', nameHi: 'लखनऊ - गोमती नगर / चारबाग', aqi: 360, status: 'verypoor', lat: 26.8500, lng: 80.9460 },
    'patna': { nameEn: 'Patna - Danapur / Kankarbagh', nameHi: 'पटना - दानापुर / कंकड़बाग', aqi: 390, status: 'verypoor', lat: 25.6020, lng: 85.1430 },
    'kolkata': { nameEn: 'Kolkata - Jadavpur / Howrah', nameHi: 'कोलकाता - जादवपुर / हावड़ा', aqi: 290, status: 'poor', lat: 22.5726, lng: 88.3639 },
    'mumbai': { nameEn: 'Mumbai - Chembur / BKC', nameHi: 'मुंबई - चेंबूर / बीकेसी', aqi: 210, status: 'poor', lat: 19.0670, lng: 72.8680 },
    'kanpur': { nameEn: 'Kanpur - Civil Lines', nameHi: 'कानपुर - सिविल लाइंस', aqi: 350, status: 'verypoor', lat: 26.4499, lng: 80.3319 },
    'custom': { nameEn: 'Custom Urban Locality', nameHi: 'आपका शहर / इलाका', aqi: 380, status: 'verypoor', lat: 28.6139, lng: 77.2090 }
  };

  const STREET_STATIONS = {
    delhi: [
      { id: 'anand-vihar', nameEn: 'Anand Vihar ISBT', nameHi: 'आनंद विहार बस अड्डा', lat: 28.6468, lng: 77.3160, aqi: 448, pm25: 395, pm10: 512, street: 'Patparganj Link Rd / Inter-State Choke', inversion: '110m', noteEn: 'Severe diesel freight congestion and localized dust.', noteHi: 'बसों और ट्रकों का भारी धुआं व धूल।' },
      { id: 'vivek-vihar', nameEn: 'Vivek Vihar Colony', nameHi: 'विवेक विहार कॉलोनी', lat: 28.6720, lng: 77.3150, aqi: 418, pm25: 340, pm10: 445, street: 'Jhilmil Industrial / GT Road Area', inversion: '120m', noteEn: 'Industrial corridor emissions descending overnight.', noteHi: 'औद्योगिक क्षेत्र से आता धुआं।' },
      { id: 'patparganj', nameEn: 'Patparganj Industrial Area', nameHi: 'पटपड़गंज इंडस्ट्रियल एरिया', lat: 28.6235, lng: 77.3050, aqi: 432, pm25: 365, pm10: 490, street: 'Ghazipur Border / Mother Dairy Road', inversion: '115m', noteEn: 'Landfill methane & morning transport plume.', noteHi: 'गाजीपुर सीमा और ट्रकों का धुआं।' },
      { id: 'ito-junction', nameEn: 'ITO Traffic Junction', nameHi: 'आईटीओ चौराहा', lat: 28.6290, lng: 77.2410, aqi: 398, pm25: 310, pm10: 420, street: 'Vikas Marg / Bahadur Shah Zafar Marg', inversion: '140m', noteEn: 'Idling traffic micro-plumes at head height.', noteHi: 'लाल बत्ती पर खड़ी गाड़ियों का धुआं।' },
      { id: 'connaught-place', nameEn: 'Connaught Place (Inner Circle)', nameHi: 'कनॉट प्लेस', lat: 28.6315, lng: 77.2167, aqi: 342, pm25: 245, pm10: 360, street: 'Barakhamba Rd / Radial 4', inversion: '160m', noteEn: 'Commercial zone; relatively moderate during morning.', noteHi: 'व्यावसायिक क्षेत्र, तुलनात्मक रूप से बेहतर।' },
      { id: 'south-ext', nameEn: 'South Extension Part 2', nameHi: 'साउथ एक्सटेंशन 2', lat: 28.5680, lng: 77.2200, aqi: 335, pm25: 235, pm10: 350, street: 'Ring Road Flyover / AIIMS Corridor', inversion: '155m', noteEn: 'Elevated highway dust and exhaust.', noteHi: 'रिंग रोड फ्लाईओवर की धूल व धुआं।' },
      { id: 'lodhi-road', nameEn: 'Lodhi Gardens & Estate', nameHi: 'लोधी गार्डन व एस्टेट', lat: 28.5930, lng: 77.2190, aqi: 285, pm25: 180, pm10: 290, street: 'Amrita Shergill Marg Green Pocket', inversion: '180m', noteEn: 'Dense tree canopy provides 25% particulate buffer.', noteHi: 'हरे-भरे पेड़ों के कारण 25% कम प्रदूषण।' },
      { id: 'rohini-16', nameEn: 'Rohini Sector 16', nameHi: 'रोहिणी सेक्टर 16', lat: 28.7325, lng: 77.1190, aqi: 410, pm25: 335, pm10: 450, street: 'Outer Ring Rd / Sector 16 Market', inversion: '125m', noteEn: 'Northern cold draft carries regional biomass smoke.', noteHi: 'उत्तरी हवाओं के साथ आता धुआं।' },
      { id: 'okhla-phase2', nameEn: 'Okhla Industrial Area Phase 2', nameHi: 'ओखला फेज 2', lat: 28.5300, lng: 77.2710, aqi: 440, pm25: 380, pm10: 505, street: 'Container Depot / Mathura Road', inversion: '112m', noteEn: 'Heavy commercial movement & diesel combustion.', noteHi: 'कंटेनर डिपो और डीजल ट्रकों का धुआं।' },
      { id: 'noida-sec62', nameEn: 'Noida Sector 62', nameHi: 'नोएडा सेक्टर 62', lat: 28.6280, lng: 77.3650, aqi: 425, pm25: 355, pm10: 480, street: 'NH-24 Electronic City Flyover', inversion: '118m', noteEn: 'Highway particulate drift and open dust.', noteHi: 'हाईवे का धुआं और उड़ती धूल।' },
      { id: 'indirapuram', nameEn: 'Indirapuram (Ahinsa Khand)', nameHi: 'इंदिरापुरम', lat: 28.6430, lng: 77.3700, aqi: 430, pm25: 360, pm10: 485, street: 'CISF Road / Habitat Centre', inversion: '115m', noteEn: 'High-density residential canyon trapping ground smoke.', noteHi: 'इमारतों के बीच फंसा धुआं।' },
      { id: 'dlf-cybercity', nameEn: 'DLF CyberCity Gurugram', nameHi: 'डीएलएफ साइबर सिटी गुरुग्राम', lat: 28.4950, lng: 77.0890, aqi: 372, pm25: 280, pm10: 400, street: 'Cyber Hub / Shankar Chowk NH-48', inversion: '145m', noteEn: 'Heavy office taxi congestion during rush hours.', noteHi: 'दफ्तर के समय भारी ट्रैफिक जाम।' }
    ],
    mumbai: [
      { id: 'chembur', nameEn: 'Chembur East', nameHi: 'चेंबूर पूर्व', lat: 19.0620, lng: 72.8990, aqi: 265, pm25: 195, pm10: 285, street: 'RCF / Eastern Freeway Junction', inversion: '260m', noteEn: 'Refinery and freight traffic influence.', noteHi: 'रिफाइनरी और हाईवे का प्रभाव।' },
      { id: 'bkc', nameEn: 'Bandra Kurla Complex (BKC)', nameHi: 'बांद्रा कुर्ला कॉम्प्लेक्स', lat: 19.0670, lng: 72.8680, aqi: 210, pm25: 140, pm10: 220, street: 'G Block / Kalanagar Junction', inversion: '290m', noteEn: 'Commercial zone; sea breeze gives partial relief.', noteHi: 'समुद्री हवा से दोपहर में आंशिक राहत।' },
      { id: 'andheri-west', nameEn: 'Andheri West (Lokhandwala)', nameHi: 'अंधेरी वेस्ट', lat: 19.1360, lng: 72.8270, aqi: 185, pm25: 115, pm10: 195, street: 'Link Road / Infinity Mall Area', inversion: '310m', noteEn: 'Moderate traffic dust; better coastal air.', noteHi: 'समुद्र के पास होने से बेहतर हवा।' },
      { id: 'colaba', nameEn: 'Colaba Coastal Pocket', nameHi: 'कोलाबा', lat: 18.9067, lng: 72.8147, aqi: 145, pm25: 85, pm10: 155, street: 'Cuffe Parade Promenade', inversion: '340m', noteEn: 'Open ocean breeze cleanses particulates.', noteHi: 'खुली समुद्री हवा प्रदूषण को उड़ा देती है।' },
      { id: 'vashi', nameEn: 'Navi Mumbai (Vashi)', nameHi: 'वाशी (नवी मुंबई)', lat: 19.0770, lng: 72.9980, aqi: 230, pm25: 160, pm10: 245, street: 'APMC Market / Palm Beach Road', inversion: '280m', noteEn: 'Produce truck movements cause morning soot.', noteHi: 'मंडी के ट्रकों का सुबह का धुआं।' },
      { id: 'borivali', nameEn: 'Borivali East (National Park)', nameHi: 'बोरीवली पूर्व', lat: 19.2307, lng: 72.8567, aqi: 160, pm25: 95, pm10: 170, street: 'Western Express Highway Gate', inversion: '320m', noteEn: 'Sanjay Gandhi National Park forest buffer.', noteHi: 'संजय गांधी नेशनल पार्क का प्राकृतिक सुरक्षा घेरा।' }
    ],
    lucknow: [
      { id: 'charbagh', nameEn: 'Charbagh Railway Hub', nameHi: 'चारबाग रेलवे स्टेशन', lat: 26.8320, lng: 80.9200, aqi: 385, pm25: 300, pm10: 410, street: 'Station Road / Hussainganj', inversion: '135m', noteEn: 'Continuous bus idling and street smoke.', noteHi: 'बसों और ऑटो का लगातार धुआं।' },
      { id: 'gomti-nagar', nameEn: 'Gomti Nagar (Patrakarpuram)', nameHi: 'गोमती नगर', lat: 26.8500, lng: 80.9920, aqi: 340, pm25: 240, pm10: 360, street: 'Vipin Khand / Manoj Pandey Chowk', inversion: '160m', noteEn: 'Open residential sector; evening mist traps smoke.', noteHi: 'शाम के कोहरे में धुआं फंसना।' },
      { id: 'alambagh', nameEn: 'Alambagh Chauraha', nameHi: 'आलमबाग चौराहा', lat: 26.8140, lng: 80.9030, aqi: 395, pm25: 315, pm10: 425, street: 'VIP Road / Bus Stand Cross', inversion: '130m', noteEn: 'High density traffic and diesel exhaust.', noteHi: 'डीजल गाड़ियों का भारी जमावड़ा।' },
      { id: 'hazratganj', nameEn: 'Hazratganj Main', nameHi: 'हजरतगंज', lat: 26.8530, lng: 80.9460, aqi: 320, pm25: 220, pm10: 335, street: 'MG Marg / Janpath', inversion: '170m', noteEn: 'Heritage commercial corridor.', noteHi: 'मुख्य बाजार क्षेत्र।' },
      { id: 'chowk-lko', nameEn: 'Old Lucknow (Chowk)', nameHi: 'चौक (पुराना लखनऊ)', lat: 26.8680, lng: 80.9020, aqi: 370, pm25: 285, pm10: 395, street: 'Medical College / Victoria Street', inversion: '140m', noteEn: 'Narrow streets and biomass cooking smoke.', noteHi: 'तंग गलियों में जमा धुआं।' }
    ],
    patna: [
      { id: 'danapur', nameEn: 'Danapur Station Rd', nameHi: 'दानापुर स्टेशन रोड', lat: 25.6330, lng: 85.0440, aqi: 410, pm25: 330, pm10: 440, street: 'Khagaul Link / Cantonment Gate', inversion: '125m', noteEn: 'Brick kiln drift & heavy truck traffic.', noteHi: 'ईंट भट्ठों और ट्रकों का धुआं।' },
      { id: 'kankarbagh', nameEn: 'Kankarbagh Colony', nameHi: 'कंकड़बाग', lat: 25.5940, lng: 85.1580, aqi: 395, pm25: 310, pm10: 420, street: 'Main Road / Tiwary Bechar', inversion: '130m', noteEn: 'Road dust and high-density household smoke.', noteHi: 'सड़क की धूल और घरेलू धुआं।' },
      { id: 'gandhi-maidan', nameEn: 'Gandhi Maidan Center', nameHi: 'गांधी मैदान', lat: 25.6200, lng: 85.1430, aqi: 380, pm25: 295, pm10: 405, street: 'Exhibition Road / Frazer Rd', inversion: '140m', noteEn: 'Transit core with significant diesel particulate.', noteHi: 'डीजल गाड़ियों का भारी धुआं।' },
      { id: 'rajendra-nagar', nameEn: 'Rajendra Nagar', nameHi: 'राजेंद्र नगर', lat: 25.6020, lng: 85.1680, aqi: 390, pm25: 305, pm10: 415, street: 'Stadium Rd / Bahadurpur Flyover', inversion: '135m', noteEn: 'Unpaved road margins kicking PM10.', noteHi: 'सड़क किनारे की धूल।' }
    ],
    kolkata: [
      { id: 'howrah-bridge', nameEn: 'Howrah Bridge Approach', nameHi: 'हावड़ा ब्रिज', lat: 22.5850, lng: 88.3468, aqi: 320, pm25: 230, pm10: 340, street: 'Strand Road / Posta Market', inversion: '170m', noteEn: 'Slow idling trucks and river humidity trap.', noteHi: 'ट्रकों का धुआं और नदी की नमी में फंसा स्मॉग।' },
      { id: 'victoria-maidan', nameEn: 'Victoria Memorial / Maidan', nameHi: 'विक्टोरिया मेमोरियल / मैदान', lat: 22.5448, lng: 88.3426, aqi: 260, pm25: 175, pm10: 275, street: "Queen's Way / Red Road", inversion: '220m', noteEn: 'Green maidan offers partial buffer.', noteHi: 'मैदान के कारण आंशिक राहत।' },
      { id: 'jadavpur-kol', nameEn: 'Jadavpur University Zone', nameHi: 'जादवपुर', lat: 22.4988, lng: 88.3713, aqi: 290, pm25: 205, pm10: 310, street: 'Raja SC Mullick Rd / Central Rd', inversion: '190m', noteEn: 'Auto-rickshaw congestion and street cooking.', noteHi: 'ऑटो का धुआं और सड़क किनारे की दुकानें।' },
      { id: 'salt-lake', nameEn: 'Salt Lake Sector 5', nameHi: 'सॉल्ट लेक सेक्टर 5', lat: 22.5726, lng: 88.4332, aqi: 240, pm25: 155, pm10: 250, street: 'College More / Ring Road', inversion: '240m', noteEn: 'Wider planned avenues with better ventilation.', noteHi: 'चौड़ी सड़कें होने से बेहतर वेंटिलेशन।' }
    ]
  };

  const PREDICTIVE_HOURS = [
    { time: '12:00 AM', aqi: 360, inversion: '180m', status: 'verypoor', actionEn: 'Keep all bedroom windows shut; run DIY filter 30 mins.', actionHi: 'बेडरूम की खिड़कियां बंद रखें और फिल्टर 30 मिनट चलाएं।' },
    { time: '4:00 AM', aqi: 410, inversion: '130m', status: 'severe', actionEn: 'Ground cools rapidly; smog thickens right at ground level.', actionHi: 'जमीन ठंडी होने से धुआं नीचे जमने लगता है।' },
    { time: '7:00 AM', aqi: 448, inversion: '105m', status: 'severe', actionEn: 'CRITICAL INVERSION PEAK: Busiest school & office rush trapped. Stay indoors.', actionHi: 'गंभीरतम पीक: धुआं सांस की ऊंचाई पर फंसा है। बाहर न निकलें।' },
    { time: '10:00 AM', aqi: 380, inversion: '220m', status: 'verypoor', actionEn: 'Sunlight begins breaking ground layer; wind picks up slightly.', actionHi: 'हल्की धूप से धुआं ऊपर उठना शुरू होता है।' },
    { time: '1:30 PM', aqi: 275, inversion: '480m', status: 'poor', actionEn: 'SAFEST WINDOW: Open cross-windows for 20 mins; elders walk in sun.', actionHi: 'सबसे सुरक्षित समय: 20 मिनट खिड़की खोलें और धूप में टहलें।' },
    { time: '4:30 PM', aqi: 340, inversion: '260m', status: 'verypoor', actionEn: 'Sun sets; bring children indoors from playgrounds.', actionHi: 'सूरज ढलते ही बच्चों को घर के अंदर बुला लें।' },
    { time: '7:30 PM', aqi: 420, inversion: '140m', status: 'severe', actionEn: 'EVENING PEAK: Heavy traffic smoke trapped as cool air settles.', actionHi: 'शाम का पीक: ट्रैफिक का धुआं नीचे बैठ जाता है।' },
    { time: '10:30 PM', aqi: 395, inversion: '160m', status: 'verypoor', actionEn: 'Place damp door draft-stopper; avoid open balcony exposure.', actionHi: 'दरवाजे के नीचे गीला तौलिया लगाएं और बालकनी न जाएं।' }
  ];

  const INITIAL_REPORTS = [
    {
      id: 'rep-1',
      type: 'waste-burning',
      titleEn: 'Open Garbage & Leaf Bonfire on Pavement',
      titleHi: 'फुटपाथ पर कचरा और सूखे पत्ते जलाना',
      street: 'Near Metro Pillar 148, Vikas Marg',
      timeAgo: '8m ago',
      severity: 'hazard',
      notesEn: 'Dense toxic white smoke drifting into first-floor apartment balconies. Multiple residents coughing.',
      notesHi: 'घना धुआं बालकनियों में भर रहा है। कई लोगों को तेज खांसी हो रही है।',
      upvotes: 14,
      statusEn: 'Alert Sent to Green Helpline (Ward 24)',
      statusHi: 'ग्रीन हेल्पलाइन (वार्ड 24) को अलर्ट भेजा गया'
    },
    {
      id: 'rep-2',
      type: 'construction',
      titleEn: 'Uncovered Demolition Dust Without Water Sprinklers',
      titleHi: 'बिना पानी छिड़काव के निर्माण की धूल',
      street: 'Opposite Community Hall, Sector 14',
      timeAgo: '32m ago',
      severity: 'thick',
      notesEn: 'Trucks unloading dry cement sand directly on the main road with zero green mesh barrier.',
      notesHi: 'मुख्य सड़क पर बिना ढके सीमेंट और रेत उतारी जा रही है, जिससे धूल उड़ रही है।',
      upvotes: 9,
      statusEn: 'Flagged to Municipal Pollution Wing',
      statusHi: 'नगर निगम प्रदूषण विंग को सूचित'
    },
    {
      id: 'rep-3',
      type: 'factory',
      titleEn: 'Black Chimney Plume from Small Foundry',
      titleHi: 'कारखाने की चिमनी से भारी काला धुआं',
      street: 'Gali 4, Industrial Area Phase 1',
      timeAgo: '1h ago',
      severity: 'hazard',
      notesEn: 'Unusually thick soot discharging since 5:30 AM before sunrise inspections.',
      notesHi: 'सुबह 5:30 बजे से लगातार काला धुआं छोड़ा जा रहा है।',
      upvotes: 21,
      statusEn: 'CPCB Automated Notice Generated',
      statusHi: 'प्रदूषण नियंत्रण बोर्ड को रिपोर्ट भेजी गई'
    }
  ];

  const TRACKER_ITEMS = [
    { id: 'm1', phase: 1, textEn: "Kept all windows shut tight against 6–9:30 AM ground inversion", textHi: "सुबह 6 से 9:30 बजे तक खिड़कियां कसकर बंद रखीं" },
    { id: 'm2', phase: 1, textEn: "Cancelled/deferred elders' early morning walk to sunny afternoon", textHi: "बुजुर्गों की सुबह की सैर रोककर दोपहर की धूप में करने का फैसला किया" },
    { id: 'm3', phase: 1, textEn: "Commuted wearing tightly-fitted N95/FFP2 mask with pressed nose clip", textHi: "सफर में नाक पर अच्छी तरह दबाकर N95 मास्क पहना" },
    { id: 'm4', phase: 1, textEn: "Switched vehicle AC blower strictly to 'Internal Recirculation' mode", textHi: "कार या कैब में एसी को 'इंटरनल रीसर्क्युलेशन' मोड पर रखा" },

    { id: 'd1', phase: 2, textEn: "Opened cross-windows for 20 mins (1:30–3:00 PM) for safe fresh air", textHi: "दोपहर 1:30 से 3:00 के बीच 20 मिनट खिड़की खोलकर ताजी हवा ली" },
    { id: 'd2', phase: 2, textEn: "Wet-mopped floors with damp microfiber cloth (Zero dry brooming/jhadu)", textHi: "गीले कपड़े से पोछा लगाया और सूखी झाड़ू बिल्कुल नहीं लगाई" },
    { id: 'd3', phase: 2, textEn: "Placed a wide water bowl in front of room heater to restore air humidity", textHi: "कमरे में हीटर के आगे पानी का बर्तन रखकर हवा में नमी बनाए रखी" },
    { id: 'd4', phase: 2, textEn: "Ensured children and elders drank warm tulsi/ginger water or soup", textHi: "बच्चों और बुजुर्गों को गुनगुना पानी, सूप या काढ़ा पिलाया" },

    { id: 'n1', phase: 3, textEn: "Operated kitchen exhaust 2 mins before cooking & covered frying pans", textHi: "तड़का लगाने से पहले एग्जॉस्ट चलाया और कड़ाही पर ढक्कन रखा" },
    { id: 'n2', phase: 3, textEn: "Used bed mosquito nets/vaporizers instead of burning chemical coils", textHi: "मच्छर कॉइल या अगरबत्ती के बजाय मच्छरदानी का इस्तेमाल किया" },
    { id: 'n3', phase: 3, textEn: "Placed rolled damp towel/draft-stopper under bedroom doors", textHi: "बेडरूम के दरवाजे के नीचे गीला तौलिया या ड्राफ्ट-स्टॉपर लगाया" },
    { id: 'n4', phase: 3, textEn: "Ran bedroom DIY fan filter for 45 mins before bedtime", textHi: "सोने से पहले बेडरूम में घरेलू एयर फिल्टर 45 मिनट चलाया" }
  ];

  // --- CACHED DOM REFERENCES (PREVENT REPETITIVE DOM LOOKUPS) ---
  const DOM = {};

  function cacheDom() {
    DOM.connPill = document.getElementById('connectionStatusPill');
    DOM.connText = document.getElementById('connStatusText');
    DOM.offlineBar = document.getElementById('offlineNoticeBanner');
    DOM.headerAqi = document.getElementById('headerAqiText');
    DOM.dialNum = document.getElementById('dialAqiNumber');
    DOM.dialBadge = document.getElementById('aqiStatusBadge');
    DOM.dialFill = document.getElementById('dialAqiFill');
    DOM.citySelect = document.getElementById('citySelect');
    DOM.customCityWrap = document.getElementById('customCityWrap');
    DOM.customCityInput = document.getElementById('customCityInput');
    DOM.aqiSlider = document.getElementById('aqiLevelSlider');
    DOM.aqiSliderDisplay = document.getElementById('aqiSliderDisplay');
    DOM.vayuForm = document.getElementById('vayuForm');
    DOM.resultsSection = document.getElementById('resultsSection');
    DOM.resultsMetaSummary = document.getElementById('resultsMetaSummary');
    DOM.vulnBox = document.getElementById('vulnerabilityAlertBox');
    DOM.containerRoutines = document.getElementById('containerRoutines');
    DOM.containerIndoor = document.getElementById('containerIndoor');
    DOM.containerSwaps = document.getElementById('containerSwaps');
    DOM.btnReadAloud = document.getElementById('btnReadAloud');
    DOM.mapContainer = document.getElementById('hyperlocalMapContainer');
    DOM.mapCitySelector = document.getElementById('mapCitySelector');
    DOM.btnToggleRadar = document.getElementById('btnToggleRadar');
    DOM.toggleRadarText = document.getElementById('toggleRadarText');
    DOM.btnLocateStreet = document.getElementById('btnLocateStreet');
    DOM.microSensorsGrid = document.getElementById('microSensorsGrid');
    DOM.selectedStreetBox = document.getElementById('selectedStreetBox');
    DOM.forecastHoursTimeline = document.getElementById('forecastHoursTimeline');
    DOM.medicalRiskGrid = document.getElementById('medicalRiskGrid');
    DOM.btnToggleAlerts = document.getElementById('btnToggleAlerts');
    DOM.notifyBtnText = document.getElementById('notifyBtnText');
    DOM.btnSimulateSpike = document.getElementById('btnSimulateSpike');
    DOM.emergencyAlertBanner = document.getElementById('emergencyAlertBanner');
    DOM.btnCloseEmergencyBanner = document.getElementById('btnCloseEmergencyBanner');
    DOM.scorePercentDisplay = document.getElementById('scorePercentDisplay');
    DOM.scoreCircle = document.getElementById('scoreCircle');
    DOM.shieldTierBadge = document.getElementById('shieldTierBadge');
    DOM.scoreSummaryText = document.getElementById('scoreSummaryText');
    DOM.streakCountText = document.getElementById('streakCountText');
    DOM.phase1Items = document.getElementById('phase1Items');
    DOM.phase2Items = document.getElementById('phase2Items');
    DOM.phase3Items = document.getElementById('phase3Items');
    DOM.btnResetTracker = document.getElementById('btnResetTracker');
    DOM.btnShareTrackerScore = document.getElementById('btnShareTrackerScore');
    DOM.communityReportForm = document.getElementById('communityReportForm');
    DOM.communityFeedList = document.getElementById('communityFeedList');
    DOM.toast = document.getElementById('toastNotification');
    DOM.toastMessage = document.getElementById('toastMessage');
  }

  // --- ASYNCHRONOUS AIR QUALITY SERVICE (WITH CACHING & ABORT CONTROLLER) ---
  const AirQualityService = {
    cache: new Map(), // key -> { data, timestamp }
    ttlMs: 5 * 60 * 1000, // 5 minutes cache
    abortController: null,

    async fetchLiveAirQuality(lat, lng) {
      const cacheKey = `${lat.toFixed(3)},${lng.toFixed(3)}`;
      const now = Date.now();

      // Check Cache
      if (this.cache.has(cacheKey)) {
        const cached = this.cache.get(cacheKey);
        if (now - cached.timestamp < this.ttlMs) {
          return { data: cached.data, isLive: true, cached: true };
        }
      }

      // Check Offline status
      if (!navigator.onLine) {
        return { data: null, isLive: false, error: 'offline' };
      }

      // Cancel any ongoing fetch to avoid race condition
      if (this.abortController) {
        this.abortController.abort();
      }
      this.abortController = new AbortController();

      const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&current=pm2_5,pm10,us_aqi,carbon_monoxide,nitrogen_dioxide&hourly=pm2_5,pm10,us_aqi&forecast_days=1`;

      try {
        // Enforce 5-second timeout
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Network Timeout')), 5000)
        );

        const fetchPromise = fetch(url, { signal: this.abortController.signal });
        const response = await Promise.race([fetchPromise, timeoutPromise]);

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const json = await response.json();
        this.cache.set(cacheKey, { data: json, timestamp: now });
        return { data: json, isLive: true, cached: false };
      } catch (err) {
        if (err.name === 'AbortError') {
          return { data: null, isLive: false, aborted: true };
        }
        console.warn("Live API fetch fallback:", err.message);
        return { data: null, isLive: false, error: err.message };
      }
    }
  };

  // --- NETWORK CONNECTIVITY HANDLERS ---
  function updateConnectivityUI(isOnline) {
    Store.state.isOnline = isOnline;
    const isHi = Store.state.lang === 'hi';

    if (DOM.connPill) {
      DOM.connPill.className = `connection-status-pill ${isOnline ? 'online' : 'offline'}`;
      DOM.connText.textContent = isOnline 
        ? (isHi ? I18N.hi.connOnline : I18N.en.connOnline)
        : (isHi ? I18N.hi.connOffline : I18N.en.connOffline);
    }

    if (DOM.offlineBar) {
      if (isOnline) {
        DOM.offlineBar.classList.add('hidden');
      } else {
        DOM.offlineBar.classList.remove('hidden');
      }
    }
  }

  function setupNetworkListeners() {
    window.addEventListener('online', () => {
      updateConnectivityUI(true);
      showToast(Store.state.lang === 'hi' ? "इंटरनेट कनेक्ट हो गया! लाइव डेटा लोड हो रहा है।" : "Connection restored! Syncing live air data.");
      refreshActiveData();
      syncOfflineReports();
    });

    window.addEventListener('offline', () => {
      updateConnectivityUI(false);
      showToast(Store.state.lang === 'hi' ? "आप ऑफलाइन हैं। कैश्ड व सुरक्षित डेटा उपयोग में है।" : "You are offline. Cached neighborhood data active.");
    });

    updateConnectivityUI(navigator.onLine);
  }

  // --- RECOMMENDATION GENERATION ENGINE ---
  function generateRecommendations(formData) {
    const hasElders = formData.household.includes('elders');
    const hasKids = formData.household.includes('kids') || formData.household.includes('infants');
    const hasAsthma = formData.household.includes('asthma');
    const hasInfant = formData.household.includes('infants');
    const hasPregnant = formData.household.includes('pregnant');

    const routines = [];
    const indoorHacks = [];
    const swaps = [];

    // Commute timing
    if (formData.commuteTime === 'early-morning') {
      routines.push({
        id: 'commute-shift-morning',
        titleEn: "Delay Outdoor Morning Departure Past 9:15 AM",
        titleHi: "सुबह बाहर निकलने का समय 9:15 बजे के बाद करें",
        textEn: "Shift your morning commute, grocery run, or school drop by 45-60 minutes if possible. The heaviest ground-level particulate concentration forms between 6:30 AM and 8:30 AM before the sun warms the air.",
        textHi: "यदि संभव हो तो दफ्तर, बाजार या बच्चों को स्कूल ले जाने का समय 45-60 मिनट आगे बढ़ाएं। सुबह 6:30 से 8:30 बजे के बीच जमीन पर जहरीले धुएं की सबसे मोटी परत होती है।",
        whyEn: "Why This Matters: Ground-level thermal inversion traps diesel exhaust at head-height. Waiting until midday sun disperses the smog layer cuts direct toxic PM2.5 inhalation by up to 55%.",
        whyHi: "यह क्यों जरूरी है: रात की ठंड के कारण गाड़ियों का जहरीला धुआं जमीन पर नाक की ऊंचाई तक फंसा रहता है। धूप निकलने के बाद निकलने से फेफड़ों में 55% कम जहरीला धुआं जाता है।"
      });
    } else if (formData.commuteTime === 'evening') {
      routines.push({
        id: 'commute-evening-rush',
        titleEn: "Take Bypass Routes & Avoid Congested Idling Junctions",
        titleHi: "भीड़भाड़ वाले चौराहों से बचें और खुली सड़कों का उपयोग करें",
        textEn: "During evening peak hours (5:30 - 8:30 PM), traffic choke-points create dense micro-plumes of toxic hydrocarbons and brake dust. Choose open perimeter roads even if slightly longer.",
        textHi: "शाम 5:30 से 8:30 के बीच जाम वाले लाल बत्तियों और चौराहों पर जहरीले धुएं के बादल बन जाते हैं। 5 मिनट ज्यादा लगे तो भी खुली सड़कों से निकलें।",
        whyEn: "Why This Matters: Idling vehicle clusters emit 400% higher concentrations of carcinogenic benzene and black carbon compared to free-flowing traffic lanes.",
        whyHi: "यह क्यों जरूरी है: ट्रैफिक जाम में खड़ी गाड़ियों से 4 गुना ज्यादा कैंसरकारी धुआं और काला कार्बन निकलता है, जो दिल और फेफड़ों को तुरंत नुकसान पहुंचाता है।"
      });
    } else {
      routines.push({
        id: 'commute-general-safe',
        titleEn: "Schedule Outdoor Tasks During Peak Sun Hours (12 PM - 3 PM)",
        titleHi: "बाहर के सभी काम दोपहर की खिड़की (12 से 3 बजे) में निपटाएं",
        textEn: "Consolidate errands, outdoor market shopping, and bank visits during the early afternoon window when atmospheric mixing height is highest and smog concentration drops.",
        textHi: "सौदा-सुलफ, बैंक का काम या बाजार के चक्कर दोपहर 12 से 3 बजे के बीच पूरे करें। इस समय धूप के कारण हवा हल्की होकर ऊपर उठती है और प्रदूषण कम होता है।",
        whyEn: "Why This Matters: Solar convection expands the breathing air column upward, reducing pollutant density at street level by 30-40% compared to dawn or twilight.",
        whyHi: "यह क्यों जरूरी है: दोपहर की धूप जमीन के धुएं को आसमान में उड़ा देती है, जिससे सांस लेने वाली हवा में जहरीले कणों की मात्रा 30 से 40 प्रतिशत तक घट जाती है।"
      });
    }

    // Walking / Exercise schedule
    if (formData.exerciseHabit === 'early-walk') {
      routines.push({
        id: 'exercise-shift-elders',
        titleEn: hasElders ? "URGENT FOR ELDERS: Shift Morning Walks to 1:00 PM Sunshine" : "Shift Morning Jog to Afternoon or Indoor Breathing Exercises",
        titleHi: hasElders ? "बुजुर्गों के लिए जरूरी: सुबह की सैर बंद करें, दोपहर 1:00 बजे धूप में टहलें" : "सुबह की दौड़ बंद करें, दोपहर की धूप या घर में योग करें",
        textEn: hasElders 
          ? "Deep breathing during early winter mornings forces large doses of cold, heavy PM2.5 deep into bronchial capillaries. Walk in the balcony or society garden between 1:00 PM and 3:00 PM under warm sunlight."
          : "Heavy aerobic breathing in 6:00 - 8:00 AM smog bypasses nasal cilia and coats alveoli with soot. Switch to indoor yoga and resistance stretching during morning hours.",
        textHi: hasElders
          ? "सर्दियों की सुबह तेज सांस लेने से जहरीला धुआं सीधे खून की नलियों में घुल जाता है। सुबह की सैर तुरंत बंद करें और दोपहर 1 से 3 बजे के बीच गुनगुनी धूप में 20 मिनट टहलें।"
          : "सुबह 6 से 8 बजे तेज दौड़ने या कसरत करने से जहरीले कण सीधे फेफड़ों की गहराई में जाकर जम जाते हैं। सुबह घर के अंदर ही योग या स्ट्रेचिंग करें।",
        whyEn: "Why This Matters: Inhaling PM2.5 in cold smog triggers sudden blood vessel constriction, tripling the risk of early morning angina, stroke, and acute asthmatic spasms in elders.",
        whyHi: "यह क्यों जरूरी है: ठंड और जहरीले धुएं से दिल की नसें अचानक सिकुड़ जाती हैं, जिससे बुजुर्गों में सुबह के समय हार्ट अटैक, लकवा और सांस फूलने का खतरा 3 गुना बढ़ जाता है।"
      });
    } else if (formData.exerciseHabit === 'evening-walk') {
      routines.push({
        id: 'exercise-evening-kids',
        titleEn: hasKids ? "Keep Children Indoors for Sports After 5:00 PM" : "Wrap Outdoor Sports Before Sunset",
        titleHi: hasKids ? "बच्चों को शाम 5:00 बजे के बाद बाहर खेलने न भेजें" : "सूर्यास्त से पहले आउटडोर खेल व दौड़ खत्म करें",
        textEn: "As the sun sets, ground temperature plummets and smog descends rapidly. Shift children's sports, football, or skating to indoor board games, badminton halls, or living room activities.",
        textHi: "सूरज ढलते ही जमीन ठंडी होने लगती है और धुआं नीचे बैठने लगता है। शाम 5 बजे के बाद बच्चों को मैदान में खेलने के बजाय घर के अंदर खेल या पढ़ाई में व्यस्त रखें।",
        whyEn: "Why This Matters: Children inhale 50% more air per kilogram of body weight than adults; running outdoors during the evening smog descent causes long-term airway inflammation.",
        whyHi: "यह क्यों जरूरी है: बच्चे बड़ों की तुलना में वजन के हिसाब से 50% ज्यादा हवा अंदर खींचते हैं। शाम के स्मॉग में दौड़ने से उनके फेफड़ों का विकास हमेशा के लिए कमजोर हो सकता है।"
      });
    }

    // Vehicle mode
    if (formData.commuteMode === 'two-wheeler' || formData.commuteMode === 'auto' || formData.commuteMode === 'walk') {
      routines.push({
        id: 'commute-exposure-gear',
        titleEn: "Enforce Sealed N95 Respirator + Full Helmet Visor for Open Transit",
        titleHi: "दोपहिया/ऑटो में N95 मास्क लगाएं और हेलमेट का शीशा पूरा बंद रखें",
        textEn: "Two-wheeler riders and auto passengers sit directly in the tailpipe zone of trucks and buses. Wear an airtight N95/FFP2 mask with the metal nose bridge pressed firmly. Keep your helmet visor down to prevent eye irritation.",
        textHi: "बाइक और ऑटो में चलने वाले सीधे बसों और ट्रकों के साइलेंसर के सामने होते हैं। नाक पर अच्छी तरह दबाकर N95 मास्क पहनें और आंखों में जलन से बचने के लिए हेलमेट का शीशा नीचे रखें।",
        whyEn: "Why This Matters: Sitting in open traffic without certified filtration exposes you to 18x higher micro-soot levels than inside a filtered cabin, leading to chronic dry throat and bronchitis.",
        whyHi: "यह क्यों जरूरी है: बिना मास्क खुली सड़क पर चलने से कार के मुकाबले 18 गुना ज्यादा जहरीला काला धुआं अंदर जाता है, जिससे पुरानी खांसी और फेफड़ों में सूजन हो जाती है।"
      });
    } else {
      routines.push({
        id: 'commute-cabin-recirculate',
        titleEn: "Switch Car/Cab AC to 'Internal Air Recirculation' Mode",
        titleHi: "कार या कैब में एसी को 'इंटरनल रीसर्क्युलेशन' मोड पर रखें",
        textEn: "Before driving into morning traffic, press the 'recirculation' button (car icon with curved arrow inside) so your cabin blower stops pulling toxic exhaust fumes from outside.",
        textHi: "सड़क पर निकलते ही गाड़ी के एसी में 'रीसर्क्युलेशन' बटन (कार के अंदर मुड़ा हुआ तीर) दबाएं, ताकि गाड़ी बाहर का जहरीला धुआं खींचने के बजाय अंदर की हवा को ही फिल्टर करे।",
        whyEn: "Why This Matters: Fresh-air intake in city traffic fills the car cabin with 80% of outdoor PM2.5 within 90 seconds. Recirculation mode cuts cabin pollution by up to 75%.",
        whyHi: "यह क्यों जरूरी है: बाहर की हवा चालू रखने पर महज 90 सेकंड में सड़क का 80% धुआं कार में भर जाता है। रीसर्क्युलेशन मोड से अंदर की हवा 75% साफ रहती है।"
      });
    }

    // CARD 2: INDOOR AIR QUALITY HACKS
    if (formData.ventilationHabit === 'morning-open') {
      indoorHacks.push({
        id: 'vent-timing-shift',
        titleEn: "NEVER Open Windows in the Morning: Shift to 1:30 PM - 3:00 PM Only",
        titleHi: "सुबह खिड़कियां भूलकर भी न खोलें: सिर्फ दोपहर 1:30 से 3:00 बजे खोलें",
        textEn: "Traditional belief says morning air is 'fresh,' but during winter smog, 6:00 AM - 9:30 AM air is at its most lethal. Keep all doors and windows sealed tight overnight and morning. Open cross-windows only for 30 minutes in peak afternoon sunshine.",
        textHi: "अक्सर लोग सुबह ताजी हवा समझकर खिड़कियां खोल देते हैं, लेकिन सर्दियों की सुबह 6 से 9:30 बजे की हवा सबसे ज्यादा जहरीली होती है। खिड़कियां दोपहर 1:30 से 3:00 के बीच धूप खिलने पर ही 20-30 मिनट के लिए खोलें।",
        whyEn: "Why This Matters: Opening windows at dawn floods your bedrooms with morning smog that stays trapped indoors all day, worsening overnight breathing distress for sleeping family members.",
        whyHi: "यह क्यों जरूरी है: सुबह खिड़की खोलने से बाहर का जहरीला धुआं घर के अंदर घुसकर कमरों में कैद हो जाता है, जिससे रात को सोते समय बच्चों और बुजुर्गों का दम घुटने लगता है।"
      });
    } else {
      indoorHacks.push({
        id: 'vent-micro-airing',
        titleEn: "30-Minute Afternoon Sun Cross-Ventilation Protocol",
        titleHi: "दोपहर की धूप में 30 मिनट का वेंटिलेशन नियम",
        textEn: "Keeping windows shut 24/7 causes indoor CO2 and kitchen fumes to spike. Open opposing windows strictly between 1:00 PM and 3:00 PM to flush out stale indoor carbon dioxide without letting smog in.",
        textHi: "पूरे 24 घंटे खिड़की बंद रखने से घर में कार्बन डाइऑक्साइड और रसोई की गैस बढ़ जाती है। रोज दोपहर 1 से 3 बजे के बीच आमने-सामने की खिड़कियां 20 मिनट खोलें ताकि बासी हवा बाहर निकल सके।",
        whyEn: "Why This Matters: Controlled midday ventilation flushes hazardous indoor carbon dioxide without letting in severe morning smog, boosting mental alertness and oxygen levels.",
        whyHi: "यह क्यों जरूरी है: दोपहर की गर्म हवा में प्रदूषण कम होता है। इस समय खिड़की खोलने से घर की बासी गैस बाहर निकलती है और सिरदर्द या सुस्ती नहीं होती।"
      });
    }

    indoorHacks.push({
      id: 'hack-wet-mopping',
      titleEn: "Switch from Dry Brooming (Jhadu) to Damp Microfiber Mopping",
      titleHi: "सूखी झाड़ू लगाना बंद करें, सिर्फ गीले पोछे से सफाई करें",
      textEn: "Instruct domestic help and family members to strictly avoid dry brooming. Dry brooming flings settled particulate soot back into breathing air. Use a damp cloth or microfiber mop dipped in warm water with a dash of salt or mild disinfectant.",
      textHi: "घर में सूखी झाड़ू बिल्कुल न लगाएं। सूखी झाड़ू फर्श पर बैठी बारीक काली राख और धूल को उड़ाकर दोबारा हवा में भर देती है। हमेशा हल्के गीले कपड़े या माइक्रोफाइबर पोछे से पोंछा लगाएं।",
      whyEn: "Why This Matters: Dry brooming suspends heavy PM10 and PM2.5 in your living room air for 3 to 4 hours. Wet mopping traps and removes 92% of floor dust directly into water bucket.",
      whyHi: "यह क्यों जरूरी है: सूखी झाड़ू लगाने से धूल और कालिख 4 घंटे तक कमरे की हवा में तैरती रहती है। गीला पोछा लगाने से 92% जहरीली धूल सीधे पानी में बहकर साफ हो जाती है।"
    });

    indoorHacks.push({
      id: 'hack-diy-filter',
      titleEn: "₹900 DIY Box Fan / Table Fan HEPA Filter Scrub",
      titleHi: "₹900 में टेबल पंखे के पीछे एसी फिल्टर लगाकर हवा साफ करें",
      textEn: "You do not need a ₹20,000 branded purifier. Buy an inexpensive MERV-13 or HEPA AC filter mesh (₹500 on Amazon) and tape it firmly to the back intake grill of a standard table fan. Run for 40 minutes in the bedroom before sleeping.",
      textHi: "महंगा प्यूरीफायर खरीदने की जरूरत नहीं है। किसी भी टेबल पंखे के पीछे ₹500 का MERV-13 या HEPA एसी फिल्टर टेप से चिपका दें। रात को सोने से पहले बेडरूम में इसे 40 मिनट चलाएं।",
      whyEn: "Why This Matters: Air filtration is mechanical—fan suction passing dirty air through dense fibers. This DIY hack delivers clean air delivery rate (CADR) comparable to mid-range electric purifiers at 1/10th the cost.",
      whyHi: "यह क्यों जरूरी है: प्यूरीफायर सिर्फ हवा खींचकर जाली से छानता है। यह सस्ता घरेलू नुस्खा कमरे का 85% बारीक धुआं आधे घंटे में सोखकर महंगे प्यूरीफायर जितनी ही सफाई देता है।"
    });

    indoorHacks.push({
      id: 'hack-draft-stopper',
      titleEn: "Damp Towel Draft-Stoppers at Bedroom Door Bottoms",
      titleHi: "दरवाजे और खिड़कियों के नीचे गीला तौलिया या कपड़ा लगाएं",
      textEn: "Roll a damp bath towel or use a ₹150 foam draft-stopper along the gap under the main entrance door and bedroom doors facing balconies. This seals out invisible smog seepage.",
      textHi: "बालकनी या मुख्य दरवाजे के नीचे वाली खाली जगह में एक मुड़ा हुआ हल्का नम तौलिया या स्पंज की पट्टी लगा दें। इससे बाहर का बारीक धुआं रिसकर अंदर नहीं आ पाएगा।",
      whyEn: "Why This Matters: Up to 35% of outdoor smog infiltrates homes through simple under-door crevices. Sealing these gaps creates a safe 'clean air sanctuary' in the sleeping quarters.",
      whyHi: "यह क्यों जरूरी है: बाहर का 35% जहरीला धुआं दरवाजों के नीचे की झिर्रियों से घर में घुसता है। इस जगह को बंद करने से सोने वाले कमरे में सुरक्षित हवा बनी रहती है।"
    });

    indoorHacks.push({
      id: 'hack-plants-bedroom',
      titleEn: "Keep 2 Snake Plants in Bedrooms for Nighttime Oxygen",
      titleHi: "सोने के कमरे में 2 स्नेक प्लांट (Sansevieria) के गमले रखें",
      textEn: "Place two pots of Snake Plant (Sansevieria) on bedside tables. Unlike most plants, Snake Plants absorb carbon dioxide and release fresh oxygen during dark hours, helping restful sleep.",
      textHi: "बेडरूम में सिरहाने की तरफ दो स्नेक प्लांट के गमले रखें। यह खास पौधा रात के अंधेरे में भी ऑक्सीजन छोड़ता है और कमरे की हवा को ताजा रखता है।",
      whyEn: "Why This Matters: Boosts night oxygen saturation and absorbs volatile organic compounds, reducing morning dry cough, wheezing, and throat scratchiness for children and seniors.",
      whyHi: "यह क्यों जरूरी है: रात में कमरे में ऑक्सीजन की मात्रा बेहतर रहने से सुबह उठने पर गले में खराश, सूखापन और बच्चों में सांस की घरघराहट नहीं होती।"
    });

    // CARD 3: SUSTAINABLE SWAPS
    if (formData.heatingSetup === 'angithi') {
      swaps.push({
        id: 'swap-angithi-lethal',
        titleEn: "CRITICAL: Stop Coal Angithi / Wood Bonfires Immediately",
        titleHi: "अति आवश्यक: कमरे में कोयले की अंगीठी या अलाव जलाना तुरंत बंद करें",
        textEn: "Burning coal, charcoal, or wood in closed rooms emits lethal, odorless Carbon Monoxide (CO) gas along with dense toxic particulates. Swap for thick thermal fleece quilts, hot water bags, or a sealed oil-filled radiator.",
        textHi: "बंद कमरे में कोयला, लकड़ी या अंगीठी जलाने से जहरीली कार्बन मोनोऑक्साइड गैस और कालिख निकलती है, जो जानलेवा हो सकती है। इसकी जगह मोटी रजाई, गर्म पानी की बोतल (Hot Water Bag) या ऑयल हीटर का इस्तेमाल करें।",
        whyEn: "Why This Matters: Carbon Monoxide irreversibly binds to blood hemoglobin, starving the brain and heart of oxygen. It causes silent asphyxiation and severe lung poisoning during winter.",
        whyHi: "यह क्यों जरूरी है: अंगीठी का धुआं खून में मिलकर ऑक्सीजन सोख लेता है, जिससे रात में दम घुटने और जान जाने का खतरा रहता है। गर्म कपड़े और पानी की बोतल सबसे सुरक्षित हैं।"
      });
    } else if (formData.heatingSetup === 'halogen' || formData.heatingSetup === 'blower') {
      swaps.push({
        id: 'swap-heater-humidity',
        titleEn: "Add a Wide Bowl of Water in Front of Coil/Blower Heaters",
        titleHi: "हीटर के सामने चौड़े बर्तन में पानी भरकर रखें (नमी बनाए रखें)",
        textEn: "Glowing rod heaters and blowers severely dry out indoor room air, stripping the protective moisture mucus from nasal passages. Keep a metal bowl filled with warm water 2 feet in front of the heater.",
        textHi: "रॉड और ब्लोअर वाले हीटर कमरे की हवा को बिल्कुल सुखा देते हैं, जिससे नाक और गले की प्राकृतिक परत सूख जाती है। हीटर के आगे एक बड़े कटोरे में पानी भरकर रखें ताकि हवा में नमी बनी रहे।",
        whyEn: "Why This Matters: Dry nasal membranes cannot trap inhaled smog particles. Restoring 40-50% humidity preserves your nose's natural filtration barrier against PM2.5.",
        whyHi: "यह क्यों जरूरी है: नाक सूख जाने पर जहरीले कण सीधे फेफड़ों में घुस जाते हैं। हवा में नमी रहने से नाक की झिल्ली इन कणों को फेफड़ों में जाने से पहले ही रोक लेती है।"
      });
    } else {
      swaps.push({
        id: 'swap-clean-thermal-layering',
        titleEn: "Prioritize 3-Layer Thermal Clothing Over High Room Heaters",
        titleHi: "कमरा ज्यादा तपाने के बजाय 3 परतों वाले गर्म कपड़े पहनें",
        textEn: "Wear thermal innerwear + light wool sweater + windproof fleece. Keeping your body warm through clothing allows you to run heaters at low power, preventing indoor stuffiness and dry cough.",
        textHi: "थर्मल इनर + हल्का स्वेटर + गर्म जैकेट पहनें। कपड़ों से शरीर गर्म रखने से हीटर कम चलाना पड़ता है, जिससे कमरे की हवा भारी नहीं होती और सूखी खांसी नहीं आती।",
        whyEn: "Why This Matters: Lower heater wattage reduces household electricity demand and prevents indoor thermal dryness that aggravates chronic bronchitis.",
        whyHi: "यह क्यों जरूरी है: हीटर कम चलने से बिजली बचती है और कमरे की हवा में सूखापन नहीं आता, जिससे सांस की नलियां स्वस्थ रहती हैं।"
      });
    }

    if (formData.cookingSetup === 'lpg-no-exhaust' || formData.cookingSetup === 'frying') {
      swaps.push({
        id: 'swap-cooking-protocol',
        titleEn: "Cover Frying Pans with Lids & Crack Kitchen Balcony 2 Inches",
        titleHi: "तड़का लगाते समय पैन को ढक्कन से ढकें और किचन की खिड़की 2 इंच खोलें",
        textEn: "Indian tadka (mustard seeds, chillies, spices) and deep frying release immense plumes of aerosolized oil and fine PM2.5. Always cover the kadhai with a lid during tempering and keep the kitchen door closed to the rest of the house.",
        textHi: "तेल और मिर्च का छौंक (तड़का) लगाते समय कड़ाही पर तुरंत ढक्कन रखें। रसोई का दरवाजा बाकी घर की तरफ से बंद रखें और रसोई की खिड़की सिर्फ 2 इंच खोलकर रखें।",
        whyEn: "Why This Matters: Hot cooking oils produce ultrafine lipid droplets and VOCs. In a closed home, deep frying causes indoor PM2.5 to spike above 600 µg/m³, which is higher than road traffic.",
        whyHi: "यह क्यों जरूरी है: गर्म तेल के धुएं में जहरीले बारीक तेल कण होते हैं। बिना ढक्कन तड़का लगाने से घर के अंदर का प्रदूषण सड़क के ट्रैफिक से भी ज्यादा खतरनाक हो जाता है।"
      });
    } else if (formData.cookingSetup === 'chulha') {
      swaps.push({
        id: 'swap-chulha-clean-fuel',
        titleEn: "Transition Away from Biomass/Wood Chulha to Induction/LPG",
        titleHi: "लकड़ी-उपले के चूल्हे को बंद करें, इंडक्शन या गैस पर खाना बनाएं",
        textEn: "Wood and cow-dung chulhas generate heavy polycyclic aromatic hydrocarbons directly inside living spaces. Utilize clean electric induction cookers or subsidized LPG for all indoor meals.",
        textHi: "लकड़ी और उपले का चूल्हा घर के अंदर जलाने से भारी जहरीला धुआं भर जाता है। घर के अंदर खाना पकाने के लिए बिजली के इंडक्शन या गैस चूल्हे का ही इस्तेमाल करें।",
        whyEn: "Why This Matters: Cooking 1 hour over a biomass chulha is equivalent to smoking 40 commercial cigarettes, irreversibly scarring women's and children's lungs.",
        whyHi: "यह क्यों जरूरी है: लकड़ी के चूल्हे पर 1 घंटा खाना पकाना 40 सिगरेट पीने के बराबर धुआं फेफड़ों में भर देता है। इंडक्शन से घर की हवा पूरी तरह धुआं-मुक्त रहती है।"
      });
    } else {
      swaps.push({
        id: 'swap-exhaust-prestart',
        titleEn: "Turn Exhaust On 2 Minutes BEFORE Lighting Gas Burner",
        titleHi: "गैस चूल्हा जलाने से 2 मिनट पहले एग्जॉस्ट फैन चालू करें",
        textEn: "Start your kitchen exhaust fan or chimney 2 minutes before striking the lighter and keep it running for 5 minutes after cooking. This establishes negative pressure to suck out nitrogen dioxide (NO2).",
        textHi: "माचिस या लाइटर जलाने से 2 मिनट पहले एग्जॉस्ट फैन चला दें और खाना पकने के 5 मिनट बाद तक चलने दें। इससे गैस से निकलने वाली जहरीली नाइट्रोजन डाइऑक्साइड तुरंत बाहर निकल जाती है।",
        whyEn: "Why This Matters: Gas stoves emit invisible Nitrogen Dioxide (NO2). Pre-exhausting ensures toxic combustion gases are evacuated before they diffuse into children's bedrooms.",
        whyHi: "यह क्यों जरूरी है: गैस चूल्हे से जहरीली नाइट्रोजन गैस निकलती है। पहले से एग्जॉस्ट चलाने से यह गैस बच्चों के कमरों में नहीं फैलती।"
      });
    }

    swaps.push({
      id: 'swap-agarbatti-mosquito',
      titleEn: "Swap Agarbatti / Mosquito Coils for Essential Oils & Mosquito Nets",
      titleHi: "अगरबत्ती और मच्छर कॉइल की जगह मच्छरदानी और कपूर/नेचुरल डिफ्यूजर अपनाएं",
      textEn: "One burning mosquito coil releases the fine particulate matter of ~80 cigarettes. Chemical dhoop and black agarbatti fill closed winter rooms with toxic phthalates. Swap for physical bed nets, electric liquid vaporizers, or natural camphor.",
      textHi: "एक मच्छर कॉइल जलाने से 80 सिगरेट जितना जहरीला धुआं निकलता है। सर्दियों में अगरबत्ती या धूपबत्ती का धुआं कमरे में ही घूमता रहता है। इसकी जगह बिस्तर पर मच्छरदानी लगाएं और कमरे में प्राकृतिक कपूर या सौम्य तेल का इस्तेमाल करें।",
      whyEn: "Why This Matters: Incense and mosquito coil smoke contains heavy benzene, pyrethroids, and PM2.5 that trigger severe overnight asthmatic wheezing and chest tightness.",
      whyHi: "यह क्यों जरूरी है: अगरबत्ती और कॉइल के धुएं में भारी केमिकल्स होते हैं, जो रात में सोते समय सांस की नली को सिकोड़ देते हैं और पुरानी एलर्जी को भड़काते हैं।"
    });

    swaps.push({
      id: 'swap-leaf-composting',
      titleEn: "Zero Garden Leaf Burning: Compost in Corner or Report via Municipal App",
      titleHi: "सूखे पत्ते और कचरा कभी न जलाएं: कोने में गड्ढा बनाकर खाद बनाएं",
      textEn: "Never allow garden leaves, cardboard, or plastic trash to be burned on your street or residential society. Dig a 2-foot pit to make organic compost, or report open burning on municipal apps (e.g. Green Delhi / Swachhata App).",
      textHi: "अपनी गली या पार्क में सूखे पत्तों और प्लास्टिक कचरे में आग कभी न लगने दें। पत्तों को गड्ढे में डालकर खाद बनाएं और धुआं करने वालों की शिकायत नगर निगम के ऐप पर करें।",
      whyEn: "Why This Matters: Wet leaf and plastic burning produces dioxins and black carbon right at pavement level, which cancels out all indoor precautions for neighboring families.",
      whyHi: "यह क्यों जरूरी है: सूखे पत्ते और कूड़ा जलाने से सबसे जहरीला काला धुआं निकलता है, जिससे पूरी कॉलोनी के बच्चों और बुजुर्गों की जान जोखिम में पड़ जाती है।"
    });

    return {
      routines,
      indoorHacks,
      swaps,
      hasElders,
      hasKids,
      hasAsthma,
      hasInfant,
      hasPregnant,
      cityText: formData.cityName,
      aqi: formData.aqi
    };
  }

  // --- STREAMLINED PLAN RENDERING WITH FRAGMENTS ---
  function renderPlan(plan) {
    if (!plan) return;
    const isHi = Store.state.lang === 'hi';

    let riskPill = isHi ? "सामान्य निगरानी" : "Standard Caution";
    if (plan.hasAsthma || plan.hasElders) {
      riskPill = isHi ? "🚨 उच्च संवेदनशीलता (बुजुर्ग / सांस के मरीज)" : "🚨 High Vulnerability (Elders / Asthma)";
    } else if (plan.hasKids) {
      riskPill = isHi ? "⚠️ बाल स्वास्थ्य निगरानी" : "⚠️ Child Health Protection";
    }

    const aqiSeverityText = plan.aqi >= 400 
      ? (isHi ? "गंभीर स्मॉग (Severe AQI)" : "Severe Smog Episode") 
      : (isHi ? "बहुत खराब वायु (Very Poor AQI)" : "Very Poor Smog Condition");

    if (DOM.resultsMetaSummary) {
      DOM.resultsMetaSummary.innerHTML = `
        <strong>${plan.cityText}</strong> • <span class="text-severe">AQI ${plan.aqi} (${aqiSeverityText})</span> • <span>${riskPill}</span>
      `;
    }

    if (DOM.vulnBox) {
      if (plan.hasAsthma || plan.hasElders || plan.hasInfant) {
        DOM.vulnBox.classList.remove('hidden');
        DOM.vulnBox.innerHTML = isHi ? `
          <strong>⚠️ आपके परिवार के लिए विशेष स्वास्थ्य परामर्श:</strong> आपके घर में बुजुर्ग, छोटे बच्चे या सांस के संवेदनशील सदस्य हैं। आज के स्मॉग में बिना N95 मास्क बाहर निकलना फेफड़ों पर गहरा असर डाल सकता है। दवाइयां पास रखें और गर्म पानी का सेवन बढ़ाते रहें।
        ` : `
          <strong>⚠️ Targeted Health Advisory for Your Household:</strong> Your home includes vulnerable airways (infants, seniors, or asthma patients). At current smog levels, unshielded outdoor exposure can precipitate acute chest congestion. Ensure rescue medication is easily reachable and promote warm hydration.
        `;
      } else {
        DOM.vulnBox.classList.add('hidden');
      }
    }

    const buildFragment = (list) => {
      const frag = document.createDocumentFragment();
      list.forEach(item => {
        const art = document.createElement('article');
        art.className = 'tip-block';
        art.id = item.id;
        art.innerHTML = `
          <div class="tip-header-row">
            <span class="tip-priority-dot"></span>
            <h4 class="tip-heading">${isHi ? item.titleHi : item.titleEn}</h4>
          </div>
          <p class="tip-body">${isHi ? item.textHi : item.textEn}</p>
          <div class="why-matters-badge">
            <span class="why-tag-title">${isHi ? 'यह क्यों जरूरी है' : 'Why This Matters'}</span>
            <p class="why-matters-text">${isHi ? item.whyHi : item.whyEn}</p>
          </div>
        `;
        frag.appendChild(art);
      });
      return frag;
    };

    if (DOM.containerRoutines) {
      DOM.containerRoutines.innerHTML = '';
      DOM.containerRoutines.appendChild(buildFragment(plan.routines));
    }
    if (DOM.containerIndoor) {
      DOM.containerIndoor.innerHTML = '';
      DOM.containerIndoor.appendChild(buildFragment(plan.indoorHacks));
    }
    if (DOM.containerSwaps) {
      DOM.containerSwaps.innerHTML = '';
      DOM.containerSwaps.appendChild(buildFragment(plan.swaps));
    }

    if (DOM.resultsSection) {
      DOM.resultsSection.classList.remove('hidden');
    }
    Store.state.isGenerated = true;
  }

  // --- HYPERLOCAL MAP & SENSORS ENGINE ---
  let mapInstance = null;
  let mapMarkersList = [];

  async function initHyperlocalMap() {
    const stations = STREET_STATIONS[Store.state.currentCityKey] || STREET_STATIONS.delhi;
    renderMicroSensorsGrid(stations);

    if (Store.state.radarMode) {
      renderRadarView(stations);
      return;
    }

    if (typeof L !== 'undefined' && DOM.mapContainer) {
      try {
        const centerLat = stations[0].lat;
        const centerLng = stations[0].lng;

        if (!mapInstance) {
          mapInstance = L.map('hyperlocalMapContainer', {
            zoomControl: true,
            scrollWheelZoom: false
          }).setView([centerLat, centerLng], 12);

          const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap, &copy; CARTO',
            maxZoom: 18
          });

          // Resilient tile error handling for offline/slow networks
          tileLayer.on('tileerror', () => {
            console.warn("Tile error; activating offline radar notice");
            if (DOM.toggleRadarText) {
              DOM.toggleRadarText.textContent = "📡 Tiles Slow: Click for Radar";
            }
          });

          tileLayer.addTo(mapInstance);
        } else {
          mapInstance.setView([centerLat, centerLng], 12);
        }

        renderMapMarkers(stations);
      } catch (err) {
        console.warn("Leaflet init error, using radar", err);
        renderRadarView(stations);
      }
    } else {
      renderRadarView(stations);
    }

    // Select first station
    selectStation(stations[0]);

    // Asynchronously fetch live data for this region in background
    syncLiveStationData(stations);
  }

  async function syncLiveStationData(stations) {
    if (!navigator.onLine || !stations || stations.length === 0) return;

    try {
      const liveRes = await AirQualityService.fetchLiveAirQuality(stations[0].lat, stations[0].lng);
      if (liveRes.isLive && liveRes.data && liveRes.data.current) {
        const cur = liveRes.data.current;
        // Calibrate top AQI dial and active station with real atmospheric values
        const liveAqi = Math.round(cur.us_aqi || cur.pm2_5 * 2.1);
        stations[0].aqi = liveAqi;
        stations[0].pm25 = Math.round(cur.pm2_5);
        stations[0].pm10 = Math.round(cur.pm10);

        // Update markers & grid with fragment
        renderMapMarkers(stations);
        renderMicroSensorsGrid(stations);
        if (Store.state.selectedStation?.id === stations[0].id) {
          selectStation(stations[0]);
        }
      }
    } catch (e) {
      console.warn("Live sync skipped", e);
    }
  }

  function renderMapMarkers(stations) {
    if (!mapInstance || typeof L === 'undefined') return;

    mapMarkersList.forEach(m => mapInstance.removeLayer(m));
    mapMarkersList = [];

    stations.forEach(st => {
      let markerClass = 'marker-vpoor';
      if (st.aqi < 200) markerClass = 'marker-mod';
      else if (st.aqi < 300) markerClass = 'marker-poor';
      else if (st.aqi >= 400) markerClass = 'marker-severe';

      const icon = L.divIcon({
        className: 'custom-map-icon',
        html: `<div class="map-pulse-marker ${markerClass}" title="${st.nameEn}">${st.aqi}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([st.lat, st.lng], { icon }).addTo(mapInstance);
      marker.on('click', () => selectStation(st));
      mapMarkersList.push(marker);
    });
  }

  function renderRadarView(stations) {
    if (!DOM.mapContainer) return;
    const isHi = Store.state.lang === 'hi';

    DOM.mapContainer.innerHTML = `
      <div style="position:relative; width:100%; height:100%; min-height:420px; background:linear-gradient(135deg, #133e38 0%, #1e564d 100%); color:#fff; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1.25rem; text-align:center;">
        <svg viewBox="0 0 400 220" style="width:100%; max-width:440px; height:auto; margin-bottom:0.75rem;" aria-hidden="true">
          <circle cx="200" cy="110" r="90" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" stroke-dasharray="4 4"/>
          <circle cx="200" cy="110" r="55" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
          <circle cx="200" cy="110" r="20" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
          <line x1="200" y1="15" x2="200" y2="205" stroke="rgba(255,255,255,0.15)"/>
          <line x1="100" y1="110" x2="300" y2="110" stroke="rgba(255,255,255,0.15)"/>
          
          <circle cx="160" cy="75" r="14" fill="#dc2626"/>
          <text x="160" y="79" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">448</text>
          
          <circle cx="230" cy="135" r="14" fill="#ea580c"/>
          <text x="230" y="139" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">385</text>
          
          <circle cx="210" cy="65" r="12" fill="#ca8a04"/>
          <text x="210" y="69" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">285</text>
          
          <circle cx="130" cy="140" r="14" fill="#991b1b"/>
          <text x="130" y="144" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">432</text>
        </svg>
        <div style="font-weight:800; font-size:1.05rem; margin-bottom:0.25rem;">
          ${isHi ? "हाइपरलोकल स्ट्रीट-लेवल रडार सक्रिय" : "Hyperlocal Street-Level Radar Active"}
        </div>
        <p style="font-size:0.84rem; color:#d1fae5; max-width:440px;">
          ${isHi ? "नीचे दिए गए माइक्रो-सेंसर्स पर क्लिक करके अपनी गली का सटीक धुआं और इंवर्जन स्तर जांचें।" : "Click any sensor from the grid below to inspect street-level PM2.5 and inversion cap height."}
        </p>
      </div>
    `;
  }

  function renderMicroSensorsGrid(stations) {
    if (!DOM.microSensorsGrid) return;
    const isHi = Store.state.lang === 'hi';
    const countBadge = document.getElementById('activeCitySensorCount');
    if (countBadge) {
      countBadge.textContent = `${stations.length} ${isHi ? 'सेंसर सक्रिय' : 'Sensors Active'}`;
    }

    const frag = document.createDocumentFragment();
    stations.forEach(st => {
      let col = 'text-severe';
      if (st.aqi < 200) col = 'text-moderate';
      else if (st.aqi < 300) col = 'text-poor';

      const card = document.createElement('div');
      card.className = `station-pill-card ${Store.state.selectedStation?.id === st.id ? 'active' : ''}`;
      card.setAttribute('data-id', st.id);
      card.innerHTML = `
        <div class="station-card-top">
          <span class="station-name">${isHi ? st.nameHi : st.nameEn}</span>
          <span class="station-aqi-num ${col}">${st.aqi}</span>
        </div>
        <div class="station-card-bottom">
          <span>PM2.5: ${st.pm25} µg/m³</span>
          <span>Inv: ${st.inversion}</span>
        </div>
      `;
      card.addEventListener('click', () => {
        selectStation(st);
        if (mapInstance && !Store.state.radarMode) {
          mapInstance.panTo([st.lat, st.lng]);
        }
      });
      frag.appendChild(card);
    });

    DOM.microSensorsGrid.innerHTML = '';
    DOM.microSensorsGrid.appendChild(frag);
  }

  function selectStation(st) {
    Store.state.selectedStation = st;
    const isHi = Store.state.lang === 'hi';

    // Highlight active card
    if (DOM.microSensorsGrid) {
      DOM.microSensorsGrid.querySelectorAll('.station-pill-card').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-id') === st.id);
      });
    }

    let healthAdvice = isHi 
      ? "🚨 गंभीर धुएं का जमाव: बुजुर्ग व बच्चे घर से बाहर न निकलें।" 
      : "🚨 Severe Smog Cap: Outdoor activity must be avoided for kids & seniors.";

    if (st.aqi < 300) {
      healthAdvice = isHi 
        ? "⚠️ खराब हवा: संवेदनशील व्यक्ति मास्क पहनें।" 
        : "⚠️ Poor Air Quality: Wear N95 during active travel.";
    }

    if (DOM.selectedStreetBox) {
      DOM.selectedStreetBox.innerHTML = `
        <div class="selected-street-content">
          <span class="selected-street-title">
            📍 ${isHi ? st.nameHi : st.nameEn} • <strong class="text-severe">AQI ${st.aqi}</strong>
          </span>
          <span class="selected-street-sub">
            <strong>${isHi ? 'सड़क / लैंडमार्क:' : 'Street / Landmark:'}</strong> ${st.street} | 
            <strong>PM2.5:</strong> ${st.pm25} µg/m³ | 
            <strong>${isHi ? 'इंवर्जन ऊंचाई:' : 'Inversion Layer:'}</strong> ${st.inversion}
          </span>
          <p style="font-size:0.82rem; color:#991b1b; margin-top:2px;">
            ${healthAdvice} ${isHi ? st.noteHi : st.noteEn}
          </p>
        </div>
        <div>
          <button type="button" class="btn-ghost-small" id="btnPinToReport">
            📢 ${isHi ? 'इस जगह की रिपोर्ट करें' : 'Report This Spot'}
          </button>
        </div>
      `;

      const btnPin = document.getElementById('btnPinToReport');
      if (btnPin) {
        btnPin.addEventListener('click', () => {
          const reportInput = document.getElementById('reportStreet');
          if (reportInput) {
            reportInput.value = `${st.nameEn} (${st.street})`;
          }
          const commSec = document.getElementById('communitySmogSection');
          if (commSec) commSec.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }

  // --- PREDICTIVE HEALTH RISK ALERTS ENGINE ---
  function initPredictiveAlerts() {
    renderForecastTimeline();
    renderMedicalRiskGrid();

    if (DOM.btnToggleAlerts) {
      DOM.btnToggleAlerts.addEventListener('click', () => {
        Store.state.alertsEnabled = !Store.state.alertsEnabled;
        const isHi = Store.state.lang === 'hi';

        if (Store.state.alertsEnabled) {
          DOM.btnToggleAlerts.style.backgroundColor = '#15803d';
          DOM.notifyBtnText.textContent = isHi ? "चेतावनी अलर्ट सक्रिय ✓" : "Warnings Active ✓";
          showToast(isHi ? "स्वचालित स्मॉग स्पाइक अलर्ट चालू हो गए हैं!" : "Predictive smog spike alerts enabled!");
          
          if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission();
          }
        } else {
          DOM.btnToggleAlerts.style.backgroundColor = '';
          DOM.notifyBtnText.textContent = isHi ? I18N.hi.btnEnableAlerts : I18N.en.btnEnableAlerts;
          showToast(isHi ? "अलर्ट बंद किए गए" : "Alerts disabled");
        }
      });
    }

    if (DOM.btnSimulateSpike) {
      DOM.btnSimulateSpike.addEventListener('click', () => {
        triggerEmergencyBanner(448, "Anand Vihar / East Delhi");
      });
    }

    if (DOM.btnCloseEmergencyBanner) {
      DOM.btnCloseEmergencyBanner.addEventListener('click', () => {
        if (DOM.emergencyAlertBanner) {
          DOM.emergencyAlertBanner.classList.add('hidden');
        }
      });
    }
  }

  function renderForecastTimeline() {
    if (!DOM.forecastHoursTimeline) return;
    const isHi = Store.state.lang === 'hi';
    const frag = document.createDocumentFragment();

    PREDICTIVE_HOURS.forEach((h, idx) => {
      let col = 'text-severe';
      if (h.aqi < 300) col = 'text-poor';

      const card = document.createElement('div');
      card.className = `forecast-hour-card ${idx === Store.state.activeHourIndex ? 'active' : ''}`;
      card.setAttribute('data-idx', idx);
      card.innerHTML = `
        <span class="f-time">${h.time}</span>
        <span class="f-aqi ${col}">${h.aqi}</span>
        <span class="f-inversion">Inv: ${h.inversion}</span>
      `;
      card.addEventListener('click', () => {
        Store.state.activeHourIndex = idx;
        renderForecastTimeline();
        showToast(`${h.time} Forecast: AQI ${h.aqi} (${isHi ? h.actionHi : h.actionEn})`);
      });
      frag.appendChild(card);
    });

    DOM.forecastHoursTimeline.innerHTML = '';
    DOM.forecastHoursTimeline.appendChild(frag);
  }

  function renderMedicalRiskGrid() {
    if (!DOM.medicalRiskGrid) return;
    const isHi = Store.state.lang === 'hi';

    DOM.medicalRiskGrid.innerHTML = `
      <div class="medical-alert-card">
        <div class="med-header">
          <span class="med-icon" aria-hidden="true">🫁</span>
          <div>
            <h5 class="med-title">${isHi ? 'अस्थमा व सांस के मरीज' : 'Asthma & Bronchial Alert'}</h5>
            <span class="med-window-tag tag-red">${isHi ? 'पीक जोखिम: सुबह 6:00 - 9:00' : 'High Risk: 6:00 AM - 9:00 AM'}</span>
          </div>
        </div>
        <p class="med-desc">
          ${isHi 
            ? 'ठंडी इंवर्जन हवा फेफड़ों की नलियों में अचानक सिकुड़न पैदा करती है, जिससे सुबह का दौरा पड़ सकता है।' 
            : 'Cold inverted smog triggers immediate bronchospasm. Heavy morning inhalation causes acute wheezing.'}
        </p>
        <div class="med-action-box">
          <strong>${isHi ? 'सुरक्षा कदम:' : 'Preventive Action:'}</strong>
          ${isHi 
            ? 'सुबह बिस्तर छोड़ने से पहले डॉक्टर द्वारा सुझाया गया प्रीवेंटर इनहेलर लें। गुनगुना पानी पिएं।' 
            : 'Take prescribed controller inhaler 30 mins before morning exposure; keep rescue Salbutamol bedside.'}
        </div>
      </div>

      <div class="medical-alert-card">
        <div class="med-header">
          <span class="med-icon" aria-hidden="true">👵</span>
          <div>
            <h5 class="med-title">${isHi ? 'बुजुर्ग व हृदय रोगी' : 'Elderly Cardiovascular Risk'}</h5>
            <span class="med-window-tag tag-amber">${isHi ? 'पीक जोखिम: सुबह 5:30 - 8:30' : 'Vascular Stress: 5:30 AM - 8:30 AM'}</span>
          </div>
        </div>
        <p class="med-desc">
          ${isHi 
            ? 'बारीक PM2.5 कण खून में घुलकर धमनियों को सख्त करते हैं, जिससे सुबह ब्लड प्रेशर और स्ट्रोक का खतरा बढ़ जाता है।' 
            : 'PM2.5 nano-particulates cross into blood vessels, elevating arterial stiffness and blood pressure.'}
        </p>
        <div class="med-action-box">
          <strong>${isHi ? 'सुरक्षा कदम:' : 'Preventive Action:'}</strong>
          ${isHi 
            ? 'सुबह की सैर पूरी तरह बंद रखें। ब्लड प्रेशर की दवा समय पर लें और दोपहर की धूप में 20 मिनट टहलें।' 
            : 'Pause dawn walks entirely; maintain strict BP medicine timings; move strolls to 1:30 PM sun.'}
        </div>
      </div>

      <div class="medical-alert-card">
        <div class="med-header">
          <span class="med-icon" aria-hidden="true">🎒</span>
          <div>
            <h5 class="med-title">${isHi ? 'स्कूली व छोटे बच्चे' : 'Pediatric Airway Shield'}</h5>
            <span class="med-window-tag tag-blue">${isHi ? 'पीक जोखिम: सुबह बस स्टॉप पर' : 'School Commute: 7:00 AM - 8:30 AM'}</span>
          </div>
        </div>
        <p class="med-desc">
          ${isHi 
            ? 'बच्चों की सांस की नली बड़ों से एक-तिहाई पतली होती है। सुबह का धुआं उनमें रात को तेज खांसी (क्रूप) पैदा कर सकता है।' 
            : 'Children breathe at double adult respiration rates. Fine soot induces airway hyper-reactivity.'}
        </p>
        <div class="med-action-box">
          <strong>${isHi ? 'सुरक्षा कदम:' : 'Preventive Action:'}</strong>
          ${isHi 
            ? 'स्कूल बस के इंतजार में N95 मास्क पहनाएं। सुबह की आउटडोर असेंबली रद्द करने का अनुरोध करें।' 
            : 'Enforce fitted N95 mask at bus stop; provide warm honey-ginger water; suspend open assemblies.'}
        </div>
      </div>
    `;
  }

  function triggerEmergencyBanner(aqiVal, location) {
    const isHi = Store.state.lang === 'hi';
    const banner = DOM.emergencyAlertBanner;
    if (!banner) return;
    const title = document.getElementById('emergencyTitle');
    const desc = document.getElementById('emergencyDesc');

    if (title) {
      title.textContent = isHi 
        ? `🚨 गंभीर स्मॉग स्पाइक अलर्ट (AQI ${aqiVal}) - ${location}` 
        : `🚨 CRITICAL SMOG SPIKE DETECTED (AQI ${aqiVal}) - ${location}`;
    }

    if (desc) {
      desc.textContent = isHi 
        ? `जमीन पर तापमान इंवर्जन के कारण गाड़ियों का जहरीला धुआं जम गया है। बच्चों, बुजुर्गों और दमे के मरीजों को तुरंत घर के अंदर रखें।` 
        : `Severe ground inversion layer detected at 105m. Toxic particulates trapped at head height. Vulnerable family members must shelter indoors.`;
    }

    banner.classList.remove('hidden');

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const alertMsg = isHi 
        ? `सावधान। आज का वायु गुणवत्ता सूचकांक ${aqiVal} पर गंभीर हो गया है। कृपया घर के दरवाजे और खिड़कियां बंद रखें।` 
        : `Attention. Severe smog alert, air quality index has spiked to ${aqiVal}. Please keep family members indoors.`;
      const utterance = new SpeechSynthesisUtterance(alertMsg);
      utterance.lang = isHi ? 'hi-IN' : 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }

  // --- HOUSEHOLD COMPLIANCE TRACKER ENGINE ---
  function initComplianceTracker() {
    renderTrackerChecklists();
    updateTrackerScore();

    if (DOM.btnResetTracker) {
      DOM.btnResetTracker.addEventListener('click', () => {
        Store.state.trackerChecks = {};
        try { localStorage.removeItem('vayumitra_tracker_v1'); } catch (e) {}
        renderTrackerChecklists();
        updateTrackerScore();
        showToast(Store.state.lang === 'hi' ? "चेकलिस्ट रीसेट हो गई" : "Tracker checklist reset for tomorrow");
      });
    }

    if (DOM.btnShareTrackerScore) {
      DOM.btnShareTrackerScore.addEventListener('click', shareTrackerScore);
    }
  }

  function renderTrackerChecklists() {
    const isHi = Store.state.lang === 'hi';

    const renderPhase = (container, phaseNum) => {
      if (!container) return;
      const frag = document.createDocumentFragment();
      TRACKER_ITEMS.filter(it => it.phase === phaseNum).forEach(item => {
        const isChecked = !!Store.state.trackerChecks[item.id];
        const label = document.createElement('label');
        label.className = `tracker-item-label ${isChecked ? 'checked' : ''}`;
        label.setAttribute('data-id', item.id);
        label.innerHTML = `
          <input type="checkbox" class="tracker-checkbox" data-id="${item.id}" ${isChecked ? 'checked' : ''}>
          <span class="tracker-item-text">${isHi ? item.textHi : item.textEn}</span>
        `;
        const cb = label.querySelector('.tracker-checkbox');
        cb.addEventListener('change', (e) => {
          Store.state.trackerChecks[item.id] = e.target.checked;
          try {
            localStorage.setItem('vayumitra_tracker_v1', JSON.stringify(Store.state.trackerChecks));
          } catch (err) {}
          label.classList.toggle('checked', e.target.checked);
          updateTrackerScore();
        });
        frag.appendChild(label);
      });
      container.innerHTML = '';
      container.appendChild(frag);
    };

    renderPhase(DOM.phase1Items, 1);
    renderPhase(DOM.phase2Items, 2);
    renderPhase(DOM.phase3Items, 3);
  }

  function updateTrackerScore() {
    const total = TRACKER_ITEMS.length;
    let completed = 0;
    TRACKER_ITEMS.forEach(it => {
      if (Store.state.trackerChecks[it.id]) completed++;
    });

    const pct = Math.round((completed / total) * 100);
    const isHi = Store.state.lang === 'hi';

    if (DOM.scorePercentDisplay) DOM.scorePercentDisplay.textContent = `${pct}%`;
    if (DOM.scoreCircle) {
      const angle = (pct / 100) * 360;
      DOM.scoreCircle.style.background = `conic-gradient(#15803d ${angle}deg, #dcfce7 ${angle}deg)`;
    }

    if (DOM.shieldTierBadge && DOM.scoreSummaryText) {
      if (pct < 40) {
        DOM.shieldTierBadge.textContent = isHi ? "कमजोर • आज से नियम शुरू करें" : "Vulnerable • Start Routine";
        DOM.shieldTierBadge.style.backgroundColor = '#fee2e2';
        DOM.shieldTierBadge.style.color = '#991b1b';
        DOM.scoreSummaryText.textContent = isHi ? `${completed}/${total} नियम पूरे। कृपया सुबह के खिड़की बंद रखने और मास्क के नियम जरूर पूरे करें।` : `${completed}/${total} habits done. Prioritize window sealing and commute N95 rules today.`;
      } else if (pct < 75) {
        DOM.shieldTierBadge.textContent = isHi ? "आंशिक सुरक्षा • अच्छी प्रगति" : "Moderate Shield • Good Progress";
        DOM.shieldTierBadge.style.backgroundColor = '#fef3c7';
        DOM.shieldTierBadge.style.color = '#92400e';
        DOM.scoreSummaryText.textContent = isHi ? `${completed}/${total} नियम पूरे। दोपहर की धूप और पोछे के उपाय भी पूरे करें।` : `${completed}/${total} completed. Midday wet mopping and safe cross-ventilation will strengthen shield.`;
      } else {
        DOM.shieldTierBadge.textContent = isHi ? "मजबूत सुरक्षा कवच 🛡️ • शाबाश!" : "Master Air Guardian 🛡️ • Complete Shield!";
        DOM.shieldTierBadge.style.backgroundColor = '#dcfce7';
        DOM.shieldTierBadge.style.color = '#166534';
        DOM.scoreSummaryText.textContent = isHi ? `अद्भुत! ${completed}/${total} नियम पूरे। आपका परिवार आज के गंभीर स्मॉग से पूरी तरह सुरक्षित है।` : `Outstanding! ${completed}/${total} habits verified. Your household is strongly defended against toxic smog.`;
      }
    }
  }

  function shareTrackerScore() {
    const total = TRACKER_ITEMS.length;
    let completed = 0;
    TRACKER_ITEMS.forEach(it => {
      if (Store.state.trackerChecks[it.id]) completed++;
    });
    const pct = Math.round((completed / total) * 100);
    const isHi = Store.state.lang === 'hi';

    const text = isHi 
      ? `🛡️ *वायुमित्र - हमारे परिवार का आज का स्मॉग सुरक्षा स्कोर: ${pct}%*\n` +
        `✅ हमने 12 में से ${completed} सुरक्षा नियम पूरे कर लिए हैं!\n` +
        `🔥 आदत की निरंतरता: ${Store.state.trackerStreak} दिन लगातार\n` +
        `🌿 अपने परिवार के फेफड़ों को सुरक्षित रखने के लिए आज ही चेक करें: VayuMitra Clean Air Assistant`
      : `🛡️ *VayuMitra - Our Family's Daily Smog Defense Score: ${pct}%*\n` +
        `✅ Verified ${completed} of ${total} clean air safety habits today!\n` +
        `🔥 Streak: ${Store.state.trackerStreak} Days Consistent\n` +
        `🌿 Protect your loved ones with VayuMitra Urban Clean Air Assistant`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(isHi ? "स्कोर कॉपी हो गया!" : "Score copied to clipboard!");
      });
    }

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  }

  // --- COMMUNITY SMOG REPORTING ENGINE & OFFLINE QUEUE ---
  function initCommunityReporting() {
    Store.state.communityReports = [...INITIAL_REPORTS];

    try {
      const saved = localStorage.getItem('vayumitra_reports_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        Store.state.communityReports = [...parsed, ...INITIAL_REPORTS];
      }
    } catch (e) {}

    renderCommunityFeed();

    if (DOM.communityReportForm) {
      DOM.communityReportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = document.getElementById('reportType').value;
        const street = document.getElementById('reportStreet').value.trim();
        const severity = document.getElementById('reportSeverity').value;
        const notes = document.getElementById('reportNotes').value.trim();

        if (!street) {
          showToast(Store.state.lang === 'hi' ? "कृपया गली या पता दर्ज करें" : "Please enter street address");
          return;
        }

        const isOnline = navigator.onLine;
        const newReport = {
          id: `rep-${Date.now()}`,
          type,
          titleEn: getCategoryTitleEn(type),
          titleHi: getCategoryTitleHi(type),
          street,
          timeAgo: 'Just now',
          severity,
          notesEn: notes || 'Citizen reported localized smoke hazard affecting nearby homes.',
          notesHi: notes || 'नागरिक द्वारा स्थानीय स्तर पर जहरीले धुएं की शिकायत दर्ज की गई।',
          upvotes: 1,
          statusEn: isOnline ? 'Alert Dispatched to Municipal Ward Hub' : 'Saved Offline (Will sync when online)',
          statusHi: isOnline ? 'नगर निगम वार्ड केंद्र को अलर्ट भेजा गया' : 'ऑफलाइन सुरक्षित (कनेक्ट होने पर भेजा जाएगा)',
          isOfflineQueued: !isOnline
        };

        Store.state.communityReports.unshift(newReport);

        try {
          localStorage.setItem('vayumitra_reports_v1', JSON.stringify(Store.state.communityReports.slice(0, 10)));
          if (!isOnline) {
            const queue = JSON.parse(localStorage.getItem('vayumitra_offline_queue') || '[]');
            queue.push(newReport);
            localStorage.setItem('vayumitra_offline_queue', JSON.stringify(queue));
          }
        } catch (err) {}

        renderCommunityFeed();
        DOM.communityReportForm.reset();
        showToast(
          Store.state.lang === 'hi' 
            ? (isOnline ? "आपकी रिपोर्ट दर्ज हो गई व पड़ोसियों को अलर्ट भेजा गया!" : "रिपोर्ट ऑफलाइन सुरक्षित हो गई! ऑनलाइन होने पर भेज दी जाएगी।")
            : (isOnline ? "Report logged! Community & helpline alerted." : "Report saved offline! Queued for auto-sync.")
        );
      });
    }

    const btnUsePin = document.getElementById('btnUseCurrentPin');
    if (btnUsePin) {
      btnUsePin.addEventListener('click', () => {
        const streetInput = document.getElementById('reportStreet');
        if (streetInput) {
          if (Store.state.selectedStation) {
            streetInput.value = `${Store.state.selectedStation.nameEn} (${Store.state.selectedStation.street})`;
          } else {
            streetInput.value = "Main Ring Road near Local Society Gate";
          }
        }
      });
    }

    const btnOpenModal = document.getElementById('btnOpenReportModal');
    if (btnOpenModal) {
      btnOpenModal.addEventListener('click', () => {
        const card = document.getElementById('quickReportCard');
        if (card) {
          card.scrollIntoView({ behavior: 'smooth' });
          const inp = document.getElementById('reportStreet');
          if (inp) inp.focus();
        }
      });
    }

    document.querySelectorAll('.feed-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.feed-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        Store.state.activeFeedFilter = btn.getAttribute('data-filter');
        renderCommunityFeed();
      });
    });
  }

  function syncOfflineReports() {
    try {
      const queue = JSON.parse(localStorage.getItem('vayumitra_offline_queue') || '[]');
      if (queue.length > 0) {
        localStorage.removeItem('vayumitra_offline_queue');
        Store.state.communityReports.forEach(r => {
          if (r.isOfflineQueued) {
            r.isOfflineQueued = false;
            r.statusEn = 'Alert Dispatched to Municipal Ward Hub (Synced)';
            r.statusHi = 'नगर निगम वार्ड केंद्र को सफलतापूर्वक भेजा गया';
          }
        });
        renderCommunityFeed();
        showToast(Store.state.lang === 'hi' ? "ऑफलाइन रिपोर्ट्स सफलतापूर्वक सिंक हो गईं!" : "Offline reports successfully synced!");
      }
    } catch (e) {}
  }

  function getCategoryTitleEn(type) {
    if (type === 'waste-burning') return 'Open Waste / Leaf Burning';
    if (type === 'construction') return 'Uncovered Construction Dust';
    if (type === 'factory') return 'Industrial Boiler / Chimney Emission';
    if (type === 'vehicle') return 'Heavy Diesel Vehicle Smoke';
    return 'Dry Road Dust Dispersion';
  }

  function getCategoryTitleHi(type) {
    if (type === 'waste-burning') return 'खुले में कचरा या पत्ते जलाना';
    if (type === 'construction') return 'खुली निर्माण सामग्री व धूल';
    if (type === 'factory') return 'कारखाने की चिमनी का धुआं';
    if (type === 'vehicle') return 'गाड़ियों का अत्यधिक काला धुआं';
    return 'सड़क पर उड़ती सूखी धूल';
  }

  function renderCommunityFeed() {
    if (!DOM.communityFeedList) return;
    const isHi = Store.state.lang === 'hi';

    const filtered = Store.state.communityReports.filter(rep => {
      if (Store.state.activeFeedFilter === 'all') return true;
      return rep.type === Store.state.activeFeedFilter;
    });

    if (filtered.length === 0) {
      DOM.communityFeedList.innerHTML = `
        <div style="padding:2rem; text-align:center; color:#6e8480;">
          ${isHi ? 'इस श्रेणी में अभी कोई रिपोर्ट नहीं है।' : 'No reports in this category yet.'}
        </div>
      `;
      return;
    }

    const frag = document.createDocumentFragment();
    filtered.forEach(item => {
      let sevBadge = isHi ? 'गंभीर धुआं' : 'Severe Hazard';
      let sevClass = 'tag-red';
      if (item.severity === 'moderate') {
        sevBadge = isHi ? 'मध्यम' : 'Moderate';
        sevClass = 'tag-amber';
      }

      const card = document.createElement('div');
      card.className = 'feed-item-card';
      card.id = item.id;
      card.innerHTML = `
        <div class="feed-item-top">
          <span class="feed-category-tag ${sevClass}">${sevBadge} • ${isHi ? item.titleHi : item.titleEn}</span>
          <span class="feed-time">${item.timeAgo}</span>
        </div>
        <div class="feed-location">📍 ${item.street}</div>
        <p class="feed-desc">${isHi ? item.notesHi : item.notesEn}</p>
        <div class="feed-item-actions">
          <button type="button" class="btn-upvote" data-id="${item.id}">
            👍 <span>${isHi ? 'मैंने भी देखा' : 'I see this'} (${item.upvotes})</span>
          </button>
          <a href="https://api.whatsapp.com/send?text=${encodeURIComponent((isHi ? 'प्रदूषण शिकायत: ' : 'Smog Incident Report: ') + item.street + ' - ' + (isHi ? item.notesHi : item.notesEn))}" target="_blank" class="btn-helpline-alert">
            📞 <span>${isHi ? 'हेल्पलाइन फॉरवर्ड' : 'Alert Helpline'}</span>
          </a>
        </div>
      `;

      card.querySelector('.btn-upvote').addEventListener('click', () => {
        item.upvotes += 1;
        renderCommunityFeed();
        showToast(isHi ? "आपकी पुष्टि दर्ज हो गई (+1)" : "Thank you for confirming (+1)");
      });

      frag.appendChild(card);
    });

    DOM.communityFeedList.innerHTML = '';
    DOM.communityFeedList.appendChild(frag);
  }

  // --- LANGUAGE SWITCHING (CLEAR STATE PRESERVATION) ---
  function updateLanguage(newLang) {
    Store.setLang(newLang);
    const isHi = newLang === 'hi';

    if (isHi) {
      document.body.classList.remove('lang-en');
      document.body.classList.add('lang-hi');
      document.documentElement.lang = 'hi';
    } else {
      document.body.classList.remove('lang-hi');
      document.body.classList.add('lang-en');
      document.documentElement.lang = 'en';
    }

    const optEn = document.querySelector('.lang-opt-en');
    const optHi = document.querySelector('.lang-opt-hi');
    if (optEn && optHi) {
      if (isHi) {
        optEn.classList.remove('active');
        optHi.classList.add('active');
      } else {
        optHi.classList.remove('active');
        optEn.classList.add('active');
      }
    }

    // Update static i18n nodes without wiping form values
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[newLang] && I18N[newLang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = I18N[newLang][key];
        } else {
          el.innerHTML = I18N[newLang][key];
        }
      }
    });

    updateAqiSliderBadge();
    updateConnectivityUI(Store.state.isOnline);

    // Re-render components with state preserved
    if (Store.state.isGenerated && Store.state.currentPlan) {
      renderPlan(Store.state.currentPlan);
    }

    const stations = STREET_STATIONS[Store.state.currentCityKey] || STREET_STATIONS.delhi;
    renderMicroSensorsGrid(stations);
    if (Store.state.selectedStation) selectStation(Store.state.selectedStation);
    renderForecastTimeline();
    renderMedicalRiskGrid();
    renderTrackerChecklists();
    updateTrackerScore();
    renderCommunityFeed();

    if (Store.state.isSpeaking) stopSpeech();
  }

  // --- FONT SIZE ACCESSIBILITY ---
  function setFontSize(size) {
    Store.setFontSize(size);
    const btnNormal = document.getElementById('btnTextNormal');
    const btnLarge = document.getElementById('btnTextLarge');

    if (size === 'large') {
      document.body.classList.add('font-large');
      if (btnLarge) btnLarge.classList.add('active');
      if (btnNormal) btnNormal.classList.remove('active');
    } else {
      document.body.classList.remove('font-large');
      if (btnNormal) btnNormal.classList.add('active');
      if (btnLarge) btnLarge.classList.remove('active');
    }
  }

  // --- RAF DEBOUNCED SLIDER & BADGE LOGIC ---
  let sliderRaf = null;

  function updateAqiSliderBadge() {
    if (!DOM.aqiSlider) return;
    const val = parseInt(DOM.aqiSlider.value, 10);
    Store.state.formData.aqi = val;

    const isHi = Store.state.lang === 'hi';
    let statusEn = 'Moderate';
    let statusHi = 'मध्यम';
    let colorClass = 'text-severe';

    if (val < 200) {
      statusEn = 'Moderate';
      statusHi = 'मध्यम';
      colorClass = 'text-moderate';
    } else if (val < 300) {
      statusEn = 'Poor';
      statusHi = 'खराब';
      colorClass = 'text-poor';
    } else if (val < 400) {
      statusEn = 'Very Poor';
      statusHi = 'बहुत खराब';
      colorClass = 'text-severe';
    } else {
      statusEn = 'Severe Smog';
      statusHi = 'गंभीर स्मॉग';
      colorClass = 'text-severe';
    }

    if (DOM.aqiSliderDisplay) {
      DOM.aqiSliderDisplay.textContent = isHi ? `AQI ${val} (${statusHi})` : `AQI ${val} (${statusEn})`;
      DOM.aqiSliderDisplay.className = `aqi-display-text ${colorClass}`;
    }

    const cityKey = DOM.citySelect ? DOM.citySelect.value : 'delhi-anand-vihar';
    const cityName = (cityKey !== 'custom' && CITY_PRESETS[cityKey]) 
      ? (isHi ? CITY_PRESETS[cityKey].nameHi : CITY_PRESETS[cityKey].nameEn)
      : (isHi ? 'आपका शहर' : 'Local Area');

    if (DOM.headerAqi) {
      DOM.headerAqi.innerHTML = `${cityName} AQI: <strong>${val} (${isHi ? statusHi : statusEn})</strong>`;
    }
    if (DOM.dialNum) DOM.dialNum.textContent = val;
    if (DOM.dialBadge) DOM.dialBadge.textContent = isHi ? statusHi : statusEn;
    if (DOM.dialFill) {
      const pct = Math.min(100, Math.max(10, (val / 500) * 100));
      DOM.dialFill.style.width = `${pct}%`;
    }
  }

  function handleSliderInputDebounced() {
    if (sliderRaf) cancelAnimationFrame(sliderRaf);
    sliderRaf = requestAnimationFrame(() => {
      updateAqiSliderBadge();
    });
  }

  // --- AUDIO TEXT-TO-SPEECH (TTS) FOR ELDERS ---
  function playSpeechPlan() {
    if (!('speechSynthesis' in window)) {
      showToast(Store.state.lang === 'hi' ? "इस ब्राउज़र में ऑडियो सपोर्ट उपलब्ध नहीं है।" : "Audio speech is not supported in this browser.");
      return;
    }

    if (Store.state.isSpeaking) {
      stopSpeech();
      return;
    }

    const plan = Store.state.currentPlan;
    if (!plan) return;

    const isHi = Store.state.lang === 'hi';
    let speechText = isHi 
      ? `वायुमित्र दैनिक सुरक्षा योजना। स्थान: ${plan.cityText}। वायु सूचकांक: ${plan.aqi}। `
      : `VayuMitra Daily Action Plan for ${plan.cityText}. Smog AQI is ${plan.aqi}. `;

    speechText += isHi ? "कम उत्सर्जन दिनचर्या: " : "Low Emission Routines: ";
    plan.routines.slice(0, 2).forEach(t => {
      speechText += (isHi ? `${t.titleHi}। ${t.whyHi} ` : `${t.titleEn}. ${t.whyEn} `);
    });

    speechText += isHi ? "घर की हवा के उपाय: " : "Indoor Air Hacks: ";
    plan.indoorHacks.slice(0, 2).forEach(t => {
      speechText += (isHi ? `${t.titleHi}। ${t.whyHi} ` : `${t.titleEn}. ${t.whyEn} `);
    });

    speechText += isHi ? "स्वच्छ विकल्प: " : "Clean Swaps: ";
    plan.swaps.slice(0, 2).forEach(t => {
      speechText += (isHi ? `${t.titleHi}। ` : `${t.titleEn}. `);
    });

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = isHi ? 'hi-IN' : 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => {
      Store.state.isSpeaking = false;
      updateSpeechBtnUI();
    };

    utterance.onerror = () => {
      Store.state.isSpeaking = false;
      updateSpeechBtnUI();
    };

    Store.state.speechUtterance = utterance;
    Store.state.isSpeaking = true;
    updateSpeechBtnUI();
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    Store.state.isSpeaking = false;
    updateSpeechBtnUI();
  }

  function updateSpeechBtnUI() {
    if (!DOM.btnReadAloud) return;
    const label = DOM.btnReadAloud.querySelector('.tool-label');
    const isHi = Store.state.lang === 'hi';

    if (Store.state.isSpeaking) {
      DOM.btnReadAloud.style.backgroundColor = '#fee2e2';
      DOM.btnReadAloud.style.borderColor = '#f87171';
      if (label) label.textContent = isHi ? I18N.hi.stopListening : I18N.en.stopListening;
    } else {
      DOM.btnReadAloud.style.backgroundColor = '';
      DOM.btnReadAloud.style.borderColor = '';
      if (label) label.textContent = isHi ? I18N.hi.listenPlan : I18N.en.listenPlan;
    }
  }

  // --- WHATSAPP & SHARE GENERATOR ---
  function shareOnWhatsApp() {
    const plan = Store.state.currentPlan;
    if (!plan) return;

    const isHi = Store.state.lang === 'hi';
    const text = isHi 
      ? `🌿 *वायुमित्र - आज के स्मॉग से परिवार की सुरक्षा योजना*\n` +
        `📍 *स्थान:* ${plan.cityText} | *AQI:* ${plan.aqi}\n\n` +
        `🚲 *1. दिनचर्या:* ${plan.routines[0].titleHi}\n` +
        `💡 *यह क्यों जरूरी है:* ${plan.routines[0].whyHi}\n\n` +
        `🏡 *2. घरेलू उपाय:* ${plan.indoorHacks[0].titleHi}\n` +
        `💡 *यह क्यों जरूरी है:* ${plan.indoorHacks[0].whyHi}\n\n` +
        `🌱 *3. स्वच्छ विकल्प:* ${plan.swaps[0].titleHi}\n\n` +
        `🔗 *पूरा प्लान देखें:* VayuMitra Clean Air App`
      : `🌿 *VayuMitra - Today's Family Smog Shield*\n` +
        `📍 *Location:* ${plan.cityText} | *AQI:* ${plan.aqi}\n\n` +
        `🚲 *1. Routine:* ${plan.routines[0].titleEn}\n` +
        `💡 *Why It Matters:* ${plan.routines[0].whyEn}\n\n` +
        `🏡 *2. Indoor Hack:* ${plan.indoorHacks[0].titleEn}\n` +
        `💡 *Why It Matters:* ${plan.indoorHacks[0].whyEn}\n\n` +
        `🌱 *3. Clean Swap:* ${plan.swaps[0].titleEn}\n\n` +
        `🔗 *Generated via VayuMitra Clean Air Assistant*`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(isHi ? I18N.hi.copiedToast : I18N.en.copiedToast);
      });
    }

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  }

  // --- TOAST NOTIFICATION ---
  let toastTimeout = null;
  function showToast(msg) {
    if (!DOM.toast || !DOM.toastMessage) return;
    DOM.toastMessage.textContent = msg;
    DOM.toast.classList.remove('hidden');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      DOM.toast.classList.add('hidden');
    }, 3200);
  }

  // --- FORM DATA EXTRACTION ---
  function getFormData() {
    let cityName = '';
    const isHi = Store.state.lang === 'hi';
    const cityKey = DOM.citySelect ? DOM.citySelect.value : 'delhi-anand-vihar';

    if (cityKey === 'custom') {
      cityName = (DOM.customCityInput ? DOM.customCityInput.value.trim() : '') || (isHi ? 'मेरा शहर' : 'Local City');
    } else {
      const preset = CITY_PRESETS[cityKey];
      cityName = isHi ? preset.nameHi : preset.nameEn;
    }

    const aqi = DOM.aqiSlider ? parseInt(DOM.aqiSlider.value, 10) : 385;

    const household = [];
    document.querySelectorAll('input[name="household"]:checked').forEach(cb => {
      household.push(cb.value);
    });

    const commuteMode = document.getElementById('commuteMode')?.value || 'two-wheeler';
    const commuteTime = document.getElementById('commuteTime')?.value || 'early-morning';
    const cookingSetup = document.getElementById('cookingSetup')?.value || 'lpg-no-exhaust';
    const heatingSetup = document.getElementById('heatingSetup')?.value || 'halogen';
    const exerciseHabit = document.getElementById('exerciseHabit')?.value || 'early-walk';
    const ventilationHabit = document.getElementById('ventilationHabit')?.value || 'morning-open';

    Store.state.formData = {
      cityKey,
      cityName,
      aqi,
      household,
      commuteMode,
      commuteTime,
      cookingSetup,
      heatingSetup,
      exerciseHabit,
      ventilationHabit
    };

    return Store.state.formData;
  }

  function refreshActiveData() {
    const stations = STREET_STATIONS[Store.state.currentCityKey] || STREET_STATIONS.delhi;
    syncLiveStationData(stations);
  }

  // --- INITIALIZATION ---
  function init() {
    Store.init();
    cacheDom();

    // Setup network offline & online detection
    setupNetworkListeners();

    // Restore saved settings
    if (Store.state.fontSize === 'large') {
      setFontSize('large');
    }
    if (Store.state.lang === 'hi') {
      updateLanguage('hi');
    }

    // Language Toggle
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = Store.state.lang === 'en' ? 'hi' : 'en';
        updateLanguage(nextLang);
      });
    }

    // Font Size Toggles
    const btnNormal = document.getElementById('btnTextNormal');
    const btnLarge = document.getElementById('btnTextLarge');
    if (btnNormal) btnNormal.addEventListener('click', () => setFontSize('normal'));
    if (btnLarge) btnLarge.addEventListener('click', () => setFontSize('large'));

    // City Dropdown Handler
    if (DOM.citySelect) {
      DOM.citySelect.addEventListener('change', () => {
        if (DOM.citySelect.value === 'custom') {
          if (DOM.customCityWrap) DOM.customCityWrap.classList.remove('hidden');
          if (DOM.customCityInput) DOM.customCityInput.focus();
        } else {
          if (DOM.customCityWrap) DOM.customCityWrap.classList.add('hidden');
          if (CITY_PRESETS[DOM.citySelect.value]) {
            if (DOM.aqiSlider) {
              DOM.aqiSlider.value = CITY_PRESETS[DOM.citySelect.value].aqi;
            }
            updateAqiSliderBadge();
          }
        }
      });
    }

    // Debounced AQI Slider Input
    if (DOM.aqiSlider) {
      DOM.aqiSlider.addEventListener('input', handleSliderInputDebounced);
    }

    // Form Submit Handler
    if (DOM.vayuForm) {
      DOM.vayuForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = getFormData();
        const plan = generateRecommendations(formData);
        Store.state.currentPlan = plan;
        renderPlan(plan);
        if (DOM.resultsSection) {
          DOM.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Reset Form Defaults
    const btnReset = document.getElementById('btnResetForm');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (DOM.citySelect) DOM.citySelect.value = 'delhi-anand-vihar';
        if (DOM.customCityWrap) DOM.customCityWrap.classList.add('hidden');
        if (DOM.aqiSlider) DOM.aqiSlider.value = 385;
        updateAqiSliderBadge();

        document.querySelectorAll('input[name="household"]').forEach(cb => {
          cb.checked = (cb.value === 'kids' || cb.value === 'elders' || cb.value === 'asthma');
        });

        const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
        setVal('commuteMode', 'two-wheeler');
        setVal('commuteTime', 'early-morning');
        setVal('cookingSetup', 'lpg-no-exhaust');
        setVal('heatingSetup', 'halogen');
        setVal('exerciseHabit', 'early-walk');
        setVal('ventilationHabit', 'morning-open');

        showToast(Store.state.lang === 'hi' ? "डिफ़ॉल्ट सेटिंग्स लोड हो गईं" : "Reset to default settings");
      });
    }

    // Edit Inputs Link
    const btnEdit = document.getElementById('btnEditInputs');
    if (btnEdit) {
      btnEdit.addEventListener('click', () => {
        const assessment = document.getElementById('assessmentSection');
        if (assessment) assessment.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Collapsible DIY Guide
    const btnDiy = document.getElementById('btnViewDiyGuide');
    const diyPanel = document.getElementById('diyModalSteps');
    if (btnDiy && diyPanel) {
      btnDiy.addEventListener('click', () => {
        const isHidden = diyPanel.classList.contains('hidden');
        if (isHidden) {
          diyPanel.classList.remove('hidden');
          btnDiy.textContent = Store.state.lang === 'hi' ? "विवरण बंद करें" : "Hide DIY Steps";
        } else {
          diyPanel.classList.add('hidden');
          btnDiy.textContent = Store.state.lang === 'hi' ? I18N.hi.btnDiyGuide : I18N.en.btnDiyGuide;
        }
      });
    }

    // Results Tools: Read Aloud, WhatsApp, Print
    if (DOM.btnReadAloud) DOM.btnReadAloud.addEventListener('click', playSpeechPlan);
    const btnWhatsApp = document.getElementById('btnShareWhatsApp');
    if (btnWhatsApp) btnWhatsApp.addEventListener('click', shareOnWhatsApp);
    const btnPrint = document.getElementById('btnPrintPlan');
    if (btnPrint) btnPrint.addEventListener('click', () => window.print());

    // Map City Switcher
    if (DOM.mapCitySelector) {
      DOM.mapCitySelector.addEventListener('change', () => {
        Store.state.currentCityKey = DOM.mapCitySelector.value;
        initHyperlocalMap();
      });
    }

    // Radar Mode Toggle
    if (DOM.btnToggleRadar) {
      DOM.btnToggleRadar.addEventListener('click', () => {
        Store.state.radarMode = !Store.state.radarMode;
        const isHi = Store.state.lang === 'hi';
        if (DOM.toggleRadarText) {
          DOM.toggleRadarText.textContent = Store.state.radarMode
            ? (isHi ? I18N.hi.btnMapView : I18N.en.btnMapView)
            : (isHi ? I18N.hi.btnRadarView : I18N.en.btnRadarView);
        }
        initHyperlocalMap();
      });
    }

    // Locate Street Button
    if (DOM.btnLocateStreet) {
      DOM.btnLocateStreet.addEventListener('click', () => {
        const stations = STREET_STATIONS[Store.state.currentCityKey] || STREET_STATIONS.delhi;
        const target = stations[0];
        selectStation(target);
        if (mapInstance && !Store.state.radarMode) {
          mapInstance.flyTo([target.lat, target.lng], 14);
        }
        showToast(Store.state.lang === 'hi' ? `नजदीकी सेंसर ढूंढा गया: ${target.nameHi}` : `Located nearest station: ${target.nameEn}`);
      });
    }

    // Navigation Smooth Scroll & Active Indicator
    document.querySelectorAll('.nav-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });

    // Initialize all modules
    initHyperlocalMap();
    initPredictiveAlerts();
    initComplianceTracker();
    initCommunityReporting();

    // Initial Plan Generation & Dial Sync
    const initialData = getFormData();
    Store.state.currentPlan = generateRecommendations(initialData);
    renderPlan(Store.state.currentPlan);
    updateAqiSliderBadge();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
