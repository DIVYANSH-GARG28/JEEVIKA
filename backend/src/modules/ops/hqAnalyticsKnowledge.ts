// AUTO-CURATED & VERIFIED VIA JEEVIKA /api/v1/ops/hq/forecast & Covexcode hq_analytics (bx-live...c1f671)
// Generated at: 2026-11-27T14:07:00.913Z

export interface HqOutbreakPlaybook {
  scenario: string;
  seasonRegion: string;
  surgeSignals: string[];
  essentialPmbjpBufferDrugs: string[];
  stockBufferDays: number;
  coldChainAndStorageNotes: string;
  interClinicTransferRule: string;
}

export interface HqProcurementBrief {
  briefId: string;
  regionHub: string;
  trigger: string;
  urgentTransfers: string[];
  estimatedCostSavingsInr: number;
  executiveSummary: string;
}

export const HQ_OUTBREAK_PLAYBOOKS: HqOutbreakPlaybook[] = [
  {
    "scenario": "Acute Watery Diarrhea & Cholera-Like Dehydration Surge in Primary OPD",
    "seasonRegion": "Post-Flood Leptospirosis & Acute Watery Diarrhea (Mumbai / Konkan)",
    "surgeSignals": [
      "OPD acute watery diarrhea case count exceeds 2x same-week baseline for 3 consecutive days",
      "ORS sachet dispensing exceeds 150% of 7-day moving average with ≥10 moderate/severe dehydration referrals per day",
      "Stool rapid test or culture positivity for Vibrio cholerae exceeds 5% among AWD samples"
    ],
    "essentialPmbjpBufferDrugs": [
      "ORS (WHO Low Osmolarity) Powder 20.5 g sachet",
      "Zinc Sulfate Dispersible Tablets 20 mg (elemental zinc)",
      "Doxycycline Capsules 100 mg",
      "Azithromycin Tablets 500 mg",
      "Ciprofloxacin Tablets 500 mg",
      "Ringer's Lactate Injection 500 ml"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Store ORS, zinc, doxycycline, azithromycin, ciprofloxacin and paracetamol at 15-25°C in a dry, light-protected area; keep ORS away from moisture and do not refrigerate. Store Ringer's Lactate and Normal Saline at 15-25°C, protect from freezing and light. Apply LASA separation for ORS vs zinc dispersible tablets, doxycycline vs azithromycin, and ciprofloxacin vs other fluoroquinolone labels; use tall-man lettering and segregated bins.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution: when any spoke OPD has <10 days of ORS or zinc stock, or any batch expires within 90 days, transfer the earliest-expiry excess stock from the hub if hub reserve remains ≥21 days; initiate within 24 hours and update stock ledger."
  },
  {
    "scenario": "Leptospirosis Febrile Illness with Pulmonary Haemorrhage Red Flags",
    "seasonRegion": "Post-Flood Leptospirosis & Acute Watery Diarrhea (Mumbai / Konkan)",
    "surgeSignals": [
      "Febrile illness with jaundice, oliguria or creatinine rise presenting to OPD exceeds 3 cases per day above baseline",
      "Leptospira IgM ELISA or rapid test positivity exceeds 10% among acute febrile illness samples",
      "Emergency referrals for haemoptysis, breathlessness or suspected pulmonary haemorrhage increase by ≥50% week-on-week"
    ],
    "essentialPmbjpBufferDrugs": [
      "Doxycycline Capsules 100 mg",
      "Azithromycin Tablets 500 mg",
      "Ceftriaxone Injection 1 g",
      "Cefotaxime Injection 1 g",
      "Ringer's Lactate Injection 500 ml",
      "Sodium Chloride 0.9% Injection 500 ml"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store doxycycline, azithromycin, paracetamol and ORS at 15-25°C, protected from light and moisture. Store ceftriaxone and cefotaxime dry powder below 25°C, protect from light; reconstituted solutions should be used within 24 hours and refrigerated only if standard label permits. Keep IV fluids at 15-25°C, protect from freezing. LASA: segregate ceftriaxone vs cefotaxime vials, doxycycline vs azithromycin, and use distinct coloured bins with read-back verification.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution: when any spoke has <7 days of doxycycline, ceftriaxone or cefotaxime cover, or any batch expires within 60 days, transfer earliest-expiry stock from hub if hub reserve stays ≥14 days; same-day transfer for red-flag referral clusters and document temperature/light exposure."
  },
  {
    "scenario": "Post-Flood Mixed Outbreak: Wound/Water-Contact Prophylaxis and Pediatric AWD",
    "seasonRegion": "Post-Flood Leptospirosis & Acute Watery Diarrhea (Mumbai / Konkan)",
    "surgeSignals": [
      "Flood-water contact or wound presentations increase by ≥30% in OPD within 7 days after flooding",
      "Under-5 diarrhea footfall exceeds 2x seasonal baseline with ORS-zinc co-dispensing rising >40%",
      "School absenteeism or community cluster reports of fever plus diarrhea exceed 2 clusters per ward in a week"
    ],
    "essentialPmbjpBufferDrugs": [
      "Doxycycline Capsules 100 mg",
      "Azithromycin Tablets 250 mg",
      "Azithromycin Tablets 500 mg",
      "ORS (WHO Low Osmolarity) Powder 20.5 g sachet",
      "Zinc Sulfate Dispersible Tablets 20 mg (elemental zinc)",
      "Amoxicillin Capsules 500 mg"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Store doxycycline, azithromycin, ORS, zinc, amoxicillin, metronidazole and paracetamol at 15-25°C, dry and light-protected; do not refrigerate ORS. Store Tetanus Toxoid Vaccine at 2-8°C continuously with temperature logging; never freeze. LASA: separate pediatric zinc dispersible tablets from adult tablets, azithromycin 250 mg from 500 mg, and TT vials from other injectables; use dedicated vaccine fridge with water bottles and daily min-max thermometer checks.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution: when any spoke has <10 days of ORS/zinc or <14 days of doxycycline/TT, or any batch expires within 90 days, transfer earliest-expiry stock from hub if hub reserve remains ≥21 days; for TT, transfer only within validated 2-8°C cold-chain and document temperature excursion status."
  },
  {
    "scenario": "Dengue Febrile OPD Surge — Supportive Care & Dehydration Buffer",
    "seasonRegion": "Monsoon Dengue & Vector Surge (Delhi-NCR / UP)",
    "surgeSignals": [
      "OPD febrile-illness visits ≥2× same-week 3-year median for 2 consecutive days",
      "Dengue NS1/IgM positivity ≥15% among tested febrile OPD cases over 7 days",
      "Platelet count <100,000/µL lab requests increase ≥30% week-over-week"
    ],
    "essentialPmbjpBufferDrugs": [
      "Paracetamol Tablet 500 mg",
      "Oral Rehydration Salts (ORS) Powder (WHO formula) 20.5 g",
      "Ondansetron Tablet 4 mg",
      "Pantoprazole Tablet 40 mg",
      "Cetirizine Tablet 10 mg"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Oral buffer kept below 25°C, dry, light-protected; ORS sachets protected from moisture; no routine 2–8°C requirement for tablets. LASA: separate ondansetron from other ‘setrons’, pantoprazole from rabeprazole, and label paracetamol 500 mg vs 650 mg clearly.",
    "interClinicTransferRule": "Daily 14:00 FEFO trigger: if any spoke’s 7-day projected consumption exceeds usable on-hand stock for a listed buffer drug, hub transfers stock within 24 h from nearest hub with ≥21 days cover; also transfer items expiring <60 days at spoke to higher-turnover clinic using FEFO."
  },
  {
    "scenario": "Dengue with NCD Comorbidity — OPD Continuity & Warning-Sign Referral Buffer",
    "seasonRegion": "Monsoon Dengue & Vector Surge (Delhi-NCR / UP)",
    "surgeSignals": [
      "Dengue warning-sign referrals/admissions ≥10% of febrile OPD cases over 7 days",
      "NCD medicine refill no-shows >20% above baseline during fever surge",
      "Pharmacy stock-out rate for paracetamol/ORS >10% on any 2 consecutive days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Paracetamol Tablet 500 mg",
      "Oral Rehydration Salts (ORS) Powder (WHO formula) 20.5 g",
      "Ondansetron Tablet 4 mg",
      "Amlodipine Tablet 5 mg",
      "Metformin Hydrochloride Tablet 500 mg",
      "Atorvastatin Tablet 10 mg"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Store oral NCD and supportive-care drugs below 25°C, dry and light-protected; no routine 2–8°C for tablets. LASA: separate amlodipine from other dihydropyridines, metformin 500 mg from 850 mg, losartan from valsartan; keep ORS away from moisture.",
    "interClinicTransferRule": "Daily 14:00 FEFO trigger: if spoke on-hand cover for any listed drug falls below 7 days or item expiry is <60 days, hub redistributes within 24 h to the nearest spoke with demand; source hub must retain ≥21 days cover and transfer earliest-expiry stock first."
  },
  {
    "scenario": "Vector-Borne Co-Circulation — Febrile OPD Empiric & Antimalarial Buffer",
    "seasonRegion": "Monsoon Dengue & Vector Surge (Delhi-NCR / UP)",
    "surgeSignals": [
      "Malaria/typhoid/scrub typhus rapid-test positivity ≥10% among febrile OPD cases over 7 days",
      "Fever OPD footfall >1.5× baseline for 3 consecutive days",
      "Antimalarial/antibiotic dispensing increases >25% week-over-week without matching dengue positivity rise"
    ],
    "essentialPmbjpBufferDrugs": [
      "Paracetamol Tablet 500 mg",
      "Oral Rehydration Salts (ORS) Powder (WHO formula) 20.5 g",
      "Ondansetron Tablet 4 mg",
      "Azithromycin Tablet 500 mg",
      "Doxycycline Capsule 100 mg",
      "Chloroquine Phosphate Tablet 250 mg"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Oral anti-infective and antimalarial buffer stored below 25°C, dry, light-protected; doxycycline and primaquine kept in original light-resistant containers; no routine 2–8°C for tablets/capsules. LASA: separate chloroquine from primaquine, doxycycline from other capsules, and azithromycin 500 mg from 250 mg.",
    "interClinicTransferRule": "Daily 14:00 FEFO trigger: if any spoke’s 7-day projected use exceeds usable stock for a listed drug, or stock expires <60 days, hub transfers within 24 h using FEFO; do not transfer if storage temperature/light-protection breach documented, and hub must retain ≥21 days cover."
  },
  {
    "scenario": "LASA Insulin & Oral Antidiabetic OPD Buffer — Diabetes Clinic",
    "seasonRegion": "LASA (Look-Alike Sound-Alike) & High-Alert ICU Stock Governance",
    "surgeSignals": [
      "7-day rolling diabetes OPD footfall exceeds 4-week median by ≥20%",
      "EHR insulin prescriptions (Human Insulin rDNA) exceed baseline by ≥15% in 7 days",
      "Lab HbA1c/FSG/PPBS order volume exceeds baseline by ≥25% with ≥2 hypoglycaemia rescue orders in 7 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Human Insulin (rDNA) 40 IU/mL Injection 10 mL vial",
      "Metformin Hydrochloride 500 mg Tablet",
      "Glimepiride 1 mg Tablet",
      "Dextrose 25% w/v Injection 100 mL"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Insulin: store 2-8°C, never freeze, protect from light, keep upright; do not store in freezer compartment. Dextrose 25%: room temperature, protect from light. LASA rule: insulin vials segregated from heparin/other injectables with tall-man labels and separate bins; no look-alike ampoules adjacent.",
    "interClinicTransferRule": "FEFO hub-to-spoke transfer triggered when spoke insulin/Dextrose 25% stock falls below 14 days of cover and hub has >30 days of cover; transfer only batches with ≥90 days expiry and verified 2-8°C cold-chain log within 24 hours."
  },
  {
    "scenario": "High-Alert Emergency Tray & Anaphylaxis/Cardiac Arrest OPD Injection Room Buffer",
    "seasonRegion": "LASA (Look-Alike Sound-Alike) & High-Alert ICU Stock Governance",
    "surgeSignals": [
      "OPD injection/procedure-room footfall exceeds 4-week median by ≥25% in 7 days",
      "EHR adrenaline/atropine administration or emergency-tray opening events exceed baseline by ≥20% in 7 days",
      "Emergency tray audit overdue rate >10% or ≥2 anaphylaxis/cardiac-arrest codes in OPD in 7 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Adrenaline (Epinephrine) 1 mg/mL Injection 1 mL",
      "Atropine Sulphate 0.6 mg/mL Injection 1 mL",
      "Hydrocortisone Sodium Succinate 100 mg Injection",
      "Chlorpheniramine Maleate 10 mg/mL Injection",
      "Dextrose 25% w/v Injection 100 mL"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Adrenaline: store 15-25°C, protect from light, do not refrigerate; Atropine/Hydrocortisone/Chlorpheniramine: room temperature, protect from light; Dextrose 25%: room temperature. LASA rule: emergency tray uses colour-coded, tall-man-labelled bins; adrenaline and atropine stored non-adjacent with 2-person check.",
    "interClinicTransferRule": "FEFO hub-to-spoke transfer triggered when spoke emergency-tray par level for any high-alert item is <14 days or tray audit shows <2 full sets; hub must hold >30 days cover, transfer batches with ≥90 days expiry within 24 hours after pharmacist verification."
  },
  {
    "scenario": "LASA Anticoagulant/Antiplatelet & Bleeding Rescue OPD Buffer — Cardiac/Stroke Follow-up",
    "seasonRegion": "LASA (Look-Alike Sound-Alike) & High-Alert ICU Stock Governance",
    "surgeSignals": [
      "Cardiac/stroke follow-up OPD footfall exceeds 4-week median by ≥20% in 7 days",
      "EHR warfarin/antiplatelet prescription renewals exceed baseline by ≥15% in 7 days",
      "Lab INR order volume exceeds baseline by ≥25% with ≥5 INR >4 alerts in 7 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Warfarin Sodium 1 mg Tablet",
      "Warfarin Sodium 2 mg Tablet",
      "Warfarin Sodium 5 mg Tablet",
      "Aspirin 75 mg Tablet",
      "Clopidogrel 75 mg Tablet",
      "Heparin Sodium 5000 IU/mL Injection 5 mL"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Heparin Sodium: store 2-8°C, do not freeze, protect from light; Phytomenadione: 2-8°C, protect from light; Warfarin/Aspirin/Clopidogrel/Tranexamic Acid: room temperature, protect from light and moisture. LASA rule: warfarin strengths segregated with tall-man labels; heparin and phytomenadione stored separately from insulin and emergency tray.",
    "interClinicTransferRule": "FEFO hub-to-spoke transfer triggered when spoke warfarin strength-specific stock or heparin/vitamin K1 falls below 14 days cover and hub has >30 days cover; transfer within 24 hours only batches with ≥90 days expiry and documented light-protected/cold-chain storage."
  },
  {
    "scenario": "New Drug-Sensitive Pulmonary TB — DOTS Initiation & 30-Day OPD Starter Buffer",
    "seasonRegion": "NTEP Tuberculosis DOTS & MDR Drug Supply Buffer (Maharashtra)",
    "surgeSignals": [
      "≥15% rise in new smear-positive/CBNAAT-confirmed TB registrations over 14-day rolling mean at any PHC/UPHC",
      "≥20% increase in first DOTS prescriptions or Nikshay treatment initiations from OPD in 7 days",
      "HRZE buffer cover <10 days at any spoke despite hub stock >45 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Rifampicin 450 mg tablet",
      "Isoniazid 300 mg tablet",
      "Pyrazinamide 750 mg tablet",
      "Ethambutol 800 mg tablet",
      "Pyridoxine 10 mg tablet"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Store all oral anti-TB drugs at 15–25°C, dry place, protected from light; no 2–8°C requirement. Keep rifampicin and isoniazid in separate labelled LASA bins away from rifaximin, hydralazine, and other look-alike/sound-alike medicines. Use moisture-proof containers; do not freeze.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution when spoke HRZE cover falls below 10 days and hub cover exceeds 45 days, or when spoke stock expires within 90 days; transfer only up to 14 days of validated spoke demand after NTEP district pharmacist approval."
  },
  {
    "scenario": "MDR/RR-TB All-Oral Regimen — Primary-Care Stabilization & LASA-Safe Second-Line Buffer",
    "seasonRegion": "NTEP Tuberculosis DOTS & MDR Drug Supply Buffer (Maharashtra)",
    "surgeSignals": [
      "≥2 MDR/RR-TB treatment starts or referrals per week at district hub or linked spoke",
      "≥25% rise in pending/positive drug-susceptibility test reports requiring second-line regimen initiation",
      "Second-line drug issue rate rises >20% over 14-day rolling mean at any DOTS centre"
    ],
    "essentialPmbjpBufferDrugs": [
      "Levofloxacin 500 mg tablet",
      "Moxifloxacin 400 mg tablet",
      "Linezolid 600 mg tablet",
      "Clofazimine 100 mg capsule",
      "Cycloserine 250 mg capsule",
      "Pyridoxine 10 mg tablet"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store at 15–25°C, protected from light and moisture; no 2–8°C requirement. Linezolid and clofazimine require light protection. Enforce LASA segregation: linezolid vs. linezolid-containing combinations, clofazimine vs. clozapine, levofloxacin vs. levocetirizine, moxifloxacin vs. moxifloxacin eye drops. Cycloserine must remain sealed and moisture-protected.",
    "interClinicTransferRule": "FEFO hub-to-spoke transfer when spoke second-line cover is <14 days and hub cover is >30 days, or when spoke stock expires within 60 days; release only after NTEP district programme manager/pharmacist authorization and confirmation of an active MDR/RR-TB prescription."
  },
  {
    "scenario": "TB-DM/HIV and Hepatotoxicity/ADR — Pyridoxine, Steroid & Rescue OPD Buffer",
    "seasonRegion": "NTEP Tuberculosis DOTS & MDR Drug Supply Buffer (Maharashtra)",
    "surgeSignals": [
      "≥20% rise in registered TB patients with HbA1c >8% or documented HIV co-infection in 30 days",
      "≥3 ADR reports per 30 days for anti-TB hepatotoxicity, peripheral neuropathy, or thrombocytopenia at any facility",
      "≥25% increase in pyridoxine, prednisolone, or antiemetic prescriptions from TB OPD in 14 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Pyridoxine 10 mg tablet",
      "Prednisolone 10 mg tablet",
      "Ondansetron 4 mg tablet",
      "Paracetamol 500 mg tablet",
      "Levofloxacin 500 mg tablet",
      "Ethambutol 800 mg tablet"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store oral medicines at 15–25°C, protected from light and moisture; prednisolone requires light protection. If TB-DM buffer includes insulin, maintain 2–8°C cold chain with no freezing and separate labelled cold box. Keep pyridoxine and prednisolone in LASA-separated bins; do not store with oxidizers or strong light exposure.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution when spoke cover of pyridoxine/prednisolone/rescue antiemetic falls below 10 days and hub cover exceeds 30 days, or when spoke stock expires within 60 days; prioritize transfer to spokes with ≥3 ADR reports or ≥20% TB-DM/HIV co-infection load after NTEP district approval."
  },
  {
    "scenario": "Rural Snakebite Envenomation ER/ICU ASV & Anaphylaxis Buffer",
    "seasonRegion": "Rural Snakebite, Organophosphate & Agricultural ER Buffer (MP / Odisha)",
    "surgeSignals": [
      "ED snakebite triage cases ≥5 in 24 hours or ≥2-fold increase over 7-day baseline",
      "ASV vial issuance ≥10 vials in 24 hours or ≥50% of spoke buffer consumed in 72 hours",
      "20-minute whole blood clotting time >20 minutes or INR >1.5 in any suspected viper bite during triage"
    ],
    "essentialPmbjpBufferDrugs": [
      "Polyvalent Anti-Snake Venom (ASV) Injection 10 mL vial",
      "Adrenaline (Epinephrine) Injection 1 mg/mL (1 mL ampoule)",
      "Hydrocortisone Sodium Succinate Injection 100 mg",
      "Chlorpheniramine Maleate Injection 10 mg/mL (1 mL ampoule)",
      "Tetanus Toxoid Injection 0.5 mL",
      "Ceftriaxone Sodium Injection 1 g"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store ASV at 2-8°C; do not freeze; protect from light. Keep adrenaline, hydrocortisone, chlorpheniramine, and Vitamin K1 at 15-25°C with light protection where labeled. LASA segregation: adrenaline separated from noradrenaline/atropine; ASV segregated from routine vaccines; label high-alert ICU injectables with red tags and double-check at issue.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution trigger: when any spoke has <50% of 21-day ASV/anaphylaxis buffer or <7 days cover, and hub has ≥21 days cover, issue earliest-expiry-first stock within 24 hours; if ASV use exceeds 2× baseline in 72 hours or ≥10 vials issued in 24 hours, emergency redistribution within 6 hours."
  },
  {
    "scenario": "Organophosphate/Carbamate Poisoning ER Atropine-Pralidoxime ICU Buffer",
    "seasonRegion": "Rural Snakebite, Organophosphate & Agricultural ER Buffer (MP / Odisha)",
    "surgeSignals": [
      "ED pesticide-poisoning cases ≥3 in 24 hours or ≥2-fold rise over 7-day rolling median",
      "Atropine injection consumption ≥20 ampoules in 24 hours or ≥2× baseline atropinization use in 48 hours",
      "Any patient requiring ≥10 mg atropine before ED shift handover or ICU admission with cholinergic crisis"
    ],
    "essentialPmbjpBufferDrugs": [
      "Atropine Sulphate Injection 0.6 mg/mL (1 mL ampoule)",
      "Pralidoxime Chloride Injection 500 mg/20 mL",
      "Diazepam Injection 5 mg/mL (2 mL ampoule)",
      "Adrenaline (Epinephrine) Injection 1 mg/mL (1 mL ampoule)",
      "Hydrocortisone Sodium Succinate Injection 100 mg",
      "Ringer Lactate IV Infusion 500 mL"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Store atropine, pralidoxime, diazepam, and adrenaline at 15-25°C; protect diazepam and pralidoxime from light; do not freeze. LASA segregation: atropine separated from adrenaline; pralidoxime separated from other 20 mL emergency vials; keep high-alert injectables in locked ICU emergency tray with tall-man lettering and independent double-check.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution trigger: when any spoke atropine/pralidoxime cover falls <7 days or <50% of 30-day buffer, and hub retains ≥21 days cover, dispatch earliest-expiry-first stock within 12 hours; if a spoke uses ≥20 atropine ampoules or ≥10 pralidoxime vials in 24 hours, emergency FEFO transfer from hub within 6 hours."
  },
  {
    "scenario": "Agricultural Trauma, Anaphylaxis & Sepsis Resuscitation ICU Buffer",
    "seasonRegion": "Rural Snakebite, Organophosphate & Agricultural ER Buffer (MP / Odisha)",
    "surgeSignals": [
      "ER trauma/resuscitation footfall ≥10 cases in 24 hours or ≥30% rise over 7-day baseline",
      "IV fluid and emergency antibiotic issue volume ≥1.5× baseline in 48 hours",
      "≥2 patients in 24 hours requiring adrenaline, hydrocortisone, or IV vasopressor/ICU-level resuscitation after agricultural exposure or injury"
    ],
    "essentialPmbjpBufferDrugs": [
      "Adrenaline (Epinephrine) Injection 1 mg/mL (1 mL ampoule)",
      "Hydrocortisone Sodium Succinate Injection 100 mg",
      "Chlorpheniramine Maleate Injection 10 mg/mL (1 mL ampoule)",
      "Ceftriaxone Sodium Injection 1 g",
      "Metronidazole Injection 500 mg/100 mL",
      "Ringer Lactate IV Infusion 500 mL"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store biologicals such as tetanus toxoid at 2-8°C; do not freeze. Keep adrenaline, hydrocortisone, antibiotics, IV fluids, and analgesics at 15-25°C with light protection where labeled. LASA segregation: adrenaline vs noradrenaline; hydrocortisone vs other 100 mg vials; ceftriaxone vs other 1 g antibiotics; use FEFO shelves and high-alert labels in ER/ICU crash carts.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution trigger: when any spoke has <50% of 21-day emergency IV/injectable buffer or <7 days cover for adrenaline, hydrocortisone, ceftriaxone, or IV fluids, and hub has ≥21 days cover, redistribute earliest-expiry-first stock within 24 hours; if ER trauma/resuscitation footfall doubles or adrenaline/ceftriaxone issue exceeds 2× baseline in 48 hours, emergency FEFO transfer within 6 hours."
  },
  {
    "scenario": "Stable Adult HTN/T2DM OPD Refill-Default Surge",
    "seasonRegion": "District Chronic NCD Adherence Surge — HTN/T2DM Refills (Bengaluru / KA)",
    "surgeSignals": [
      "EHR: weekly HTN/T2DM OPD encounters ≥20% above 4-week median for 2 consecutive weeks",
      "Pharmacy footfall: daily NCD refill tokens for amlodipine/telmisartan/metformin ≥25% above same-weekday baseline",
      "Lab: monthly HbA1c >8.0% or random glucose >250 mg/dL results ≥15% above prior-month count"
    ],
    "essentialPmbjpBufferDrugs": [
      "Amlodipine 5 mg Tablet",
      "Telmisartan 40 mg Tablet",
      "Hydrochlorothiazide 25 mg Tablet",
      "Metformin Hydrochloride 500 mg Tablet",
      "Glimepiride 1 mg Tablet",
      "Atorvastatin 10 mg Tablet"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Oral solids: store at 15–25°C, dry, light-protected; no 2–8°C requirement unless insulin is added (then 2–8°C, never freeze). Use LASA segregation for glimepiride vs gliclazide, metformin IR vs SR, and amlodipine vs atenolol with tall-man labels and separate bins.",
    "interClinicTransferRule": "FEFO hub-to-spoke transfer when any spoke has <7 days' stock of a listed PMBJP NCD item and hub buffer is ≥21 days; dispatch within 24h, exclude batches expiring <6 months, cap to spoke 14-day demand, and reverse-transfer if spoke use is <1 dispense/day for 7 days."
  },
  {
    "scenario": "Post-Festival Dietary Excursion and Missed-Refill Rebound",
    "seasonRegion": "District Chronic NCD Adherence Surge — HTN/T2DM Refills (Bengaluru / KA)",
    "surgeSignals": [
      "EHR: OPD/ED visits coded hypertensive urgency (BP ≥180/110) or hyperglycemia symptoms ≥2× baseline in 7 days",
      "Lab: HbA1c >9.0% and fasting glucose >200 mg/dL results ≥20% above prior 4-week mean",
      "Footfall: missed-refill reactivation list/SMS non-responders ≥30% of due cohort and pharmacy refill no-shows ≥20%"
    ],
    "essentialPmbjpBufferDrugs": [
      "Amlodipine 5 mg Tablet",
      "Telmisartan 40 mg Tablet",
      "Losartan Potassium 50 mg Tablet",
      "Hydrochlorothiazide 25 mg Tablet",
      "Metformin Hydrochloride 500 mg Tablet",
      "Glimepiride 1 mg Tablet"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store oral solids at 15–25°C, dry, away from sunlight; 2–8°C only for insulin if included, with no freezing. Protect light-sensitive antihypertensives per label; LASA bins for glimepiride/gliclazide and metformin IR/SR, plus separate amlodipine and atenolol storage.",
    "interClinicTransferRule": "Trigger FEFO redistribution when ≥2 spoke PHCs report <7 days' cover for amlodipine, telmisartan, or metformin and hub stock is ≥14 days; transfer within 24h, use earliest-expiry batches first, exclude <6 months shelf life, and stop transfer if spoke daily dispense falls below 1 for 7 days."
  },
  {
    "scenario": "Spoke PHC NCD Stock-Out and Hub Redistribution Continuity",
    "seasonRegion": "District Chronic NCD Adherence Surge — HTN/T2DM Refills (Bengaluru / KA)",
    "surgeSignals": [
      "EHR inventory: any listed PMBJP NCD item stock-out ≥2 days at ≥2 spoke PHCs in 7 days",
      "Footfall: spoke-to-hub NCD refill travel/transfer requests ≥1.5× baseline per week",
      "Lab/EHR: HbA1c/BP control cascade overdue >30 days rises ≥25% among spoke cohort"
    ],
    "essentialPmbjpBufferDrugs": [
      "Amlodipine 5 mg Tablet",
      "Telmisartan 40 mg Tablet",
      "Hydrochlorothiazide 25 mg Tablet",
      "Metformin Hydrochloride 500 mg Tablet",
      "Glimepiride 1 mg Tablet",
      "Gliclazide 80 mg Tablet"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Oral NCD solids: 15–25°C, dry, light-protected; no 2–8°C chain unless insulin is added, then 2–8°C and never freeze. Apply LASA rules for glimepiride vs gliclazide, metformin IR vs SR, and amlodipine vs atenolol with dedicated bins and tall-man labels.",
    "interClinicTransferRule": "Use FEFO hub-to-spoke redistribution when any spoke has <7 days' stock of a listed item and hub buffer is ≥21 days; dispatch within 24h, exclude batches expiring <6 months, limit to 14-day spoke demand, and reverse-transfer if spoke usage is <1 dispense/day for 7 days."
  },
  {
    "scenario": "Dengue Shock Syndrome ICU — IV Fluid & Antipyretic/Antiemetic Injectable Buffer",
    "seasonRegion": "Monsoon Dengue & Vector Surge (Delhi-NCR / UP)",
    "surgeSignals": [
      "Dengue NS1/IgM positivity ≥15% among febrile patients tested in the last 7 days",
      "Dengue admissions with shock or ICU transfer ≥5 in 24 hours or ≥10 in 72 hours",
      "IV crystalloid issue rate ≥30% above 4-week mean for 2 consecutive days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Inj Normal Saline 0.9% 500 mL",
      "Inj Ringer Lactate 500 mL",
      "Inj Dextrose 5% 500 mL",
      "Inj Paracetamol 150 mg/mL (1 g/100 mL)",
      "Inj Ondansetron 2 mg/mL (4 mg/2 mL)",
      "Inj Pantoprazole 40 mg"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store NS/RL/D5 at 15-25°C, do not freeze; protect paracetamol, ondansetron and pantoprazole injectables from light; maintain 2-8°C only for manufacturer-labelled cold-chain items; segregate LASA pairs such as ondansetron/dexamethasone and hydrocortisone/dexamethasone with tall-man labels and distinct bins; apply FEFO at issue.",
    "interClinicTransferRule": "FEFO hub-to-spoke trigger: if any spoke's 7-day average issue of NS/RL/D5 exceeds on-hand stock for <10 days OR dengue ICU admissions at spoke reach ≥3 in 24 hours, hub redistributes earliest-expiry batch first within 6 hours; no batch with <30 days shelf life is transferred unless spoke confirms receipt and use within 7 days."
  },
  {
    "scenario": "Exertional Heatstroke with Rhabdomyolysis/AKI and Hyperkalemic ICU Surge",
    "seasonRegion": "Summer Heatstroke, Hyponatremia & Dehydration (Rajasthan / Vidarbha)",
    "surgeSignals": [
      "ED/triage heat-illness encounters ≥20/day or ≥1.5× 7-day baseline",
      "≥3 ICU admissions/week with core temperature ≥40°C and altered mentation",
      "Lab triggers: CK >1,000 U/L, K+ >5.5 mmol/L, or AKI stage ≥2 in heat-exposed patients"
    ],
    "essentialPmbjpBufferDrugs": [
      "Sodium Chloride 0.9% w/v IV infusion (500 mL/1000 mL)",
      "Compound Sodium Lactate (Ringer's Lactate) IV infusion (500 mL)",
      "Dextrose 5% w/v IV infusion (500 mL)",
      "Sodium Bicarbonate 7.5% w/v injection (10 mL)",
      "Calcium Gluconate 10% w/v injection (10 mL)",
      "Potassium Chloride 15% w/v injection (10 mL) — concentrate; dilute before use"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store norepinephrine/adrenaline at 2-8°C where label mandates; protect sodium bicarbonate, calcium gluconate and norepinephrine from light; segregate LASA pairs—0.9% vs 3% NaCl, KCl concentrate vs diluted KCl, adrenaline vs noradrenaline—in separate labelled bins; keep KCl concentrate locked away from patient-care areas; FEFO rotate all IV fluids and injectables.",
    "interClinicTransferRule": "If spoke days-of-cover for 0.9% NaCl, Ringer's Lactate, D5 or norepinephrine falls <7 days AND hub cover is >14 days, redistribute earliest-expiry FEFO stock within 24 hours to restore spoke to ≥10 days cover; emergency KCl concentrate/3% NaCl transfer only after LASA and cold-chain checklist."
  },
  {
    "scenario": "Heatstroke Resuscitation & Acute Symptomatic Hyponatremia OPD Buffer — Rajasthan Heat Wave",
    "seasonRegion": "Summer Heatstroke, Hyponatremia & Dehydration (Rajasthan / Vidarbha)",
    "surgeSignals": [
      "OPD/ED heat-illness ICD-10 T67.x or E86.x visits exceed 20 per day or 2x the 7-day moving average",
      "IV fluid orders for hydration/resuscitation exceed 30% above baseline daily OPD injection-room consumption",
      "Point-of-care/formal lab sodium results <130 mmol/L exceed 5 per day or exceed 2x baseline"
    ],
    "essentialPmbjpBufferDrugs": [
      "Oral Rehydration Salts (WHO) Powder 21.8 g/sachet",
      "Sodium Chloride Injection 0.9% w/v 500 mL",
      "Ringer Lactate Injection 500 mL",
      "Dextrose Injection 5% w/v 500 mL",
      "Paracetamol Tablet 500 mg",
      "Ondansetron Tablet 4 mg"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store IV fluids at 15–30°C, protect from light, and do not freeze; no routine 2–8°C item in this buffer, but keep ondansetron injection 2–8°C if held as cold-chain stock. LASA segregation: 0.9% sodium chloride vs hypertonic saline, Ringer lactate vs normal saline, ORS sachets vs electrolyte concentrate; keep high-alert IV electrolytes in locked, labelled bins.",
    "interClinicTransferRule": "FEFO hub-to-spoke redistribution triggers when spoke projected 7-day cover for ORS/IV fluids falls below 7 days AND hub cover remains above 21 days; move earliest-expiry batch first within 24 hours, send expiry <60 days stock to the highest-burn spoke first, and do not transfer expiry <14 days stock unless documented use within 7 days."
  },
  {
    "scenario": "Rural Snakebite Envenomation & ASV Anaphylaxis ER Buffer",
    "seasonRegion": "...",
    "surgeSignals": [
      "≥2 suspected snakebite envenomation OPD/ER registrations per 24 h for 2 consecutive days, or ≥3 in any 24 h at a spoke",
      "ASV consumption ≥6 vials/24 h or projected spoke ASV stock <72 h at current use",
      "≥1 snakebite case with ASV anaphylaxis/angioedema requiring adrenaline, or ≥2 cases referred for antivenom/ventilator support in 24 h"
    ],
    "essentialPmbjpBufferDrugs": [
      "Inj Anti-Snake Venom Polyvalent (Equine) 10 mL vial",
      "Inj Adrenaline (Epinephrine) 1 mg/mL (1:1000) ampoule",
      "Inj Hydrocortisone 100 mg vial",
      "Inj Chlorpheniramine 10 mg/mL ampoule",
      "Inj Tetanus Toxoid 0.5 mL ampoule",
      "Inj Ceftriaxone 1 g vial"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "ASV: 2-8C, never freeze, keep upright and separate from other cold-chain stock; adrenaline/chlorpheniramine: 2-8C where label requires, protect from light, do not freeze; hydrocortisone/ceftriaxone: below 25C, protect from light; LASA separation: adrenaline vs noradrenaline and atropine, ASV vs tetanus toxoid/antitoxin; FEFO stock rotation with expiry labels.",
    "interClinicTransferRule": "FEFO hub-to-spoke trigger: if any spoke ASV stock <6 vials or <72 h par and hub stock >20 vials, transfer earliest-expiry ASV within 6 h under 2-8C cold chain; if an active envenomation case exists, same-day emergency transfer; never transfer expired or heat-exposed ASV."
  },
  {
    "scenario": "ICU Vasopressor and Shock Injectable FEFO Readiness",
    "seasonRegion": "AYUSH + PMBJP Dual-Pharmacy Fast-Moving FEFO Audit (National Clusters)",
    "surgeSignals": [
      "ICU/ED vasopressor order volume >20% above 14-day median for 2 consecutive 24-hour periods",
      "Sepsis/shock ICD-10 admissions requiring lactate >2 mmol/L or IV fluid resuscitation >15% above 28-day baseline in 24 hours",
      "Emergency footfall with triage hypotension/mottling >10% above same-week cluster median"
    ],
    "essentialPmbjpBufferDrugs": [
      "Adrenaline Bitartrate Injection 1 mg/mL (1:1000)",
      "Noradrenaline Bitartrate Injection 2 mg/mL",
      "Dopamine Hydrochloride Injection 200 mg/5 mL (40 mg/mL)",
      "Dobutamine Hydrochloride Injection 250 mg/20 mL (12.5 mg/mL)",
      "Atropine Sulphate Injection 0.6 mg/mL",
      "Hydrocortisone Sodium Succinate Injection 100 mg"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Store oxytocin and other label-mandated items at 2-8°C; do not freeze. Adrenaline/noradrenaline: protect from light, do not freeze, retain original carton. LASA separation: adrenaline vs atropine; noradrenaline vs dopamine/dobutamine; hydrocortisone vs dexamethasone. High-alert labels and sealed ICU crash-cart trays; AYUSH section must not store emergency injectables.",
    "interClinicTransferRule": "Hub-to-spoke FEFO redistribution trigger: if any ICU injectable batch in a spoke expires in <=60 days and hub cover is <14 days, transfer nearest-expiry stock within 24 hours; if spoke cover >30 days and hub cover <14 days, transfer excess FEFO stock within 48 hours; no transfer of cold-chain-excursed or <7-day-expiry stock except urgent medical director approval."
  },
  {
    "scenario": "Obstetric Hemorrhage and Emergency C-Section Injectable FEFO Readiness",
    "seasonRegion": "AYUSH + PMBJP Dual-Pharmacy Fast-Moving FEFO Audit (National Clusters)",
    "surgeSignals": [
      "Obstetric admissions with PPH/hemorrhage codes or oxytocin/tranexamic acid orders >30% above 7-day median in 24 hours",
      "Blood transfusion/crossmatch requests in maternity >1.5x 28-day daily baseline",
      "ED/maternity footfall with Hb <7 g/dL or obstetric triage hemorrhage >5 cases/day in cluster spoke"
    ],
    "essentialPmbjpBufferDrugs": [
      "Oxytocin Injection 5 IU/mL",
      "Tranexamic Acid Injection 500 mg/5 mL",
      "Magnesium Sulphate Injection 50% 10 mL",
      "Calcium Gluconate Injection 10% 10 mL",
      "Adrenaline Bitartrate Injection 1 mg/mL (1:1000)",
      "Atropine Sulphate Injection 0.6 mg/mL"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Oxytocin must be stored at 2-8°C, protected from light, never frozen; rotate FEFO in a dedicated cold-chain bin with twice-daily temperature logs. Magnesium sulphate and calcium gluconate are high-alert LASA: store on separate labelled shelves. Adrenaline/atropine LASA separation in maternity crash cart; AYUSH/PMBJP dual pharmacy must keep all injectables in PMBJP secured emergency stock.",
    "interClinicTransferRule": "Hub-to-spoke FEFO trigger: transfer oxytocin/tranexamic acid/magnesium sulphate nearest-expiry stock when spoke has <14 days cover or any batch expires in <=45 days; if spoke has >21 days cover and hub maternity stock is <10 days cover, redistribute excess FEFO stock within 24 hours; cold-chain breaker stock is quarantined and never transferred."
  },
  {
    "scenario": "Sepsis and Anaphylaxis Code Tray Injectable FEFO Readiness",
    "seasonRegion": "AYUSH + PMBJP Dual-Pharmacy Fast-Moving FEFO Audit (National Clusters)",
    "surgeSignals": [
      "Anaphylaxis/adrenaline administration orders >2 in 24 hours or >50% above 28-day daily median",
      "Sepsis bundle orders (IV antibiotic + fluid + lactate) >20% above 14-day median for 2 consecutive days",
      "ED/respiratory distress footfall with nebulized adrenaline or IV steroid orders >15% above same-week cluster baseline"
    ],
    "essentialPmbjpBufferDrugs": [
      "Adrenaline Bitartrate Injection 1 mg/mL (1:1000)",
      "Hydrocortisone Sodium Succinate Injection 100 mg",
      "Dexamethasone Sodium Phosphate Injection 4 mg/mL",
      "Chlorpheniramine Maleate Injection 10 mg/mL",
      "Ondansetron Injection 2 mg/mL",
      "Pantoprazole Sodium Injection 40 mg"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Adrenaline: protect from light, do not freeze, keep original carton; emergency tray must separate adrenaline 1 mg/mL from atropine 0.6 mg/mL with LASA labels. Chlorpheniramine and dexamethasone/hydrocortisone require light protection and separate high-alert bins. Any reconstituted antibiotic is discarded per label; AYUSH section must not mix with PMBJP code-tray injectables.",
    "interClinicTransferRule": "Hub-to-spoke FEFO trigger: if any code-tray injectable batch in spoke expires in <=60 days and hub cover is <14 days, transfer nearest-expiry stock within 24 hours; if spoke cover >21 days and hub anaphylaxis/sepsis tray cover <7 days, redistribute excess FEFO stock within 24 hours; no transfer if cold-chain excursion, damaged seal, or <7 days expiry without medical director approval."
  },
  {
    "scenario": "Mass-Gathering Blast/Crush Trauma with Hemorrhagic Shock and Open-Fracture Sepsis Prophylaxis",
    "seasonRegion": "Festival & Mass-Gathering Trauma, Burn & Antimicrobial Surge",
    "surgeSignals": [
      "ED trauma activations >30/day or >2x 7-day median for 2 consecutive days",
      "Blood bank O-negative/PRBC inventory <40% of 72-hour minimum",
      "IV ceftriaxone plus tranexamic acid dispensing >150% of 30-day daily baseline"
    ],
    "essentialPmbjpBufferDrugs": [
      "Tranexamic Acid Injection 500 mg/5 mL",
      "Ceftriaxone Injection 1 g",
      "Metronidazole Injection 500 mg/100 mL",
      "Amikacin Injection 500 mg/2 mL",
      "Ketorolac Injection 30 mg/mL",
      "Paracetamol Injection 1000 mg/100 mL"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store ceftriaxone/amikacin below 25C protected from light; reconstituted ceftriaxone use within 24 h at 2-8C; keep tetanus toxoid at 2-8C, never freeze; separate LASA adrenaline/atropine and ketorolac/diclofenac with high-alert labels.",
    "interClinicTransferRule": "Hub initiates FEFO redistribution when spoke trauma-injectable stock <7 days AND spoke ED trauma activations >120% of baseline; ship earliest-expiry lots first, cap at 50% of hub excess, complete within 6 h."
  },
  {
    "scenario": "Festival Thermal/Firecracker Burn Surge with Inhalation Injury and Burn-Wound Sepsis",
    "seasonRegion": "Festival & Mass-Gathering Trauma, Burn & Antimicrobial Surge",
    "surgeSignals": [
      "Burn admissions >15/day or >2x 7-day median for 2 consecutive days",
      "ICU ventilator occupancy for inhalation injury >80% for 48 h",
      "IV opioid plus IV fluid orders >150% of 30-day daily baseline"
    ],
    "essentialPmbjpBufferDrugs": [
      "Ringer Lactate IV 500 mL",
      "Normal Saline 0.9% IV 500 mL",
      "Paracetamol Injection 1000 mg/100 mL",
      "Tramadol Injection 50 mg/mL",
      "Ketorolac Injection 30 mg/mL",
      "Pantoprazole Injection 40 mg"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Keep tetanus toxoid at 2-8C; store midazolam/adrenaline below 25C protected from light; reconstituted ceftriaxone and amikacin at 2-8C with 24-h expiry; separate LASA midazolam/morphine and adrenaline/atropine; segregate burn topical agents away from injectables.",
    "interClinicTransferRule": "Hub triggers FEFO transfer when spoke burn/ICU injectable stock <10 days AND burn admissions >120% of baseline; transfer earliest-expiry lots first, max 50% of hub excess, within 8 h."
  },
  {
    "scenario": "Crash Cart & Code Blue Resuscitation LASA Tray Governance",
    "seasonRegion": "LASA (Look-Alike Sound-Alike) & High-Alert ICU Stock Governance",
    "surgeSignals": [
      "Code Blue / crash cart activation ≥3 per 24h or ≥1.5× the 7-day baseline mean in the EHR code-blue log",
      "ED-to-ICU cardiac arrest or defibrillation admissions increase >30% week-on-week in EHR admission/disposition data",
      "Crash-cart high-alert item consumption ≥80% of par level or any LASA near-miss/eMAR override logged within 7 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Adrenaline (Epinephrine) Injection 1 mg/mL, 1 mL ampoule",
      "Atropine Sulphate Injection 0.6 mg/mL, 1 mL ampoule",
      "Amiodarone HCl Injection 50 mg/mL, 3 mL ampoule",
      "Lignocaine HCl Injection 2% (20 mg/mL), 30 mL vial",
      "Sodium Bicarbonate Injection 7.5%, 10 mL ampoule",
      "Calcium Gluconate Injection 10%, 10 mL ampoule"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store adrenaline, amiodarone and lignocaine protected from light; do not freeze. Crash-cart LASA tray must use TALLman labels and separate colour-coded bins for aDRENaline vs NORadrenaline, ATROPINE vs AMIODARONE, and lignocaine vs other injectables. Never store concentrated potassium chloride in the crash cart; keep KCl 15% locked separately from 0.9% sodium chloride. Seal tray, barcode-scan at restock, and double-check all high-alert ampoules before administration.",
    "interClinicTransferRule": "Hub-to-spoke FEFO trigger: spoke crash-cart par stock <7 days OR sealed tray breach/expiry within 60 days OR Code Blue consumption >50% of par in 24h; hub dispatches earliest-expiry intact lots within 12h with temperature/excursion log; hub retains 21-day reserve."
  },
  {
    "scenario": "Monsoon Snakebite Envenomation & ASV Cold-Chain Buffer",
    "seasonRegion": "Rural Snakebite, Organophosphate & Agricultural ER Buffer (MP / Odisha)",
    "surgeSignals": [
      "≥3 suspected snakebite envenomation cases in 24 h across hub-spoke network",
      "ASV issue rate >30% above 7-day median or any spoke ASV cover <14 days",
      "Cold-chain logger excursion >15 min outside 2-8°C at ASV fridge"
    ],
    "essentialPmbjpBufferDrugs": [
      "Anti-Snake Venom Polyvalent Injection IP 10 mL vial",
      "Adrenaline Bitartrate Injection IP 1 mg/mL (1 mL ampoule)",
      "Hydrocortisone Sodium Succinate Injection IP 100 mg",
      "Chlorpheniramine Maleate Injection IP 10 mg/mL (2 mL ampoule)",
      "Tetanus Toxoid Injection IP 0.5 mL",
      "Ringer Lactate Injection IP 500 mL"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "ASV must be stored at 2-8°C, never frozen, protected from light, and kept in a locked dedicated vaccine fridge with min-max/data logger; adrenaline and chlorpheniramine are LASA with atropine—store in separate red-tag bins; TT at 2-8°C; keep 2-8°C phase-change cold boxes validated for spoke transfer.",
    "interClinicTransferRule": "FEFO hub-to-spoke trigger: transfer earliest-expiry ASV lot first when any spoke has <14 days cover or 7-day ASV issue >30% of buffer, provided hub lot expiry ≥90 days, logger shows continuous 2-8°C, and receiving fridge is 2-8°C with ≥30% empty space; do not transfer if cold-chain excursion or freezer contact is documented."
  },
  {
    "scenario": "HTN Refill Surge with Near-Expiry Amlodipine/Telmisartan at UPHC Hub",
    "seasonRegion": "District Chronic NCD Adherence Surge — HTN/T2DM Refills (Bengaluru / KA)",
    "surgeSignals": [
      "7-day rolling hypertension refill footfall ≥1.25× same-week baseline at UPHC/PHC or ≥30% rise in EHR due-for-refill HTN worklist",
      "≥20% of scheduled HTN patients have no dispense within 7 days of due date on EHR missed-refill flag",
      "≥10% of last-visit BP readings SBP ≥140 mmHg or DBP ≥90 mmHg, or core antihypertensive stock cover <10 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Amlodipine 5 mg tablet",
      "Telmisartan 40 mg tablet",
      "Losartan Potassium 50 mg tablet",
      "Hydrochlorothiazide 12.5 mg tablet",
      "Metoprolol Succinate 50 mg tablet",
      "Atorvastatin 10 mg tablet"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Oral solids: dry, light-protected storage at ≤25°C and RH ≤60%; no refrigeration. FEFO bin labels and LASA segregation: Amlodipine vs Atorvastatin, Telmisartan vs Losartan; keep 30 cm off floor. If insulin is co-located, maintain 2–8°C with twice-daily temperature logger and never freeze.",
    "interClinicTransferRule": "Hub-to-spoke FEFO trigger: if spoke 7-day cover for Amlodipine/Telmisartan/Losartan is <7 days or projected stock-out ≤5 days, and hub cover ≥14 days, transfer the earliest-expiry batch first with ≥60 days residual shelf life; do not transfer if expiry <45 days; execute within 24 h and update FEFO ledger."
  },
  {
    "scenario": "T2DM Insulin Cold-Chain Refill Surge at Bengaluru Urban Spoke Clinics",
    "seasonRegion": "District Chronic NCD Adherence Surge — HTN/T2DM Refills (Bengaluru / KA)",
    "surgeSignals": [
      "7-day rolling diabetes refill footfall ≥1.30× same-week baseline or ≥25% rise in EHR due-for-refill T2DM worklist",
      "≥25% of insulin/metformin/glimepiride patients miss refill within 7 days of due date",
      "≥15% of recent capillary glucose readings >300 mg/dL or HbA1c ≥9%, or insulin stock cover <10 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Metformin Hydrochloride 500 mg tablet",
      "Glimepiride 1 mg tablet",
      "Gliclazide 80 mg tablet",
      "Insulin Human 40 IU/mL injection (10 mL vial)"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Insulin Human 40 IU/mL: store at 2–8°C, never freeze, protect from light, do not shake; in-use vial may be kept ≤25°C for up to 28 days per manufacturer. Use validated cold box with ice packs without direct contact; twice-daily logger. LASA segregation: Glimepiride vs Gliclazide, Metformin vs Metoprolol; separate insulin bins.",
    "interClinicTransferRule": "Hub-to-spoke FEFO cold-chain trigger: if spoke insulin 7-day cover <7 days and hub cover ≥14 days, transfer earliest-expiry insulin batch first with ≥90 days residual shelf life and uninterrupted 2–8°C logger; do not transfer if expiry <60 days or excursion >30 min without logger; quarantine and replace, do not redistribute."
  },
  {
    "scenario": "Post-Migration Adherence Surge with LASA Antihypertensives and Near-Expiry Spoke Redistribution",
    "seasonRegion": "District Chronic NCD Adherence Surge — HTN/T2DM Refills (Bengaluru / KA)",
    "surgeSignals": [
      "≥20% rise in new/returning migrant patient registrations with HTN/T2DM refill requests at spoke PHCs",
      "14-day missed-refill rate ≥25% across spoke clinics or ≥15% of patients collecting <75% of expected monthly refill quantity",
      "Near-expiry core NCD stock (>15% of total stock with <90 days shelf life) at hub or any spoke clinic"
    ],
    "essentialPmbjpBufferDrugs": [
      "Amlodipine 5 mg tablet",
      "Telmisartan 40 mg tablet",
      "Losartan Potassium 50 mg tablet",
      "Metformin Hydrochloride 500 mg tablet",
      "Glimepiride 1 mg tablet",
      "Atorvastatin 10 mg tablet"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Oral solids: light-protected, dry storage ≤25°C and RH ≤60%; FEFO labels visible; LASA segregation for Amlodipine/Atorvastatin and Glimepiride/Gliclazide. Any inter-clinic insulin movement requires 2–8°C validated cold box, logger, and no freeze exposure.",
    "interClinicTransferRule": "District hub-to-spoke FEFO trigger: when spoke 10-day cover for any core NCD drug <10 days and hub cover >21 days, redistribute earliest-expiry batch first with ≥75 days residual shelf life; transfer only if expiry ≥60 days and FEFO ledger updated; return spoke stock with <45 days expiry to hub for reallocation instead of further spoke transfer."
  },
  {
    "scenario": "Severe Maternal Anemia IV Iron FEFO Rotation — District Hospital Hub, Jharkhand",
    "seasonRegion": "Maternal Anemia, Eclampsia & Obstetric Cold-Chain (Jharkhand / Chhattisgarh)",
    "surgeSignals": [
      "ANC/lab EHR: ≥25% of Hb results in rolling 7 days are <9 g/dL OR ≥15 new Hb <7 g/dL severe anemia results in 7 days",
      "Pharmacy/EHR: IV iron sucrose orders exceed 12 vials/week or rise ≥20% above 14-day baseline",
      "Lab/footfall: ferritin <15 ng/mL or microcytic anemia reports ≥20 in 7 days, or anemia admissions from ANC/ labour room ≥5 in 7 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Iron Sucrose Injection IP 100 mg/5 ml",
      "Ferrous Sulphate Tablets IP 200 mg + Folic Acid Tablets IP 500 mcg",
      "Folic Acid Tablets IP 5 mg",
      "Cyanocobalamin Injection IP 1000 mcg/ml",
      "Normal Saline 0.9% w/v 500 ml"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Iron sucrose: store at 2-8°C, protect from light, do not freeze, keep upright; separate from oxytocin/ergometrine cold-chain shelves. Ferrous sulphate + folic acid and folic acid tablets: store below 25°C, dry, light-protected. Cyanocobalamin: 2-8°C, protect from light. Use FEFO labels; quarantine any iron sucrose batch with visible particulate matter or freeze exposure.",
    "interClinicTransferRule": "FEFO hub-to-spoke trigger: when any spoke IV iron sucrose stock falls below 10 days of consumption AND hub retains ≥30 days after transfer, dispatch the earliest-expiry hub batch first within 24 hours; do not transfer batches with <60 days residual shelf life; record batch, expiry, temperature logger, and recipient in the inter-clinic FEFO register."
  },
  {
    "scenario": "Eclampsia Magnesium Sulphate Surge & LASA-Safe Eclampsia Kit — Chhattisgarh Tribal Block",
    "seasonRegion": "Maternal Anemia, Eclampsia & Obstetric Cold-Chain (Jharkhand / Chhattisgarh)",
    "surgeSignals": [
      "Triage EHR: ≥8 pregnant/postpartum women in 72 hours with BP ≥160/110 mmHg plus headache, visual disturbance, or epigastric pain",
      "Labour room/EHR: ≥3 magnesium sulphate loading-dose orders in 24 hours OR ≥2 eclampsia/severe pre-eclampsia admissions in 72 hours",
      "Lab/footfall: ≥5 admissions in 7 days with proteinuria ≥2+ or platelet count <100,000/µL in obstetric triage"
    ],
    "essentialPmbjpBufferDrugs": [
      "Magnesium Sulphate Injection IP 50% w/v (500 mg/ml), 10 ml ampoule",
      "Calcium Gluconate Injection IP 10% w/v, 10 ml ampoule",
      "Nifedipine Tablets IP 10 mg",
      "Labetalol Tablets IP 100 mg",
      "Hydralazine Injection IP 20 mg/ml"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Magnesium sulphate: store at 15-30°C, protect from light; keep in sealed eclampsia emergency kit. Calcium gluconate: room temperature, protect from light; LASA rule — store in a separately labelled red-bordered antidote bin, never adjacent to magnesium sulphate. Nifedipine: protect from light and moisture. Labetalol/hydralazine: store below 30°C, protect from light; hydralazine ampoules checked for discoloration before use.",
    "interClinicTransferRule": "FEFO hub-to-spoke trigger: when a spoke eclampsia kit has <5 magnesium sulphate ampoules OR <7 days of calculated use AND the hub has ≥21 days after transfer, transfer the earliest-expiry magnesium sulphate batch within 12 hours; do not transfer batches with <120 days residual shelf life; calcium gluconate must be transferred in the same LASA-labelled kit with batch and expiry reconciliation."
  },
  {
    "scenario": "Firecracker & Chemical Burn Mass-Casualty Surge (Diwali / Karthigai Deepam — Thermal, Flame & Acid Burn Triage)",
    "seasonRegion": "Festival & Mass-Gathering Trauma, Burn & Antimicrobial Surge",
    "surgeSignals": [
      "≥8 new ED burn-triage registrations with TBSA ≥15% in any rolling 24 h (≥3× the 28-day median in the EHR triage register)",
      "Pharmacy Ringer Lactate 500 mL + Sodium Chloride 0.9% 500 mL issue exceeding 150% of the 28-day daily mean for 2 consecutive days (Parkland-formula resuscitation driver)",
      "≥20 Tetanus Toxoid / TIG prophylaxis orders per day with ≥30% of burn-wound swabs on LIS growing Pseudomonas spp. or Acinetobacter baumannii (MDR-cluster trigger)"
    ],
    "essentialPmbjpBufferDrugs": [
      "Inj Ringer Lactate 500 mL",
      "Inj Sodium Chloride 0.9% 500 mL",
      "Inj Paracetamol 1 g / 100 mL",
      "Inj Ketorolac 30 mg / mL (2 mL)",
      "Inj Tramadol 50 mg / mL (2 mL) — NDPS double-locked",
      "Silver Sulfadiazine Cream 1% (20 g tube)"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "TT, TIG and Ketamine held at 2–8 °C in validated ILR with continuous data logger; freeze-damaged TIG (0 °C exposure) is discarded, never re-issued. Silver Sulfadiazine 1% and Povidone Iodine 5% stored below 25 °C away from direct light (photo-degradation); opened tubes dated and discarded at 7 days. LASA segregation: Adrenaline 1 mg/mL vs Atropine 0.6 mg/mL vs Ephedrine — separate colour-coded bins with 'read-back' labels; Tramadol and Ketamine in DDC narcotic cupboard with separate NDPS register; TT and TIG stored on non-adjacent shelves (look-alike packaging) with distinct green/red bin labels.",
    "interClinicTransferRule": "FEFO hub-to-spoke trigger: when any spoke burn-module batch (Silver Sulfadiazine / Povidone Iodine / TT / TIG / Ringer Lactate) falls below 14 days' cover OR any lot on hand reaches ≤90 days to expiry, the hub releases stock the same day using batch-level FEFO lock in HIS — earliest-expiry hub lot ships first, and the spoke is blocked from drawing newer lots until that batch is consumed. Spoke lots with 60–90 days remaining are reverse-pulled to the hub for redistribution to a facility with ≥45-day consumption velocity. Cold-chain items move only in validated 2–8 °C passive shippers with data logger; any excursion >8 °C for >30 minutes = quarantine and rejection, not redistribution."
  },
  {
    "scenario": "Typhoid Fever Surge — Hub Hospital to CHC/PHC Oral and IV Antibiotic FEFO Rotation",
    "seasonRegion": "Pre-Monsoon Typhoid & Viral Hepatitis A/E (Bihar / Eastern UP)",
    "surgeSignals": [
      "≥20% week-on-week rise in OPD footfall for fever >5 days with abdominal symptoms",
      "Blood culture/S. Typhi RDT positivity ≥15% among febrile illness samples in 7 days",
      "≥25% increase in azithromycin/ceftriaxone dispensing or typhoid admissions from sentinel CHCs"
    ],
    "essentialPmbjpBufferDrugs": [
      "Azithromycin 500 mg Tablet",
      "Ceftriaxone 1 g Injection",
      "Cefixime 200 mg Tablet",
      "Doxycycline 100 mg Capsule",
      "Paracetamol 500 mg Tablet",
      "Ondansetron 4 mg Tablet"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store oral antibiotics and IV fluids at ≤25C dry, away from sunlight; ceftriaxone powder light-protected. No routine 2-8C requirement for these PMBJP items, but any co-stocked vaccines/insulin must remain at 2-8C. Apply LASA segregation: ceftriaxone vs cefixime vs cefotaxime, paracetamol vs pantoprazole, ondansetron segregated and labelled; keep batch/expiry visible and FEFO-arranged.",
    "interClinicTransferRule": "Hub→spoke FEFO trigger: when spoke projected cover for azithromycin/ceftriaxone is <14 days AND hub cover is >30 days, transfer the earliest-expiry batch with ≥45 days shelf life remaining; log batch, expiry, quantity and dispatch/receipt time. Cold-chain transfer only if vaccine/insulin is co-loaded, using validated 2-8C box and data logger."
  },
  {
    "scenario": "Viral Hepatitis A/E Outbreak — Dehydration, Vomiting and Pregnancy-Safe Supportive Stock Redistribution",
    "seasonRegion": "Pre-Monsoon Typhoid & Viral Hepatitis A/E (Bihar / Eastern UP)",
    "surgeSignals": [
      "≥2-fold rise in jaundice cases aged 15–40 years in OPD/IPD line-list over 14 days",
      "Hepatitis A IgM or Hepatitis E IgM positivity ≥20% among tested jaundice samples",
      "≥30% increase in ORS/IV fluid and ondansetron dispensing with rising vomiting/dehydration footfall"
    ],
    "essentialPmbjpBufferDrugs": [
      "ORS (Oral Rehydration Salts) 20.5 g Sachet",
      "Ringer Lactate 500 mL IV",
      "Normal Saline 0.9% 500 mL IV",
      "Dextrose 5% 500 mL IV",
      "Ondansetron 4 mg Tablet",
      "Paracetamol 500 mg Tablet"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "ORS and IV fluids at ≤25C dry, protected from light and moisture; vitamin K1 injection light-protected and segregated. No routine 2-8C for these PMBJP items, but co-stocked Hepatitis A vaccine/insulin must be kept at 2-8C with daily temperature log. LASA rules: ondansetron separated from oseltamivir/other antiemetics, paracetamol vs pantoprazole in distinct bins, vitamin K1 stored away from insulin and labelled high-alert.",
    "interClinicTransferRule": "FEFO hub→spoke trigger: when spoke ORS/Ringer Lactate cover is <10 days AND hub has >21 days cover, transfer earliest-expiry batch with ≥30 days shelf life; cold-chain transfer only for co-stocked Hepatitis A vaccine/insulin at 2-8C with data logger, reject receipt if >8C or expiry <30 days unless spoke can consume before expiry."
  },
  {
    "scenario": "Pre-Monsoon Flood-Access Disruption — Mixed Typhoid/Hepatitis Buffer and Cold-Chain Courier Transfer",
    "seasonRegion": "Pre-Monsoon Typhoid & Viral Hepatitis A/E (Bihar / Eastern UP)",
    "surgeSignals": [
      "≥15% rise in combined fever/jaundice OPD footfall at flood-affected sentinel sites within 7 days",
      "≥20% increase in ORS/IV fluid plus azithromycin/ceftriaxone issue vouchers from district store",
      "Weather/road alert predicting ≥72-hour access disruption to ≥2 spoke clinics with stock cover <21 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Azithromycin 500 mg Tablet",
      "Ceftriaxone 1 g Injection",
      "Cefixime 200 mg Tablet",
      "ORS (Oral Rehydration Salts) 20.5 g Sachet",
      "Ringer Lactate 500 mL IV",
      "Paracetamol 500 mg Tablet"
    ],
    "stockBufferDays": 45,
    "coldChainAndStorageNotes": "Maintain dry ≤25C storage for oral drugs/ORS/IV fluids; ceftriaxone and vitamin K1 light-protected. Any vaccine/insulin transfer must use validated 2-8C cold box with data logger and ice-pack conditioning to avoid freezing. LASA segregation: ceftriaxone vs cefixime, ondansetron vs other antiemetics, vitamin K1 vs insulin; label high-alert and FEFO front-load earliest expiry.",
    "interClinicTransferRule": "Flood-access FEFO trigger: if spoke cover <21 days and access disruption is forecast within 72 hours, transfer earliest-expiry hub batch when hub cover >45 days and batch expiry >60 days; cold-chain items only in validated 2-8C box with data logger, receipt temperature 2-8C, quarantine and report any excursion."
  },
  {
    "scenario": "Monsoon AYUSH Fever-URI Dual-Pharmacy FEFO Surge (National Urban/Rural Clusters)",
    "seasonRegion": "AYUSH + PMBJP Dual-Pharmacy Fast-Moving FEFO Audit (National Clusters)",
    "surgeSignals": [
      "Fever/URI OPD footfall in AYUSH + allopathic dual clinics >20% above 4-week median for 3 consecutive days",
      "PMBJP dispense lines for paracetamol/ORS/cetirizine >1.5x baseline for 48-72 hours",
      "Dengue/typhoid rapid antigen positivity >10% or CBC/NS1/typhoid lab orders >30% above 4-week median"
    ],
    "essentialPmbjpBufferDrugs": [
      "Paracetamol 500 mg tablet",
      "ORS (WHO) 21.8 g powder sachet",
      "Cetirizine 10 mg tablet",
      "Azithromycin 500 mg tablet",
      "Amoxicillin 500 mg capsule"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Oral solids store below 30C, dry, light-protected; ORS sachets protected from moisture and direct sunlight; no freezer storage. Any injectable/vaccine cold-chain item must be kept at 2-8C with logger, never frozen. LASA segregation: cetirizine vs cinnarizine, amoxicillin vs ampicillin, azithromycin vs erythromycin; separate bins with batch/expiry labels.",
    "interClinicTransferRule": "Every 7 days, run FEFO hub-to-spoke redistribution: if any spoke batch of a fast-mover has <=60 days to expiry and hub has same generic/strength with >=120 days, transfer hub to spoke within 48 hours after batch/expiry verification; do not transfer if <30 days shelf life, damaged packaging, or cold-chain excursion."
  },
  {
    "scenario": "PMBJP NCD Fast-Mover FEFO Audit - Hypertension/Diabetes Cluster",
    "seasonRegion": "AYUSH + PMBJP Dual-Pharmacy Fast-Moving FEFO Audit (National Clusters)",
    "surgeSignals": [
      "PMBJP metformin/amlodipine/telmisartan dispense lines >25% above 4-week median for 3 consecutive days",
      "NCD follow-up OPD footfall >15% above 4-week median with BP >=140/90 recorded in >30% of visits",
      "HbA1c/creatinine/lipid lab orders >20% above 4-week median or insulin dispense lines >30% above baseline"
    ],
    "essentialPmbjpBufferDrugs": [
      "Metformin 500 mg tablet",
      "Glimepiride 1 mg tablet",
      "Amlodipine 5 mg tablet",
      "Telmisartan 40 mg tablet",
      "Atorvastatin 10 mg tablet",
      "Human Insulin 40 IU/mL injection"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Human insulin store at 2-8C, never freeze, protect from light; in-use pens/vials follow label and avoid heat >30C. Oral NCD solids store below 30C, dry, light-protected. LASA segregation: glimepiride vs gliclazide, amlodipine vs amiloride, telmisartan vs losartan, human insulin vs glargine; use separate labeled bins and double-check strength.",
    "interClinicTransferRule": "Weekly FEFO hub-to-spoke rule: for oral NCD fast-movers, transfer when spoke batch <=60 days to expiry and hub batch >=120 days within 48 hours. For insulin cold-chain, transfer only when spoke batch <=45 days to expiry, hub batch >=90 days, validated 2-8C box with logger, and same generic/strength; no transfer if <30 days shelf life or any temperature excursion."
  },
  {
    "scenario": "Cold-Chain Insulin/Vaccine Inter-Clinic FEFO Redistribution - AYUSH/PMBJP Dual Pharmacy",
    "seasonRegion": "AYUSH + PMBJP Dual-Pharmacy Fast-Moving FEFO Audit (National Clusters)",
    "surgeSignals": [
      "Immunization/insulin clinic footfall >20% above 4-week median for 3 consecutive days",
      "Cold-chain expiry/wastage dashboard >5% of active batches or any 2-8C logger excursion in prior 7 days",
      "PMBJP insulin dispense lines >30% above baseline or vaccine stock-out alerts in >=2 spoke clinics within 7 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Human Insulin 40 IU/mL injection",
      "Insulin Glargine 100 IU/mL injection",
      "Tetanus Toxoid 0.5 mL injection",
      "Paracetamol 500 mg tablet",
      "ORS (WHO) 21.8 g powder sachet"
    ],
    "stockBufferDays": 14,
    "coldChainAndStorageNotes": "All cold-chain items strictly 2-8C with calibrated logger; never freeze; protect insulin and vaccines from light; keep ice packs conditioned to avoid freezing. Oral buffers store below 30C, dry, light-protected. LASA segregation: human insulin vs glargine, TT vs other 0.5 mL injections, ORS vs electrolyte powders; separate cold-chain and oral bins with batch/expiry and open-vial date.",
    "interClinicTransferRule": "48-hour FEFO hub-to-spoke cold-chain trigger: if spoke cold-chain batch has <=45 days to expiry and hub has same generic/strength with >=90 days, redistribute hub to spoke in validated 2-8C carrier with logger; accept only if logger shows continuous 2-8C, no freeze/thaw, packaging intact, and >=30 days shelf life at receipt. Do not transfer expired, near-expiry <30 days, or excursion-affected batches; record batch, expiry, temperature log, and receiving clinic."
  },
  {
    "scenario": "Dry-Heat Classic Heatstroke with Hypernatremic Dehydration",
    "seasonRegion": "Summer Heatstroke, Hyponatremia & Dehydration (Rajasthan / Vidarbha)",
    "surgeSignals": [
      "ED/IP heat-illness footfall ≥15% above 7-day baseline for 2 consecutive days",
      "Serum sodium >145 mmol/L with rising BUN/creatinine or CK >1000 U/L in ≥3 heat cases per 24 hours",
      "ORS/0.9% NaCl/Ringer lactate issue rate >1.5× 14-day rolling baseline"
    ],
    "essentialPmbjpBufferDrugs": [
      "Sodium Chloride Injection IP 0.9% w/v 500 mL",
      "Ringer Lactate Injection IP 500 mL",
      "Dextrose Injection IP 5% w/v 500 mL",
      "ORS (WHO) Powder for Oral Solution 20.5 g sachet",
      "Paracetamol Tablets IP 500 mg",
      "Ondansetron Injection IP 2 mg/mL (2 mL ampoule)"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "IV fluids/ORS are ambient 15–30°C, light-protected; do not cold-chain or freeze. In Rajasthan summer, store below 30°C with temperature logging and heat-shield pharmacy stock. LASA segregation: 0.9% NaCl vs 3% NaCl, RL vs D5, ORS vs electrolyte powders; label high-alert shelves. Cold-chain 2–8°C only for separately listed injectables, with data logger and preconditioned packs.",
    "interClinicTransferRule": "Hub→spoke transfer trigger: spoke 7-day rolling issue of ORS/0.9% NaCl/RL exceeds on-hand by >20% or on-hand <7 days, and hub has >21 days cover. Release earliest-expiry lot first (FEFO); no lot with <30 days expiry unless spoke confirms consumption before expiry; transport ambient 15–30°C, light-protected, no cold-chain for IV fluids."
  },
  {
    "scenario": "ICU Vasopressor LASA Cabinet: Adrenaline-Noradrenaline-Dopamine/Dobutamine Mix-Up Governance",
    "seasonRegion": "LASA (Look-Alike Sound-Alike) & High-Alert ICU Stock Governance",
    "surgeSignals": [
      "ICU vasopressor infusion starts >15/day or >20% above 4-week rolling baseline",
      "EHR LASA alert overrides or look-alike near-misses >=3 per 12-hour shift",
      "Sepsis/shock ICU admissions +25% with ED footfall above seasonal threshold"
    ],
    "essentialPmbjpBufferDrugs": [
      "Adrenaline (Epinephrine) Injection 1 mg/mL (1:1000), 1 mL ampoule",
      "Noradrenaline Bitartrate Injection 2 mg/mL (1 mg/mL base), 2 mL ampoule",
      "Dopamine Hydrochloride Injection 40 mg/mL, 5 mL vial",
      "Dobutamine Hydrochloride Injection 5 mg/mL, 20 mL vial"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Store at 15-25C, protect from light, do not freeze. Keep in locked high-alert LASA cabinet with TALLman labels, separate bins, barcode scanning, and physical separation of adrenaline from noradrenaline. Use 2-8C only if manufacturer requires; log fridge temperature for any cold-chain high-alert item.",
    "interClinicTransferRule": "Hub-to-spoke FEFO transfer only if spoke vasopressor cover <7 days AND hub surplus >14 days; transfer earliest-expiry lot with >=60 days residual shelf life; no transfer if <45 days residual or any temperature excursion; document lot, expiry, and TALLman label check."
  },
  {
    "scenario": "Insulin-Heparin High-Alert Cold-Chain LASA Buffer: ICU Glycaemic and VTE Prophylaxis Stock",
    "seasonRegion": "LASA (Look-Alike Sound-Alike) & High-Alert ICU Stock Governance",
    "surgeSignals": [
      "Insulin and heparin order volume +25% over 7-day rolling baseline",
      "ICU hyperglycaemia >180 mg/dL starts or insulin drip initiations >10/day",
      "Cold-chain fridge temperature excursions >2/week or insulin stock cover <7 days"
    ],
    "essentialPmbjpBufferDrugs": [
      "Insulin Human Injection 100 IU/mL, 10 mL vial",
      "Heparin Sodium Injection 5000 IU/mL, 5 mL vial",
      "Sodium Chloride 0.9% Injection 100 mL"
    ],
    "stockBufferDays": 30,
    "coldChainAndStorageNotes": "Insulin: 2-8C, never freeze, protect from light, dedicated fridge bin away from heparin/vasopressors. Heparin: 15-25C, light protected, locked high-alert storage. Use TALLman labels 'INSULIN units' vs 'HEPARIN units'; double-check concentration and units; never store insulin and heparin adjacently.",
    "interClinicTransferRule": "Hub-to-spoke FEFO transfer for insulin only when spoke cover <7 days AND hub surplus >14 days; transfer earliest-expiry cold-chain lot with >=90 days residual shelf life and continuous 2-8C logger; reject if >30 min excursion outside 2-8C or <60 days residual. Heparin room-temp transfer FEFO with >=60 days residual."
  },
  {
    "scenario": "Obstetric ICU Oxytocin-Vasopressin Cold-Chain LASA and PPH High-Alert Stock",
    "seasonRegion": "LASA (Look-Alike Sound-Alike) & High-Alert ICU Stock Governance",
    "surgeSignals": [
      "Obstetric admissions +20% or delivery-room footfall above seasonal threshold",
      "PPH cases or oxytocin infusions >5 per week or >20% rise over baseline",
      "Oxytocin fridge stock cover <7 days or cold-chain excursion >=2/week"
    ],
    "essentialPmbjpBufferDrugs": [
      "Oxytocin Injection 5 IU/mL, 1 mL ampoule",
      "Vasopressin Injection 20 IU/mL, 1 mL ampoule",
      "Magnesium Sulfate Injection 50% w/v, 10 mL vial"
    ],
    "stockBufferDays": 21,
    "coldChainAndStorageNotes": "Oxytocin: 2-8C, protect from light, never freeze. Vasopressin: 2-8C per manufacturer, protect from light. Store in separate labelled bins with TALLman labels 'OXYTOCIN IU' vs 'VASOPRESSIN IU'; magnesium sulfate at 15-25C in locked high-alert area. Log fridge temperature twice daily and after any power interruption.",
    "interClinicTransferRule": "Hub-to-spoke FEFO transfer only when spoke oxytocin cover <7 days AND hub surplus >14 days; transfer earliest-expiry lot with >=60 days residual shelf life under validated 2-8C cold chain; no transfer if <45 days residual, >30 min temperature excursion, or LASA label absent."
  }
];

export const HQ_PROCUREMENT_BRIEFS: HqProcurementBrief[] = [
  {
    "briefId": "HQ-OPS-0017",
    "regionHub": "Delhi-NCR & Western UP Cluster",
    "trigger": "Post-Monsoon Dengue & Fever Surge",
    "urgentTransfers": [
      "Metformin: 600u (HQ Depot -> clinic-delhi-01)",
      "Amoxicillin-Clavulanate: 300u (HQ Depot -> clinic-delhi-01)",
      "Paracetamol: 1200u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 446500,
    "executiveSummary": "Dengue NS1-positive admissions are up 42% WoW and South Delhi has only 4 days of cover for IV acetaminophen, Ringer Lactate, ORS, and platelet monitoring consumables. Risk is HIGH. Immediate actions: transfer metformin, amoxicillin-clavulanate, and oral paracetamol from HQ depot to clinic-delhi-01; place a PMBJP order "
  },
  {
    "briefId": "HQ-OPS-0009",
    "regionHub": "Delhi-NCR & Western UP Cluster",
    "trigger": "Post-Monsoon Dengue & Fever Surge",
    "urgentTransfers": [
      "paracetamol: 2000u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 300u (HQ Depot -> clinic-delhi-01)",
      "metformin: 600u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 258000,
    "executiveSummary": "HIGH risk: NS1-positive dengue admissions are up 42% WoW and South Delhi has only ~4 days cover for IV acetaminophen, Ringer Lactate, ORS, and platelet monitoring consumables. Immediate HQ transfers cover clinic-delhi-01 low stocks; PMBJP order totals INR 302000, leaving INR 33000 under the INR 335000 cap, with ~INR 25"
  },
  {
    "briefId": "HQ-OPS-0006",
    "regionHub": "Patna-Gaya High-Volume PHC Ring",
    "trigger": "Enteric Fever & Maternal Anemia Program Push",
    "urgentTransfers": [
      "Metformin: 300u (HQ Depot -> clinic-delhi-01)",
      "Amoxicillin-Clavulanate: 600u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 398400,
    "executiveSummary": "High risk: TyphiDot and severe ANC iron-deficiency signals exceed current PHC buffers, while HQ Depot has no azithromycin, cefixime, IV ferric carboxymaltose, or albendazole. Immediate depot transfers cover clinic-delhi-01 metformin and amoxicillin-clavulanate gaps. PMBJP order totals INR 221,600, within the INR 230,00"
  },
  {
    "briefId": "HQ-OPS-0011",
    "regionHub": "Bengaluru Metro & Karnataka Spokes",
    "trigger": "Chronic NCD Refill & PMBJP Generic Migration",
    "urgentTransfers": [
      "metformin: 250u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 120u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 658000,
    "executiveSummary": "High risk from +28% NCD refill demand, clinic-delhi-01 low stock, stranded branded inventory, and PMBJP counter pressure. Immediate depot transfers cover metformin and amoxicillin-clavulanate gaps. PMBJP order of metformin SR, telmisartan, and atorvastatin costs INR 302000, within INR 380000 cap, with estimated branded"
  },
  {
    "briefId": "HQ-OPS-0001",
    "regionHub": "Delhi-NCR & Western UP Cluster",
    "trigger": "Post-Monsoon Dengue & Fever Surge",
    "urgentTransfers": [
      "metformin: 400u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 600u (HQ Depot -> clinic-delhi-01)",
      "paracetamol: 1200u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 347500,
    "executiveSummary": "Risk HIGH: NS1-positive dengue admissions +42% WoW with only 4-day cover for IV acetaminophen, Ringer Lactate, ORS, and platelet consumables in South Delhi. Approve PMBJP order INR269,000 under INR290,000 cap, execute urgent HQ-depot transfers to clinic-delhi-01, enforce FEFO on near-expiry metformin/atropine, and revi"
  },
  {
    "briefId": "HQ-OPS-0014",
    "regionHub": "Patna-Gaya High-Volume PHC Ring",
    "trigger": "Enteric Fever & Maternal Anemia Program Push",
    "urgentTransfers": [
      "metformin: 300u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 240u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 553000,
    "executiveSummary": "HIGH risk: TyphiDot positives and severe ANC iron deficiency are surging in the Patna-Gaya PHC ring. Approve PMBJP order of INR 247000 within INR 275000 cap for azithromycin, cefixime, IV ferric carboxymaltose, and albendazole; estimated branded savings INR 553000. Immediately transfer metformin and amoxicillin-clavula"
  },
  {
    "briefId": "HQ-OPS-0012",
    "regionHub": "Chandigarh-Punjab-Haryana Northern Grid",
    "trigger": "Winter Air-Quality & Bronchospasm Wave",
    "urgentTransfers": [],
    "estimatedCostSavingsInr": 45000,
    "executiveSummary": "{\"riskLevel\":\"HIGH\",\"urgentInterClinicTransfers\":[{\"fromDepotOrClinic\":\"HQ Depot\",\"toClinic\":\"clinic-delhi-01\",\"genericSalt\":\"salbutamol\",\"units\":600,\"rationale\":\"AQI >380 and +55% nebulization visits; pre-position respules at highest-exposure Delhi clinic while PMBJP order is placed.\"},{\"fromDepotOrClinic\":\"HQ Depot\","
  },
  {
    "briefId": "HQ-OPS-0018",
    "regionHub": "Mumbai-Pune Urban Poly-Hubs",
    "trigger": "Heavy Monsoon Waterborne & Leptospirosis Alert",
    "urgentTransfers": [
      "metformin: 300u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 240u (HQ Depot -> clinic-delhi-01)",
      "ceftriaxone: 250u (HQ Depot -> clinic-opd-001)",
      "ceftriaxone: 150u (HQ Depot -> clinic-mumbai-02)"
    ],
    "estimatedCostSavingsInr": 481000,
    "executiveSummary": "HIGH risk: +35% acute gastroenteritis and febrile jaundice in Mumbai-Pune with monsoon leptospirosis signal; Pune UHP depletion risk for doxycycline, ceftriaxone, ondansetron and zinc-ORS. HQ has ceftriaxone 950 vials but zero doxycycline, ondansetron and zinc-ORS. Approve PMBJP order of INR 234000 within INR 280000 ca"
  },
  {
    "briefId": "HQ-OPS-0010",
    "regionHub": "Mumbai-Pune Urban Poly-Hubs",
    "trigger": "Heavy Monsoon Waterborne & Leptospirosis Alert",
    "urgentTransfers": [
      "ceftriaxone: 450u (HQ Depot -> Pune UHP)",
      "amoxicillin-clavulanate: 300u (HQ Depot -> clinic-delhi-01)",
      "metformin: 400u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 644000,
    "executiveSummary": "HIGH: monsoon waterborne/leptospirosis signal with 35% rise in acute gastroenteritis and febrile jaundice; Pune UHP faces depletion risk for doxycycline, ceftriaxone, ondansetron and zinc-ORS. Immediate actions: transfer 450 ceftriaxone units from HQ Depot to Pune UHP; procure PMBJP generics within INR 310000 cap (tota"
  },
  {
    "briefId": "HQ-OPS-0013",
    "regionHub": "Jaipur-Jodhpur Arid FRU Network",
    "trigger": "Peak Summer Heat Stress & Rural Obstetric Transfer",
    "urgentTransfers": [
      "metformin: 25u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 30u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 217000,
    "executiveSummary": "HIGH: Peak summer heat/AKI and PIH/eclampsia signal require uninterrupted cold-chain IV NS/RL, MgSO4 50%, and labetalol IV across Jaipur-Jodhpur FRUs. HQ depot lacks these critical items in on-hand list; place PMBJP order now (INR 184300, estimated INR 217000 branded savings) and reserve INR 55700 contingency. Replenis"
  },
  {
    "briefId": "HQ-OPS-0004",
    "regionHub": "Chandigarh-Punjab-Haryana Northern Grid",
    "trigger": "Winter Air-Quality & Bronchospasm Wave",
    "urgentTransfers": [
      "metformin: 300u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 300u (HQ Depot -> clinic-delhi-01)",
      "salbutamol: 400u (HQ Depot -> clinic-delhi-01)",
      "salbutamol: 300u (HQ Depot -> clinic-triage-002)"
    ],
    "estimatedCostSavingsInr": 377000,
    "executiveSummary": "HIGH risk: AQI >380 is driving a +55% bronchospasm/COPD exacerbation surge with reorder alerts for salbutamol, budesonide, hydrocortisone IV, and azithromycin. Immediate HQ-to-clinic transfers cover Delhi metformin/amoxicillin-clavulanate lows and place salbutamol at Delhi and triage. PMBJP procurement order totals INR"
  },
  {
    "briefId": "HQ-OPS-0016",
    "regionHub": "Kolkata-Howrah High-Throughput Dispensaries",
    "trigger": "Mixed Cardiac ER & Geriatric Polypharmacy Balance",
    "urgentTransfers": [
      "Metformin 500mg: 300u (HQ Depot -> clinic-delhi-01)",
      "Amoxicillin-Clavulanate 625mg: 180u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 866900,
    "executiveSummary": "HIGH risk: mixed cardiac ER loading plus geriatric polypharmacy with two 45-day FEFO batches and clinic-delhi-01 low metformin/amox-clav. Immediate HQ depot transfers cover clinic gaps. PMBJP order of 91,000 units at INR 227,100 stays under INR 345,000 cap and avoids ~INR 866,900 branded spend. Execute FEFO quarantine,"
  },
  {
    "briefId": "HQ-OPS-0002",
    "regionHub": "Mumbai-Pune Urban Poly-Hubs",
    "trigger": "Heavy Monsoon Waterborne & Leptospirosis Alert",
    "urgentTransfers": [
      "metformin: 100u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 120u (HQ Depot -> clinic-delhi-01)",
      "ceftriaxone: 300u (HQ Depot -> Pune UHP)"
    ],
    "estimatedCostSavingsInr": 486000,
    "executiveSummary": "HIGH risk: Mumbai-Pune monsoon waterborne/leptospirosis alert with acute gastroenteritis and febrile jaundice +35%; Pune UHP faces depletion of doxycycline, ceftriaxone, ondansetron and zinc-ORS. Immediate HQ transfers: metformin and amoxicillin-clavulanate to clinic-delhi-01; 300 ceftriaxone vials to Pune UHP. PMBJP o"
  },
  {
    "briefId": "HQ-OPS-0008",
    "regionHub": "Kolkata-Howrah High-Throughput Dispensaries",
    "trigger": "Mixed Cardiac ER & Geriatric Polypharmacy Balance",
    "urgentTransfers": [
      "metformin: 500u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 300u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 320400,
    "executiveSummary": "Moderate risk: stock cover is adequate but clinic-delhi-01 has metformin and amoxicillin-clavulanate below par, and two batches need 45-day FEFO action. Authorize immediate HQ Depot transfers of 500 metformin and 300 amoxicillin-clavulanate to clinic-delhi-01. Place PMBJP order of ~INR 149,600 within the INR 375,000 ca"
  },
  {
    "briefId": "HQ-OPS-0007",
    "regionHub": "Chennai-Tamil Nadu Coastal Hubs",
    "trigger": "Northeast Monsoon Conjunctivitis, Scrub Typhus & UTI",
    "urgentTransfers": [
      "Metformin 500mg: 300u (HQ Depot -> clinic-delhi-01)",
      "Amoxicillin-Clavulanate: 180u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 429000,
    "executiveSummary": "Risk HIGH. Transfer metformin and amox-clav to clinic-delhi-01 immediately. Place PMBJP order for doxycycline, nitrofurantoin, ciprofloxacin eye drops, and pediatric amox-clav syrup totaling INR 231000 with INR 429000 branded savings, leaving INR 49000 contingency under budget. Activate daily syndromic surveillance acr"
  },
  {
    "briefId": "HQ-OPS-0005",
    "regionHub": "Jaipur-Jodhpur Arid FRU Network",
    "trigger": "Peak Summer Heat Stress & Rural Obstetric Transfer",
    "urgentTransfers": [
      "metformin: 300u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 240u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 446600,
    "executiveSummary": "HIGH risk: peak summer heat plus obstetric emergencies; IV NS/RL, MgSO4 50%, and labetalol IV cold-chain are critical and not listed in HQ depot on-hand. Place PMBJP order now: 6000 NS, 4000 RL, 1200 MgSO4, 600 labetalol, 500 calcium gluconate, 5000 ORS; total INR 257400, estimated branded savings INR 446600, within IN"
  },
  {
    "briefId": "HQ-OPS-0003",
    "regionHub": "Bengaluru Metro & Karnataka Spokes",
    "trigger": "Chronic NCD Refill & PMBJP Generic Migration",
    "urgentTransfers": [
      "metformin 500 SR: 400u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 120u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 300000,
    "executiveSummary": "Risk HIGH: NCD enrollments up 28% and clinic-delhi-01 has low metformin and amoxicillin-clavulanate. Approve emergency depot transfers 400 metformin 500 SR and 120 amoxicillin-clavulanate to clinic-delhi-01. Place PMBJP order for 60,000 metformin 500 SR, 30,000 telmisartan 40, and 30,000 atorvastatin 20 at estimated IN"
  },
  {
    "briefId": "HQ-OPS-0015",
    "regionHub": "Chennai-Tamil Nadu Coastal Hubs",
    "trigger": "Northeast Monsoon Conjunctivitis, Scrub Typhus & UTI",
    "urgentTransfers": [
      "Amoxicillin-Clavulanate: 600u (HQ Depot -> clinic-delhi-01)",
      "Metformin: 500u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 460400,
    "executiveSummary": "HIGH risk: Northeast Monsoon coastal Chennai signals show spiking doxycycline, nitrofurantoin, ciprofloxacin eye drops, and pediatric Amox-Clav syrup across 6 ward dispensaries, while HQ Depot holds no outbreak-critical stock for doxycycline, nitrofurantoin, ciprofloxacin eye drops, or pediatric Amox-Clav syrup. Immedi"
  },
  {
    "briefId": "HQ-OPS-0022",
    "regionHub": "Patna-Gaya High-Volume PHC Ring",
    "trigger": "Enteric Fever & Maternal Anemia Program Push",
    "urgentTransfers": [
      "metformin: 600u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 300u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 553500,
    "executiveSummary": "HIGH risk: TyphiDot and severe ANC iron-deficiency signals require rapid buffer build. PMBJP order totals INR 220000 within INR 245000 cap, with ~INR 553500 branded savings. Immediate HQ transfers fill clinic-delhi-01 metformin and amoxicillin-clavulanate gaps. Enforce FEFO on expiring Glucophage and monitor atropine e"
  },
  {
    "briefId": "HQ-OPS-0019",
    "regionHub": "Bengaluru Metro & Karnataka Spokes",
    "trigger": "Chronic NCD Refill & PMBJP Generic Migration",
    "urgentTransfers": [
      "Metformin 500 SR: 600u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 300u (HQ Depot -> clinic-delhi-01)",
      "Telmisartan 40: 400u (HQ Depot -> clinic-delhi-01)",
      "Atorvastatin 20: 400u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 410000,
    "executiveSummary": "HIGH: NCD enrollments up 28% with PMBJP counters oversubscribed; clinic-delhi-01 metformin 12/25 and amox-clav 18/30. HQ stock is adequate. Urgent depot pushes: metformin 600, amox-clav 300, telmisartan 400, atorvastatin 400. PMBJP order 70,000 units across metformin/telmisartan/atorvastatin at INR 150,000, estimated b"
  },
  {
    "briefId": "HQ-OPS-0021",
    "regionHub": "Jaipur-Jodhpur Arid FRU Network",
    "trigger": "Peak Summer Heat Stress & Rural Obstetric Transfer",
    "urgentTransfers": [
      "metformin: 100u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 60u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 244700,
    "executiveSummary": "HIGH risk: PIH/eclampsia plus heat exhaustion/AKI surge can overwhelm FRUs, and cold-chain/stock gaps exist at clinic-delhi-01. Approve PMBJP order INR 158300 (savings INR 244700 vs branded) within INR 210000 cap for IV NS/RL, MgSO4 50%, labetalol IV, ORS, and calcium gluconate. Immediate HQ-to-delhi transfers: metform"
  },
  {
    "briefId": "HQ-OPS-0023",
    "regionHub": "Chennai-Tamil Nadu Coastal Hubs",
    "trigger": "Northeast Monsoon Conjunctivitis, Scrub Typhus & UTI",
    "urgentTransfers": [
      "metformin: 250u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 500u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 380000,
    "executiveSummary": "Risk HIGH: NE monsoon signal shows doxycycline, nitrofurantoin, ciprofloxacin eye drops and pediatric amox-clav spiking across 6 Chennai coastal ward dispensaries. PMBJP order of 25,000 doxycycline caps, 15,000 nitrofurantoin tabs, 4,000 cipro eye-drop bottles and 1,500 pediatric amox-clav bottles costs INR 272,500, wi"
  },
  {
    "briefId": "HQ-OPS-0020",
    "regionHub": "Chandigarh-Punjab-Haryana Northern Grid",
    "trigger": "Winter Air-Quality & Bronchospasm Wave",
    "urgentTransfers": [
      "Metformin: 200u (HQ Depot -> clinic-delhi-01)",
      "Amoxicillin-Clavulanate: 120u (HQ Depot -> clinic-delhi-01)",
      "Salbutamol: 300u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 336000,
    "executiveSummary": "HIGH risk: AQI >380 with +55% COPD/asthma nebulization visits and reorder alerts for Salbutamol, Budesonide, Hydrocortisone IV, and Azithromycin. Immediate HQ-to-clinic-delhi-01 transfers: 200 metformin, 120 amoxicillin-clavulanate, and 300 salbutamol bridge units. PMBJP order placed for 8,000 salbutamol respules, 6,00"
  },
  {
    "briefId": "HQ-OPS-0026",
    "regionHub": "Mumbai-Pune Urban Poly-Hubs",
    "trigger": "Heavy Monsoon Waterborne & Leptospirosis Alert",
    "urgentTransfers": [
      "Ceftriaxone 1g IV: 300u (HQ Depot -> Pune UHP)",
      "Metformin: 400u (HQ Depot -> clinic-delhi-01)",
      "Amoxicillin-clavulanate: 120u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 420400,
    "executiveSummary": "HIGH risk: monsoon waterborne/leptospirosis signal with AGE and febrile jaundice +35% and Pune UHP depletion risk for doxycycline, ceftriaxone, ondansetron, and Zinc-ORS. Immediately move 300 ceftriaxone vials from HQ to Pune UHP and fill clinic-delhi-01 metformin/amoxicillin-clavulanate gaps. PMBJP order totals INR 16"
  },
  {
    "briefId": "HQ-OPS-0024",
    "regionHub": "Kolkata-Howrah High-Throughput Dispensaries",
    "trigger": "Mixed Cardiac ER & Geriatric Polypharmacy Balance",
    "urgentTransfers": [],
    "estimatedCostSavingsInr": 45000,
    "executiveSummary": "We need answer only JSON. Need reason. Need produce strategic supply chain. We need handle region Kolkata-Howrah, season mixed cardiac ER & geriatric polypharmacy. Epi signal: loading Aspirin/Clopidogrel, Atorvastatin 80, Pantoprazole IV, Atropine buffer audit due to 2 batches reaching 45-day FEFO expiry window. Budget"
  },
  {
    "briefId": "HQ-OPS-0030",
    "regionHub": "Patna-Gaya High-Volume PHC Ring",
    "trigger": "Enteric Fever & Maternal Anemia Program Push",
    "urgentTransfers": [
      "Metformin: 600u (HQ Depot -> clinic-delhi-01)",
      "Amoxicillin-Clavulanate: 600u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 445500,
    "executiveSummary": "Risk is HIGH due to the enteric fever and severe maternal anemia surge, with immediate need for Azithromycin, Cefixime, IV Ferric Carboxymaltose, and Albendazole buffers. HQ Depot can urgently cover clinic-delhi-01 metformin and amoxicillin-clavulanate lows. PMBJP order totals INR 253500, within the INR 290000 cap, and"
  },
  {
    "briefId": "HQ-OPS-0029",
    "regionHub": "Jaipur-Jodhpur Arid FRU Network",
    "trigger": "Peak Summer Heat Stress & Rural Obstetric Transfer",
    "urgentTransfers": [
      "metformin: 300u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 200u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 275500,
    "executiveSummary": "HIGH risk: peak summer heat exhaustion/AKI and PIH/eclampsia transfers are stressing IV NS/RL, MgSO4 50%, and labetalol cold-chain readiness. Transfer metformin 300 units and amoxicillin-clavulanate 200 units to clinic-delhi-01. PMBJP order: IV NS 5000, RL 3000, MgSO4 1500, labetalol 1000 = INR 247000, estimated brande"
  },
  {
    "briefId": "HQ-OPS-0027",
    "regionHub": "Bengaluru Metro & Karnataka Spokes",
    "trigger": "Chronic NCD Refill & PMBJP Generic Migration",
    "urgentTransfers": [],
    "estimatedCostSavingsInr": 45000,
    "executiveSummary": "{\"riskLevel\":\"HIGH\",\"urgentInterClinicTransfers\":[{\"fromDepotOrClinic\":\"HQ Depot\",\"toClinic\":\"clinic-delhi-01\",\"genericSalt\":\"metformin\",\"units\":300,\"rationale\":\"Clinic at 12/25 threshold; immediate transfer prevents stockout and covers +28% NCD refill demand until PMBJP replenishment.\"},{\"fromDepotOrClinic\":\"HQ Depot\""
  },
  {
    "briefId": "HQ-OPS-0025",
    "regionHub": "Delhi-NCR & Western UP Cluster",
    "trigger": "Post-Monsoon Dengue & Fever Surge",
    "urgentTransfers": [
      "Metformin: 150u (HQ Depot -> clinic-delhi-01)",
      "Amoxicillin-clavulanate: 120u (HQ Depot -> clinic-delhi-01)",
      "Paracetamol oral: 1000u (HQ Depot -> clinic-delhi-01)"
    ],
    "estimatedCostSavingsInr": 174500,
    "executiveSummary": "HIGH: dengue NS1 admissions are up 42% WoW with only 4-day cover in South Delhi for IV acetaminophen, Ringer Lactate, ORS, and platelet monitoring. HQ has no dengue-specific stock, so PMBJP order of INR 348,000 is within the INR 350,000 cap and must be expedited. Immediate HQ transfers cover clinic-delhi-01 low metform"
  },
  {
    "briefId": "HQ-OPS-0028",
    "regionHub": "Chandigarh-Punjab-Haryana Northern Grid",
    "trigger": "Winter Air-Quality & Bronchospasm Wave",
    "urgentTransfers": [
      "metformin: 150u (HQ Depot -> clinic-delhi-01)",
      "amoxicillin-clavulanate: 90u (HQ Depot -> clinic-delhi-01)",
      "salbutamol: 400u (HQ Depot -> clinic-delhi-01)",
      "salbutamol: 300u (HQ Depot -> clinic-triage-002)"
    ],
    "estimatedCostSavingsInr": 551000,
    "executiveSummary": "HIGH risk: winter AQI >380 with +55% COPD/asthma nebulization visits and reorder alerts for salbutamol, budesonide, hydrocortisone IV, and azithromycin. Immediate HQ-to-Delhi/triage transfers cover metformin, amoxicillin-clavulanate, and salbutamol gaps. PMBJP order totals INR 220000, within INR 350000 cap, with estima"
  }
];
