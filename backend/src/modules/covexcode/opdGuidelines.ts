// AUTO-CURATED & VERIFIED VIA JEEVIKA /api/v1/covex/consult & Covexcode copilot (bx-live...46801a)
// Generated at: 2026-11-27T13:38:48.037Z

export interface OpdClinicalGuideline {
  specialty: string;
  condition: string;
  icd10Code: string;
  diagnosticWorkup: string[];
  firstLineRegimenPmbjp: string[];
  redFlagReferralTriggers: string[];
  followUpInterval: string;
  patientCounselingHiEn: string;
}

export interface OpdConsultBenchmark {
  caseId: string;
  specialty: string;
  patientSummary: string;
  differentialDiagnoses: string[];
  recommendedPlan: string;
  pmbjpGenericsUsed: string[];
}

export const ICMR_OPD_GUIDELINES: OpdClinicalGuideline[] = [
  {
    "specialty": "General Medicine & Fever Syndromes",
    "condition": "Type 2 Diabetes Mellitus",
    "icd10Code": "E11.9",
    "diagnosticWorkup": [
      "HbA1c",
      "Fasting plasma glucose or 2-hour OGTT",
      "Serum creatinine/eGFR and urine albumin-to-creatinine ratio"
    ],
    "firstLineRegimenPmbjp": [
      "Metformin Hydrochloride 500 mg tablet — 500 mg PO once daily with meals initially; titrate to 500–1000 mg PO twice daily as tolerated"
    ],
    "redFlagReferralTriggers": [
      "Symptoms of diabetic ketoacidosis or hyperosmolar hyperglycemic state: vomiting, abdominal pain, deep breathing, altered sensorium",
      "Severe hypoglycemia or recurrent hypoglycemia",
      "Foot ulcer, gangrene, spreading infection, or suspected acute coronary syndrome"
    ],
    "followUpInterval": "Review in 3 months; earlier if glucose uncontrolled or medicines changed",
    "patientCounselingHiEn": "Take metformin regularly with meals; monitor sugars and foot care. दवाई नियमित भोजन के साथ लें; शुगर जांचते रहें और पैरों की देखभाल करें।"
  },
  {
    "specialty": "General Medicine & Fever Syndromes",
    "condition": "Essential Hypertension",
    "icd10Code": "I10",
    "diagnosticWorkup": [
      "Repeated office BP measurements or home BP monitoring",
      "Serum creatinine/eGFR and electrolytes",
      "ECG; urine albumin-to-creatinine ratio if diabetes or CKD suspected"
    ],
    "firstLineRegimenPmbjp": [
      "Amlodipine 5 mg tablet — 5 mg PO once daily",
      "Telmisartan 40 mg tablet — 40 mg PO once daily"
    ],
    "redFlagReferralTriggers": [
      "BP ≥180/120 mmHg with chest pain, breathlessness, neurological deficit, or visual disturbance",
      "Suspected stroke, acute coronary syndrome, pulmonary edema, or aortic dissection",
      "Acute kidney injury, papilledema, or pregnancy with severe hypertension"
    ],
    "followUpInterval": "Review in 2–4 weeks until BP controlled, then every 3 months",
    "patientCounselingHiEn": "Reduce salt, exercise regularly, avoid tobacco/alcohol, and take BP medicines daily. नमक कम करें, नियमित व्यायाम करें, तंबाकू/शराब से बचें और बीपी की दवा रोज लें।"
  },
  {
    "specialty": "General Medicine & Fever Syndromes",
    "condition": "Primary Hypothyroidism",
    "icd10Code": "E03.9",
    "diagnosticWorkup": [
      "Serum TSH",
      "Free T4",
      "Anti-TPO antibody if autoimmune thyroid disease suspected; baseline lipid profile"
    ],
    "firstLineRegimenPmbjp": [
      "Levothyroxine Sodium 50 mcg tablet — 50 mcg PO once daily on empty stomach 30–60 minutes before breakfast; adjust dose by age, cardiac status, and TSH"
    ],
    "redFlagReferralTriggers": [
      "Suspected myxedema coma: hypothermia, severe bradycardia, hypotension, altered sensorium",
      "New chest pain, unstable angina, or arrhythmia after starting levothyroxine",
      "Pregnancy or planning pregnancy with abnormal TSH"
    ],
    "followUpInterval": "Review TSH in 6–8 weeks after starting or changing dose; then every 6 months when stable",
    "patientCounselingHiEn": "Take levothyroxine daily on an empty stomach; do not stop without advice. लेवोथायरॉक्सिन रोज खाली पेट लें; बिना सलाह दवा बंद न करें।"
  },
  {
    "specialty": "General Medicine & Fever Syndromes",
    "condition": "Chronic Obstructive Pulmonary Disease (Stable)",
    "icd10Code": "J44.9",
    "diagnosticWorkup": [
      "Post-bronchodilator spirometry showing FEV1/FVC <0.70",
      "Chest X-ray",
      "CBC and SpO2; ABG if severe disease or exacerbation suspected"
    ],
    "firstLineRegimenPmbjp": [
      "Salbutamol 100 mcg MDI — 2 puffs inhaled every 4–6 hours as needed",
      "Tiotropium Bromide 18 mcg inhalation capsule — 18 mcg inhaled once daily"
    ],
    "redFlagReferralTriggers": [
      "Acute exacerbation with SpO2 <90%, confusion, cyanosis, accessory muscle use, or inability to speak",
      "Hemoptysis, suspected lung cancer, or unexplained weight loss",
      "Respiratory failure, altered sensorium, or poor response to initial bronchodilator therapy"
    ],
    "followUpInterval": "Review in 4–6 weeks after initiation, then every 3–6 months",
    "patientCounselingHiEn": "Stop smoking, use inhalers correctly, and seek help early for worsening breathlessness. धूम्रपान बंद करें, इनहेलर सही तरीके से लें और सांस बढ़ने पर तुरंत डॉक्टर से मिलें।"
  },
  {
    "specialty": "Thyroid & Endocrinology",
    "condition": "Type 2 Diabetes Mellitus (T2DM)",
    "icd10Code": "E11.9",
    "diagnosticWorkup": [
      "Fasting plasma glucose ≥126 mg/dL or 75-g OGTT 2-hour glucose ≥200 mg/dL",
      "HbA1c ≥6.5% (repeat/confirm if asymptomatic)",
      "Baseline serum creatinine/eGFR and urine albumin-to-creatinine ratio"
    ],
    "firstLineRegimenPmbjp": [
      "Metformin Hydrochloride 500 mg tablet (Jan Aushadhi): 500 mg orally once daily with evening meal; titrate to 500 mg twice daily as tolerated; max 2000 mg/day"
    ],
    "redFlagReferralTriggers": [
      "Diabetic ketoacidosis/hyperosmolar symptoms: vomiting, abdominal pain, deep breathing, confusion",
      "Severe hypoglycemia with altered sensorium, seizures, or inability to take orally",
      "Foot ulcer with spreading infection/gangrene or acute chest pain/stroke symptoms"
    ],
    "followUpInterval": "Review in 4 weeks initially; HbA1c every 3 months until at goal, then every 6 months",
    "patientCounselingHiEn": "Take metformin with meals; check sugars regularly; walk 30 minutes daily; avoid sugary drinks; report weakness/sweating. Hindi: मेटफॉर्मिन भोजन के साथ लें; शुगर नियमित जांचें; रोज़ 30 मिनट चलें; मीठे पेय कम करें; कमजोरी/पसीना हो तो बताएं।"
  },
  {
    "specialty": "Thyroid & Endocrinology",
    "condition": "Hyperthyroidism / Thyrotoxicosis",
    "icd10Code": "E05.9",
    "diagnosticWorkup": [
      "Serum TSH suppressed with free T4 and/or free T3",
      "TRAb or anti-TPO to assess Graves disease/autoimmune etiology",
      "Baseline CBC and liver function tests before starting carbimazole"
    ],
    "firstLineRegimenPmbjp": [
      "Carbimazole 10 mg tablet (Jan Aushadhi): 10–20 mg orally once daily initially, or 5–10 mg every 8–12 hours; adjust by FT4/TSH",
      "Propranolol 20 mg tablet (Jan Aushadhi): 20–40 mg orally every 8–12 hours for palpitations/tremor if no asthma/COPD/bradycardia"
    ],
    "redFlagReferralTriggers": [
      "Thyroid storm: fever, marked tachycardia/atrial fibrillation, agitation/delirium, vomiting/diarrhea",
      "Fever/sore throat on carbimazole—stop drug and urgent CBC for agranulocytosis",
      "Jaundice, severe rash, or heart failure/atrial fibrillation"
    ],
    "followUpInterval": "Review in 4–6 weeks with FT4/TSH; urgent CBC if fever/sore throat",
    "patientCounselingHiEn": "Take carbimazole regularly; report fever/sore throat immediately; avoid excess iodine; propranolol helps palpitations but do not stop suddenly. Hindi: कार्बिमाज़ोल नियमित लें; बुखार/गले में दर्द हो तो तुरंत बताएं; अधिक आयोडीन से बचें; प्रोप्रानोलोल धड़कन के लिए है, अचानक बंद न करें।"
  },
  {
    "specialty": "Cardiology & Hypertension (ICMR)",
    "condition": "Chronic Stable Angina",
    "icd10Code": "I20.8",
    "diagnosticWorkup": [
      "Resting 12-lead ECG",
      "Exercise stress ECG or stress echocardiography if feasible",
      "Fasting lipid profile and HbA1c/fasting glucose"
    ],
    "firstLineRegimenPmbjp": [
      "Aspirin 75 mg PO once daily",
      "Atorvastatin 40 mg PO once daily at night",
      "Metoprolol 25–50 mg PO twice daily",
      "Nitroglycerin 0.5 mg sublingual as needed for angina"
    ],
    "redFlagReferralTriggers": [
      "Chest pain at rest lasting >20 min or pain with sweating, nausea, or vomiting",
      "New ECG changes, hypotension, arrhythmia, syncope, or suspected acute coronary syndrome",
      "Angina limiting minimal activity or new-onset heart failure symptoms"
    ],
    "followUpInterval": "Review in 2–4 weeks after starting therapy, then every 3–6 months",
    "patientCounselingHiEn": "Use sublingual nitroglycerin for chest pain and sit down first; stop activity and seek emergency care if pain persists >15 min. Take statin and aspirin daily; stop smoking. सीने में दर्द पर नाइट्रोग्लिसरीन जीभ के नीचे रखें और बैठ जाएं; 15 मिनट में दर्द न रुके तो तुरंत अस्पताल जाएं। दवा रोज़ लें; धूम्रपान बंद करें।"
  },
  {
    "specialty": "Cardiology & Hypertension (ICMR)",
    "condition": "Chronic Heart Failure with Reduced Ejection Fraction",
    "icd10Code": "I50.9",
    "diagnosticWorkup": [
      "Echocardiography with LVEF assessment",
      "12-lead ECG",
      "Serum creatinine/eGFR and serum potassium"
    ],
    "firstLineRegimenPmbjp": [
      "Furosemide 20–40 mg PO once daily for congestion",
      "Enalapril 2.5–5 mg PO twice daily, titrate as tolerated",
      "Carvedilol 3.125 mg PO twice daily, titrate slowly",
      "Spironolactone 25 mg PO once daily if eGFR >30 and K+ <5.0"
    ],
    "redFlagReferralTriggers": [
      "Dyspnea at rest, SpO2 <90%, or suspected pulmonary edema",
      "Systolic BP <90 mmHg, oliguria, worsening renal function, or syncope",
      "Rapid weight gain >2 kg in 3 days or new arrhythmia"
    ],
    "followUpInterval": "Review in 1–2 weeks after initiation/titration, then every 1–3 months",
    "patientCounselingHiEn": "Weigh yourself daily; report rapid weight gain or worsening breathlessness; restrict salt and avoid NSAIDs. Take medicines regularly. रोज़ वज़न करें; वज़न तेज़ी से बढ़े या सांस बढ़े तो डॉक्टर को बताएं; नमक कम लें; दर्द की दवा (NSAID) बिना पूछे न लें; दवा नियमित लें।"
  },
  {
    "specialty": "Cardiology & Hypertension (ICMR)",
    "condition": "Dyslipidemia",
    "icd10Code": "E78.5",
    "diagnosticWorkup": [
      "Fasting lipid profile: total cholesterol, LDL-C, HDL-C, triglycerides",
      "HbA1c or fasting plasma glucose",
      "ALT and serum creatinine before starting statin"
    ],
    "firstLineRegimenPmbjp": [
      "Atorvastatin 20 mg PO once daily at night",
      "Atorvastatin 40 mg PO once daily at night if high ASCVD risk or LDL-C ≥190 mg/dL",
      "Fenofibrate 160 mg PO once daily only if triglycerides >500 mg/dL after diet review"
    ],
    "redFlagReferralTriggers": [
      "LDL-C ≥190 mg/dL or suspected familial hypercholesterolemia",
      "Triglycerides >1000 mg/dL with abdominal pain or suspected pancreatitis",
      "Statin-associated severe muscle pain with dark urine or ALT >3× upper limit"
    ],
    "followUpInterval": "Review in 4–12 weeks after starting statin with repeat lipid profile",
    "patientCounselingHiEn": "Take statin at night; eat less fried food and more vegetables/fiber; exercise 30 min daily; report unexplained muscle pain. स्टैटिन रात में लें; तला-भुना कम खाएं; सब्ज़ी/फाइबर बढ़ाएं; रोज़ 30 मिनट व्यायाम करें; मांसपेशियों में असामान्य दर्द हो तो बताएं।"
  },
  {
    "specialty": "Dermatology & Cutaneous Infections",
    "condition": "Tinea corporis/cruris (dermatophytosis)",
    "icd10Code": "B35.4",
    "diagnosticWorkup": [
      "KOH mount of skin scrapings from active edge",
      "Fungal culture if recurrent, atypical, or treatment failure",
      "Baseline LFT if oral terbinafine/azole planned beyond 2 weeks"
    ],
    "firstLineRegimenPmbjp": [
      "Terbinafine 1% cream apply thin layer BD for 2–4 weeks for localized lesions",
      "Terbinafine 250 mg tablet PO OD after food for 2 weeks if extensive or moccasin-type",
      "Fluconazole 150 mg tablet PO once weekly for 2–4 weeks if terbinafine not suitable"
    ],
    "redFlagReferralTriggers": [
      "Extensive disease (>10% BSA) or facial/scalp involvement",
      "No improvement after 4 weeks of adherent therapy or worsening on steroids",
      "Immunocompromised patient, suspected deep fungal infection, or secondary cellulitis"
    ],
    "followUpInterval": "Review in 2–4 weeks",
    "patientCounselingHiEn": "Keep lesions dry and uncovered; complete full course even if itching improves; do not apply steroid creams. Lesions ko sukha rakhein, poora course lein, steroid cream na lagayein."
  },
  {
    "specialty": "Dermatology & Cutaneous Infections",
    "condition": "Scabies",
    "icd10Code": "B86",
    "diagnosticWorkup": [
      "Clinical diagnosis: nocturnal itch with burrows in web spaces/genitals",
      "Mineral-oil skin scraping or dermoscopy for mites, eggs, or scybala",
      "CBC/LFT only if ivermectin planned or secondary bacterial infection suspected"
    ],
    "firstLineRegimenPmbjp": [
      "Permethrin 5% cream apply neck-down overnight from neck to toes, wash after 8–12 hours; repeat after 7 days",
      "Benzyl benzoate 25% lotion apply neck-down for 24 hours; repeat after 7 days if permethrin unavailable",
      "Cetirizine 10 mg tablet PO OD at night for itch; Ivermectin 200 mcg/kg PO single dose repeat after 7 days for crusted scabies/outbreaks"
    ],
    "redFlagReferralTriggers": [
      "Crusted/Norwegian scabies or immunocompromised patient",
      "Secondary bacterial infection, cellulitis, fever, or sepsis",
      "Pregnancy, infants, or extensive eczema requiring modified therapy"
    ],
    "followUpInterval": "Review in 2 weeks; repeat treatment at 7 days",
    "patientCounselingHiEn": "Treat all household and close contacts on the same day; wash clothes/bedding in hot water and sun-dry; itching may persist 2–4 weeks. Saare ghar walon ka ek saath ilaaj karein, kapde garam paani se dhoyein."
  },
  {
    "specialty": "Dermatology & Cutaneous Infections",
    "condition": "Acne vulgaris",
    "icd10Code": "L70.0",
    "diagnosticWorkup": [
      "Clinical diagnosis: comedones, papules, pustules, nodules, scarring",
      "Serum total testosterone and LH/FSH if PCOS signs present",
      "Baseline LFT, CBC, lipids if oral isotretinoin is being considered"
    ],
    "firstLineRegimenPmbjp": [
      "Benzoyl peroxide 2.5% gel apply thin layer OD to affected area for 6–8 weeks",
      "Clindamycin 1% gel apply BD for 6–8 weeks for inflammatory acne",
      "Doxycycline 100 mg capsule PO OD after food for 6–12 weeks for moderate inflammatory acne"
    ],
    "redFlagReferralTriggers": [
      "Nodulocystic acne, severe scarring, or acne fulminans with fever/arthralgia",
      "Suspected PCOS, hyperandrogenism, or endocrine disorder",
      "Significant depression or suicidal ideation"
    ],
    "followUpInterval": "Review in 4–6 weeks",
    "patientCounselingHiEn": "Wash face gently twice daily; avoid picking lesions; use sunscreen; continue treatment for at least 6–8 weeks. Chehra halke se dhoyein, pimples na nochein, dhoop se bachayein."
  },
  {
    "specialty": "Dermatology & Cutaneous Infections",
    "condition": "Impetigo",
    "icd10Code": "L01.0",
    "diagnosticWorkup": [
      "Clinical diagnosis: honey-crusted or bullous lesions",
      "Gram stain and culture of pus/vesicle fluid if severe, recurrent, or treatment failure",
      "Urinalysis if post-streptococcal glomerulonephritis is suspected"
    ],
    "firstLineRegimenPmbjp": [
      "Mupirocin 2% ointment apply TDS for 5–7 days for localized impetigo",
      "Cephalexin 500 mg capsule PO QID for 7 days if extensive or multiple lesions",
      "Amoxicillin-clavulanate 625 mg tablet PO TDS for 7 days if cephalexin not suitable"
    ],
    "redFlagReferralTriggers": [
      "Bullous impetigo, cellulitis, abscess, or systemic fever",
      "Extensive disease, neonatal impetigo, or immunocompromised patient",
      "Suspected post-streptococcal glomerulonephritis with edema or hematuria"
    ],
    "followUpInterval": "Review in 48–72 hours if no improvement; otherwise 1 week",
    "patientCounselingHiEn": "Keep lesions clean and covered; wash hands frequently; do not share towels; complete full antibiotic course. Ghaav saaf rakhein, haath dhoyein, towel share na karein."
  },
  {
    "specialty": "ENT & Ophthalmology Primary Care",
    "condition": "Acute Otitis Media",
    "icd10Code": "H66.9",
    "diagnosticWorkup": [
      "Otoscopy for bulging, opaque, or erythematous tympanic membrane",
      "Tympanometry if available to confirm middle-ear effusion",
      "CBC/CRP only if severe systemic illness or suspected complication"
    ],
    "firstLineRegimenPmbjp": [
      "Amoxicillin 500 mg capsule PO every 8 hours for 7–10 days",
      "Paracetamol 500 mg PO every 6–8 hours as needed for pain/fever, max 4 g/day"
    ],
    "redFlagReferralTriggers": [
      "Swelling/redness behind ear, ear pushed forward, or facial palsy suggesting mastoiditis",
      "Severe headache, neck stiffness, confusion, or high fever suggesting intracranial spread",
      "No improvement after 48–72 hours of antibiotics or persistent ear discharge"
    ],
    "followUpInterval": "Review in 48–72 hours if no improvement; otherwise review in 2 weeks",
    "patientCounselingHiEn": "Take the full antibiotic course; use paracetamol for pain; keep water out of the ear. Return urgently if ear discharge, severe pain, swelling behind the ear, or fever persists. पूरा एंटीबायोटिक कोर्स लें; दर्द के लिए पैरासिटामोल लें; कान में पानी न जाने दें। कान से मवाद, तेज दर्द, कान के पीछे सूजन या बुखार बना रहे तो तुरंत आएं।"
  },
  {
    "specialty": "Orthopedics & MSK Pain",
    "condition": "Non-specific acute mechanical low back pain",
    "icd10Code": "M54.5",
    "diagnosticWorkup": [
      "Focused neurological examination: power, sensation, reflexes, straight-leg raise",
      "X-ray LS spine AP/lateral only if red flags, trauma, or age >50 years",
      "ESR/CRP and urine routine if fever or suspected infection/inflammation"
    ],
    "firstLineRegimenPmbjp": [
      "Paracetamol Tablets IP 500 mg: 1-2 tablets orally every 6-8 hours as needed; maximum 3 g/day",
      "Ibuprofen Tablets IP 400 mg: 1 tablet orally three times daily after food for 5-7 days, if no contraindication",
      "Diclofenac 1% Gel: apply locally to painful area three times daily for up to 7 days"
    ],
    "redFlagReferralTriggers": [
      "Cauda equina syndrome: saddle anesthesia, bladder/bowel incontinence, bilateral sciatica",
      "Progressive motor weakness or foot drop",
      "Fever, IV drug use, recent trauma, cancer history, unexplained weight loss, age >50 with new pain, or nocturnal pain"
    ],
    "followUpInterval": "Review in 1-2 weeks",
    "patientCounselingHiEn": "English: Stay active, avoid bed rest >2 days, do gentle back exercises, lift with bent knees. Hindi: सक्रिय रहें, 2 दिन से ज्यादा आराम न करें, हल्के व्यायाम करें, सामान घुटनों को मोड़कर उठाएं।"
  },
  {
    "specialty": "Pediatrics & IMNCI Childhood Illnesses",
    "condition": "Acute Gastroenteritis with Some Dehydration (IMNCI Diarrhoea)",
    "icd10Code": "A09",
    "diagnosticWorkup": [
      "WHO/IMNCI dehydration assessment: mental status, eyes, thirst, skin pinch",
      "Stool microscopy for RBC/WBC/ova-parasites if dysentery or persistent diarrhoea",
      "Serum electrolytes/creatinine if severe dehydration or IV fluids planned"
    ],
    "firstLineRegimenPmbjp": [
      "ORS WHO low-osmolarity powder sachet (PMBJP): after each loose stool, <2 yr 50–100 mL; 2–10 yr 100–200 mL; older child 200–250 mL",
      "Zinc sulfate dispersible tablet 20 mg (PMBJP): 20 mg once daily for 14 days; <6 months 10 mg once daily for 14 days",
      "No routine antibiotic; if dysentery/cholera suspected, refer or use as per IMNCI/STG"
    ],
    "redFlagReferralTriggers": [
      "Severe dehydration: lethargy/unconscious, sunken eyes, very slow skin pinch, unable to drink",
      "Persistent vomiting, convulsions, or suspected sepsis",
      "Blood in stool with systemic toxicity or persistent diarrhoea >14 days",
      "No urine output or severe malnutrition"
    ],
    "followUpInterval": "Review in 24–48 hours if not improving; otherwise review in 3 days",
    "patientCounselingHiEn": "Give ORS after every loose stool and zinc daily for 14 days; continue breastfeeding and handwashing; avoid antidiarrhoeals. हिंदी: हर दस्त के बाद ORS दें, जिंक 14 दिन दें, स्तनपान जारी रखें, हाथ धोएं; पीने में असमर्थता, मल में खून, सुस्ती या पेशाब बंद हो तो तुरंत लौटें।"
  },
  {
    "specialty": "Pediatrics & IMNCI Childhood Illnesses",
    "condition": "Childhood Community-Acquired Pneumonia (Non-Severe)",
    "icd10Code": "J18.9",
    "diagnosticWorkup": [
      "IMNCI respiratory rate count and SpO2",
      "Chest X-ray PA view if severe, recurrent, or complications suspected",
      "CBC/CRP only if sepsis or systemic illness suspected; not routine"
    ],
    "firstLineRegimenPmbjp": [
      "Amoxicillin dispersible tablet 250 mg (PMBJP): 40–45 mg/kg/dose PO twice daily for 5 days (max 1 g/dose)",
      "Paracetamol 500 mg tablet/syrup (PMBJP): 15 mg/kg/dose PO every 6–8 hours if fever/pain",
      "Salbutamol MDI 100 mcg with spacer (PMBJP): 2 puffs every 6–8 hours if wheeze"
    ],
    "redFlagReferralTriggers": [
      "Severe pneumonia: chest indrawing, grunting, central cyanosis, SpO2 <90–92%",
      "Unable to feed/drink, lethargy, convulsions, or severe malnutrition",
      "Persistent fever >48–72 hours on antibiotics or worsening distress"
    ],
    "followUpInterval": "Review in 48–72 hours; refer if no improvement",
    "patientCounselingHiEn": "Complete amoxicillin for 5 days; no cough syrups; return immediately for fast breathing, chest indrawing, poor feeding, or drowsiness. हिंदी: एमोक्सिसिलिन 5 दिन पूरा दें; खांसी सिरप न दें; तेज सांस, सीने में धंसाव, दूध न पीना या सुस्ती हो तो तुरंत आएं।"
  },
  {
    "specialty": "Gastroenterology & Hepatology",
    "condition": "Gastroesophageal reflux disease (GERD)",
    "icd10Code": "K21.9",
    "diagnosticWorkup": [
      "Alarm-feature symptom screen: dysphagia, odynophagia, GI bleed, weight loss, anemia",
      "H. pylori stool antigen test if dyspepsia or alarm features",
      "Upper GI endoscopy if alarm features, new dyspepsia age >40, or PPI failure"
    ],
    "firstLineRegimenPmbjp": [
      "Pantoprazole 40 mg tablet once daily 30-60 min before breakfast for 4-8 weeks",
      "Aluminium hydroxide + magnesium hydroxide antacid gel 10 mL after meals/SOS for breakthrough symptoms",
      "Domperidone 10 mg tablet before meals for short course if nausea/bloating"
    ],
    "redFlagReferralTriggers": [
      "Dysphagia or odynophagia",
      "Hematemesis, melena, or iron-deficiency anemia",
      "Unintentional weight loss, persistent vomiting, or epigastric mass",
      "New dyspepsia at age >40 or family history of upper GI cancer",
      "Chest pain with cardiac red flags"
    ],
    "followUpInterval": "Review in 4 weeks; if no response, reassess and consider endoscopy",
    "patientCounselingHiEn": "Avoid late meals, alcohol, smoking, and lying down within 3 hours of eating; elevate head of bed. Take PPI daily before breakfast. / भोजन के तुरंत बाद न लेटें, शराब और धूम्रपान बंद करें, रात का भोजन सोने से 3 घंटे पहले करें; पीपीआई रोज़ सुबह नाश्ते से पहले लें।"
  },
  {
    "specialty": "Neurology & Headache/Epilepsy",
    "condition": "Migraine without aura",
    "icd10Code": "G43.0",
    "diagnosticWorkup": [
      "Clinical diagnosis per ICHD-3 criteria with full neurological examination",
      "CBC, ESR, TSH and fasting glucose to exclude secondary headache causes",
      "MRI brain without contrast only if red flags/atypical features; not routine"
    ],
    "firstLineRegimenPmbjp": [
      "Jan Aushadhi Paracetamol 500 mg tablet: 1 g PO at attack onset; repeat after 6–8 hours if needed; max 3 g/day",
      "Jan Aushadhi Ibuprofen 400 mg tablet: 400 mg PO at attack onset; max 1200 mg/day OTC",
      "Jan Aushadhi Metoclopramide 10 mg tablet: 10 mg PO as needed for nausea/vomiting",
      "Prophylaxis if ≥4 migraine days/month: Jan Aushadhi Propranolol 20 mg tablet: 20 mg PO twice daily, titrate to 40 mg twice daily as tolerated",
      "Alternative prophylaxis: Jan Aushadhi Amitriptyline 10 mg tablet: 10–25 mg PO at bedtime"
    ],
    "redFlagReferralTriggers": [
      "Thunderclap headache, fever with neck stiffness, or new focal neurological deficit",
      "Papilledema, new headache after age 50, head trauma, cancer/immunosuppression, or pregnancy/postpartum with hypertension",
      "Status migrainosus, progressive headache pattern, or atypical features requiring neuroimaging"
    ],
    "followUpInterval": "Review in 4 weeks",
    "patientCounselingHiEn": "English: Keep a headache diary; maintain regular sleep, meals and hydration; avoid triggers; limit painkillers to <10–15 days/month; take acute medicine early; take preventive medicine daily even when pain-free. Hindi: सिरदर्द की डायरी रखें; नींद, भोजन और पानी नियमित रखें; ट्रिगर से बचें; दर्द की दवा महीने में 10–15 दिन से अधिक न लें; दर्द शुरू होते ही दवा लें; रोकथाम की दवा रोज लें, दर्द न होने पर भी।"
  },
  {
    "specialty": "Pulmonology & TB/COPD/Asthma (NTEP/GINA)",
    "condition": "Pulmonary Tuberculosis (Microbiologically Confirmed, Drug-Sensitive)",
    "icd10Code": "A15.0",
    "diagnosticWorkup": [
      "Sputum for AFB smear (2 specimens) + CBNAAT/NAAT on sputum for M. tuberculosis and rifampicin resistance",
      "Chest X-ray PA view (baseline, also to exclude alternate pathology)",
      "HIV testing + baseline CBC, LFT, RFT, blood sugar/HbA1c, and weight (for NTEP weight-band dosing)"
    ],
    "firstLineRegimenPmbjp": [
      "NTEP FDC (H75+R150+Z400+E275 mg) — 3 tablets OD (weight band 40–54 kg) for 2 months Intensive Phase, then H75+R150+E275 FDC 3 tablets OD for 4 months Continuation Phase (free-of-cost via NTEP/DOTS; do not split)",
      "Pyridoxine (Vitamin B6) 10 mg PO OD (PMBJP Jan Aushadhi) throughout therapy to prevent INH neuropathy",
      "If FDC unavailable — PMBJP generics: Isoniazid 300 mg OD + Rifampicin 450 mg OD + Pyrazinamide 1000 mg OD + Ethambutol 800 mg OD (IP); Isoniazid 300 mg + Rifampicin 450 mg + Ethambutol 800 mg OD (CP)",
      "Paracetamol 500 mg PO SOS for fever/arthralgia (PMBJP); notify all cases on Nikshay portal"
    ],
    "redFlagReferralTriggers": [
      "Hemoptysis (any amount) or breathlessness at rest with SpO2 <92%",
      "Jaundice, vomiting with raised transaminases >3x ULN (drug-induced hepatitis) — stop ATT and refer immediately",
      "Visual blurring/colour vision defect (ethambutol toxicity) or hearing loss (injectable agents)",
      "Suspected drug-resistant TB (rifampicin resistance on CBNAAT, treatment failure, non-conversion at end of IP) — refer to DR-TB centre",
      "TB meningitis, spinal TB, miliary/disseminated TB, or TB-HIV with CD4 <200 — refer to tertiary/NTEP nodal centre"
    ],
    "followUpInterval": "Monthly clinical review at DOTS centre; sputum smear/CBNAAT at end of IP (2 months) and 5 months; final review at end of 6 months",
    "patientCounselingHiEn": "Take all tablets daily without missing doses; treatment is free, and completion cures TB. Do not stop when you feel better. Avoid alcohol; report jaundice, vomiting, or vision changes immediately. Cover mouth while coughing and use a separate room/ventilation. — सभी दवाइयाँ रोज़ बिना नागा किए लें; इलाज मुफ़्त है और पूरा कोर्स करने से टीबी ठीक होती है। आराम महसूस होने पर भी दवा बंद न करें। शराब न लें; पीलिया, उल्टी या आँखों की रोशनी कम होने पर तुरंत बताएँ। खाँसते समय मुँह ढकें और अलग हवादार कमरे में रहें।"
  },
  {
    "specialty": "Pulmonology & TB/COPD/Asthma (NTEP/GINA)",
    "condition": "Chronic Obstructive Pulmonary Disease — Stable COPD (GOLD ABE)",
    "icd10Code": "J44.9",
    "diagnosticWorkup": [
      "Post-bronchodilator spirometry showing FEV1/FVC <0.70 (GOLD confirmation) with FEV1 % predicted",
      "Chest X-ray PA view (hyperinflation, exclude TB/bronchiectasis/malignancy)",
      "Pulse oximetry ± ABG for SpO2 <92% or suspected hypercapnia; baseline 6-minute walk or mMRC/CAT score"
    ],
    "firstLineRegimenPmbjp": [
      "Salbutamol 100 mcg MDI (PMBJP) — 2 puffs inhaled via spacer SOS up to q4–6h for rescue breathlessness",
      "Tiotropium 18 mcg dry-powder inhalation OD (PMBJP) — maintenance LAMA for GOLD B/E patients",
      "Formoterol 6 mcg + Budesonide 200 mcg inhalation BD (PMBJP) — if exacerbations ≥2/year or blood eosinophils ≥300",
      "Prednisolone 40 mg PO OD × 5 days (PMBJP) for acute exacerbation, plus Amoxicillin–Clavulanate 625 mg PO TDS × 7 days (PMBJP) if sputum purulent",
      "Influenza + pneumococcal vaccination advised"
    ],
    "redFlagReferralTriggers": [
      "SpO2 <88–90% at rest, cyanosis, or PaCO2 rising with drowsiness/confusion",
      "Severe exacerbation: RR >30/min, use of accessory muscles, silent chest, inability to speak",
      "New-onset cor pulmonale (pedal edema + raised JVP) or acute decompensation",
      "FEV1 <30% predicted, frequent exacerbations ≥3/year, or need for long-term oxygen (LTOT) assessment",
      "Hemoptysis or suspected lung malignancy — urgent referral"
    ],
    "followUpInterval": "Review in 1–3 months after initiation; then every 3–6 months with spirometry and exacerbation review",
    "patientCounselingHiEn": "Stop smoking completely — the single most important step; avoid biomass smoke/chulha and dust. Use inhalers correctly with a spacer every day even when well; keep the blue rescue inhaler for attacks. Complete the steroid course during flare-ups and get flu/pneumococcal vaccines. — धूम्रपान पूरी तरह छोड़ें; चूल्हे का धुआँ और धूल से बचें। रोज़ इनहेलर स्पेसर के साथ सही तरीके से लें, ठीक लगने पर भी बंद न करें; तकलीफ़ बढ़ने पर नीला रेस्क्यू इनहेलर लें। दौरे में स्टेरॉयड कोर्स पूरा करें और फ्लू/निमोनिया का टीका लगवाएँ।"
  },
  {
    "specialty": "Nephrology & UTI/CKD",
    "condition": "Acute uncomplicated cystitis in women",
    "icd10Code": "N30.0",
    "diagnosticWorkup": [
      "Urine routine/microscopy for pyuria, nitrite, and leukocyte esterase",
      "Urine culture and sensitivity before antibiotics if recurrent, atypical, pregnancy, or treatment failure",
      "Urine pregnancy test in women of childbearing age before choosing antibiotics"
    ],
    "firstLineRegimenPmbjp": [
      "Nitrofurantoin 100 mg PO twice daily for 5 days (use only if CrCl ≥30 mL/min and no suspected pyelonephritis)"
    ],
    "redFlagReferralTriggers": [
      "Fever with rigors, flank pain, or vomiting suggesting pyelonephritis",
      "Pregnancy, male sex, immunocompromised state, or known urinary tract obstruction",
      "Sepsis features: hypotension, tachycardia, confusion, oliguria",
      "No symptomatic improvement after 48–72 hours",
      "Gross hematuria or suspected renal abscess/obstruction"
    ],
    "followUpInterval": "Review in 48–72 hours if symptoms persist; otherwise routine review in 1 week for recurrent cases",
    "patientCounselingHiEn": "Complete the full antibiotic course, drink 2–3 L water daily, urinate after intercourse, and avoid spermicides; return if fever or flank pain develops. पूरा एंटीबायोटिक कोर्स लें, रोज़ 2–3 लीटर पानी पिएँ, संभोग के बाद पेशाब करें, और बुखार या कमर दर्द होने पर तुरंत लौटें।"
  },
  {
    "specialty": "Orthopedics & MSK Pain",
    "condition": "Knee osteoarthritis",
    "icd10Code": "M17.9",
    "diagnosticWorkup": [
      "Weight-bearing knee X-ray AP and lateral views",
      "ESR and CRP to exclude inflammatory arthritis if atypical features",
      "Serum creatinine/eGFR before regular NSAID use"
    ],
    "firstLineRegimenPmbjp": [
      "Paracetamol 500 mg tablet: 500–1000 mg orally every 6–8 hours; maximum 3 g/day",
      "Diclofenac diethylamine 1.16% gel: apply thin layer to affected knee 3–4 times/day",
      "Ibuprofen 400 mg tablet: 400 mg orally 3 times/day with food for short course if pain persists and no contraindication"
    ],
    "redFlagReferralTriggers": [
      "Hot swollen knee with fever suggesting septic arthritis",
      "Acute locked knee or suspected meniscal/ligament injury",
      "Inability to bear weight after trauma or suspected fracture",
      "Rapidly progressive deformity or severe functional limitation",
      "Neurovascular compromise or calf swelling suggestive of DVT"
    ],
    "followUpInterval": "Review in 4 weeks",
    "patientCounselingHiEn": "English: Reduce weight if overweight, do daily quadriceps strengthening and straight-leg raises, avoid deep squatting and prolonged stair climbing, use a walking stick if needed, and take medicines after food. Hindi: वजन कम रखें, रोज क्वाड्रिसेप्स व्यायाम और सीधा पैर उठाने का अभ्यास करें, गहरा बैठना और लंबे समय सीढ़ी चढ़ना कम करें, जरूरत पर छड़ी लें, और दवा भोजन के बाद लें।"
  },
  {
    "specialty": "Orthopedics & MSK Pain",
    "condition": "Chronic mechanical low back pain / lumbar spondylosis",
    "icd10Code": "M54.5",
    "diagnosticWorkup": [
      "Lumbosacral spine X-ray AP and lateral views",
      "ESR and CRP if inflammatory or systemic features",
      "MRI lumbosacral spine only if radiculopathy, motor deficit, or red flags"
    ],
    "firstLineRegimenPmbjp": [
      "Paracetamol 500 mg tablet: 500–1000 mg orally every 6–8 hours; maximum 3 g/day",
      "Ibuprofen 400 mg tablet: 400 mg orally 3 times/day with food for short course if no contraindication",
      "Amitriptyline 10 mg tablet: 10 mg orally at night for chronic persistent pain if no contraindication"
    ],
    "redFlagReferralTriggers": [
      "Saddle anesthesia, bladder/bowel dysfunction, or bilateral leg weakness suggesting cauda equina syndrome",
      "Progressive motor deficit or foot drop",
      "Fever, intravenous drug use, or recent spinal procedure suggesting infection",
      "History of cancer, unexplained weight loss, or night pain",
      "Major trauma or suspected vertebral fracture"
    ],
    "followUpInterval": "Review in 2–4 weeks",
    "patientCounselingHiEn": "English: Stay active, avoid prolonged bed rest, do core strengthening and gentle stretching, maintain good posture, lift with bent knees, and reduce weight if overweight. Hindi: सक्रिय रहें, लंबे समय बिस्तर पर न रहें, पेट और कमर की मांसपेशियों को मजबूत करने वाले व्यायाम करें, सीधी मुद्रा रखें, घुटने मोड़कर वजन उठाएं, और वजन कम रखें।"
  },
  {
    "specialty": "Obstetrics & Antenatal Care (PMSMA)",
    "condition": "Iron-Deficiency Anemia in Pregnancy",
    "icd10Code": "O99.0",
    "diagnosticWorkup": [
      "CBC with hemoglobin, PCV, MCV, MCH",
      "Serum ferritin",
      "Peripheral blood smear and iron studies if indicated"
    ],
    "firstLineRegimenPmbjp": [
      "Ferrous sulphate 100 mg + folic acid 500 mcg tablet: 1 tablet PO once daily after 12 weeks; if Hb 7–9 g/dL, 1 tablet PO twice daily as advised",
      "Folic acid 5 mg PO once daily in first trimester"
    ],
    "redFlagReferralTriggers": [
      "Hb <7 g/dL or symptomatic severe anemia",
      "Dyspnea at rest, chest pain, syncope, or signs of heart failure",
      "Active bleeding or suspected hemolysis",
      "No Hb rise after 2–4 weeks of oral iron"
    ],
    "followUpInterval": "Review in 2 weeks with repeat Hb",
    "patientCounselingHiEn": "Take iron after food with water; avoid tea/coffee within 1 hour. भोजन के बाद पानी के साथ लें; चाय/कॉफी साथ न लें।"
  },
  {
    "specialty": "Obstetrics & Antenatal Care (PMSMA)",
    "condition": "Gestational Diabetes Mellitus",
    "icd10Code": "O24.4",
    "diagnosticWorkup": [
      "75-g oral glucose tolerance test at 24–28 weeks",
      "Fasting plasma glucose",
      "HbA1c for baseline glycemic assessment"
    ],
    "firstLineRegimenPmbjp": [
      "Medical nutrition therapy and exercise counseling",
      "Metformin 500 mg PO once daily with meals if targets not met after 1–2 weeks; titrate to 500 mg BD if needed",
      "Human insulin if metformin contraindicated or glucose uncontrolled"
    ],
    "redFlagReferralTriggers": [
      "Persistent fasting glucose ≥95 mg/dL or 2-h postprandial ≥120 mg/dL despite therapy",
      "Diabetic ketoacidosis, severe hypoglycemia, or recurrent vomiting",
      "Fetal macrosomia, polyhydramnios, or growth restriction",
      "New hypertension or preeclampsia features"
    ],
    "followUpInterval": "Review in 1–2 weeks until glucose controlled",
    "patientCounselingHiEn": "Check sugars regularly, avoid sweets and refined carbs, walk daily. शुगर नियमित जांचें; मीठा और मैदा कम खाएं; रोज टहलें।"
  },
  {
    "specialty": "Dermatology & Cutaneous Infections",
    "condition": "Chronic Plaque Psoriasis",
    "icd10Code": "L40.0",
    "diagnosticWorkup": [
      "Clinical examination with PASI scoring and assessment for psoriatic arthritis",
      "Skin biopsy if diagnosis is atypical or uncertain",
      "Baseline CBC, LFT, KFT, HbA1c, HIV/HBV and latent TB screening before systemic therapy"
    ],
    "firstLineRegimenPmbjp": [
      "Clobetasol propionate 0.05% cream (PMBJP) — apply thin layer to plaques once or twice daily for up to 2–4 weeks, then taper",
      "Coal tar 5% ointment (PMBJP) — apply once or twice daily to chronic plaques",
      "Emollient cream (PMBJP) — apply liberally twice daily",
      "Methotrexate 2.5 mg tablet (PMBJP) — 7.5–15 mg once weekly with folic acid 5 mg on a non-methotrexate day for severe/refractory disease under monitoring"
    ],
    "redFlagReferralTriggers": [
      "Erythrodermic or generalized pustular psoriasis",
      "Severe systemic symptoms, extensive skin failure, or secondary infection",
      "Psoriatic arthritis with functional impairment or methotrexate toxicity"
    ],
    "followUpInterval": "Review in 4 weeks; then every 3 months once stable",
    "patientCounselingHiEn": "English: Apply creams thinly, use emollients daily, avoid scratching and known triggers; do not stop systemic medicines without review. Hindi: क्रीम पतली परत में लगाएँ, मॉइस्चराइज़र रोज़ लगाएँ, खुजली और ट्रिगर से बचें; दवा बिना सलाह बंद न करें।"
  },
  {
    "specialty": "Dermatology & Cutaneous Infections",
    "condition": "Chronic Spontaneous Urticaria",
    "icd10Code": "L50.1",
    "diagnosticWorkup": [
      "Detailed history and skin examination to exclude physical urticaria and triggers",
      "CBC with ESR and TSH",
      "Baseline LFT/KFT and autoimmune screening if systemic features or urticarial vasculitis suspected"
    ],
    "firstLineRegimenPmbjp": [
      "Cetirizine 10 mg tablet (PMBJP) — 10 mg once daily; may increase to 10 mg twice daily if inadequate response",
      "Levocetirizine 5 mg tablet (PMBJP) — 5 mg once daily at night",
      "Fexofenadine 120 mg/180 mg tablet (PMBJP) — 120–180 mg once daily",
      "Prednisolone 20–40 mg tablet (PMBJP) — short course only for severe exacerbation, not for chronic maintenance"
    ],
    "redFlagReferralTriggers": [
      "Angioedema with lip/tongue swelling, stridor, dyspnea, or hypotension",
      "Anaphylaxis or systemic symptoms such as fever, arthralgia, or painful fixed lesions >24 hours",
      "Poor response to up-titrated antihistamines or suspected urticarial vasculitis"
    ],
    "followUpInterval": "Review in 2–4 weeks; then every 3 months if controlled",
    "patientCounselingHiEn": "English: Take antihistamines regularly, avoid known triggers, and seek emergency care for breathing difficulty or facial swelling. Hindi: एंटीहिस्टामिन नियमित लें, ट्रिगर से बचें; सांस लेने में कठिनाई या चेहरे/होंठ की सूजन में तुरंत अस्पताल जाएँ।"
  },
  {
    "specialty": "Neurology & Headache/Epilepsy",
    "condition": "Migraine without aura (episodic migraine)",
    "icd10Code": "G43.9",
    "diagnosticWorkup": [
      "Clinical diagnosis by ICHD-3 criteria (5+ attacks, 4–72 h, unilateral/pulsating/moderate-severe/aggravated by activity, nausea or photo-phonophobia) + 1-month headache diary",
      "Full general and neurological examination with BP, fundus and sinus/temporomandibular joint check to exclude secondary headache",
      "MRI brain (or non-contrast CT if MRI unavailable) only if red flags; CBC, TSH and ESR if secondary cause suspected"
    ],
    "firstLineRegimenPmbjp": [
      "Acute attack: Paracetamol 1000 mg PO at onset (max 3 g/day) OR Ibuprofen 400 mg PO (max 1200 mg/day) OR Naproxen 500 mg PO stat, plus Metoclopramide 10 mg PO for nausea (max 3 doses/day, avoid in young females long-term due to dystonia)",
      "Prophylaxis (≥4 attacks/month or ≥8 headache days/month): Propranolol 20 mg BD, titrate to 40–80 mg BD",
      "Alternative prophylaxis: Amitriptyline 10 mg at bedtime titrate to 25 mg HS, OR Flunarizine 5–10 mg HS (max 3–6 months, watch for EPS/depression), OR Topiramate 25 mg BD titrate to 50 mg BD"
    ],
    "redFlagReferralTriggers": [
      "Thunderclap headache (maximal within 1 minute) — suspect SAH, refer to ER immediately",
      "New-onset headache after age 50, or new headache in pregnancy/postpartum (suspect CVT, pre-eclampsia)",
      "Fever with neck stiffness, papilloedema, focal neurological deficit, seizure, altered consciousness, or headache worsened by Valsalva",
      "Progressive daily headache with vomiting or weight loss (suspect raised ICP/tumour) — urgent MRI and neurology referral",
      "Chronic migraine (>15 headache days/month) or inadequate response to 2 prophylaxis trials — refer to neurology"
    ],
    "followUpInterval": "Review in 4 weeks to assess prophylaxis tolerability and headache diary; reassess at 8–12 weeks for efficacy",
    "patientCounselingHiEn": "Keep a headache diary, sleep 7–8 h, take meals on time, limit screen time and stay hydrated; use acute medicine early in the attack and not more than 2 days/week to avoid medication-overuse headache. — सिरदर्द की डायरी रखें, समय पर सोएं और खाएं, पानी पर्याप्त पिएं; दर्द की दवा शुरुआत में ही लें, हफ्ते में 2 दिन से ज्यादा न लें। प्रोफाइलेक्टिक दवा रोज़ लें, असर दिखने में 8–12 हफ्ते लगते हैं, बिना डॉक्टर से पूछे बंद न करें।"
  },
  {
    "specialty": "Pediatrics & IMNCI Childhood Illnesses",
    "condition": "Childhood Asthma",
    "icd10Code": "J45.9",
    "diagnosticWorkup": [
      "Spirometry with bronchodilator reversibility if age ≥5 years",
      "Peak expiratory flow rate monitoring and symptom diary",
      "Chest X-ray PA view to exclude structural or alternate causes"
    ],
    "firstLineRegimenPmbjp": [
      "Salbutamol 100 mcg MDI PMBJP: 1–2 puffs via spacer every 4–6 hours as needed for wheeze; child dose as per severity",
      "Beclomethasone 100 mcg MDI PMBJP: low-dose inhaled corticosteroid 1–2 puffs twice daily via spacer; age/severity-based, review response",
      "Prednisolone 5 mg tablet PMBJP: 1–2 mg/kg/day oral (max 40 mg/day) for 3–5 days during moderate exacerbation"
    ],
    "redFlagReferralTriggers": [
      "Severe distress, inability to speak/feed, silent chest, or altered sensorium",
      "SpO2 <92% on room air or persistent cyanosis",
      "No response to repeated bronchodilator, prior ICU admission, or impending respiratory failure"
    ],
    "followUpInterval": "Review in 2–4 weeks after initiation, then every 3 months",
    "patientCounselingHiEn": "Use inhaler with spacer correctly; avoid smoke/dust/allergens; continue preventer even when well. Hindi: इनहेलर स्पेसर के साथ सही तरीके से लगाएं; धुआं, धूल और एलर्जी से बचें; ठीक लगने पर भी रोकने वाली दवा बंद न करें।"
  },
  {
    "specialty": "Pediatrics & IMNCI Childhood Illnesses",
    "condition": "Childhood Epilepsy",
    "icd10Code": "G40.9",
    "diagnosticWorkup": [
      "EEG including sleep/sleep-deprived EEG",
      "MRI brain epilepsy protocol",
      "Serum glucose, calcium, and electrolytes to exclude metabolic mimics"
    ],
    "firstLineRegimenPmbjp": [
      "Sodium Valproate 200 mg tablet PMBJP: 10–15 mg/kg/day in 1–2 divided doses for generalized seizures; avoid in suspected metabolic/mitochondrial disease and review risks",
      "Carbamazepine 100/200 mg tablet PMBJP: 5–10 mg/kg/day in 2 divided doses for focal seizures; titrate slowly",
      "Phenytoin 100 mg tablet PMBJP: 5–8 mg/kg/day in 2 divided doses as alternative; monitor levels where available"
    ],
    "redFlagReferralTriggers": [
      "Seizure lasting >5 minutes or recurrent seizures without recovery",
      "First seizure with fever, focal deficit, raised intracranial pressure signs, or altered consciousness",
      "Infantile spasms, new neurological deficit, respiratory depression, or poor drug adherence with breakthrough seizures"
    ],
    "followUpInterval": "Review in 2–4 weeks after starting/change, then every 3 months",
    "patientCounselingHiEn": "Give medicines regularly; keep seizure diary; avoid bathing/swimming unsupervised; do not stop abruptly. Hindi: दवा नियमित दें; दौरों का रिकॉर्ड रखें; अकेले नहाना/तैरना न करें; दवा अचानक बंद न करें।"
  },
  {
    "specialty": "Pediatrics & IMNCI Childhood Illnesses",
    "condition": "Type 1 Diabetes Mellitus",
    "icd10Code": "E10.9",
    "diagnosticWorkup": [
      "Fasting/random plasma glucose and HbA1c",
      "Urine ketones and blood gas/bicarbonate if DKA suspected",
      "Serum electrolytes, creatinine, and C-peptide/autoantibody if available"
    ],
    "firstLineRegimenPmbjp": [
      "Human Insulin 40 IU/mL injection PMBJP: basal-bolus regimen, initial 0.5–1 unit/kg/day subcutaneously divided; individualize and titrate to glucose",
      "Regular/NPH human insulin PMBJP where available: pre-meal regular insulin plus bedtime NPH if analogue pens not available",
      "Glucose 25% injection PMBJP for documented severe hypoglycemia per weight-based protocol"
    ],
    "redFlagReferralTriggers": [
      "DKA features: vomiting, abdominal pain, Kussmaul breathing, dehydration, ketonuria, or altered sensorium",
      "Severe hypoglycemia with unconsciousness/seizures or recurrent hypoglycemia",
      "Poor growth, persistent hyperglycemia, or inability to manage insulin/storage/monitoring at home"
    ],
    "followUpInterval": "Review in 1–2 weeks initially, then every 3 months",
    "patientCounselingHiEn": "Store insulin cold, rotate injection sites, check glucose regularly, and follow sick-day rules. Hindi: इंसुलिन ठंडी जगह रखें; इंजेक्शन की जगह बदलते रहें; शुगर नियमित जांचें; बीमारी में सिक-डे नियम अपनाएं।"
  },
  {
    "specialty": "Gastroenterology & Hepatology",
    "condition": "Acute Upper Gastrointestinal Bleeding",
    "icd10Code": "K92.2",
    "diagnosticWorkup": [
      "CBC, coagulation profile, blood group and crossmatch",
      "Urgent upper GI endoscopy after initial stabilization",
      "Serum electrolytes, renal function, liver function tests"
    ],
    "firstLineRegimenPmbjp": [
      "Pantoprazole 40 mg injection: 80 mg IV bolus over 30 min, then 8 mg/hour IV infusion for 72 hours (or 40 mg IV every 12 hours if infusion pump unavailable)",
      "Ringer lactate / Normal saline IV as needed for hemodynamic stabilization",
      "Ondansetron 4 mg IV every 8 hours for nausea/vomiting"
    ],
    "redFlagReferralTriggers": [
      "Hemodynamic instability: SBP <90 mmHg, HR >110/min, syncope",
      "Active hematemesis, large-volume melena, or Hb <7 g/dL",
      "Suspected variceal bleed, anticoagulant/antiplatelet use, or endoscopy unavailable"
    ],
    "followUpInterval": "Emergency referral; if low-risk and stabilized, review in 24–48 hours after endoscopy",
    "patientCounselingHiEn": "Avoid NSAIDs, alcohol and smoking; take PPI regularly; return immediately for black stools, vomiting blood or dizziness. Hindi: NSAID/शराब से बचें, PPI नियमित लें; काला मल, खून की उल्टी या चक्कर पर तुरंत अस्पताल आएं।"
  },
  {
    "specialty": "Gastroenterology & Hepatology",
    "condition": "Acute Pancreatitis",
    "icd10Code": "K85.9",
    "diagnosticWorkup": [
      "Serum lipase or amylase",
      "Abdominal ultrasound to assess gallstones/biliary dilatation",
      "CBC, CRP, LFT, renal function, serum calcium"
    ],
    "firstLineRegimenPmbjp": [
      "Ringer lactate IV 5–10 mL/kg/hour initially, then adjust to urine output and hemodynamics",
      "Paracetamol 1 g IV/PO every 8 hours (max 4 g/day) for pain",
      "Ondansetron 4 mg IV every 8 hours for vomiting; Pantoprazole 40 mg IV once daily"
    ],
    "redFlagReferralTriggers": [
      "Organ failure: hypotension, hypoxia, oliguria, rising creatinine",
      "Persistent SIRS >48 hours, severe pain/rigidity, hypocalcemia",
      "Gallstone pancreatitis with cholangitis, pregnancy, pancreatic necrosis or fluid collection"
    ],
    "followUpInterval": "Immediate referral if severe; if mild and tolerating oral intake, review in 24–48 hours",
    "patientCounselingHiEn": "Stop alcohol and oily food; take fluids and analgesics as advised; return for worsening pain, breathlessness or reduced urine. Hindi: शराब और तली चीज़ें बंद करें; दर्द बढ़ने, सांस फूलने या पेशाब कम होने पर तुरंत अस्पताल आएं।"
  },
  {
    "specialty": "Obstetrics & Antenatal Care (PMSMA)",
    "condition": "Severe pre-eclampsia",
    "icd10Code": "O14.1",
    "diagnosticWorkup": [
      "BP measurement ≥160/110 mmHg on 2 occasions + symptoms",
      "Urine protein dipstick ≥2+ or spot urine protein/creatinine ratio",
      "CBC with platelet count, LFT, serum creatinine, uric acid"
    ],
    "firstLineRegimenPmbjp": [
      "Labetalol Hydrochloride Tablet 100 mg: 100 mg orally BD; titrate to BP <160/110 mmHg (max 200 mg BD in OPD)",
      "Nifedipine Retard Tablet 10 mg: 10–20 mg orally BD if labetalol unavailable/contraindicated"
    ],
    "redFlagReferralTriggers": [
      "BP ≥160/110 mmHg with headache, blurred vision, epigastric pain, vomiting, or seizures",
      "Platelet count <100,000/µL, raised LFT/creatinine, pulmonary edema, or HELLP syndrome",
      "Eclampsia, abruption, fetal distress, or gestational age <34 weeks"
    ],
    "followUpInterval": "Refer same day to District Hospital/obstetrician; review in 24–48 hours after stabilization or earlier if worsening",
    "patientCounselingHiEn": "Take BP medicines daily; rest on left side; report headache, blurred vision, epigastric pain, bleeding, or reduced fetal movements immediately. दवाइयाँ रोज़ लें; बाईं करवट आराम करें; सिरदर्द, धुंधला दिखना, पेट के ऊपर दर्द, रक्तस्राव या बच्चे की हलचल कम हो तो तुरंत अस्पताल जाएँ।"
  },
  {
    "specialty": "Dermatology & Cutaneous Infections",
    "condition": "Cellulitis / Erysipelas (non-necrotising, limb)",
    "icd10Code": "L03.90",
    "diagnosticWorkup": [
      "CBC with differential (total and absolute neutrophil count) + CRP to grade systemic inflammatory response",
      "Random blood glucose and/or HbA1c — uncontrolled diabetes is the commonest driver of treatment failure",
      "Pus/aspirate or blood culture before antibiotics if fever, bullae, or immunocompromise; mark the erythema border with a pen for 6-hourly reassessment"
    ],
    "firstLineRegimenPmbjp": [
      "Amoxicillin 500 mg + Clavulanic Acid 125 mg (Jan Aushadhi) — 1 tablet PO three times daily x 5–7 days (extend to 10 days if slow response)",
      "Alternative (penicillin allergy): Cephalexin 500 mg (Jan Aushadhi) PO four times daily x 5–7 days; if severe allergy — Clindamycin 300 mg PO three times daily x 7 days",
      "Paracetamol 650 mg (Jan Aushadhi) PO three times daily PRN pain/fever (avoid NSAIDs if renal dysfunction or cellulitis over oedematous limb)",
      "Limb elevation + saline compresses; do NOT use topical antibiotic or steroid-antifungal combination creams"
    ],
    "redFlagReferralTriggers": [
      "Pain out of proportion to findings, crepitus, dusky/bullous/gangrenous skin, gas on imaging, or rapid spread (>1 cm/hour) — suspect necrotising fasciitis, immediate surgical ER referral",
      "Hypotension, tachycardia, fever >39°C with rigors, confusion, or rising CRP/leucocytosis — sepsis, refer ER for IV antibiotics",
      "Cellulitis of face/periorbital area, hand, or scrotum; orbital cellulitis with proptosis or ophthalmoplegia — same-day specialist referral",
      "No clinical improvement at 48–72 hours, recurrent cellulitis (≥2 episodes/year), lymphangitis with lymphadenopathy, or uncontrolled diabetes — refer Dermatology/Medicine"
    ],
    "followUpInterval": "Review in 48–72 hours (reassess border and systemic signs); final review at 7–10 days",
    "patientCounselingHiEn": "Complete the full antibiotic course even if redness improves; keep the limb raised on a pillow and mark the red edge daily to track spread. Return immediately if pain, swelling or fever increases. दवा का पूरा कोर्स करें, पैर/हाथ को ऊँचा रखें, लालिमा की सीमा रोज़ चिह्नित करें; दर्द, सूजन या बुखार बढ़े तो तुरंत अस्पताल आएं। मधुमेह हो तो शुगर नियंत्रित रखें।"
  },
  {
    "specialty": "Thyroid & Endocrinology",
    "condition": "Diabetic Ketoacidosis (DKA)",
    "icd10Code": "E11.10",
    "diagnosticWorkup": [
      "Capillary blood glucose and blood or urine ketones",
      "Venous blood gas with pH and bicarbonate",
      "Serum potassium, sodium, creatinine, and anion gap"
    ],
    "firstLineRegimenPmbjp": [
      "Insulin Regular (Human) 100 IU/mL: 0.1 IU/kg/hr IV infusion after 0.9% Sodium Chloride bolus; continue until ketoacidosis resolves",
      "Sodium Chloride 0.9% IV: 1 L in first hour, then 250–500 mL/hr based on hydration and electrolytes",
      "Potassium Chloride IV: 20–40 mEq/L once serum K <5.5 mEq/L and urine output is adequate"
    ],
    "redFlagReferralTriggers": [
      "Glucose >250 mg/dL with ketones and pH <7.30 or bicarbonate <18 mEq/L",
      "Kussmaul breathing, vomiting, abdominal pain, drowsiness, or shock",
      "K <3.5 or >5.5 mEq/L, renal failure, or suspected severe infection"
    ],
    "followUpInterval": "Immediate ER referral; diabetes review within 24–48 hours after discharge",
    "patientCounselingHiEn": "Do not stop insulin; check glucose and ketones when unwell. इंसुलिन बंद न करें; बीमारी में शुगर और कीटोन जांचें।"
  },
  {
    "specialty": "Thyroid & Endocrinology",
    "condition": "Thyroid Storm",
    "icd10Code": "E05.91",
    "diagnosticWorkup": [
      "TSH, free T4, and free T3",
      "ECG for atrial fibrillation or tachycardia",
      "CBC, liver function tests, and electrolytes"
    ],
    "firstLineRegimenPmbjp": [
      "Propylthiouracil 50 mg tablets: 500–1000 mg PO loading dose, then 250 mg every 4 hours",
      "Propranolol 20–40 mg PO every 6–8 hours; avoid in decompensated heart failure",
      "Hydrocortisone Sodium Succinate 100 mg IV every 8 hours"
    ],
    "redFlagReferralTriggers": [
      "Fever >38.5°C with tachycardia, agitation, delirium, or vomiting",
      "Heart failure, atrial fibrillation with instability, or hypotension",
      "Suspected thyroid storm in pregnancy or after surgery"
    ],
    "followUpInterval": "Immediate ER/ICU referral; endocrine review after stabilization",
    "patientCounselingHiEn": "Do not miss thyroid medicines; seek urgent care for fever, fast heartbeat, or confusion. थायरॉइड दवा न छोड़ें; बुखार, तेज़ धड़कन या बेचैनी में तुरंत अस्पताल जाएँ।"
  }
];

export const OPD_CONSULT_BENCHMARKS: OpdConsultBenchmark[] = [
  {
    "caseId": "OPD-COP-0015",
    "specialty": "Gastroenterology",
    "patientSummary": "43M chronic epigastric burning + early satiety + nocturnal reflux despite antacids",
    "differentialDiagnoses": [
      "Gastroesophageal reflux disease (GERD) (high)",
      "Peptic ulcer disease / NSAID-related gastropathy (moderate)",
      "Functional dyspepsia (moderate)",
      "Esophageal motility disorder (low)"
    ],
    "recommendedPlan": "Follow up in 2–4 weeks or earlier with H. pylori result. Counsel on weight management if applicable, avoiding late meals, spicy/fatty foods, caffeine, alcohol, and tobacco; elevate head of bed; avoid lying down within 3 hours of meals; stop unnecessary NSAIDs. Complete PPI course and reassess at 8 weeks; if no improvem",
    "pmbjpGenericsUsed": [
      "Pantoprazole 40 mg tablet 1 tablet orally once daily, 30–60 minutes before breakfast",
      "Aluminium hydroxide + magnesium hydroxide + simethicone antacid gel/suspension 10 mL orally after meals and at bedtime as needed for breakthrough symptoms",
      "H. pylori eradication regimen if stool antigen positive (Pantoprazole + Amoxicillin + Clarithromycin) Pantoprazole 40 mg BD + Amoxicillin 1 g BD + Clarithromycin 500 mg BD"
    ]
  },
  {
    "caseId": "OPD-COP-0009",
    "specialty": "Cardiology",
    "patientSummary": "59M uncontrolled Stage 2 hypertension (168/102) + exertional angina + grade 1 retinopathy",
    "differentialDiagnoses": [
      "Stable angina due to obstructive coronary artery disease (High)",
      "Hypertensive heart disease with LVH and strain causing angina (High)",
      "Microvascular angina / ischemia with non-obstructive coronary arteries (Moderate)",
      "Aortic stenosis or other valvular heart disease (Low-Moderate)"
    ],
    "recommendedPlan": "Review in 1–2 weeks or earlier if symptoms worsen. This presentation suggests stable angina with uncontrolled hypertension and LVH; urgent cardiology referral for stress testing/echocardiography and consideration of coronary evaluation. Continue BP log, target <130/80 if tolerated. Counsel smoking abstinence, DASH-styl",
    "pmbjpGenericsUsed": [
      "Amlodipine 5 mg orally once daily; uptitrate to 10 mg once daily after BP review if tolerated",
      "Atorvastatin 40 mg orally once daily at night; uptitrate to 80 mg if high-risk and tolerated",
      "Metoprolol tartrate 25 mg orally twice daily; titrate to HR/BP and angina response",
      "Aspirin 75 mg orally once daily after food, only after cardiology review/confirmed atherosclerotic CAD and no bleeding contraindication",
      "Nitroglycerin sublingual / isosorbide dinitrate Use as prescribed for acute angina episodes; sit down before use; avoid with PDE5 inhibitors"
    ]
  },
  {
    "caseId": "OPD-COP-0017",
    "specialty": "Cardiology",
    "patientSummary": "59M uncontrolled Stage 2 hypertension (168/102) + exertional angina + grade 1 retinopathy",
    "differentialDiagnoses": [
      "Stable angina pectoris / chronic coronary syndrome (High)",
      "Uncontrolled hypertension with hypertensive heart disease/LVH (High)",
      "Heart failure with preserved ejection fraction (HFpEF) (Moderate)",
      "Aortic stenosis or other valvular heart disease (Low-Moderate)"
    ],
    "recommendedPlan": "Arrange urgent cardiology review for suspected stable angina/chronic coronary syndrome; do not delay stress testing/echocardiography and consider coronary angiography if high-risk features. Counsel on daily home BP monitoring, medication adherence, salt restriction (<5 g/day), DASH-style diet, weight reduction, smoking",
    "pmbjpGenericsUsed": [
      "Amlodipine 5 mg tablet 5 mg PO once daily; uptitrate to 10 mg once daily if BP remains above goal and tolerated",
      "Metoprolol tartrate 25 mg tablet 25 mg PO twice daily; titrate to heart rate/BP response if no bradycardia, asthma, or decompensation",
      "Aspirin 75 mg tablet 75 mg PO once daily after food, if no bleeding contraindication",
      "Atorvastatin 40 mg tablet 40 mg PO once daily at night; consider uptitration to 80 mg after lipid review",
      "Nitroglycerin 0.5 mg sublingual tablet 0.5 mg sublingual as needed for chest tightness; may repeat up to 3 doses every 5 minutes; seek emergency care if pain persists >10–15 minutes or worsens"
    ]
  },
  {
    "caseId": "OPD-COP-0016",
    "specialty": "Psychiatry & Neuro",
    "patientSummary": "29F persistent low mood, anhedonia, terminal insomnia & tension-type headaches x 3 months",
    "differentialDiagnoses": [
      "Major depressive disorder, moderate-severe, with anxious distress (High)",
      "Generalized anxiety disorder (Moderate-high)",
      "Mixed anxiety and depressive disorder (Moderate)",
      "Insomnia disorder with secondary anxiety (Moderate)"
    ],
    "recommendedPlan": "Review in 2 weeks and again at 4–6 weeks; repeat PHQ-9/GAD-7 and suicide risk assessment. Provide psychoeducation that depression/anxiety are treatable, encourage CBT/psychotherapy, sleep hygiene, regular exercise, caffeine/alcohol reduction, and adherence to medication. Warn not to stop sertraline abruptly; monitor fo",
    "pmbjpGenericsUsed": [
      "Sertraline 50 mg tablet 25 mg orally once daily for 4 days, then 50 mg orally once daily; take with food if GI upset",
      "Vitamin D3 60,000 IU capsule 60,000 IU orally once weekly",
      "Ferrous ascorbate 100 mg elemental iron + folic acid 1.5 mg tablet One tablet orally once daily if iron deficiency is confirmed"
    ]
  },
  {
    "caseId": "OPD-COP-0004",
    "specialty": "Infectious Disease",
    "patientSummary": "31M 9-day continuous step-ladder fever, coated tongue, relative bradycardia, mild RUQ tenderness",
    "differentialDiagnoses": [
      "Enteric fever (typhoid) due to Salmonella Typhi (High)",
      "Dengue fever (Moderate)",
      "Malaria (vivax/falciparum) (Moderate)",
      "Leptospirosis (Low-Moderate)"
    ],
    "recommendedPlan": "Suspect enteric fever; obtain blood cultures before antibiotics and start effective therapy promptly. Admit/observe if unable to take oral therapy, has red flags, or is toxic. Complete the full antibiotic course; do not restart incomplete cefixime. Maintain temperature chart, hydration, soft bland diet, hand hygiene, a",
    "pmbjpGenericsUsed": [
      "Ceftriaxone injection (PMBJP generic) 2 g IV once daily or 1 g IV every 12 hours; start after blood cultures are drawn; adjust to local susceptibility and renal/hepatic status",
      "Azithromycin tablet (PMBJP generic) 1 g orally once daily (or 500 mg once daily depending on local protocol) if uncomplicated enteric fever and oral therapy/step-down is appropriate",
      "Paracetamol tablet (PMBJP generic) 500–1000 mg orally every 6 hours as needed; maximum 4 g/day; avoid NSAIDs",
      "ORS sachet (PMBJP generic) One sachet in 1 L clean water; sip frequently for hydration"
    ]
  },
  {
    "caseId": "OPD-COP-0014",
    "specialty": "Obstetrics",
    "patientSummary": "25F Primigravida 28 weeks gestation with gestational diabetes screening abnormal & anemia",
    "differentialDiagnoses": [
      "Gestational diabetes mellitus (GDM) (High)",
      "Iron deficiency anemia, moderate (High)",
      "Pregnancy-associated nocturnal calf cramps (High)",
      "Vitamin D deficiency (Moderate)"
    ],
    "recommendedPlan": "Review in 1–2 weeks for GDM education, MNT, home SMBG fasting and 2-hour postprandial values, and anemia management. Repeat CBC/ferritin in 4 weeks; titrate iron. Arrange growth scan at 28–32 weeks and ANC every 2–4 weeks. Counsel on iron-rich diet, vitamin C with iron, calcium-rich foods, hydration, calf stretching be",
    "pmbjpGenericsUsed": [
      "Ferrous ascorbate 100 mg elemental iron + folic acid 1.5 mg tablet 1 tablet orally once daily after food; consider twice daily if ferritin very low or Hb fails to rise, as per protocol",
      "Calcium carbonate 500 mg elemental calcium + vitamin D3 tablet 1 tablet orally twice daily",
      "Metformin 500 mg tablet (only if SMBG targets are not met after 1–2 weeks of medical nutrition therapy) 500 mg orally twice daily with meals; titrate as per obstetric/physician protocol"
    ]
  },
  {
    "caseId": "OPD-COP-0013",
    "specialty": "Nephrology",
    "patientSummary": "56F recurrent UTI + uncontrolled diabetes + bilateral ankle edema",
    "differentialDiagnoses": [
      "Acute cystitis/uncomplicated UTI (High)",
      "Diabetic kidney disease with proteinuria/CKD G3b (High)",
      "NSAID-related nephrotoxicity or chronic interstitial nephritis (Moderate)",
      "Acute pyelonephritis (Low-Moderate)"
    ],
    "recommendedPlan": "Review in 48-72 hours with urine culture; if culture grows organism, narrow/adjust antibiotic. Stop all NSAIDs and avoid nephrotoxins. Maintain hydration, salt restriction, and glycemic control. Target BP <130/80. Repeat creatinine, electrolytes, and potassium after stopping NSAIDs and after starting telmisartan. Refer",
    "pmbjpGenericsUsed": [
      "Cefixime 200 mg tablet 200 mg orally twice daily",
      "Paracetamol 500 mg tablet 500-650 mg orally every 8 hours as needed for pain",
      "Amlodipine 5 mg tablet 5 mg orally once daily",
      "Telmisartan 40 mg tablet 40 mg orally once daily after acute infection resolves and potassium <5.0 mmol/L; monitor creatinine/potassium in 1-2 weeks"
    ]
  },
  {
    "caseId": "OPD-COP-0005",
    "specialty": "Nephrology",
    "patientSummary": "56F recurrent UTI + uncontrolled diabetes + bilateral ankle edema",
    "differentialDiagnoses": [
      "Complicated lower urinary tract infection/cystitis in T2DM with CKD G3b (high)",
      "Diabetic kidney disease with proteinuria (high)",
      "NSAID-associated CKD/analgesic nephropathy or AKI on CKD (moderate)",
      "Upper tract infection/acute pyelonephritis or urosepsis (moderate until excluded)"
    ],
    "recommendedPlan": "Review in 48–72 hours with urine culture, repeat creatinine/electrolytes and BP; confirm antibiotic sensitivity and adjust therapy. Maintain hydration, avoid all NSAIDs, and complete the antibiotic course. Advise sick-day rules: hold ACEi/ARB, SGLT2 inhibitors, diuretics and metformin temporarily during vomiting/dehydr",
    "pmbjpGenericsUsed": [
      "Cefixime 200 mg PO twice daily; start after urine culture if no sepsis; adjust per culture and local antibiogram",
      "Paracetamol 650 mg PO every 8 hours as needed for pain; maximum 3 g/day",
      "Amlodipine 5 mg PO once daily if BP persistently ≥140/90 after acute infection/pain control; titrate as tolerated"
    ]
  },
  {
    "caseId": "OPD-COP-0007",
    "specialty": "Gastroenterology",
    "patientSummary": "43M chronic epigastric burning + early satiety + nocturnal reflux despite antacids",
    "differentialDiagnoses": [
      "Gastroesophageal reflux disease (GERD), likely non-erosive or mild erosive esophagitis (High)",
      "Functional heartburn / reflux hypersensitivity (Moderate)",
      "Peptic ulcer disease / NSAID-related gastropathy (Moderate)",
      "H. pylori-associated gastritis/dyspepsia (Moderate)"
    ],
    "recommendedPlan": "Reassess in 2–4 weeks and again at 8 weeks. Take pantoprazole 30–60 minutes before breakfast; do not stop abruptly if long-term use. Avoid NSAIDs/self-medication; use alternative analgesia for back pain after review. Lifestyle: small frequent meals, avoid spicy/fatty foods, caffeine, alcohol and tobacco; no meals withi",
    "pmbjpGenericsUsed": [
      "Pantoprazole 40 mg tablet 40 mg orally once daily, 30–60 minutes before breakfast",
      "Aluminium hydroxide + magnesium hydroxide + simethicone antacid gel (PMBJP if available) 10 mL orally after meals and at bedtime as needed for breakthrough symptoms",
      "Conditional H. pylori eradication: Pantoprazole 40 mg + Amoxicillin 1 g + Clarithromycin 500 mg Pantoprazole before meals; amoxicillin and clarithromycin after meals; all twice daily—only if H. pylori stool antigen is positive and per local STG"
    ]
  },
  {
    "caseId": "OPD-COP-0006",
    "specialty": "Obstetrics",
    "patientSummary": "25F Primigravida 28 weeks gestation with gestational diabetes screening abnormal & anemia",
    "differentialDiagnoses": [
      "Gestational diabetes mellitus (High)",
      "Iron deficiency anemia, moderate (High)",
      "Nocturnal calf cramps of pregnancy / calcium-vitamin D or magnesium deficiency (Moderate)",
      "Thalassemia trait or other microcytic anemia (Low)"
    ],
    "recommendedPlan": "Review in 2-4 weeks or earlier if red flags. GDM: medical nutrition therapy, 30 min walking/day, SMBG targets fasting <95 mg/dL and 2-h postprandial <120 mg/dL; start insulin if targets exceeded. Anemia: take iron with vitamin C, avoid tea/coffee, repeat CBC after 4 weeks. Cramps: hydration, calf stretching at bedtime,",
    "pmbjpGenericsUsed": [
      "Ferrous sulphate 100 mg elemental iron + folic acid 500 mcg tablet 1 tablet orally twice daily after meals; take with vitamin C-rich food; avoid tea/coffee within 1 hour",
      "Calcium carbonate 500 mg elemental calcium tablet 1 tablet orally twice daily, preferably one at bedtime",
      "Cholecalciferol 60,000 IU capsule 1 capsule orally weekly after food, only if 25-OH vitamin D deficient"
    ]
  },
  {
    "caseId": "OPD-COP-0011",
    "specialty": "Pulmonology",
    "patientSummary": "63M former bidi smoker chronic productive cough x 4 yrs with worsening winter wheeze",
    "differentialDiagnoses": [
      "COPD GOLD 2, Group E (chronic bronchitis phenotype) (High)",
      "Asthma-COPD overlap (ACO) (Moderate)",
      "Bronchiectasis with chronic airway infection (Moderate)",
      "Pulmonary tuberculosis (active or sequelae) (Moderate)"
    ],
    "recommendedPlan": "Review in 4–6 weeks after starting/maintaining inhaled therapy; reassess mMRC, CAT, inhaler technique, adherence, and exacerbation frequency. Strongly advise smoking cessation and pulmonary rehabilitation. Provide a written COPD action plan and advise early review for increased breathlessness, sputum volume/purulence, ",
    "pmbjpGenericsUsed": [
      "Tiotropium bromide 18 mcg DPI capsule 1 inhalation once daily via HandiHaler",
      "Formoterol 12 mcg DPI or LABA+LAMA fixed-dose inhaler if stocked 1 inhalation twice daily (or per fixed-dose label)",
      "Salbutamol 100 mcg MDI 2 puffs as needed for breathlessness, up to every 4–6 hours; max 8–12 puffs/day",
      "Budesonide 200 mcg + Formoterol 6 mcg MDI 1–2 puffs twice daily only if ACO/eosinophils ≥300 cells/µL or recurrent exacerbations with eosinophilic feature",
      "Prednisolone 40 mg tablet 40 mg once daily for exacerbation"
    ]
  },
  {
    "caseId": "OPD-COP-0012",
    "specialty": "Infectious Disease",
    "patientSummary": "31M 9-day continuous step-ladder fever, coated tongue, relative bradycardia, mild RUQ tenderness",
    "differentialDiagnoses": [
      "Enteric fever (Salmonella Typhi) (high)",
      "Dengue fever (moderate)",
      "Malaria (moderate)",
      "Acute viral hepatitis A/E (moderate)"
    ],
    "recommendedPlan": "Review in 48–72 hours with temperature chart and lab results; complete the full antibiotic course even if afebrile; collect blood culture before antibiotics if feasible; maintain hydration and soft bland diet; strict hand hygiene and safe food/water; avoid NSAIDs/aspirin; return immediately if any red flag; consider pu",
    "pmbjpGenericsUsed": [
      "Azithromycin 500 mg tablet 2 tablets (1 g) orally once daily",
      "Ceftriaxone 1 g injection 2 g IV once daily (use if severe disease, persistent vomiting, oral intolerance, or inpatient care)",
      "Paracetamol 650 mg tablet 650 mg orally every 6 hourly as needed; maximum 3 g/day",
      "ORS (WHO low-osmolarity) sachet 1 sachet dissolved in 1 L clean water; sip frequently"
    ]
  },
  {
    "caseId": "OPD-COP-0018",
    "specialty": "Diabetology",
    "patientSummary": "47F newly detected T2DM (HbA1c 8.9%) + fatty liver + mild distal tingling",
    "differentialDiagnoses": [
      "Type 2 diabetes mellitus with early diabetic kidney disease (CKD G2 A2 if albuminuria persistent) (High)",
      "Diabetic peripheral neuropathy (High)",
      "Nocturnal leg cramps due to electrolyte disturbance or diabetes-related neuropathy (Moderate)",
      "Vitamin B12 deficiency (Moderate)"
    ],
    "recommendedPlan": "Review in 2 weeks for medication tolerance, BP, and foot examination. Repeat ACR and potassium/creatinine 4–6 weeks after starting telmisartan; HbA1c every 3 months; annual fundus, foot, and renal screening. Counsel weight loss, reduced refined carbohydrates, salt restriction, regular walking/strength exercise, foot ca",
    "pmbjpGenericsUsed": [
      "Metformin 500 mg tablet 500 mg PO BD with meals; titrate to 1000 mg BD as tolerated",
      "Dapagliflozin 10 mg tablet 10 mg PO OD in morning",
      "Telmisartan 40 mg tablet 40 mg PO OD; titrate to 80 mg OD if tolerated and BP permits",
      "Pregabalin 75 mg capsule (if neuropathic pain persists) 75 mg PO HS; may titrate to 150 mg/day if needed and tolerated",
      "Methylcobalamin 500 mcg tablet (only if B12 deficient) 500 mcg PO OD"
    ]
  },
  {
    "caseId": "OPD-COP-0008",
    "specialty": "Psychiatry & Neuro",
    "patientSummary": "29F persistent low mood, anhedonia, terminal insomnia & tension-type headaches x 3 months",
    "differentialDiagnoses": [
      "Major depressive disorder, moderate-severe, with anxious distress (high)",
      "Generalized anxiety disorder (high)",
      "Mixed anxiety-depressive disorder (moderate)",
      "Panic disorder (moderate)"
    ],
    "recommendedPlan": "Review in 1-2 weeks for safety, adherence, and side effects; provide crisis/safety plan and emergency contacts. Psychoeducation: depression/anxiety are treatable; SSRIs take 2-4 weeks for benefit and should not be stopped abruptly. Encourage CBT/psychotherapy, sleep hygiene, regular sleep-wake schedule, caffeine/alcoho",
    "pmbjpGenericsUsed": [
      "Sertraline tablet 25 mg PO daily for 7 days, then 50 mg PO daily; titrate to 100 mg daily if inadequate response and tolerated",
      "Cholecalciferol (vitamin D3) sachet/tablet 60,000 IU PO weekly"
    ]
  },
  {
    "caseId": "OPD-COP-0001",
    "specialty": "Cardiology",
    "patientSummary": "59M uncontrolled Stage 2 hypertension (168/102) + exertional angina + grade 1 retinopathy",
    "differentialDiagnoses": [
      "Stable angina / chronic coronary syndrome due to obstructive CAD (High)",
      "Hypertensive heart disease with LVH and demand ischemia (High)",
      "Microvascular angina / INOCA (Moderate)",
      "Aortic stenosis / hypertrophic cardiomyopathy / other structural heart disease (Moderate)"
    ],
    "recommendedPlan": "OPD review in 1 week for BP/HR, medication tolerance, and adherence; earlier if symptoms worsen. Maintain a home BP log twice daily. Strict smoking cessation, DASH-style diet, sodium <5 g/day, weight loss 5–10%, and regular walking after evaluation. Teach sublingual nitroglycerin use: sit down, take 1 tablet at chest t",
    "pmbjpGenericsUsed": [
      "Aspirin 75 mg tablet 75 mg PO once daily after food",
      "Atorvastatin 40 mg tablet 40 mg PO once daily at night; titrate to 80 mg if tolerated and LDL not at goal",
      "Metoprolol succinate 25 mg tablet 25 mg PO once daily; titrate to HR 55–60/min and BP target if tolerated",
      "Amlodipine 5 mg tablet 5 mg PO once daily; may increase to 10 mg once daily if BP not controlled",
      "Telmisartan 40 mg tablet 40 mg PO once daily; titrate to 80 mg once daily if BP not controlled and renal function/potassium permit"
    ]
  },
  {
    "caseId": "OPD-COP-0002",
    "specialty": "Diabetology",
    "patientSummary": "47F newly detected T2DM (HbA1c 8.9%) + fatty liver + mild distal tingling",
    "differentialDiagnoses": [],
    "recommendedPlan": "We need answer only JSON. Need craft differential diagnoses, workup, PMBJP treatment plan generics with approx INR, red flags, followup counseling. Need follow STG India. Patient likely newly detected T2DM with peripheral neuropathy, nocturnal cramps, albuminuria (ACR 48 mg/g = moderately increased albuminuria A2), obe",
    "pmbjpGenericsUsed": []
  },
  {
    "caseId": "OPD-COP-0010",
    "specialty": "Diabetology",
    "patientSummary": "47F newly detected T2DM (HbA1c 8.9%) + fatty liver + mild distal tingling",
    "differentialDiagnoses": [],
    "recommendedPlan": "{\"differentialDiagnoses\":[{\"diagnosis\":\"Type 2 diabetes mellitus with diabetic peripheral neuropathy\",\"likelihood\":\"High\",\"reasoning\":\"HbA1c 8.9%, FBG/PPBG elevated, obesity, family history, and bilateral sole tingling for 2 months fit distal symmetric polyneuropathy.\"},{\"diagnosis\":\"Hyperglycemia-induced osmotic polyu",
    "pmbjpGenericsUsed": []
  },
  {
    "caseId": "OPD-COP-0003",
    "specialty": "Pulmonology",
    "patientSummary": "63M former bidi smoker chronic productive cough x 4 yrs with worsening winter wheeze",
    "differentialDiagnoses": [
      "COPD GOLD 3, Group E (frequent exacerbator, mMRC 3) (High)",
      "Asthma-COPD overlap (ACO) (Moderate)",
      "Bronchiectasis (Moderate)",
      "Pulmonary tuberculosis / post-TB sequelae (Moderate)"
    ],
    "recommendedPlan": "Review in 1–2 weeks to confirm inhaler technique and adherence, then every 1–3 months. Strongly advise smoking cessation and biomass smoke avoidance; refer for pulmonary rehabilitation. Give influenza and pneumococcal vaccination as indicated. Provide a written COPD action plan and rescue salbutamol instructions. Asses",
    "pmbjpGenericsUsed": [
      "Salbutamol 100 mcg MDI 2 puffs as needed up to every 4–6 hours",
      "Tiotropium 18 mcg DPI 1 inhalation once daily",
      "Formoterol 12 mcg DPI 1 inhalation twice daily",
      "Budesonide 200 mcg DPI 1 inhalation twice daily only if blood eosinophils ≥300/µL or asthma-COPD overlap; not routine otherwise"
    ]
  },
  {
    "caseId": "OPD-COP-0023",
    "specialty": "Gastroenterology",
    "patientSummary": "43M chronic epigastric burning + early satiety + nocturnal reflux despite antacids",
    "differentialDiagnoses": [
      "Gastroesophageal reflux disease (GERD), likely non-erosive reflux disease (high)",
      "Peptic ulcer disease / NSAID-related gastroduodenal injury (moderate)",
      "H. pylori-associated gastritis or dyspepsia (moderate)",
      "Functional dyspepsia (low-moderate)"
    ],
    "recommendedPlan": "Review in 1 week with H. pylori stool antigen result and in 4 weeks for symptom reassessment. Take pantoprazole before breakfast daily; avoid NSAIDs, spicy/fatty meals, late eating, alcohol, and smoking. Eat regular smaller meals; remain upright 2–3 hours after eating; elevate head of bed; reduce weight if overweight. ",
    "pmbjpGenericsUsed": [
      "Pantoprazole 40 mg tablet 1 tablet orally once daily, 30–60 minutes before breakfast",
      "Domperidone 10 mg tablet 1 tablet orally three times daily, 15–30 minutes before meals, only if regurgitation/sour eructation persists despite PPI",
      "Paracetamol 500 mg tablet 1–2 tablets orally up to three times daily as needed for back pain, instead of NSAIDs"
    ]
  },
  {
    "caseId": "OPD-COP-0021",
    "specialty": "Nephrology",
    "patientSummary": "56F recurrent UTI + uncontrolled diabetes + bilateral ankle edema",
    "differentialDiagnoses": [
      "Acute cystitis/urinary tract infection in CKD (high)",
      "Diabetic kidney disease with proteinuria (high)",
      "NSAID-associated/analgesic nephropathy (moderate)",
      "Complicated UTI/pyelonephritis or obstructive uropathy (moderate)"
    ],
    "recommendedPlan": "Review urine culture in 48-72 hours and adjust antibiotics. Complete antibiotic course; maintain hydration. Strictly avoid NSAIDs and other nephrotoxins. Control BP and glucose; low-salt diet; monitor home BP. Repeat creatinine/eGFR, electrolytes, and urine ACR in 1-2 weeks; nephrology referral for CKD G3b with protein",
    "pmbjpGenericsUsed": [
      "Cefixime 200 mg tablet 200 mg PO once daily (renally adjusted for eGFR 33; revise per urine culture)",
      "Paracetamol 500 mg tablet 500 mg PO up to three times daily as needed; maximum 3 g/day",
      "Telmisartan 40 mg tablet 40 mg PO once daily, start after acute infection is controlled; monitor BP, potassium, and creatinine"
    ]
  },
  {
    "caseId": "OPD-COP-0020",
    "specialty": "Infectious Disease",
    "patientSummary": "31M 9-day continuous step-ladder fever, coated tongue, relative bradycardia, mild RUQ tenderness",
    "differentialDiagnoses": [
      "Enteric fever (Salmonella Typhi/Paratyphi) (High)",
      "Malaria (Moderate)",
      "Dengue fever (Moderate)",
      "Urinary tract infection/pyelonephritis (Low)"
    ],
    "recommendedPlan": "Review in 48-72 hours or earlier if any red flag. Complete the full antibiotic course; do not restart/continue incomplete cefixime unless culture-guided. Blood culture results should guide therapy. Maintain hydration, soft diet, hand hygiene, and safe food/water practices. Counsel that Typhidot alone is not confirmator",
    "pmbjpGenericsUsed": [
      "Azithromycin 500 mg tablet 500 mg orally once daily",
      "Paracetamol 650 mg tablet 650 mg orally every 6 hours as needed for fever/pain; max 4 g/day",
      "ORS sachet 1 sachet dissolved in 1 L clean water; sip as needed"
    ]
  },
  {
    "caseId": "OPD-COP-0024",
    "specialty": "Psychiatry & Neuro",
    "patientSummary": "29F persistent low mood, anhedonia, terminal insomnia & tension-type headaches x 3 months",
    "differentialDiagnoses": [
      "Major depressive disorder, moderate-severe, with anxious distress (high)",
      "Generalized anxiety disorder (high)",
      "Medical contributors: vitamin D deficiency and mild anemia (moderate)",
      "Insomnia disorder (moderate)"
    ],
    "recommendedPlan": "Follow up in 1-2 weeks after starting escitalopram, then every 2-4 weeks initially; monitor PHQ-9, GAD-7, suicide risk, and side effects. Explain that SSRIs take 2-4 weeks for full effect and should not be stopped abruptly. Avoid routine benzodiazepines; advise sleep hygiene, regular exercise, caffeine/alcohol reductio",
    "pmbjpGenericsUsed": [
      "Escitalopram tablet (Jan Aushadhi generic) 5 mg PO once daily in the morning for 4 days, then 10 mg PO once daily; may increase to 20 mg once daily after 2-4 weeks if inadequate response and tolerated",
      "Cholecalciferol (Vitamin D3) 60,000 IU 60,000 IU PO once weekly for 8 weeks, then maintenance 60,000 IU monthly or 1000-2000 IU daily as advised"
    ]
  },
  {
    "caseId": "OPD-COP-0026",
    "specialty": "Diabetology",
    "patientSummary": "47F newly detected T2DM (HbA1c 8.9%) + fatty liver + mild distal tingling",
    "differentialDiagnoses": [
      "Type 2 diabetes mellitus with poor glycemic control (High)",
      "Diabetic distal symmetric polyneuropathy (High)",
      "Early diabetic kidney disease with moderately increased albuminuria (A2) (Moderate to high)",
      "Vitamin B12 deficiency neuropathy (Moderate)"
    ],
    "recommendedPlan": "Review in 2-4 weeks for symptom response, BP, glucose logs, and medication tolerance; repeat HbA1c in 3 months and urine ACR as advised. Target individualized HbA1c <7%, BP <130/80 where feasible, and 5-7% weight loss. Counsel on low-refined-carbohydrate, high-fiber diet, 150 minutes/week moderate exercise, foot inspec",
    "pmbjpGenericsUsed": [
      "Metformin SR tablet 500 mg once daily with evening meal for 1 week, then 500 mg twice daily with meals; titrate to 1000 mg twice daily if tolerated and eGFR remains >45",
      "Telmisartan tablet 40 mg once daily; monitor BP, serum creatinine, and potassium after 1-2 weeks",
      "Atorvastatin tablet 10 mg once daily at night if LDL-C elevated or as per cardiovascular risk assessment",
      "Pregabalin capsule 75 mg once daily at night; may titrate to 75 mg twice daily if needed for neuropathic symptoms; counsel on dizziness/sedation",
      "Methylcobalamin tablet 1500 mcg once daily; best initiated after confirming B12 deficiency"
    ]
  },
  {
    "caseId": "OPD-COP-0022",
    "specialty": "Obstetrics",
    "patientSummary": "25F Primigravida 28 weeks gestation with gestational diabetes screening abnormal & anemia",
    "differentialDiagnoses": [
      "Gestational diabetes mellitus (DIPSI 2-h OGTT 162 mg/dL) (high)",
      "Iron deficiency anemia, moderate (Hb 9.4 g/dL, MCV 74 fL) (high)",
      "Pregnancy-associated nocturnal calf cramps (high)",
      "Calcium/vitamin D insufficiency (moderate)"
    ],
    "recommendedPlan": "Review SMBG log in 1–2 weeks; if targets not met, start/adjust metformin or refer for insulin. Repeat CBC/ferritin in 4 weeks and after 3 months of iron. Continue ANC every 2–4 weeks; plan growth scan around 32–34 weeks. Counsel medical nutrition therapy for GDM, regular walking, portion control, and postpartum OGTT. C",
    "pmbjpGenericsUsed": [
      "Metformin 500 mg tablet Start 500 mg once daily with dinner only if SMBG remains above targets after 1–2 weeks of diet/exercise (fasting ≥95 mg/dL or 2-h postprandial ≥120 mg/dL); titrate to 500 mg twice daily if needed under supervision",
      "Ferrous ascorbate 100 mg + folic acid 1.5 mg tablet One tablet daily after dinner with vitamin C-rich food; avoid tea/coffee/milk/calcium supplements within 2 hours",
      "Calcium carbonate 500 mg + vitamin D3 250 IU tablet One tablet twice daily after meals"
    ]
  },
  {
    "caseId": "OPD-COP-0019",
    "specialty": "Pulmonology",
    "patientSummary": "63M former bidi smoker chronic productive cough x 4 yrs with worsening winter wheeze",
    "differentialDiagnoses": [],
    "recommendedPlan": "{\"differentialDiagnoses\":[{\"diagnosis\":\"COPD GOLD 3, Group E (frequent exacerbator)\",\"likelihood\":\"High\",\"reasoning\":\"Post-bronchodilator FEV1/FVC 0.56 and FEV1 48% predicted confirm persistent airflow obstruction; CXR hyperinflation, chronic mucoid sputum, mMRC 3, and 2 steroid-treated exacerbations/year fit GOLD 3 Gr",
    "pmbjpGenericsUsed": []
  },
  {
    "caseId": "OPD-COP-0028",
    "specialty": "Infectious Disease",
    "patientSummary": "31M 9-day continuous step-ladder fever, coated tongue, relative bradycardia, mild RUQ tenderness",
    "differentialDiagnoses": [
      "Enteric fever (typhoid) (high)",
      "Dengue fever (moderate)",
      "Malaria (moderate)",
      "Rickettsial illness (low-moderate)"
    ],
    "recommendedPlan": "Review in 48–72 hours or earlier if red flags. Obtain blood culture before antibiotics if possible; prior incomplete cefixime may reduce culture positivity. Start oral azithromycin empirically for suspected uncomplicated enteric fever after assessment, ensure full course and adherence, and avoid NSAIDs/aspirin. Counsel",
    "pmbjpGenericsUsed": [
      "Azithromycin 500 mg tablet 2 tablets (1 g) orally once daily",
      "Paracetamol 650 mg tablet 1 tablet orally every 6–8 hours as needed for fever/pain; max 3 g/day",
      "ORS sachet 1 sachet dissolved in 1 L clean water; sip as needed",
      "Isabgol husk 1–2 teaspoonfuls with warm water/milk at bedtime"
    ]
  },
  {
    "caseId": "OPD-COP-0025",
    "specialty": "Cardiology",
    "patientSummary": "59M uncontrolled Stage 2 hypertension (168/102) + exertional angina + grade 1 retinopathy",
    "differentialDiagnoses": [
      "Stable angina pectoris due to obstructive coronary artery disease (High)",
      "Hypertensive heart disease with LVH/strain and microvascular angina (Moderate)",
      "Aortic stenosis (Low-Moderate)",
      "Hypertrophic cardiomyopathy (Low)"
    ],
    "recommendedPlan": "Review in 1 week with BP/HR log, echocardiography, and stress test results; if stress test is positive or high-risk features are present, refer urgently to cardiology. Continue aspirin/statin unless contraindicated. Counsel smoking cessation, DASH-style diet, salt <5 g/day, gradual weight loss, and supervised exercise ",
    "pmbjpGenericsUsed": [
      "Amlodipine 5 mg tablet 5 mg PO once daily; titrate to 10 mg once daily as BP allows",
      "Metoprolol succinate 25 mg tablet 25 mg PO once daily; titrate to 50 mg once daily if HR/BP permit and no bradycardia/contraindication",
      "Aspirin 75 mg tablet 75 mg PO once daily after food if no bleeding contraindication",
      "Atorvastatin 40 mg tablet 40 mg PO once daily at night; consider 80 mg if very high risk and tolerated",
      "Nitroglycerin 0.5 mg sublingual tablet (or isosorbide dinitrate 5 mg SL if NTG unavailable) 0.5 mg SL at onset of chest pain; may repeat every 5 minutes up to 3 doses; sit/lie down; avoid if PDE5 inhibitor used"
    ]
  },
  {
    "caseId": "OPD-COP-0027",
    "specialty": "Pulmonology",
    "patientSummary": "63M former bidi smoker chronic productive cough x 4 yrs with worsening winter wheeze",
    "differentialDiagnoses": [
      "COPD, GOLD 2, Group E, chronic bronchitis phenotype (high)",
      "Bronchiectasis with chronic airway infection (moderate)",
      "Post-tuberculosis COPD / active pulmonary TB (moderate)",
      "Asthma-COPD overlap (ACO) (low-moderate)"
    ],
    "recommendedPlan": "Review in 2–4 weeks after starting LABA+LAMA and verify inhaler technique/adherence. Counsel strict smoking cessation, avoid biomass/smoke exposure, pulmonary rehabilitation, annual influenza and pneumococcal vaccination, and written exacerbation action plan. Use salbutamol as rescue only; seek urgent care for red flag",
    "pmbjpGenericsUsed": [
      "Salbutamol 100 mcg MDI 2 puffs inhaled PRN q4–6h; max 8–12 puffs/day",
      "Tiotropium 18 mcg DPI 1 inhalation once daily",
      "Formoterol 6 mcg MDI/DPI 1–2 puffs/inhalations twice daily",
      "Budesonide+Formoterol 200/6 mcg inhaler 1 puff twice daily only if AEC ≥300/µL, ACO/asthma features, or recurrent exacerbations; reassess need",
      "Prednisolone 40 mg PO 40 mg once daily for exacerbation only, with review"
    ]
  },
  {
    "caseId": "OPD-COP-0029",
    "specialty": "Nephrology",
    "patientSummary": "56F recurrent UTI + uncontrolled diabetes + bilateral ankle edema",
    "differentialDiagnoses": [
      "Complicated lower urinary tract infection/cystitis in a patient with T2DM and CKD (High)",
      "Diabetic kidney disease with proteinuria and CKD stage G3b (High)",
      "NSAID-associated nephrotoxicity/acute interstitial nephritis or CKD progression (Moderate)",
      "Acute pyelonephritis (Low-Moderate)"
    ],
    "recommendedPlan": "Review in 48-72 hours with urine culture; repeat creatinine/eGFR and electrolytes within 1 week. Complete the antibiotic course and do not start/continue NSAIDs. Maintain hydration, low-salt diet, glycemic control and BP target generally <130/80 mmHg if tolerated. After infection resolves and renal function is stable, ",
    "pmbjpGenericsUsed": [
      "Cefixime 200 mg tablet 200 mg orally twice daily after food",
      "Paracetamol 650 mg tablet 650 mg orally every 6-8 hours as needed for pain; maximum 3 g/day",
      "Amlodipine 5 mg tablet 5 mg orally once daily; titrate to BP target"
    ]
  },
  {
    "caseId": "OPD-COP-0030",
    "specialty": "Obstetrics",
    "patientSummary": "25F Primigravida 28 weeks gestation with gestational diabetes screening abnormal & anemia",
    "differentialDiagnoses": [
      "Gestational diabetes mellitus (DIPSI 2-hr OGTT 162 mg/dL) (high)",
      "Iron deficiency anemia (moderate, microcytic) (high)",
      "Pregnancy-related nocturnal calf cramps (high)",
      "Thalassemia trait / hemoglobinopathy (low)"
    ],
    "recommendedPlan": "GDM is confirmed by DIPSI; begin medical nutrition therapy with a dietitian, 30 minutes walking daily, and SMBG fasting and 2-hr postprandial. DIPSI targets: fasting <90 mg/dL and 2-hr postprandial <120 mg/dL. Review in 1–2 weeks with glucose log; start metformin or insulin per protocol if targets are exceeded. For ane",
    "pmbjpGenericsUsed": [
      "Ferrous ascorbate 100 mg elemental iron + folic acid 500 mcg tablet 1 tablet orally once daily after food; may increase to twice daily if moderate anemia and tolerated, with vitamin C-rich food; avoid tea/coffee within 1 hour",
      "Calcium carbonate 500 mg elemental calcium + vitamin D3 250 IU tablet 1 tablet orally twice daily",
      "Metformin 500 mg tablet (conditional) Only if SMBG fasting ≥90 mg/dL or 2-hr postprandial ≥120 mg/dL persists after 1–2 weeks of medical nutrition therapy: 500 mg orally once daily with dinner, titrate to 1000 mg twice daily as needed and tolerated"
    ]
  }
];
