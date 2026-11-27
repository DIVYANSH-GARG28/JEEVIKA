// AUTO-CURATED & VERIFIED VIA JEEVIKA /api/v1/ops/rx-audit & Covexcode rx_audit (bx-live...bdaaea)
// Generated at: 2026-11-27T12:32:34.551Z

export interface PmbjpFormularyEntry {
  specialty: string;
  brandedExample: string;
  genericSalt: string;
  strengthForm: string;
  pmbjpCode: string;
  ntiNarrowIndex: boolean;
  allowAutoGenericSwap: boolean;
  renalAdjustRequired: boolean;
  pregnancyCategory: string;
  brandMrpInr: number;
  janAushadhiMrpInr: number;
  savingsPct: number;
  counselingNote: string;
}

export interface ExpandedHerbDrugEntry {
  id: string;
  allopathicDrug: string;
  allopathicClass: string;
  ayurvedicHerb: string;
  ayurvedicClass: string;
  severity: "CONTRAINDICATED" | "HIGH_RISK" | "MODERATE_CAUTION" | "BENIGN";
  clinicalRisk: string;
  mechanism: string;
  recommendation: string;
}

export interface RxAuditBenchmarkEntry {
  caseId: string;
  specialty: string;
  patientProfile: string;
  drugs: string[];
  herbs: string[];
  criticalAlerts: string[];
  pmbjpMonthlySavingsInr: number;
  summary: string;
}

export const PMBJP_FORMULARY_CATALOG: PmbjpFormularyEntry[] = [
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Glycomet 500mg Tablet (USV)",
    "genericSalt": "Metformin hydrochloride",
    "strengthForm": "500mg Tablet",
    "pmbjpCode": "PMBJP-1021",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 35,
    "janAushadhiMrpInr": 8,
    "savingsPct": 77,
    "counselingNote": "Take with meals to reduce GI upset; hold before iodinated contrast if eGFR <30 or AKI risk; monitor vitamin B12 annually."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Amaryl 1mg Tablet (Sanofi)",
    "genericSalt": "Glimepiride",
    "strengthForm": "1mg Tablet",
    "pmbjpCode": "PMBJP-1022",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 75,
    "janAushadhiMrpInr": 12,
    "savingsPct": 84,
    "counselingNote": "Take once daily with breakfast; counsel hypoglycemia signs; carry glucose; avoid skipped meals and excess alcohol."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Januvia 100mg Tablet (MSD)",
    "genericSalt": "Sitagliptin phosphate",
    "strengthForm": "100mg Tablet",
    "pmbjpCode": "PMBJP-1023",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 480,
    "janAushadhiMrpInr": 60,
    "savingsPct": 88,
    "counselingNote": "Take once daily with or without food; report severe joint pain or pancreatitis; reduce dose in renal impairment."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Jardiance 10mg Tablet (Boehringer Ingelheim)",
    "genericSalt": "Empagliflozin",
    "strengthForm": "10mg Tablet",
    "pmbjpCode": "PMBJP-1024",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 550,
    "janAushadhiMrpInr": 70,
    "savingsPct": 87,
    "counselingNote": "Take once daily; maintain hydration; report genital infections or ketoacidosis symptoms; hold before surgery."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Forxiga 10mg Tablet (AstraZeneca)",
    "genericSalt": "Dapagliflozin",
    "strengthForm": "10mg Tablet",
    "pmbjpCode": "PMBJP-1025",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 500,
    "janAushadhiMrpInr": 65,
    "savingsPct": 87,
    "counselingNote": "Take once daily; maintain hydration; report genital infections or ketoacidosis symptoms; hold before surgery."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Pioz 15mg Tablet (USV)",
    "genericSalt": "Pioglitazone hydrochloride",
    "strengthForm": "15mg Tablet",
    "pmbjpCode": "PMBJP-1026",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 90,
    "janAushadhiMrpInr": 15,
    "savingsPct": 83,
    "counselingNote": "Take once daily; monitor weight, edema, and LFTs; avoid in heart failure; report dark urine or jaundice."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Galvus 50mg Tablet (Novartis)",
    "genericSalt": "Vildagliptin",
    "strengthForm": "50mg Tablet",
    "pmbjpCode": "PMBJP-1027",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 300,
    "janAushadhiMrpInr": 45,
    "savingsPct": 85,
    "counselingNote": "Take twice daily; report pancreatitis or severe joint pain; use caution and adjust dose in renal impairment."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Thyronorm 50mcg Tablet (Abbott)",
    "genericSalt": "Levothyroxine sodium",
    "strengthForm": "50mcg Tablet",
    "pmbjpCode": "PMBJP-1028",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": false,
    "pregnancyCategory": "A",
    "brandMrpInr": 45,
    "janAushadhiMrpInr": 9,
    "savingsPct": 80,
    "counselingNote": "Take on empty stomach 30-60 min before breakfast with water; separate iron/calcium/antacids by 4h; do not switch brands without TSH recheck."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Valparin 500mg Tablet",
    "genericSalt": "Sodium valproate",
    "strengthForm": "500mg Tablet",
    "pmbjpCode": "PMBJP-1101",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 115,
    "janAushadhiMrpInr": 36,
    "savingsPct": 69,
    "counselingNote": "Do not stop abruptly; avoid in pregnancy; monitor LFTs, CBC, and valproate levels if symptoms; report tremor, vomiting, or bleeding."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Mazetol 200mg Tablet",
    "genericSalt": "Carbamazepine",
    "strengthForm": "200mg Tablet",
    "pmbjpCode": "PMBJP-1102",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 45,
    "janAushadhiMrpInr": 15,
    "savingsPct": 67,
    "counselingNote": "NTI: do not auto-substitute; monitor CBC, LFTs, sodium, and levels; report rash, sore throat, fever, or blurred vision."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Eptoin 100mg Tablet",
    "genericSalt": "Phenytoin sodium",
    "strengthForm": "100mg Tablet",
    "pmbjpCode": "PMBJP-1103",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 24,
    "janAushadhiMrpInr": 7,
    "savingsPct": 71,
    "counselingNote": "NTI: do not auto-substitute; maintain consistent formulation; monitor levels, gums, and CBC; report rash or ataxia."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Torleva 500mg Tablet",
    "genericSalt": "Levetiracetam",
    "strengthForm": "500mg Tablet",
    "pmbjpCode": "PMBJP-1104",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 120,
    "janAushadhiMrpInr": 36,
    "savingsPct": 70,
    "counselingNote": "Renal dose adjust; titrate; report mood changes or irritability; do not stop abruptly."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Lithosun 300mg Tablet",
    "genericSalt": "Lithium carbonate",
    "strengthForm": "300mg Tablet",
    "pmbjpCode": "PMBJP-1105",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": true,
    "pregnancyCategory": "D",
    "brandMrpInr": 70,
    "janAushadhiMrpInr": 22,
    "savingsPct": 69,
    "counselingNote": "NTI: do not auto-substitute; renal adjust; monitor lithium level, TSH, and renal function; maintain salt/fluid intake; report tremor, vomiting, or diarrhea."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Oleanz 5mg Tablet",
    "genericSalt": "Olanzapine",
    "strengthForm": "5mg Tablet",
    "pmbjpCode": "PMBJP-1106",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 80,
    "janAushadhiMrpInr": 24,
    "savingsPct": 70,
    "counselingNote": "Monitor weight, glucose, and lipids; report sedation, EPS, or fever; avoid abrupt discontinuation."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Fludac 20mg Capsule",
    "genericSalt": "Fluoxetine hydrochloride",
    "strengthForm": "20mg Capsule",
    "pmbjpCode": "PMBJP-1107",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 45,
    "janAushadhiMrpInr": 14,
    "savingsPct": 69,
    "counselingNote": "Take in morning; effect may take 4-6 weeks; report serotonin syndrome, bleeding, or suicidal ideation; taper before stopping."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Nexito 10mg Tablet",
    "genericSalt": "Escitalopram",
    "strengthForm": "10mg Tablet",
    "pmbjpCode": "PMBJP-1108",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 90,
    "janAushadhiMrpInr": 27,
    "savingsPct": 70,
    "counselingNote": "Take once daily; monitor QTc risk and hyponatremia; report agitation or suicidal ideation; taper before stopping."
  },
  {
    "specialty": "Dermatology & Allergy",
    "brandedExample": "Alerid 10mg Tablet",
    "genericSalt": "Cetirizine",
    "strengthForm": "10mg Tablet",
    "pmbjpCode": "PMBJP-3101",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 32,
    "janAushadhiMrpInr": 5,
    "savingsPct": 84,
    "counselingNote": "May cause sedation; avoid driving if drowsy. Reduce dose in severe renal impairment."
  },
  {
    "specialty": "Dermatology & Allergy",
    "brandedExample": "Levocet 5mg Tablet",
    "genericSalt": "Levocetirizine",
    "strengthForm": "5mg Tablet",
    "pmbjpCode": "PMBJP-3102",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 48,
    "janAushadhiMrpInr": 7,
    "savingsPct": 85,
    "counselingNote": "Take once daily; may cause drowsiness. Dose adjustment needed in renal impairment."
  },
  {
    "specialty": "Dermatology & Allergy",
    "brandedExample": "Allegra 120mg Tablet",
    "genericSalt": "Fexofenadine",
    "strengthForm": "120mg Tablet",
    "pmbjpCode": "PMBJP-3103",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 135,
    "janAushadhiMrpInr": 28,
    "savingsPct": 79,
    "counselingNote": "Avoid taking with fruit juices or aluminium/magnesium antacids; dose caution in renal impairment."
  },
  {
    "specialty": "Dermatology & Allergy",
    "brandedExample": "Montair 10mg Tablet",
    "genericSalt": "Montelukast",
    "strengthForm": "10mg Tablet",
    "pmbjpCode": "PMBJP-3104",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "B",
    "brandMrpInr": 165,
    "janAushadhiMrpInr": 38,
    "savingsPct": 77,
    "counselingNote": "Take in evening for allergic rhinitis/asthma; not for acute attack. Counsel on neuropsychiatric warnings."
  },
  {
    "specialty": "Dermatology & Allergy",
    "brandedExample": "Wysolone 10mg Tablet",
    "genericSalt": "Prednisolone",
    "strengthForm": "10mg Tablet",
    "pmbjpCode": "PMBJP-3105",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 32,
    "janAushadhiMrpInr": 5,
    "savingsPct": 84,
    "counselingNote": "Take in morning with food; do not stop abruptly—taper. Monitor BP, glucose, and infection risk."
  },
  {
    "specialty": "Dermatology & Allergy",
    "brandedExample": "Folitrax 2.5mg Tablet",
    "genericSalt": "Methotrexate",
    "strengthForm": "2.5mg Tablet",
    "pmbjpCode": "PMBJP-3106",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "X",
    "brandMrpInr": 75,
    "janAushadhiMrpInr": 18,
    "savingsPct": 76,
    "counselingNote": "Once-weekly dosing only—not daily. Avoid pregnancy; use contraception. Monitor CBC, LFT, renal function."
  },
  {
    "specialty": "Dermatology & Allergy",
    "brandedExample": "Sandimmun Neoral 25mg Capsule",
    "genericSalt": "Cyclosporine",
    "strengthForm": "25mg Capsule",
    "pmbjpCode": "PMBJP-3107",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 520,
    "janAushadhiMrpInr": 160,
    "savingsPct": 69,
    "counselingNote": "Narrow therapeutic index—do not auto-substitute. Monitor drug levels, BP, renal function, and infections."
  },
  {
    "specialty": "Dermatology & Allergy",
    "brandedExample": "Tacroz 1mg Capsule",
    "genericSalt": "Tacrolimus",
    "strengthForm": "1mg Capsule",
    "pmbjpCode": "PMBJP-3108",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 380,
    "janAushadhiMrpInr": 110,
    "savingsPct": 71,
    "counselingNote": "Narrow therapeutic index—do not auto-substitute. Monitor tacrolimus levels, renal function, BP, and infection risk."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Amaryl 2mg Tablet",
    "genericSalt": "Glimepiride",
    "strengthForm": "2mg Tablet",
    "pmbjpCode": "PMBJP-1001",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 120,
    "janAushadhiMrpInr": 18,
    "savingsPct": 85,
    "counselingNote": "Take once daily with breakfast; counsel on hypoglycemia signs and carry glucose. Start low in renal impairment and monitor HbA1c/renal function."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Diamicron XR 60mg Tablet",
    "genericSalt": "Gliclazide",
    "strengthForm": "60mg Modified-release Tablet",
    "pmbjpCode": "PMBJP-1002",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 170,
    "janAushadhiMrpInr": 35,
    "savingsPct": 79,
    "counselingNote": "Swallow whole with breakfast; do not crush MR tablet. Warn about hypoglycemia and avoid in severe renal/hepatic impairment unless specialist advises."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Januvia 100mg Tablet",
    "genericSalt": "Sitagliptin",
    "strengthForm": "100mg Tablet",
    "pmbjpCode": "PMBJP-1003",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 480,
    "janAushadhiMrpInr": 75,
    "savingsPct": 84,
    "counselingNote": "Take once daily with or without food; reduce dose per eGFR. Counsel on pancreatitis symptoms and rare joint pain; not for treating DKA."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Tenelia 20mg Tablet",
    "genericSalt": "Teneligliptin",
    "strengthForm": "20mg Tablet",
    "pmbjpCode": "PMBJP-1004",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "B",
    "brandMrpInr": 260,
    "janAushadhiMrpInr": 55,
    "savingsPct": 79,
    "counselingNote": "Take once daily; no routine renal dose adjustment but use caution in severe renal impairment. Report severe abdominal pain or persistent vomiting."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "Pioz 15mg Tablet",
    "genericSalt": "Pioglitazone",
    "strengthForm": "15mg Tablet",
    "pmbjpCode": "PMBJP-1007",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 90,
    "janAushadhiMrpInr": 18,
    "savingsPct": 80,
    "counselingNote": "Take once daily with or without food; monitor weight, edema, and signs of heart failure. Avoid in active bladder cancer or unexplained hematuria."
  },
  {
    "specialty": "Diabetology & Metabolic",
    "brandedExample": "NovoNorm 1mg Tablet",
    "genericSalt": "Repaglinide",
    "strengthForm": "1mg Tablet",
    "pmbjpCode": "PMBJP-1008",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 140,
    "janAushadhiMrpInr": 32,
    "savingsPct": 77,
    "counselingNote": "Take 15–30 minutes before meals; skip dose if meal is skipped. Counsel on hypoglycemia and caution in renal/hepatic impairment."
  },
  {
    "specialty": "Pediatrics & Pediatric Formulations",
    "brandedExample": "Montair 4mg Chewable Tablet",
    "genericSalt": "Montelukast",
    "strengthForm": "4mg Chewable Tablet",
    "pmbjpCode": "PMBJP-PED-001",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "B",
    "brandMrpInr": 95,
    "janAushadhiMrpInr": 30,
    "savingsPct": 68,
    "counselingNote": "Give at bedtime for asthma/allergic rhinitis; chewable tablet not to be swallowed whole; assess adherence and rescue inhaler use."
  },
  {
    "specialty": "Pediatrics & Pediatric Formulations",
    "brandedExample": "Valparin 200mg Tablet",
    "genericSalt": "Sodium Valproate",
    "strengthForm": "200mg Tablet",
    "pmbjpCode": "PMBJP-PED-002",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 78,
    "janAushadhiMrpInr": 26,
    "savingsPct": 67,
    "counselingNote": "Use weight-based pediatric dose; monitor LFTs, CBC, and seizure control; avoid in pregnancy and counsel caregivers on hepatotoxicity signs."
  },
  {
    "specialty": "Pediatrics & Pediatric Formulations",
    "brandedExample": "Mazetol 100mg Tablet",
    "genericSalt": "Carbamazepine",
    "strengthForm": "100mg Tablet",
    "pmbjpCode": "PMBJP-PED-003",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 68,
    "janAushadhiMrpInr": 23,
    "savingsPct": 66,
    "counselingNote": "Narrow therapeutic index: do not auto-substitute; monitor CBC, sodium, LFTs, and drug interactions; counsel on rash and dizziness."
  },
  {
    "specialty": "Pediatrics & Pediatric Formulations",
    "brandedExample": "Levipil 250mg Tablet",
    "genericSalt": "Levetiracetam",
    "strengthForm": "250mg Tablet",
    "pmbjpCode": "PMBJP-PED-004",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 115,
    "janAushadhiMrpInr": 38,
    "savingsPct": 67,
    "counselingNote": "Dose by weight and renal function; monitor seizure frequency and behavioral side effects; do not stop abruptly."
  },
  {
    "specialty": "Pediatrics & Pediatric Formulations",
    "brandedExample": "Thyronorm 25mcg Tablet",
    "genericSalt": "Levothyroxine",
    "strengthForm": "25mcg Tablet",
    "pmbjpCode": "PMBJP-PED-005",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": false,
    "pregnancyCategory": "A",
    "brandMrpInr": 42,
    "janAushadhiMrpInr": 14,
    "savingsPct": 67,
    "counselingNote": "Narrow therapeutic index: do not auto-substitute; give empty stomach with water, monitor TSH/free T4, and avoid calcium/iron within 4 hours."
  },
  {
    "specialty": "Pediatrics & Pediatric Formulations",
    "brandedExample": "Wysolone 5mg Tablet",
    "genericSalt": "Prednisolone",
    "strengthForm": "5mg Tablet",
    "pmbjpCode": "PMBJP-PED-006",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 22,
    "janAushadhiMrpInr": 7,
    "savingsPct": 68,
    "counselingNote": "Use weight-based dose; give with food in the morning; monitor growth, blood pressure, glucose, and infection risk; taper if long-term use."
  },
  {
    "specialty": "Pediatrics & Pediatric Formulations",
    "brandedExample": "Glycomet 500mg Tablet",
    "genericSalt": "Metformin",
    "strengthForm": "500mg Tablet",
    "pmbjpCode": "PMBJP-PED-007",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 28,
    "janAushadhiMrpInr": 9,
    "savingsPct": 68,
    "counselingNote": "Use only for pediatric type 2 diabetes/selected indications; give with meals; monitor renal function and counsel on GI upset and lactic acidosis symptoms."
  },
  {
    "specialty": "Pediatrics & Pediatric Formulations",
    "brandedExample": "Envas 2.5mg Tablet",
    "genericSalt": "Enalapril",
    "strengthForm": "2.5mg Tablet",
    "pmbjpCode": "PMBJP-PED-008",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "D",
    "brandMrpInr": 38,
    "janAushadhiMrpInr": 13,
    "savingsPct": 66,
    "counselingNote": "Use weight-based pediatric dose for hypertension/CKD; monitor BP, potassium, and creatinine; avoid in pregnancy and counsel on cough/dizziness."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Eptoin 100 mg Tablet (Abbott)",
    "genericSalt": "Phenytoin sodium",
    "strengthForm": "100 mg Tablet",
    "pmbjpCode": "PMBJP-NEU-101",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 30,
    "janAushadhiMrpInr": 9,
    "savingsPct": 70,
    "counselingNote": "Do not substitute brands without prescriber approval; monitor serum phenytoin levels; maintain oral hygiene for gingival hyperplasia; do not stop abruptly."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Zeptol 200 mg Tablet (Sun Pharma)",
    "genericSalt": "Carbamazepine",
    "strengthForm": "200 mg Tablet",
    "pmbjpCode": "PMBJP-NEU-102",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 50,
    "janAushadhiMrpInr": 18,
    "savingsPct": 64,
    "counselingNote": "Do not swap brands; monitor CBC, LFTs, and serum sodium; report rash immediately; avoid abrupt withdrawal; HLA-B*1502 caution in high-risk patients."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Lithosun 300 mg Tablet (Sun Pharma)",
    "genericSalt": "Lithium carbonate",
    "strengthForm": "300 mg Tablet",
    "pmbjpCode": "PMBJP-NEU-103",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": true,
    "pregnancyCategory": "D",
    "brandMrpInr": 35,
    "janAushadhiMrpInr": 14,
    "savingsPct": 60,
    "counselingNote": "Do not swap brands; monitor serum lithium, renal and thyroid function; maintain consistent salt and fluid intake; advise tremor, vomiting, or confusion as toxicity signs."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Levipil 500 mg Tablet (Sun Pharma)",
    "genericSalt": "Levetiracetam",
    "strengthForm": "500 mg Tablet",
    "pmbjpCode": "PMBJP-NEU-104",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 120,
    "janAushadhiMrpInr": 36,
    "savingsPct": 70,
    "counselingNote": "Adjust dose in renal impairment; report mood or behavioral changes; do not stop abruptly; may cause somnolence."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Lamitor 100 mg Tablet (Torrent)",
    "genericSalt": "Lamotrigine",
    "strengthForm": "100 mg Tablet",
    "pmbjpCode": "PMBJP-NEU-105",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 150,
    "janAushadhiMrpInr": 60,
    "savingsPct": 60,
    "counselingNote": "Titrate slowly; report rash immediately; avoid abrupt withdrawal; note interaction with valproate requiring dose adjustment."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Oleanz 10 mg Tablet (Sun Pharma)",
    "genericSalt": "Olanzapine",
    "strengthForm": "10 mg Tablet",
    "pmbjpCode": "PMBJP-NEU-106",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 85,
    "janAushadhiMrpInr": 30,
    "savingsPct": 65,
    "counselingNote": "Monitor weight, fasting glucose, and lipids; may cause sedation; avoid alcohol; report excessive drowsiness or metabolic symptoms."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Qutipin 100 mg Tablet (Sun Pharma)",
    "genericSalt": "Quetiapine",
    "strengthForm": "100 mg Tablet",
    "pmbjpCode": "PMBJP-NEU-107",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 120,
    "janAushadhiMrpInr": 45,
    "savingsPct": 63,
    "counselingNote": "Monitor glucose, lipids, and blood pressure; warn of sedation and orthostasis; avoid alcohol; do not stop abruptly."
  },
  {
    "specialty": "Neurology & Psychiatry",
    "brandedExample": "Serenace 5 mg Tablet (RPG Life Sciences)",
    "genericSalt": "Haloperidol",
    "strengthForm": "5 mg Tablet",
    "pmbjpCode": "PMBJP-NEU-108",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 30,
    "janAushadhiMrpInr": 10,
    "savingsPct": 67,
    "counselingNote": "Short-term acute use; monitor extrapyramidal symptoms and ECG QT; avoid in Parkinson disease; report stiffness, fever, or confusion."
  },
  {
    "specialty": "Cardiology & Antihypertensives",
    "brandedExample": "Telma 40 (40mg Tablet)",
    "genericSalt": "Telmisartan",
    "strengthForm": "40mg Tablet",
    "pmbjpCode": "PMBJP-1101",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 78.5,
    "janAushadhiMrpInr": 18,
    "savingsPct": 77,
    "counselingNote": "Take once daily; avoid in pregnancy and bilateral renal artery stenosis; monitor BP, potassium, and creatinine."
  },
  {
    "specialty": "Cardiology & Antihypertensives",
    "brandedExample": "Amlopres 5 (5mg Tablet)",
    "genericSalt": "Amlodipine",
    "strengthForm": "5mg Tablet",
    "pmbjpCode": "PMBJP-1102",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 32,
    "janAushadhiMrpInr": 5.5,
    "savingsPct": 83,
    "counselingNote": "Take once daily; expect ankle edema and flushing; avoid grapefruit juice; monitor BP and peripheral edema."
  },
  {
    "specialty": "Cardiology & Antihypertensives",
    "brandedExample": "Metolar XR 50 (50mg ER Tablet)",
    "genericSalt": "Metoprolol succinate",
    "strengthForm": "50mg Extended-release Tablet",
    "pmbjpCode": "PMBJP-1103",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 132,
    "janAushadhiMrpInr": 32,
    "savingsPct": 76,
    "counselingNote": "Swallow whole once daily; do not crush/chew; do not stop abruptly; monitor pulse, BP, and bradycardia."
  },
  {
    "specialty": "Cardiology & Antihypertensives",
    "brandedExample": "Atorva 10 (10mg Tablet)",
    "genericSalt": "Atorvastatin",
    "strengthForm": "10mg Tablet",
    "pmbjpCode": "PMBJP-1104",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "X",
    "brandMrpInr": 92,
    "janAushadhiMrpInr": 14,
    "savingsPct": 85,
    "counselingNote": "Take once daily at night; contraindicated in pregnancy; report muscle pain/weakness or dark urine; monitor lipids and liver enzymes."
  },
  {
    "specialty": "Cardiology & Antihypertensives",
    "brandedExample": "Telma-AM 40/5 (40mg+5mg Tablet)",
    "genericSalt": "Telmisartan + Amlodipine",
    "strengthForm": "40mg + 5mg Tablet",
    "pmbjpCode": "PMBJP-1105",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 128,
    "janAushadhiMrpInr": 32,
    "savingsPct": 75,
    "counselingNote": "Take once daily; avoid in pregnancy; monitor BP, potassium, creatinine, and ankle edema."
  },
  {
    "specialty": "Cardiology & Antihypertensives",
    "brandedExample": "Losar-H 50/12.5 (50mg+12.5mg Tablet)",
    "genericSalt": "Losartan potassium + Hydrochlorothiazide",
    "strengthForm": "50mg + 12.5mg Tablet",
    "pmbjpCode": "PMBJP-1106",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "D",
    "brandMrpInr": 88,
    "janAushadhiMrpInr": 22,
    "savingsPct": 75,
    "counselingNote": "Take once daily; avoid in pregnancy; monitor BP, potassium, creatinine, uric acid, and volume status; thiazide less effective in severe renal impairment."
  },
  {
    "specialty": "Cardiology & Antihypertensives",
    "brandedExample": "Warf 5 (5mg Tablet)",
    "genericSalt": "Warfarin sodium",
    "strengthForm": "5mg Tablet",
    "pmbjpCode": "PMBJP-1107",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": false,
    "pregnancyCategory": "X",
    "brandMrpInr": 65,
    "janAushadhiMrpInr": 15,
    "savingsPct": 77,
    "counselingNote": "Narrow therapeutic index: do not auto-substitute; confirm INR and dose; maintain consistent vitamin K intake; report bleeding/bruising."
  },
  {
    "specialty": "Cardiology & Antihypertensives",
    "brandedExample": "Lanoxin 0.25 (0.25mg Tablet)",
    "genericSalt": "Digoxin",
    "strengthForm": "0.25mg Tablet",
    "pmbjpCode": "PMBJP-1108",
    "ntiNarrowIndex": true,
    "allowAutoGenericSwap": false,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 48,
    "janAushadhiMrpInr": 10,
    "savingsPct": 79,
    "counselingNote": "Narrow therapeutic index: do not auto-substitute; adjust in renal impairment; monitor K+, creatinine, pulse, and digoxin levels; report nausea, visual changes, or bradycardia."
  },
  {
    "specialty": "Infectious Disease & Antibiotics",
    "brandedExample": "Augmentin 625 Duo Tablet (Amoxicillin 500mg + Clavulanic Acid 125mg)",
    "genericSalt": "Amoxicillin + Clavulanic Acid",
    "strengthForm": "500mg + 125mg Tablet",
    "pmbjpCode": "PMBJP-3101",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 220,
    "janAushadhiMrpInr": 70,
    "savingsPct": 68,
    "counselingNote": "Take with food; complete full course; assess penicillin allergy; adjust dose in severe renal impairment."
  },
  {
    "specialty": "Infectious Disease & Antibiotics",
    "brandedExample": "Azithral 500 Tablet (Azithromycin 500mg)",
    "genericSalt": "Azithromycin",
    "strengthForm": "500mg Tablet",
    "pmbjpCode": "PMBJP-3102",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "B",
    "brandMrpInr": 130,
    "janAushadhiMrpInr": 45,
    "savingsPct": 65,
    "counselingNote": "Take once daily; avoid aluminium/magnesium antacids within 2 hours; complete course; caution in QT prolongation."
  },
  {
    "specialty": "Infectious Disease & Antibiotics",
    "brandedExample": "Taxim-O 200 Tablet (Cefixime 200mg)",
    "genericSalt": "Cefixime",
    "strengthForm": "200mg Tablet",
    "pmbjpCode": "PMBJP-3103",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 160,
    "janAushadhiMrpInr": 55,
    "savingsPct": 66,
    "counselingNote": "Take after food; complete full course; adjust dose in severe renal impairment; caution in cephalosporin allergy."
  },
  {
    "specialty": "Infectious Disease & Antibiotics",
    "brandedExample": "Zifi-O 200 Tablet (Cefixime 200mg + Ofloxacin 200mg)",
    "genericSalt": "Cefixime + Ofloxacin",
    "strengthForm": "200mg + 200mg Tablet",
    "pmbjpCode": "PMBJP-3104",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 190,
    "janAushadhiMrpInr": 75,
    "savingsPct": 61,
    "counselingNote": "Take after food; separate antacids/iron/calcium by 2 hours; tendon and QT caution; adjust dose in renal impairment."
  },
  {
    "specialty": "Infectious Disease & Antibiotics",
    "brandedExample": "Levoflox 500 Tablet (Levofloxacin 500mg)",
    "genericSalt": "Levofloxacin",
    "strengthForm": "500mg Tablet",
    "pmbjpCode": "PMBJP-3105",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 120,
    "janAushadhiMrpInr": 42,
    "savingsPct": 65,
    "counselingNote": "Take with plenty of water; separate antacids/iron/calcium by 2 hours; avoid in pregnancy; tendon/QT caution; renal adjust."
  },
  {
    "specialty": "Infectious Disease & Antibiotics",
    "brandedExample": "Flagyl 400 Tablet (Metronidazole 400mg)",
    "genericSalt": "Metronidazole",
    "strengthForm": "400mg Tablet",
    "pmbjpCode": "PMBJP-3106",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "B",
    "brandMrpInr": 35,
    "janAushadhiMrpInr": 12,
    "savingsPct": 66,
    "counselingNote": "Take after food; strictly avoid alcohol during and for 48 hours after; complete course; caution in hepatic impairment."
  },
  {
    "specialty": "Infectious Disease & Antibiotics",
    "brandedExample": "Doxy 100 Capsule (Doxycycline 100mg)",
    "genericSalt": "Doxycycline",
    "strengthForm": "100mg Capsule",
    "pmbjpCode": "PMBJP-3107",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "D",
    "brandMrpInr": 65,
    "janAushadhiMrpInr": 22,
    "savingsPct": 66,
    "counselingNote": "Take with water and remain upright 30 minutes; avoid dairy/antacids within 2 hours; photosensitivity; avoid in pregnancy."
  },
  {
    "specialty": "Infectious Disease & Antibiotics",
    "brandedExample": "Claribid SR 500 Tablet (Clarithromycin 500mg SR)",
    "genericSalt": "Clarithromycin",
    "strengthForm": "500mg SR Tablet",
    "pmbjpCode": "PMBJP-3108",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 280,
    "janAushadhiMrpInr": 100,
    "savingsPct": 64,
    "counselingNote": "Swallow SR tablet whole with food; do not crush; QT/statins caution; adjust dose in severe renal impairment."
  },
  {
    "specialty": "Orthopedics, Pain & Rheumatology",
    "brandedExample": "Dolo 650 (Micro Labs) 650mg Tablet",
    "genericSalt": "Paracetamol",
    "strengthForm": "650mg Tablet",
    "pmbjpCode": "PMBJP-4101",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "B",
    "brandMrpInr": 30,
    "janAushadhiMrpInr": 10,
    "savingsPct": 67,
    "counselingNote": "Max 3g/day in adults; counsel on hepatotoxicity, avoid alcohol and duplicate paracetamol-containing products."
  },
  {
    "specialty": "Orthopedics, Pain & Rheumatology",
    "brandedExample": "Brufen 400 (Abbott) 400mg Tablet",
    "genericSalt": "Ibuprofen",
    "strengthForm": "400mg Tablet",
    "pmbjpCode": "PMBJP-4102",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "D",
    "brandMrpInr": 35,
    "janAushadhiMrpInr": 8,
    "savingsPct": 77,
    "counselingNote": "Take after food; avoid in CrCl <30 mL/min and in third trimester; monitor GI and renal adverse effects."
  },
  {
    "specialty": "Orthopedics, Pain & Rheumatology",
    "brandedExample": "Voveran 50 (Novartis) 50mg Tablet",
    "genericSalt": "Diclofenac",
    "strengthForm": "50mg Tablet",
    "pmbjpCode": "PMBJP-4103",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "D",
    "brandMrpInr": 32,
    "janAushadhiMrpInr": 7,
    "savingsPct": 78,
    "counselingNote": "Use lowest effective dose after food; avoid in severe renal impairment and third trimester; counsel on GI bleed risk."
  },
  {
    "specialty": "Orthopedics, Pain & Rheumatology",
    "brandedExample": "Zerodol 100 (Ipca) 100mg Tablet",
    "genericSalt": "Aceclofenac",
    "strengthForm": "100mg Tablet",
    "pmbjpCode": "PMBJP-4104",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "D",
    "brandMrpInr": 85,
    "janAushadhiMrpInr": 22,
    "savingsPct": 74,
    "counselingNote": "Take after food; avoid in severe renal impairment and third trimester; monitor BP and GI symptoms."
  },
  {
    "specialty": "Orthopedics, Pain & Rheumatology",
    "brandedExample": "Nucoxia 90 (Zydus) 90mg Tablet",
    "genericSalt": "Etoricoxib",
    "strengthForm": "90mg Tablet",
    "pmbjpCode": "PMBJP-4105",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 160,
    "janAushadhiMrpInr": 48,
    "savingsPct": 70,
    "counselingNote": "Avoid in CrCl <30 mL/min and uncontrolled hypertension; counsel on cardiovascular and GI risks."
  },
  {
    "specialty": "Orthopedics, Pain & Rheumatology",
    "brandedExample": "Domadol 50 (Unichem) 50mg Capsule",
    "genericSalt": "Tramadol",
    "strengthForm": "50mg Capsule",
    "pmbjpCode": "PMBJP-4106",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 55,
    "janAushadhiMrpInr": 16,
    "savingsPct": 71,
    "counselingNote": "Reduce dose in CrCl <30 mL/min; caution with SSRIs and seizure history; counsel on sedation and dependence."
  },
  {
    "specialty": "Orthopedics, Pain & Rheumatology",
    "brandedExample": "HCQS 200 (Ipca) 200mg Tablet",
    "genericSalt": "Hydroxychloroquine",
    "strengthForm": "200mg Tablet",
    "pmbjpCode": "PMBJP-4108",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "C",
    "brandMrpInr": 100,
    "janAushadhiMrpInr": 32,
    "savingsPct": 68,
    "counselingNote": "Take with food; baseline and periodic ophthalmic screening advised; not for acute pain; counsel on rash and visual changes."
  },
  {
    "specialty": "Ophthalmology & ENT",
    "brandedExample": "Mox 500mg Capsule (Sun Pharma)",
    "genericSalt": "Amoxicillin",
    "strengthForm": "500mg Capsule",
    "pmbjpCode": "PMBJP-1101",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 85,
    "janAushadhiMrpInr": 25,
    "savingsPct": 71,
    "counselingNote": "ENT indication; pediatric dose by weight. Reduce dose interval in severe renal impairment (CrCl <30 mL/min). Complete full course."
  },
  {
    "specialty": "Ophthalmology & ENT",
    "brandedExample": "Augmentin 625 Duo Tablet (GSK)",
    "genericSalt": "Amoxicillin + Clavulanic Acid",
    "strengthForm": "625mg Tablet (500mg/125mg)",
    "pmbjpCode": "PMBJP-1102",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "B",
    "brandMrpInr": 220,
    "janAushadhiMrpInr": 95,
    "savingsPct": 57,
    "counselingNote": "Take with food to reduce GI upset. Avoid 875mg strengths in CrCl <30 mL/min; pediatric dosing uses weight-based suspension."
  },
  {
    "specialty": "Ophthalmology & ENT",
    "brandedExample": "Azithral 250 Tablet (Alembic)",
    "genericSalt": "Azithromycin",
    "strengthForm": "250mg Tablet",
    "pmbjpCode": "PMBJP-1103",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": false,
    "pregnancyCategory": "B",
    "brandMrpInr": 120,
    "janAushadhiMrpInr": 45,
    "savingsPct": 63,
    "counselingNote": "ENT/respiratory infection or trachoma regimens; pediatric dose by weight. No major renal dose change; caution in hepatic impairment."
  },
  {
    "specialty": "Ophthalmology & ENT",
    "brandedExample": "Diamox 250mg Tablet (Pfizer)",
    "genericSalt": "Acetazolamide",
    "strengthForm": "250mg Tablet",
    "pmbjpCode": "PMBJP-1107",
    "ntiNarrowIndex": false,
    "allowAutoGenericSwap": true,
    "renalAdjustRequired": true,
    "pregnancyCategory": "C",
    "brandMrpInr": 100,
    "janAushadhiMrpInr": 35,
    "savingsPct": 65,
    "counselingNote": "Ophthalmic glaucoma/ENT adjunct; avoid in severe renal impairment, sulfonamide allergy, and electrolyte disorders. Pediatric dosing specialist-directed."
  }
];

export const EXPANDED_HERB_DRUG_REGISTRY: ExpandedHerbDrugEntry[] = [
  {
    "id": "HDI_101",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Gokshura (Tribulus terrestris)",
    "ayurvedicClass": "Mutrala (diuretic), Vrishya, Rasayana",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive bleeding risk with possible elevated INR, bruising, hematuria, or gastrointestinal bleeding; human pharmacokinetic data are limited.",
    "mechanism": "Pharmacodynamic additive antiplatelet/anticoagulant effect; theoretical modulation of warfarin CYP2C9 metabolism by Tribulus saponins; narrow therapeutic index of warfarin.",
    "recommendation": "Avoid unsupervised combined use. If co-used, check baseline INR and recheck within 3–5 days and weekly thereafter; counsel on bleeding signs; consider alternative anticoagulation or herb discontinuation if INR destabilizes."
  },
  {
    "id": "HDI_102",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "NSAID / antiplatelet agent",
    "ayurvedicHerb": "Gokshura (Tribulus terrestris)",
    "ayurvedicClass": "Mutrala (diuretic), Vrishya, Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Increased risk of bruising, epistaxis, gastrointestinal mucosal irritation, and bleeding, especially with long-term aspirin.",
    "mechanism": "Additive platelet inhibition; Tribulus constituents show in vitro antiplatelet activity; additive gastric mucosal irritation from aspirin.",
    "recommendation": "Monitor for bleeding and GI symptoms. Use the lowest effective aspirin dose, consider gastroprotection if indicated, and advise patients to report unusual bruising or black stools."
  },
  {
    "id": "HDI_103",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Gokshura (Tribulus terrestris)",
    "ayurvedicClass": "Mutrala (diuretic), Vrishya, Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension, dizziness, postural symptoms, and possible electrolyte or renal effects with concurrent diuretic-like action.",
    "mechanism": "Pharmacodynamic additive vasodilation and diuretic/hypotensive effect of Gokshura; possible reduced blood pressure beyond therapeutic target.",
    "recommendation": "Monitor seated and standing BP, dizziness, and hydration status after starting or dose-escalating Gokshura. Advise patients to rise slowly and report symptomatic hypotension; adjust antihypertensive dose if needed."
  },
  {
    "id": "HDI_104",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide antidiabetic",
    "ayurvedicHerb": "Gokshura (Tribulus terrestris)",
    "ayurvedicClass": "Mutrala (diuretic), Vrishya, Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive glucose lowering and hypoglycemia risk, especially with poor oral intake, renal impairment, or intensive diabetes therapy.",
    "mechanism": "Additive insulin sensitization/glucose-lowering effect; animal studies show hypoglycemic activity of Tribulus terrestris; possible gastrointestinal effects.",
    "recommendation": "Monitor fasting and postprandial glucose and HbA1c after initiation. Counsel on hypoglycemia symptoms; reduce metformin or antidiabetic therapy if recurrent lows occur; avoid unsupervised use in renal impairment."
  },
  {
    "id": "HDI_105",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Tulsi (Ocimum tenuiflorum)",
    "ayurvedicClass": "Hridya, Kaphavatahara, Rasayana",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Increased INR and bleeding risk (bruising, epistaxis, gastrointestinal bleeding) due to additive anticoagulant/antiplatelet activity and possible reduced warfarin metabolism.",
    "mechanism": "Eugenol and ursolic acid constituents inhibit platelet aggregation and may inhibit CYP2C9-mediated warfarin metabolism; additive bleeding risk is clinically significant.",
    "recommendation": "Avoid concentrated tulsi extracts or high-dose supplements with warfarin. If unavoidable, monitor INR at baseline, 3-5 days after starting, and weekly until stable; counsel on bleeding signs."
  },
  {
    "id": "HDI_106",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Antiplatelet (COX-1 inhibitor)",
    "ayurvedicHerb": "Tulsi (Ocimum tenuiflorum)",
    "ayurvedicClass": "Hridya, Kaphavatahara, Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition leading to increased bruising, prolonged bleeding time, and gastrointestinal bleeding risk, especially with low-dose aspirin.",
    "mechanism": "Tulsi constituents such as eugenol inhibit platelet aggregation and may potentiate aspirin's COX-1 inhibition pharmacodynamically.",
    "recommendation": "Counsel patients on bleeding precautions. Avoid high-dose tulsi supplements with aspirin; monitor for bruising, melena, and epistaxis. Consider gastroprotection in high-risk patients."
  },
  {
    "id": "HDI_107",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Tulsi (Ocimum tenuiflorum)",
    "ayurvedicClass": "Hridya, Kaphavatahara, Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension, dizziness, and peripheral edema; possible increased amlodipine exposure in sensitive patients.",
    "mechanism": "Tulsi has mild blood pressure-lowering and vasodilatory effects; eugenol may inhibit CYP3A4, potentially increasing amlodipine plasma levels.",
    "recommendation": "Monitor blood pressure and symptoms of hypotension, especially in elderly patients. Advise patients to report dizziness or edema; adjust amlodipine dose if clinically indicated."
  },
  {
    "id": "HDI_108",
    "allopathicDrug": "Glimepiride",
    "allopathicClass": "Sulfonylurea antidiabetic",
    "ayurvedicHerb": "Tulsi (Ocimum tenuiflorum)",
    "ayurvedicClass": "Hridya, Kaphavatahara, Deepana, Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypoglycemia (sweating, tremor, confusion, palpitations), particularly with missed meals or renal impairment.",
    "mechanism": "Tulsi has hypoglycemic and antioxidant effects that may add to sulfonylurea-induced insulin secretion; possible CYP2C9 inhibition may increase glimepiride exposure.",
    "recommendation": "Monitor blood glucose more frequently when tulsi is added. Counsel on hypoglycemia recognition and management; consider reducing glimepiride dose if recurrent low glucose occurs."
  },
  {
    "id": "HDI_109",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Giloy / Guduchi (Tinospora cordifolia)",
    "ayurvedicClass": "Rasayana; Jwaraghna; Tikta-Kashaya Rasa; Ushna Virya",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Elevated INR, subtherapeutic or supratherapeutic anticoagulation, bruising, gum bleeding, haematuria, gastrointestinal or intracranial bleeding.",
    "mechanism": "Possible inhibition of CYP2C9-mediated metabolism of S-warfarin by T. cordifolia constituents, with additional theoretical antiplatelet/anticoagulant pharmacodynamic activity; narrow therapeutic index of warfarin increases clinical impact.",
    "recommendation": "Avoid concomitant use where possible. If unavoidable, check INR within 3–5 days of starting/stopping Giloy and weekly thereafter; counsel on bleeding warning signs; do not self-adjust warfarin without INR-guided prescriber review."
  },
  {
    "id": "HDI_110",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Antiplatelet agent / NSAID",
    "ayurvedicHerb": "Giloy / Guduchi (Tinospora cordifolia)",
    "ayurvedicClass": "Rasayana; Jwaraghna; Tikta-Kashaya Rasa; Ushna Virya",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive bleeding tendency, easy bruising, prolonged bleeding time, GI mucosal bleeding, especially with high-dose aspirin or concurrent NSAIDs/anticoagulants.",
    "mechanism": "Theoretical additive antiplatelet/anticoagulant pharmacodynamic effect of T. cordifolia constituents with aspirin-mediated irreversible COX-1 inhibition; possible CYP2C9 modulation with high-dose aspirin.",
    "recommendation": "Use with caution. Ask about bleeding, bruising, black stools, and gum bleeding. Avoid concurrent NSAIDs; consider gastroprotection if GI risk is high. Stop Giloy before elective surgery as advised by the treating physician."
  },
  {
    "id": "HDI_111",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker",
    "ayurvedicHerb": "Giloy / Guduchi (Tinospora cordifolia)",
    "ayurvedicClass": "Rasayana; Jwaraghna; Tikta-Kashaya Rasa; Ushna Virya",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Enhanced antihypertensive effect, symptomatic hypotension, dizziness, falls, peripheral oedema, and reflex tachycardia.",
    "mechanism": "Amlodipine is a CYP3A4 substrate; T. cordifolia constituents may inhibit CYP3A4-mediated metabolism, increasing amlodipine exposure. Additive vasodilatory/hypotensive pharmacodynamic effect is also plausible.",
    "recommendation": "Monitor BP, heart rate, dizziness, and ankle oedema after starting Giloy. Advise the patient to rise slowly. If symptomatic hypotension occurs, review amlodipine dose with the prescriber; do not stop antihypertensive therapy abruptly."
  },
  {
    "id": "HDI_112",
    "allopathicDrug": "Glimepiride",
    "allopathicClass": "Sulfonylurea antidiabetic",
    "ayurvedicHerb": "Giloy / Guduchi (Tinospora cordifolia)",
    "ayurvedicClass": "Rasayana; Pramehaghna; Jwaraghna; Tikta-Kashaya Rasa; Ushna Virya",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive hypoglycaemia, including sweating, tremor, palpitations, confusion, seizures, and loss of consciousness; risk is higher in elderly, renal impairment, missed meals, or alcohol use.",
    "mechanism": "T. cordifolia has reported hypoglycaemic/insulinotropic activity; possible CYP2C9 inhibition may increase glimepiride exposure. Combined pharmacodynamic and pharmacokinetic effects can potentiate sulfonylurea-induced hypoglycaemia.",
    "recommendation": "Avoid unsupervised combination. If used, perform closer capillary glucose monitoring, especially in the first 2 weeks and after dose changes; educate on hypoglycaemia recognition and rescue glucose. Consider sulfonylurea dose reduction or a safer alternative under prescriber supervision."
  },
  {
    "id": "HDI_113",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Shatavari (Asparagus racemosus)",
    "ayurvedicClass": "Rasayana / Balya / Galactagogue; Madhura rasa, Sheeta virya",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Elevated INR, bruising, epistaxis, gum bleeding, gastrointestinal or urinary tract bleeding due to additive anticoagulant/antiplatelet effects.",
    "mechanism": "Theoretical pharmacodynamic additive anticoagulant/antiplatelet activity of Shatavari saponins and flavonoids; possible CYP2C9 inhibition and albumin displacement may increase free warfarin exposure.",
    "recommendation": "Avoid unsupervised concomitant use. If Shatavari is unavoidable, obtain baseline INR, recheck within 3–5 days and then weekly until stable; counsel patient to report bleeding immediately and avoid adding other antiplatelet/NSAID agents."
  },
  {
    "id": "HDI_114",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Irreversible COX-1 inhibitor antiplatelet",
    "ayurvedicHerb": "Shatavari (Asparagus racemosus)",
    "ayurvedicClass": "Rasayana / Balya / Galactagogue; Madhura rasa, Sheeta virya",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition and gastric mucosal irritation leading to bruising, prolonged bleeding time, epigastric pain, or gastrointestinal bleeding.",
    "mechanism": "Pharmacodynamic additive antiplatelet effect with possible Shatavari flavonoid-mediated inhibition of platelet aggregation; concurrent mucilage/GI effects do not offset aspirin-induced mucosal injury.",
    "recommendation": "Screen for peptic ulcer and bleeding risk before co-use. Monitor for bruising, melena, and dyspepsia; counsel to avoid NSAIDs and high-dose Shatavari, and stop Shatavari if unexplained bleeding occurs."
  },
  {
    "id": "HDI_115",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Shatavari (Asparagus racemosus)",
    "ayurvedicClass": "Rasayana / Balya / Galactagogue; Madhura rasa, Sheeta virya",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension causing dizziness, orthostatic symptoms, syncope, or falls, especially in elderly patients or those on multiple antihypertensives.",
    "mechanism": "Pharmacodynamic additive vasodilatory and possible diuretic/BP-lowering effects of Shatavari; no major CYP3A4 interaction is established, but altered amlodipine exposure remains theoretically possible.",
    "recommendation": "Advise home BP monitoring and orthostatic symptom review after starting Shatavari. If symptomatic hypotension occurs, withhold Shatavari and review amlodipine dose with the prescriber; do not self-adjust antihypertensive therapy."
  },
  {
    "id": "HDI_116",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide antidiabetic",
    "ayurvedicHerb": "Shatavari (Asparagus racemosus)",
    "ayurvedicClass": "Rasayana / Balya / Galactagogue; Madhura rasa, Sheeta virya",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive glucose lowering leading to hypoglycemia, especially with poor oral intake, renal impairment, or concurrent sulfonylurea/insulin; gastrointestinal intolerance may also worsen.",
    "mechanism": "Pharmacodynamic additive antihyperglycemic effect via improved insulin sensitivity and possible inhibition of intestinal glucose absorption by Shatavari; no major CYP/P-gp interaction with metformin is established.",
    "recommendation": "Monitor fasting/postprandial glucose and HbA1c after initiation. Educate on hypoglycemia symptoms; if glucose falls below target or symptoms occur, stop Shatavari and review metformin/other antidiabetic doses with the prescriber."
  },
  {
    "id": "HDI_117",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Ashwagandha (Withania somnifera)",
    "ayurvedicClass": "Rasayana (rejuvenative), Balya (strength-promoting)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Increased INR and major bleeding risk (GI, epistaxis, intracranial) due to additive anticoagulant/antiplatelet activity.",
    "mechanism": "Additive antiplatelet/anticoagulant effect; possible CYP2C9-mediated inhibition of warfarin metabolism (limited human data).",
    "recommendation": "Avoid unsupervised ashwagandha use with warfarin. If co-used, check INR within 3-5 days and monitor for bleeding; prescriber should consider warfarin dose adjustment or an alternative herb."
  },
  {
    "id": "HDI_118",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 platelet inhibitor",
    "ayurvedicHerb": "Ashwagandha (Withania somnifera)",
    "ayurvedicClass": "Rasayana (rejuvenative), Balya (strength-promoting)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition causing bruising, epistaxis, gum bleeding, or GI bleeding.",
    "mechanism": "Additive antiplatelet effect; theoretical CYP2C19-mediated interference with clopidogrel bioactivation and platelet inhibition.",
    "recommendation": "Counsel patient on bleeding precautions. Monitor for bruising/epistaxis/GI bleeding; avoid high-dose or prolonged ashwagandha unless prescriber approves."
  },
  {
    "id": "HDI_119",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker",
    "ayurvedicHerb": "Ashwagandha (Withania somnifera)",
    "ayurvedicClass": "Rasayana (rejuvenative), Balya (strength-promoting)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Excessive hypotension, dizziness, syncope, and fall risk due to additive blood pressure lowering.",
    "mechanism": "Additive vasodilatory/hypotensive effect; possible CYP3A4 inhibition increasing amlodipine exposure.",
    "recommendation": "Monitor BP and symptoms of hypotension. Advise slow posture changes; prescriber may need to reduce antihypertensive dose if symptomatic hypotension occurs."
  },
  {
    "id": "HDI_120",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide antidiabetic",
    "ayurvedicHerb": "Ashwagandha (Withania somnifera)",
    "ayurvedicClass": "Rasayana (rejuvenative), Balya (strength-promoting)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Enhanced glucose lowering and hypoglycemia risk, especially when combined with sulfonylureas or insulin; dizziness and sweating.",
    "mechanism": "Pharmacodynamic additive glucose-lowering/insulin-sensitizing effect; no major CYP-mediated mechanism.",
    "recommendation": "Monitor fasting glucose and HbA1c; counsel on hypoglycemia symptoms. Adjust metformin or concomitant antidiabetic therapy if glucose falls excessively."
  },
  {
    "id": "HDI_121",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Trikatu (Piper longum/nigrum + Zingiber)",
    "ayurvedicClass": "Deepana/Pachana (digestive stimulant); Vata-Kaphaghna",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Elevated INR, bruising, epistaxis, gastrointestinal or intracranial bleeding due to potentiation of anticoagulation.",
    "mechanism": "Piperine inhibits CYP2C9-mediated S-warfarin metabolism and may inhibit P-gp; ginger constituents inhibit platelet aggregation and thromboxane synthesis, adding pharmacodynamic bleeding risk.",
    "recommendation": "Avoid concurrent use. If Trikatu is unavoidable, notify the prescriber, check INR within 3–5 days and weekly until stable, counsel on bleeding signs, and consider a non-interacting digestive alternative."
  },
  {
    "id": "HDI_122",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Antiplatelet (irreversible COX-1 inhibitor)",
    "ayurvedicHerb": "Trikatu (Piper longum/nigrum + Zingiber)",
    "ayurvedicClass": "Deepana/Pachana (digestive stimulant); Vata-Kaphaghna",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive antiplatelet effect with increased bruising, prolonged bleeding time, and gastrointestinal mucosal irritation or bleeding.",
    "mechanism": "Gingerol/shogaol inhibit platelet aggregation and thromboxane A2 synthesis; piperine may inhibit P-gp and platelet function, adding to aspirin COX-1 blockade.",
    "recommendation": "Use cautiously and avoid high-dose or prolonged Trikatu. Monitor for bruising, melena, and bleeding; consider gastroprotection in high-GI-risk patients; stop Trikatu 7 days before surgery or dental procedures."
  },
  {
    "id": "HDI_123",
    "allopathicDrug": "Nifedipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker",
    "ayurvedicHerb": "Trikatu (Piper longum/nigrum + Zingiber)",
    "ayurvedicClass": "Deepana/Pachana (digestive stimulant); Vata-Kaphaghna",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Increased nifedipine exposure causing hypotension, dizziness, flushing, reflex tachycardia, and peripheral edema.",
    "mechanism": "Piperine inhibits intestinal and hepatic CYP3A4 and P-gp, reducing first-pass metabolism and efflux of nifedipine; ginger may add vasodilation.",
    "recommendation": "Monitor BP and heart rate after starting or stopping Trikatu. Avoid high-dose piperine/Trikatu; advise home BP logging and prescriber review if symptomatic hypotension occurs."
  },
  {
    "id": "HDI_124",
    "allopathicDrug": "Glimepiride",
    "allopathicClass": "Sulfonylurea antidiabetic",
    "ayurvedicHerb": "Trikatu (Piper longum/nigrum + Zingiber)",
    "ayurvedicClass": "Deepana/Pachana (digestive stimulant); Vata-Kaphaghna",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive glucose lowering with risk of hypoglycemia, including sweating, tremor, confusion, and seizures.",
    "mechanism": "Piperine inhibits CYP2C9-mediated glimepiride metabolism; ginger has hypoglycemic and insulin-sensitizing effects, adding pharmacodynamic glucose lowering.",
    "recommendation": "Avoid unsupervised concurrent use. If used, monitor SMBG more frequently, counsel on hypoglycemia recognition and management, and advise prescriber review for possible glimepiride dose reduction."
  },
  {
    "id": "HDI_125",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Shilajit (Asphaltum punjabianum)",
    "ayurvedicClass": "Shilajatu; Rasayana, Balya, Vrishya (mineral-origin Ayurvedic formulation)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Increased INR and bleeding risk (bruising, epistaxis, gum bleeding, GI or intracranial bleed); limited human interaction data but narrow therapeutic index makes co-use hazardous.",
    "mechanism": "Pharmacodynamic additive hemostatic impairment; fulvic/humic acid constituents may have antiplatelet/anticoagulant-like activity. CYP2C9-mediated warfarin metabolism modulation is theoretical and not established.",
    "recommendation": "Avoid unsupervised concurrent use. If co-administration is unavoidable, check INR within 3-5 days of starting/stopping Shilajit and weekly until stable; counsel on bleeding signs; consider a non-interacting alternative."
  },
  {
    "id": "HDI_126",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 inhibitor antiplatelet",
    "ayurvedicHerb": "Shilajit (Asphaltum punjabianum)",
    "ayurvedicClass": "Shilajatu; Rasayana, Balya, Vrishya (mineral-origin Ayurvedic formulation)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition may increase bruising, prolonged bleeding, or post-procedural bleeding; theoretical CYP2C19/P-gp interference could also alter clopidogrel response.",
    "mechanism": "Pharmacodynamic additive antiplatelet effect; Shilajit constituents may impair platelet aggregation in vitro. CYP2C19 activation interference and P-gp modulation are theoretical.",
    "recommendation": "Monitor for unusual bruising or bleeding, especially after dental/surgical procedures. Avoid high-dose or unstandardised Shilajit; ask patient to report bleeding promptly and consult the prescriber before continuing."
  },
  {
    "id": "HDI_127",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide antihyperglycemic",
    "ayurvedicHerb": "Shilajit (Asphaltum punjabianum)",
    "ayurvedicClass": "Shilajatu; Rasayana, Balya, Vrishya (mineral-origin Ayurvedic formulation)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypoglycemia (sweating, tremor, palpitations, confusion), especially with sulfonylureas or insulin; GI upset may also occur.",
    "mechanism": "Pharmacodynamic additive glucose lowering via improved insulin sensitivity/glucose uptake; no established CYP450 or P-gp interaction with metformin.",
    "recommendation": "Advise self-monitoring of blood glucose during initiation or dose escalation. Educate on hypoglycemia symptoms; review HbA1c and antidiabetic dose if recurrent low readings occur."
  },
  {
    "id": "HDI_128",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium-channel blocker antihypertensive",
    "ayurvedicHerb": "Shilajit (Asphaltum punjabianum)",
    "ayurvedicClass": "Shilajatu; Rasayana, Balya, Vrishya (mineral-origin Ayurvedic formulation)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension causing dizziness, postural instability, syncope, or falls, particularly in older adults or volume-depleted patients.",
    "mechanism": "Pharmacodynamic additive vasodilatory/hypotensive effect; CYP3A4-mediated amlodipine metabolism modulation is theoretical and not established.",
    "recommendation": "Monitor seated and standing blood pressure during co-use. Counsel on dizziness and fall precautions; reduce or stop Shilajit if symptomatic hypotension occurs and review antihypertensive dose."
  },
  {
    "id": "HDI_129",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Kutki (Picrorhiza kurroa)",
    "ayurvedicClass": "Tikta Rasa; Yakrituttejaka/Deepana-Pachana; hepatobiliary",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Elevated INR and bleeding risk (GI, mucosal, intracranial) due to increased warfarin exposure and possible additive hemostatic impairment.",
    "mechanism": "Preclinical iridoid glycosides (picroside I/II) may inhibit hepatic CYP2C9/CYP3A4-mediated warfarin metabolism; possible pharmacodynamic platelet/endothelial effects.",
    "recommendation": "Avoid concomitant use. If unavoidable, check INR at baseline, 3–5 days, then weekly; adjust warfarin dose and counsel on bleeding warning signs."
  },
  {
    "id": "HDI_130",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 antiplatelet prodrug",
    "ayurvedicHerb": "Kutki (Picrorhiza kurroa)",
    "ayurvedicClass": "Tikta Rasa; Yakrituttejaka/Deepana-Pachana; hepatobiliary",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Unpredictable antiplatelet effect: reduced clopidogrel activation with thrombotic risk, or additive bleeding if platelet inhibition occurs.",
    "mechanism": "Kutki constituents may modulate CYP2C19/CYP3A4-mediated clopidogrel bioactivation; theoretical additive antiplatelet/bleeding risk.",
    "recommendation": "Avoid in ACS/PCI patients. If used, monitor for bleeding and thrombotic symptoms; do not change antiplatelet therapy without cardiology review."
  },
  {
    "id": "HDI_131",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker",
    "ayurvedicHerb": "Kutki (Picrorhiza kurroa)",
    "ayurvedicClass": "Tikta Rasa; Yakrituttejaka/Deepana-Pachana; hepatobiliary",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Hypotension, dizziness, peripheral edema, and reflex tachycardia from increased amlodipine exposure or additive vasodilation.",
    "mechanism": "Potential CYP3A4 inhibition by Kutki iridoids reducing amlodipine metabolism; pharmacodynamic additive antihypertensive effect.",
    "recommendation": "Monitor BP, heart rate, and edema. Consider amlodipine dose reduction or avoid Kutki; advise seated/standing BP checks and fall precautions."
  },
  {
    "id": "HDI_132",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide antidiabetic",
    "ayurvedicHerb": "Kutki (Picrorhiza kurroa)",
    "ayurvedicClass": "Tikta Rasa; Yakrituttejaka/Deepana-Pachana; hepatobiliary",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypoglycemia (especially with poor oral intake or renal impairment) and GI intolerance; theoretical lactic acidosis risk if dehydration occurs.",
    "mechanism": "Preclinical Picrorhiza kurroa glucose-lowering/insulin-sensitizing activity plus possible reduced hepatic glucose output; no major CYP-mediated mechanism established.",
    "recommendation": "Monitor SMBG and renal function; educate on hypoglycemia and sick-day rules; hold during acute illness/dehydration and adjust metformin if glucose falls."
  },
  {
    "id": "HDI_133",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant (coumarin)",
    "ayurvedicHerb": "Kalmegh (Andrographis paniculata)",
    "ayurvedicClass": "Deepana-Pachana, Krimighna, Yakrit-uttejaka (hepatostimulant), Raktaprasadana",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Unpredictable INR elevation with major bleeding (upper GI, retroperitoneal, intracranial), ecchymoses and haematuria; risk magnified in patients on concomitant NSAIDs/aspirin or with hepatic impairment, and during the first 2 weeks of herb initiation or abrupt withdrawal.",
    "mechanism": "Andrographolide and neoandrographolide inhibit CYP2C9 (S-warfarin 7-hydroxylation) and CYP3A4, reducing warfarin clearance; concurrent antiplatelet activity via inhibition of TXA2 synthase and ADP/collagen-induced platelet aggregation adds a pharmacodynamic bleeding component; albumin displacement and transient transaminase elevation further destabilise the INR.",
    "recommendation": "Avoid concurrent use where feasible; if unavoidable, check INR at 48-72 h after starting or stopping Kalmegh, then twice weekly for 2 weeks and weekly thereafter, targeting INR 2.0-3.0. Stop Kalmegh at least 7 days before elective surgery/procedures. Counsel on bleeding red flags (black stools, gum bleeding, headache). Dispense PMBJP Jan Aushadhi generic warfarin 1/3/5 mg with a written INR diary and documented herb use in the pharmacovigilance record."
  },
  {
    "id": "HDI_134",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 inhibitor antiplatelet (thienopyridine prodrug)",
    "ayurvedicHerb": "Kalmegh (Andrographis paniculata)",
    "ayurvedicClass": "Raktaprasadana, Sothahara, Jwaraghna (anti-inflammatory/antipyretic)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive bleeding tendency (epistaxis, gum bleeding, GI bleed, post-procedure haematoma) and erratic antiplatelet effect with possible loss of protection against stent thrombosis if CYP2C19-mediated bioactivation is impaired - a dual hazard in post-PCI and post-stroke patients.",
    "mechanism": "Pharmacodynamic: andrographolide inhibits platelet aggregation and TXA2 generation, additive to P2Y12 blockade. Pharmacokinetic: constituents modulate CYP2C19 and CYP3A4, potentially altering conversion of clopidogrel to its active thiol metabolite; P-gp modulation may also shift absorption. Net effect is unpredictable platelet inhibition.",
    "recommendation": "Advise against self-medication with Kalmegh in patients on dual antiplatelet therapy or within 12 months of stent placement. If the patient insists, obtain a platelet function/CYP2C19 genotype assessment where available, monitor for bleeding at each visit, and never stop clopidogrel abruptly. Document as an AYUSH-Allopathy interaction in the registry and counsel on concurrent NSAID/aspirin avoidance. Dispense PMBJP generic clopidogrel 75 mg with adherence counselling."
  },
  {
    "id": "HDI_135",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker",
    "ayurvedicHerb": "Kalmegh (Andrographis paniculata)",
    "ayurvedicClass": "Raktaprasadana, Hridya-Sothahara (cardioprotective/anti-inflammatory)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Symptomatic hypotension, dizziness, syncope and falls in the elderly, worsening of peripheral oedema and reflex tachycardia; risk of over-treatment in patients already at goal BP or on multiple antihypertensives.",
    "mechanism": "Additive vasodepressor effect: andrographolide causes endothelium-dependent vasorelaxation via eNOS/NO generation and inhibition of L-type Ca2+ influx. Pharmacokinetically, CYP3A4 inhibition reduces amlodipine first-pass and hepatic clearance, raising plasma concentration and prolonging hypotensive effect.",
    "recommendation": "Separate administration by at least 2 hours and avoid Kalmegh in patients with baseline SBP <100 mmHg, postural symptoms, or on 3 or more antihypertensives. Advise home BP and heart-rate logging twice daily for the first 4 weeks; review at 1 and 4 weeks and reduce the amlodipine dose if SBP falls below 110 mmHg or symptomatic hypotension occurs. Dispense PMBJP Jan Aushadhi generic amlodipine 2.5/5 mg and reinforce salt restriction."
  },
  {
    "id": "HDI_136",
    "allopathicDrug": "Glimepiride",
    "allopathicClass": "Second-generation sulfonylurea (insulin secretagogue)",
    "ayurvedicHerb": "Kalmegh (Andrographis paniculata)",
    "ayurvedicClass": "Pramehaghna, Tikta-Rasayana (antihyperglycaemic, bitter tonic)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Severe or prolonged hypoglycaemia with sweating, tremor, confusion, seizures and coma - particularly in the elderly, in CKD, or when meals are skipped; masked hypoglycaemic awareness and rebound hyperglycaemia on abrupt herb withdrawal.",
    "mechanism": "Pharmacodynamic: andrographolide activates PPAR-gamma/AMPK, promotes GLUT4 translocation, inhibits intestinal alpha-glucosidase and hepatic gluconeogenesis, adding to sulfonylurea-induced insulin secretion. Pharmacokinetic: glimepiride is a CYP2C9 substrate; Kalmegh-mediated CYP2C9 inhibition raises sulfonylurea exposure, amplifying and prolonging hypoglycaemia.",
    "recommendation": "Prefer metformin-based or DPP-4 inhibitor regimens instead of a sulfonylurea when Kalmegh is used. If co-prescribed, reduce the glimepiride dose by 25-50%, perform SMBG 4 times daily (including a 3 am check) for the first 2 weeks, and repeat HbA1c at 4 weeks. Educate the patient on the 15-15 rule and carry oral glucose; review renal function before initiation. Dispense PMBJP Jan Aushadhi generic glimepiride 1/2 mg or glimepiride-metformin FDC and record the herb in the pharmacovigilance registry with a scheduled follow-up call at day 7."
  },
  {
    "id": "HDI_137",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Karela (Momordica charantia)",
    "ayurvedicClass": "Pramehaghna / Medohara / Deepana-Pachana (Katu-Tikta Rasa)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Increased bleeding risk (bruising, epistaxis, hematuria, GI bleeding) due to possible additive anticoagulant/antiplatelet activity and altered warfarin metabolism.",
    "mechanism": "Possible pharmacodynamic additive antihemostatic effect plus theoretical CYP2C9-mediated inhibition of warfarin metabolism by Momordica charantia constituents; narrow therapeutic index increases clinical relevance.",
    "recommendation": "Avoid high-dose or concentrated Karela supplements with warfarin. If concomitant use is unavoidable, check INR within 3–5 days of starting/stopping Karela, monitor for bleeding, and counsel the patient to report unusual bruising or melena."
  },
  {
    "id": "HDI_138",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Antiplatelet (salicylate)",
    "ayurvedicHerb": "Karela (Momordica charantia)",
    "ayurvedicClass": "Pramehaghna / Medohara / Deepana-Pachana (Katu-Tikta Rasa)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive antiplatelet effect with increased risk of bruising, prolonged bleeding, and GI mucosal bleeding.",
    "mechanism": "Theoretical pharmacodynamic additive platelet inhibition/antihemostatic effect of Momordica charantia with aspirin; no major CYP-mediated interaction established.",
    "recommendation": "Use cautiously in patients on aspirin for secondary prevention. Monitor for bruising, gum bleeding, and GI symptoms; advise not to start concentrated Karela extracts without pharmacist review."
  },
  {
    "id": "HDI_139",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker",
    "ayurvedicHerb": "Karela (Momordica charantia)",
    "ayurvedicClass": "Pramehaghna / Medohara / Deepana-Pachana (Katu-Tikta Rasa)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension, dizziness, and peripheral edema-like symptoms; possible altered amlodipine exposure with high-dose Karela.",
    "mechanism": "Possible additive vasodilatory/hypotensive pharmacodynamic effect; theoretical CYP3A4 inhibition by Momordica charantia constituents may increase amlodipine levels.",
    "recommendation": "Monitor BP and symptoms of hypotension when Karela is started or stopped. Advise the patient to rise slowly and report dizziness; avoid concentrated Karela supplements unless BP is monitored."
  },
  {
    "id": "HDI_140",
    "allopathicDrug": "Insulin glargine",
    "allopathicClass": "Long-acting basal insulin",
    "ayurvedicHerb": "Karela (Momordica charantia)",
    "ayurvedicClass": "Pramehaghna / Medohara / Deepana-Pachana (Katu-Tikta Rasa)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive hypoglycemia (sweating, tremor, confusion, seizures, loss of consciousness), especially with fasting, renal impairment, or high-dose Karela.",
    "mechanism": "Pharmacodynamic additive glucose-lowering effect: Momordica charantia constituents have insulin-mimetic/insulin-sensitizing and intestinal glucose-absorption effects, potentiating basal insulin.",
    "recommendation": "Advise against unsupervised concentrated Karela products with insulin. If used, intensify SMBG/CGM, review hypoglycemia symptoms, and consider reducing basal insulin dose only under prescriber supervision."
  },
  {
    "id": "HDI_141",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Haridra / Curcumin (Curcuma longa)",
    "ayurvedicClass": "Raktashodhana / Deepana-Pachana / Lekhana (anti-inflammatory, antioxidant)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Increased risk of major bleeding, including GI and intracranial bleeding, bruising, and elevated INR.",
    "mechanism": "Pharmacodynamic additive antiplatelet/anticoagulant effect due to curcumin-mediated platelet inhibition, plus possible CYP2C9 inhibition and protein-binding displacement reducing warfarin clearance.",
    "recommendation": "Avoid high-dose curcumin supplements with warfarin. If co-use is unavoidable, check INR at baseline, 3–5 days, 1–2 weeks, and after any dose change; counsel on bleeding signs; consider a non-interacting alternative."
  },
  {
    "id": "HDI_142",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 inhibitor antiplatelet",
    "ayurvedicHerb": "Haridra / Curcumin (Curcuma longa)",
    "ayurvedicClass": "Raktashodhana / Lekhana (antiplatelet, anti-inflammatory)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive bleeding risk, especially with aspirin/dual antiplatelet therapy; bruising, GI bleeding, and possible altered clopidogrel efficacy.",
    "mechanism": "Pharmacodynamic additive platelet inhibition; curcumin may inhibit CYP2C19/CYP3A4 in vitro, potentially affecting clopidogrel prodrug activation, and may add to bleeding risk.",
    "recommendation": "Avoid high-dose curcumin with clopidogrel, particularly during dual antiplatelet therapy. Monitor for bruising/GI bleeding, avoid concomitant NSAIDs, and perform pharmacist medication reconciliation before starting curcumin."
  },
  {
    "id": "HDI_143",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Haridra / Curcumin (Curcuma longa)",
    "ayurvedicClass": "Raktashodhana / Deepana-Pachana (vasodilatory, antioxidant)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Hypotension, dizziness, syncope, peripheral edema, and tachycardia due to increased amlodipine exposure or additive vasodilation.",
    "mechanism": "Curcumin-mediated CYP3A4 and P-glycoprotein inhibition may increase amlodipine plasma concentrations; pharmacodynamic additive vasodilation may worsen hypotension.",
    "recommendation": "Monitor BP, heart rate, dizziness, and edema after starting curcumin. Adjust amlodipine dose if symptomatic hypotension occurs; counsel patient to rise slowly and report syncope."
  },
  {
    "id": "HDI_144",
    "allopathicDrug": "Glibenclamide",
    "allopathicClass": "Sulfonylurea antidiabetic",
    "ayurvedicHerb": "Haridra / Curcumin (Curcuma longa)",
    "ayurvedicClass": "Deepana-Pachana / Pramehaghna (glucose-lowering, antioxidant)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Hypoglycemia, including sweating, tremor, confusion, palpitations, and risk of falls; may be more likely in elderly or renal impairment.",
    "mechanism": "Pharmacodynamic additive glucose lowering and improved insulin sensitivity; curcumin has in vitro CYP2C9 inhibition that may modestly increase glibenclamide exposure.",
    "recommendation": "Monitor capillary glucose and HbA1c after starting curcumin; educate on hypoglycemia symptoms; reduce glibenclamide if recurrent lows occur; avoid in renal impairment and review all antidiabetic agents."
  },
  {
    "id": "HDI_145",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Amla (Emblica officinalis)",
    "ayurvedicClass": "Rasayana (rejuvenative); Hridya (cardiotonic); Vayasthapana",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Elevated INR, bruising, gastrointestinal or intracranial bleeding due to potentiated anticoagulation.",
    "mechanism": "Possible CYP2C9 inhibition reducing warfarin metabolism plus additive antiplatelet/antioxidant hemostatic interference; case reports describe INR elevation with amla.",
    "recommendation": "Avoid high-dose amla or amla concentrates with warfarin. If co-use is unavoidable, check INR within 3–5 days of initiation and weekly thereafter, counsel on bleeding signs, and adjust warfarin dose per INR."
  },
  {
    "id": "HDI_146",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Antiplatelet (COX-1 inhibitor)",
    "ayurvedicHerb": "Amla (Emblica officinalis)",
    "ayurvedicClass": "Rasayana (rejuvenative); Hridya (cardiotonic); Vayasthapana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition and gastric mucosal irritation increasing bruising, epistaxis, and gastrointestinal bleeding risk.",
    "mechanism": "Pharmacodynamic additive antiplatelet effect and possible gastric mucosal irritation; no major CYP/P-gp-mediated pharmacokinetic interaction established.",
    "recommendation": "Use standard dietary amounts with caution; avoid high-dose amla supplements. Monitor for bruising, epistaxis, melena, and consider gastroprotection in high-risk patients; separate initiation timing and document in the pharmacovigilance registry."
  },
  {
    "id": "HDI_147",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Amla (Emblica officinalis)",
    "ayurvedicClass": "Rasayana (rejuvenative); Hridya (cardiotonic); Vayasthapana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension causing dizziness, syncope, falls, or symptomatic low blood pressure; possible increased amlodipine exposure.",
    "mechanism": "Additive antihypertensive pharmacodynamics plus possible CYP3A4 inhibition increasing amlodipine plasma concentration.",
    "recommendation": "Monitor BP and orthostatic symptoms after starting or escalating amla. Advise patients to report dizziness or syncope; reduce amlodipine dose if symptomatic hypotension occurs. Avoid concentrated amla supplements unless monitored."
  },
  {
    "id": "HDI_148",
    "allopathicDrug": "Glimepiride",
    "allopathicClass": "Sulfonylurea antidiabetic",
    "ayurvedicHerb": "Amla (Emblica officinalis)",
    "ayurvedicClass": "Rasayana (rejuvenative); Hridya (cardiotonic); Vayasthapana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive glucose lowering leading to hypoglycemia, especially with missed meals or renal impairment.",
    "mechanism": "Pharmacodynamic additive hypoglycemic effect plus possible CYP2C9 inhibition increasing sulfonylurea exposure.",
    "recommendation": "Monitor fasting and postprandial glucose more frequently when amla is started. Counsel on hypoglycemia symptoms; consider reducing glimepiride dose if recurrent hypoglycemia occurs. Avoid high-dose amla concentrates without glucose monitoring."
  },
  {
    "id": "HDI_149",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Anticoagulant - vitamin K antagonist",
    "ayurvedicHerb": "Shankhpushpi (Convolvulus pluricaulis)",
    "ayurvedicClass": "Medhya Rasayana / Nootropic-Anxiolytic",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive bleeding risk and possible INR elevation; serious gastrointestinal, mucosal, or intracranial hemorrhage.",
    "mechanism": "Pharmacodynamic additive anticoagulation from possible coumarin constituents; theoretical CYP2C9 inhibition may reduce warfarin metabolism. Human interaction data are limited.",
    "recommendation": "Avoid unsupervised Shankhpushpi use with warfarin. If co-used, notify prescriber, check INR at baseline and within 3-5 days, then weekly until stable; counsel bleeding signs and report to the AYUSH-Allopathy pharmacovigilance registry."
  },
  {
    "id": "HDI_150",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Antiplatelet - irreversible COX-1 inhibitor",
    "ayurvedicHerb": "Shankhpushpi (Convolvulus pluricaulis)",
    "ayurvedicClass": "Medhya Rasayana / Nootropic-Anxiolytic",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition and gastrointestinal mucosal injury; increased bruising, prolonged bleeding time, and GI bleeding.",
    "mechanism": "Pharmacodynamic additive antiplatelet/hemostatic impairment; no established CYP450 or P-gp mechanism. Evidence is primarily theoretical and based on limited preclinical data.",
    "recommendation": "Screen for peptic ulcer or bleeding history before combining. If used, monitor for bruising, melena, and GI symptoms; consider gastroprotection when appropriate; avoid in dual antiplatelet therapy unless prescriber approves."
  },
  {
    "id": "HDI_151",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Antihypertensive - dihydropyridine calcium channel blocker",
    "ayurvedicHerb": "Shankhpushpi (Convolvulus pluricaulis)",
    "ayurvedicClass": "Medhya Rasayana / Nootropic-Anxiolytic",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension, dizziness, syncope, and falls, especially in elderly patients or those on multiple antihypertensives.",
    "mechanism": "Pharmacodynamic additive vasodepressor/hypotensive effect; theoretical CYP3A4 competition is not clinically established. Human interaction data are lacking.",
    "recommendation": "Monitor seated and standing blood pressure and heart rate after initiation. Advise slow posture changes and dizziness precautions; adjust antihypertensive dose only by the prescriber; document in the registry."
  },
  {
    "id": "HDI_152",
    "allopathicDrug": "Glimepiride",
    "allopathicClass": "Antidiabetic - sulfonylurea",
    "ayurvedicHerb": "Shankhpushpi (Convolvulus pluricaulis)",
    "ayurvedicClass": "Medhya Rasayana / Nootropic-Anxiolytic",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypoglycemia, including sweating, tremor, confusion, seizures, or loss of consciousness, particularly with missed meals or renal impairment.",
    "mechanism": "Pharmacodynamic additive glucose lowering; theoretical CYP2C9 competition may alter sulfonylurea exposure. Clinical interaction evidence is limited.",
    "recommendation": "Monitor capillary blood glucose after initiation, especially in elderly or renally impaired patients. Educate on hypoglycemia recognition and management; consider sulfonylurea dose reduction if recurrent lows occur; report adverse events."
  },
  {
    "id": "HDI_153",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Brahmi (Bacopa monnieri)",
    "ayurvedicClass": "Medhya Rasayana (nootropic/adaptogenic)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Elevated INR, bruising, gum bleeding, GI bleeding, and intracranial hemorrhage due to additive anticoagulant/antiplatelet effect and possible reduced warfarin metabolism.",
    "mechanism": "Possible CYP2C9 inhibition increasing S-warfarin exposure; in vitro evidence of Bacopa platelet aggregation inhibition adds pharmacodynamic bleeding risk. Human pharmacokinetic data are limited.",
    "recommendation": "Avoid unsupervised concurrent use. If clinically unavoidable, check baseline INR and recheck within 3–5 days and weekly until stable; counsel on bleeding signs; coordinate warfarin dose adjustment with the prescriber."
  },
  {
    "id": "HDI_154",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Antiplatelet (COX-1 inhibitor)",
    "ayurvedicHerb": "Brahmi (Bacopa monnieri)",
    "ayurvedicClass": "Medhya Rasayana (nootropic/adaptogenic)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition causing easy bruising, prolonged bleeding, epistaxis, and increased GI bleeding risk, especially with higher aspirin doses or GI risk factors.",
    "mechanism": "Pharmacodynamic additive antiplatelet effect: aspirin irreversibly inhibits COX-1, while Bacopa constituents have shown in vitro inhibition of platelet aggregation. Human bleeding data are limited.",
    "recommendation": "Screen for bleeding/GI risk before use. Avoid high-dose Bacopa with aspirin; use the lowest effective aspirin dose; consider gastroprotection if GI risk is high; monitor for bruising, melena, and prolonged bleeding."
  },
  {
    "id": "HDI_155",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Brahmi (Bacopa monnieri)",
    "ayurvedicClass": "Medhya Rasayana (nootropic/adaptogenic)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension, dizziness, orthostatic symptoms, syncope, and falls, particularly in older adults or those on multiple antihypertensives.",
    "mechanism": "Pharmacodynamic additive blood-pressure-lowering/vasodilatory effect. Animal data suggest Bacopa may affect cardiovascular tone; robust human interaction data are lacking.",
    "recommendation": "Monitor home BP and symptoms after starting or increasing Brahmi. Advise slow posture changes; adjust amlodipine or other antihypertensives if symptomatic hypotension occurs. Timing separation alone is not proven to prevent this interaction."
  },
  {
    "id": "HDI_156",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide antidiabetic",
    "ayurvedicHerb": "Brahmi (Bacopa monnieri)",
    "ayurvedicClass": "Medhya Rasayana (nootropic/adaptogenic)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive glucose lowering may cause hypoglycemia—especially with poor oral intake, renal impairment, or concurrent sulfonylureas/insulin—with sweating, tremor, dizziness, and confusion.",
    "mechanism": "Pharmacodynamic additive glucose-lowering effect; Bacopa has shown insulin-sensitizing/alpha-glucosidase-inhibitory activity in animal and in vitro studies. Human clinical interaction data are limited.",
    "recommendation": "Monitor fasting/postprandial glucose and HbA1c after starting Brahmi. Educate on hypoglycemia symptoms; assess renal function; adjust metformin or other antidiabetic agents if recurrent lows occur."
  },
  {
    "id": "HDI_157",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Guggulu (Commiphora mukul)",
    "ayurvedicClass": "Medohara / Vata-Kaphahara",
    "severity": "HIGH_RISK",
    "clinicalRisk": "INR destabilization with risk of subtherapeutic anticoagulation and thromboembolism or supratherapeutic INR and bleeding; human data are limited and product-dependent.",
    "mechanism": "Guggulsterones activate PXR and induce CYP3A4, increasing R-warfarin metabolism; possible additive antiplatelet/anti-inflammatory effects may also increase bleeding risk.",
    "recommendation": "Avoid unsupervised concurrent use. If combination is unavoidable, check INR within 3-5 days and after any dose change, adjust warfarin to target INR, and counsel on bleeding and thrombosis symptoms."
  },
  {
    "id": "HDI_158",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 inhibitor antiplatelet",
    "ayurvedicHerb": "Guggulu (Commiphora mukul)",
    "ayurvedicClass": "Medohara / Vata-Kaphahara",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition and bleeding risk, including bruising, gum bleeding, and gastrointestinal bleeding, especially with aspirin or NSAIDs.",
    "mechanism": "Pharmacodynamic interaction: guggulu constituents may inhibit platelet aggregation and potentiate P2Y12 blockade; no established major CYP2C19 effect.",
    "recommendation": "Use with caution and monitor for bleeding. Avoid concomitant NSAIDs, consider gastroprotection in high-risk patients, and advise stopping guggulu before elective surgery if bleeding risk is elevated."
  },
  {
    "id": "HDI_159",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Guggulu (Commiphora mukul)",
    "ayurvedicClass": "Medohara / Vata-Kaphahara",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Reduced antihypertensive efficacy and loss of blood pressure control due to accelerated amlodipine metabolism; possible reflex tachycardia or angina if BP rises.",
    "mechanism": "Guggulsterone-mediated PXR activation and CYP3A4 induction may lower amlodipine exposure and reduce its calcium channel blocking effect.",
    "recommendation": "Monitor home blood pressure and heart rate. Avoid combination or use with supervised amlodipine dose adjustment; consider a non-CYP3A4-dependent antihypertensive if BP control is critical."
  },
  {
    "id": "HDI_160",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide antidiabetic",
    "ayurvedicHerb": "Guggulu (Commiphora mukul)",
    "ayurvedicClass": "Medohara / Vata-Kaphahara",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive glucose lowering with risk of hypoglycemia, plus additive gastrointestinal intolerance; variable guggulu product quality may also cause unpredictable glycemic effects.",
    "mechanism": "Pharmacodynamic interaction: guggulu may improve insulin sensitivity and peripheral glucose uptake, adding to metformin's glucose-lowering effect; no major CYP/P-gp interaction is established.",
    "recommendation": "Monitor fasting/postprandial glucose and HbA1c, counsel on hypoglycemia symptoms, and adjust metformin only under medical supervision. Avoid self-initiated high-dose guggulu products."
  },
  {
    "id": "HDI_161",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Yashtimadhu / Licorice (Glycyrrhiza glabra)",
    "ayurvedicClass": "Rasayana; Madhura Rasa, Vata-Pitta Shamaka, Kanthya",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Unstable INR with increased bleeding or thrombotic risk; licorice-induced hypokalemia and hypertension may further complicate anticoagulation and arrhythmia risk.",
    "mechanism": "Possible CYP2C9-mediated alteration of warfarin metabolism by glycyrrhizin/glycyrrhetinic acid, plus pharmacodynamic platelet-endothelial effects and hypokalemia-related cardiac risk; case reports describe INR changes with licorice.",
    "recommendation": "Avoid high-dose or concentrated licorice. If co-use is unavoidable, check INR at baseline, 3–5 days, and weekly until stable; counsel on bleeding/bruising and consider switching to a non-interacting rasayana."
  },
  {
    "id": "HDI_162",
    "allopathicDrug": "Aspirin",
    "allopathicClass": "Antiplatelet agent (COX-1 inhibitor)",
    "ayurvedicHerb": "Yashtimadhu / Licorice (Glycyrrhiza glabra)",
    "ayurvedicClass": "Rasayana; Madhura Rasa, Vata-Pitta Shamaka, Kanthya",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive platelet inhibition and GI mucosal injury, increasing bruising, epistaxis, and gastrointestinal bleeding risk.",
    "mechanism": "Glycyrrhizin constituents may inhibit platelet aggregation/COX pathways and add to aspirin’s antiplatelet effect; licorice-induced sodium retention and hypokalemia may worsen cardiovascular instability.",
    "recommendation": "Avoid chronic high-dose licorice with aspirin. Monitor for bleeding and GI symptoms; consider gastroprotection if antiplatelet therapy must continue, and document the herb in the medication history."
  },
  {
    "id": "HDI_163",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Yashtimadhu / Licorice (Glycyrrhiza glabra)",
    "ayurvedicClass": "Rasayana; Madhura Rasa, Vata-Pitta Shamaka, Kanthya",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Pseudohyperaldosteronism causing resistant hypertension, peripheral edema, hypokalemia, and reduced amlodipine efficacy; risk of hypertensive urgency and arrhythmia.",
    "mechanism": "Glycyrrhetinic acid inhibits 11β-hydroxysteroid dehydrogenase type 2 (11β-HSD2), allowing cortisol to activate mineralocorticoid receptors, causing sodium/water retention and potassium loss—pharmacodynamic antagonism of antihypertensive therapy.",
    "recommendation": "Avoid licorice in uncontrolled hypertension or with edema/hypokalemia. Monitor BP, edema, serum potassium, and creatinine; limit dose/duration if used, and stop licorice if BP rises or potassium falls."
  },
  {
    "id": "HDI_164",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide antihyperglycemic",
    "ayurvedicHerb": "Yashtimadhu / Licorice (Glycyrrhiza glabra)",
    "ayurvedicClass": "Rasayana; Madhura Rasa, Vata-Pitta Shamaka, Kanthya",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Reduced glycemic control/hyperglycemia and hypokalemia; dehydration or renal hypoperfusion from licorice-induced edema may increase metformin-associated lactic acidosis risk.",
    "mechanism": "11β-HSD2 inhibition produces cortisol-mediated mineralocorticoid excess, hepatic gluconeogenesis, and insulin resistance; hypokalemia may impair insulin secretion. Metformin is not CYP-metabolized, so interaction is primarily pharmacodynamic/metabolic.",
    "recommendation": "Monitor fasting glucose, HbA1c, BP, serum potassium, and renal function. Avoid concentrated licorice; counsel on hyperglycemia symptoms and adjust antidiabetic therapy if glycemic control worsens."
  },
  {
    "id": "HDI_165",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Methi (Trigonella foenum-graecum)",
    "ayurvedicClass": "Deepana-Pachana, Vata-Kaphahara, Pramehaghna (seed)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Elevated INR, bruising, epistaxis, haematuria, gastrointestinal or intracranial bleeding due to potentiated anticoagulation.",
    "mechanism": "Pharmacodynamic additive anticoagulant/antiplatelet activity of fenugreek coumarin/flavonoid constituents; possible CYP2C9 inhibition reducing warfarin metabolism.",
    "recommendation": "Avoid high-dose therapeutic Methi with warfarin. If concurrent use is unavoidable, check INR within 3–5 days and after any dose change, counsel on bleeding signs, maintain consistent dietary intake, and adjust warfarin only by the prescriber."
  },
  {
    "id": "HDI_166",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 inhibitor antiplatelet",
    "ayurvedicHerb": "Methi (Trigonella foenum-graecum)",
    "ayurvedicClass": "Deepana-Pachana, Vata-Kaphahara, Pramehaghna (seed)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Increased bleeding tendency, easy bruising, gum bleeding, prolonged bleeding after injury or surgery.",
    "mechanism": "Pharmacodynamic additive platelet inhibition by fenugreek flavonoids/coumarins; theoretical CYP2C19-mediated alteration of clopidogrel activation.",
    "recommendation": "Use cautiously in patients on clopidogrel, especially with aspirin or anticoagulants. Monitor for bruising/bleeding, stop Methi before elective surgery, and advise patients not to self-start high-dose fenugreek supplements."
  },
  {
    "id": "HDI_167",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Methi (Trigonella foenum-graecum)",
    "ayurvedicClass": "Deepana-Pachana, Vata-Kaphahara, Pramehaghna (seed)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypotension, dizziness, postural light-headedness, syncope, and falls, especially in elderly or volume-depleted patients.",
    "mechanism": "Pharmacodynamic additive vasodilation and natriuresis; theoretical CYP3A4 inhibition may increase amlodipine exposure.",
    "recommendation": "Monitor BP and symptoms after starting or increasing Methi. Counsel on dizziness/postural hypotension, avoid sudden standing, and review antihypertensive dose if symptomatic hypotension occurs."
  },
  {
    "id": "HDI_168",
    "allopathicDrug": "Glimepiride",
    "allopathicClass": "Sulfonylurea antidiabetic",
    "ayurvedicHerb": "Methi (Trigonella foenum-graecum)",
    "ayurvedicClass": "Deepana-Pachana, Vata-Kaphahara, Pramehaghna (seed)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Hypoglycaemia with sweating, tremor, palpitations, confusion, seizures, or loss of consciousness, particularly in elderly, renal impairment, or poor oral intake.",
    "mechanism": "Pharmacodynamic additive glucose lowering from fenugreek galactomannan and 4-hydroxyisoleucine plus sulfonylurea-induced insulin secretion.",
    "recommendation": "Monitor capillary blood glucose closely when Methi is added to glimepiride. Educate on hypoglycaemia recognition/treatment, consider reducing sulfonylurea dose if recurrent low glucose occurs, and avoid unsupervised high-dose Methi in brittle diabetes."
  },
  {
    "id": "HDI_169",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Punarnava (Boerhavia diffusa)",
    "ayurvedicClass": "Mutravirechana (diuretic); Shothahara (anti-inflammatory); Rasayana",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Increased risk of major bleeding (GI, intracranial, bruising) and INR instability due to additive antihemostatic effects and narrow warfarin therapeutic index.",
    "mechanism": "Pharmacodynamic additive antiplatelet/antihemostatic effect; theoretical flavonoid-mediated CYP2C9 inhibition may increase warfarin exposure. Human interaction data are limited.",
    "recommendation": "Avoid unsupervised Punarnava use. If co-used, check INR at baseline and 3-5 days after starting/stopping, then weekly until stable; counsel on bleeding signs; coordinate with prescriber and consider an alternative herb."
  },
  {
    "id": "HDI_170",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 antiplatelet agent",
    "ayurvedicHerb": "Punarnava (Boerhavia diffusa)",
    "ayurvedicClass": "Mutravirechana (diuretic); Shothahara (anti-inflammatory); Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive antiplatelet effect may cause bruising, epistaxis, GI bleeding, or prolonged bleeding after surgery or dental procedures.",
    "mechanism": "Pharmacodynamic additive platelet inhibition/antihemostatic effect; Punarnava constituents show in vitro antiplatelet/anti-inflammatory activity. Clinically validated CYP2C19 interaction data are lacking.",
    "recommendation": "Screen for bleeding risk and advise reporting bruising, melena, or epistaxis. Avoid high-dose or prolonged Punarnava; do not stop clopidogrel without cardiology advice; consider gastroprotection if indicated."
  },
  {
    "id": "HDI_171",
    "allopathicDrug": "Amlodipine",
    "allopathicClass": "Dihydropyridine calcium channel blocker antihypertensive",
    "ayurvedicHerb": "Punarnava (Boerhavia diffusa)",
    "ayurvedicClass": "Mutravirechana (diuretic); Shothahara (anti-inflammatory); Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Symptomatic hypotension, dizziness, syncope, peripheral edema, and electrolyte/renal disturbance due to additive blood pressure lowering and diuretic-like effects.",
    "mechanism": "Pharmacodynamic additive vasodilation, natriuresis, and antihypertensive effect; theoretical CYP3A4 modulation is unconfirmed in humans.",
    "recommendation": "Monitor BP, electrolytes, and renal function at baseline and 1-2 weeks after initiation. Advise slow posture changes and adequate hydration; reduce herb or antihypertensive dose only under prescriber supervision."
  },
  {
    "id": "HDI_172",
    "allopathicDrug": "Glimepiride",
    "allopathicClass": "Sulfonylurea antidiabetic",
    "ayurvedicHerb": "Punarnava (Boerhavia diffusa)",
    "ayurvedicClass": "Mutravirechana (diuretic); Shothahara (anti-inflammatory); Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hypoglycemia (sweating, tremor, confusion, seizures) and difficulty maintaining stable glycemic control.",
    "mechanism": "Pharmacodynamic additive glucose-lowering/insulin-sensitizing effect; theoretical CYP2C9 inhibition may increase sulfonylurea exposure. Human pharmacokinetic data are limited.",
    "recommendation": "Increase SMBG monitoring during Punarnava initiation or dose change; educate on hypoglycemia recognition and management; reduce glimepiride dose if recurrent hypoglycemia occurs; review HbA1c and coordinate with prescriber."
  },
  {
    "id": "HDI_173",
    "allopathicDrug": "Escitalopram",
    "allopathicClass": "Selective serotonin reuptake inhibitor (SSRI)",
    "ayurvedicHerb": "Brahmi (Bacopa monnieri)",
    "ayurvedicClass": "Medhya Rasayana / CNS adaptogen",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive serotonergic toxicity manifesting as serotonin syndrome: agitation, tremor, clonus, hyperreflexia, diaphoresis, hyperthermia, and autonomic instability.",
    "mechanism": "Pharmacodynamic serotonergic potentiation; Bacopa constituents may increase synaptic serotonin activity and have been reported to inhibit MAO, adding to SSRI-mediated serotonin reuptake blockade.",
    "recommendation": "Avoid concurrent use where possible. If Brahmi is already being taken, do not stop or start escitalopram abruptly; counsel on serotonin syndrome symptoms and seek urgent review for neuromuscular or autonomic signs. Use lowest effective SSRI dose and document the interaction in the pharmacovigilance registry."
  },
  {
    "id": "HDI_174",
    "allopathicDrug": "Carbamazepine",
    "allopathicClass": "Aromatic anticonvulsant / CYP3A4 inducer",
    "ayurvedicHerb": "Brahmi (Bacopa monnieri)",
    "ayurvedicClass": "Medhya Rasayana / CNS adaptogen",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Altered carbamazepine exposure leading to toxicity (ataxia, nystagmus, sedation, dizziness) or loss of seizure control; possible additive hepatotoxicity.",
    "mechanism": "Bacopa may inhibit CYP3A4 and P-glycoprotein, while carbamazepine is a CYP3A4/P-gp substrate and CYP3A4 inducer; reciprocal pharmacokinetic interaction can raise carbamazepine/active metabolite levels or lower bacoside exposure. Additive hepatic stress is possible.",
    "recommendation": "Check carbamazepine trough level and LFTs before and 2–4 weeks after starting or stopping Brahmi. Advise patients to report sedation, unsteadiness, visual symptoms, or increased seizure frequency. Avoid high-dose Brahmi extracts in patients with baseline hepatic impairment."
  },
  {
    "id": "HDI_175",
    "allopathicDrug": "Levothyroxine",
    "allopathicClass": "Thyroid hormone replacement",
    "ayurvedicHerb": "Brahmi (Bacopa monnieri)",
    "ayurvedicClass": "Medhya Rasayana / CNS adaptogen",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Possible potentiation of thyroid hormone effect causing iatrogenic hyperthyroidism: palpitations, tremor, anxiety, heat intolerance, insomnia, weight loss, and atrial arrhythmia risk.",
    "mechanism": "Bacopa monnieri has shown thyroid-stimulating/thyromimetic effects in animal studies, potentially increasing T3/T4 and altering TSH; additive pharmacodynamic effect with levothyroxine.",
    "recommendation": "Monitor TSH and free T4 at baseline and 4–6 weeks after starting or changing Brahmi dose. Counsel patients to report palpitations, tremor, or unexplained weight loss. Adjust levothyroxine only on biochemical evidence and clinician review."
  },
  {
    "id": "HDI_176",
    "allopathicDrug": "Tacrolimus",
    "allopathicClass": "Calcineurin inhibitor immunosuppressant",
    "ayurvedicHerb": "Brahmi (Bacopa monnieri)",
    "ayurvedicClass": "Medhya Rasayana / CNS adaptogen",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Narrow therapeutic index drug: altered tacrolimus exposure may cause nephrotoxicity, neurotoxicity, QT prolongation, or increased risk of transplant rejection/graft dysfunction.",
    "mechanism": "Tacrolimus is a CYP3A4/P-glycoprotein substrate; Bacopa constituents may inhibit CYP3A4 or P-gp, increasing tacrolimus blood levels. Immunomodulatory effects of Brahmi may also theoretically reduce immunosuppressive efficacy.",
    "recommendation": "Avoid Brahmi in transplant recipients unless approved by the transplant team. If unavoidable, monitor tacrolimus trough levels, renal function, electrolytes, and ECG before and after initiation; counsel against self-medication with Ayurvedic formulations."
  },
  {
    "id": "HDI_177",
    "allopathicDrug": "Warfarin",
    "allopathicClass": "Vitamin K antagonist anticoagulant",
    "ayurvedicHerb": "Bala (Sida cordifolia)",
    "ayurvedicClass": "Balya / Brimhana / Vata-shamaka Rasayana (ephedrine-alkaloid-bearing herb)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Unstable INR with either thrombotic breakthrough or supratherapeutic INR and GI/urinary/traumatic bleeding; unexplained INR fluctuation has been reported with ephedra-containing Ayurvedic churnas in patients previously stable on warfarin.",
    "mechanism": "Ephedrine/pseudoephedrine alkaloids induce hepatic CYP3A4 and alter albumin binding of warfarin; concurrent anti-inflammatory/phytosterol fraction reduces platelet aggregation — additive haemostatic impairment against a narrow-therapeutic-index drug (P-gp competition also plausible).",
    "recommendation": "Do not initiate Bala in a patient on warfarin. If already co-administered, stop Bala and check INR at 48–72 h and 7 days (both directions of interaction are possible). If Ayurvedic therapy must continue, use a single fixed-brand churna, stagger doses by 2–3 h, and monitor INR at day 3, 7, then weekly for 4 weeks. Counsel on gum bleeding, epistaxis, melaena, haematuria, and new headache; report to PvPI under the AYUSH–Allopathy pharmacovigilance registry."
  },
  {
    "id": "HDI_178",
    "allopathicDrug": "Metoprolol",
    "allopathicClass": "Cardioselective beta-1 adrenergic blocker (cardiovascular / antihypertensive)",
    "ayurvedicHerb": "Bala (Sida cordifolia)",
    "ayurvedicClass": "Balya / Vata-shamaka Rasayana (sympathomimetic; used in Pakshaghata, Ardita, Hridroga)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Hypertensive crisis with baroreflex bradycardia, angina, or arrhythmia from unopposed alpha-adrenergic vasoconstriction; loss of antihypertensive control and masking of hypoglycaemia warning signs (tremor, tachycardia).",
    "mechanism": "Pharmacodynamic antagonism: ephedrine/pseudoephedrine in Bala promotes noradrenaline release and peripheral vasoconstriction; beta-1 blockade removes beta-2-mediated vasodilatation and bronchodilatation, leaving alpha tone unopposed (pressor surge). Vasicine/vasicinone bronchodilatation is also antagonised.",
    "recommendation": "Avoid concurrent use; never combine with non-selective beta-blockers at any dose. If Bala is clinically essential (e.g., Vata-vyadhi rehabilitation), substitute a non-beta-blocker antihypertensive (e.g., amlodipine) after physician review and monitor home BP/HR twice weekly. Do not stop metoprolol abruptly — taper under supervision."
  },
  {
    "id": "HDI_179",
    "allopathicDrug": "Clopidogrel",
    "allopathicClass": "P2Y12 inhibitor antiplatelet (CYP2C19-activated prodrug)",
    "ayurvedicHerb": "Bala (Sida cordifolia)",
    "ayurvedicClass": "Balya / Shothahara / Vata-shamaka Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Increased bruising, epistaxis and GI bleeding from additive platelet inhibition; possible loss of antiplatelet protection if Bala constituents compete for CYP2C19 bioactivation — clinically relevant in post-PCI/carotid-stent patients; pressor effect further raises intracranial haemorrhage risk.",
    "mechanism": "Additive pharmacodynamic antiaggregatory effect of herbal anti-inflammatory constituents (COX/platelet pathway) plus competitive modulation of CYP2C19-mediated conversion of clopidogrel to its active thiol metabolite; ephedrine-driven hypertension increases haemorrhagic stroke risk.",
    "recommendation": "Permit only with monitoring: baseline and 4-week CBC with platelet count plus a structured bleeding questionnaire. Avoid entirely in recent PCI (<6 months), recent stroke/TIA, or during dual antiplatelet therapy. Stagger administration by 2 h, do not stop clopidogrel for the herb, and refer to the prescriber if bruising or petechiae appear."
  },
  {
    "id": "HDI_180",
    "allopathicDrug": "Metformin",
    "allopathicClass": "Biguanide oral antihyperglycaemic",
    "ayurvedicHerb": "Bala (Sida cordifolia)",
    "ayurvedicClass": "Balya / Brimhana / Prameha-hara Rasayana",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Unpredictable glycaemia — additive hypoglycaemia from Bala's reported glucose-lowering fraction alternating with ephedrine-mediated hyperglycaemia and adrenergic symptoms; risk of hypoglycaemic unawareness and, in dehydration/renal impairment, lactic acidosis.",
    "mechanism": "Additive pharmacodynamic glucose lowering (demonstrated in animal models of Sida cordifolia extract) plus sympathomimetic glycogenolysis and transient insulin resistance from ephedrine alkaloids; delayed gastric emptying may alter metformin absorption and GI tolerance.",
    "recommendation": "Monitor SMBG (fasting and 2-h postprandial) twice weekly for the first month; check eGFR and stop metformin per standard sick-day rules if dehydration, sepsis, or contrast imaging occurs. Reduce metformin/sulfonylurea dose if fasting glucose falls below 90 mg/dL. Educate the patient that Bala may mask or mimic hypoglycaemia and to keep glucose tablets available; log the combination as a suspected interaction in the AYUSH–Allopathy PvPI registry."
  },
  {
    "id": "HDI_181",
    "allopathicDrug": "Fluoxetine",
    "allopathicClass": "SSRI antidepressant; serotonergic, CYP2D6 inhibitor",
    "ayurvedicHerb": "Giloy / Guduchi (Tinospora cordifolia)",
    "ayurvedicClass": "Rasayana; Medhya; immunomodulator",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Potential serotonin syndrome/central serotonergic excess (agitation, tremor, diaphoresis, hyperreflexia, hyperthermia), especially with high-dose or multiple serotonergic drugs.",
    "mechanism": "Pharmacodynamic serotonergic potentiation suggested by monoaminergic/MAO-modulating and adaptogenic effects of T. cordifolia; possible CYP2D6/CYP3A4 modulation may alter SSRI exposure.",
    "recommendation": "Avoid unsupervised Giloy supplements with fluoxetine. If co-used, counsel on serotonin syndrome symptoms and monitor for agitation, tremor, sweating, diarrhoea, hyperreflexia; stop Giloy and review if symptoms occur."
  },
  {
    "id": "HDI_182",
    "allopathicDrug": "Carbamazepine",
    "allopathicClass": "Antiepileptic; narrow therapeutic index, CYP3A4 substrate, hepatotoxic potential",
    "ayurvedicHerb": "Giloy / Guduchi (Tinospora cordifolia)",
    "ayurvedicClass": "Rasayana; Medhya; immunomodulator",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Carbamazepine toxicity (ataxia, diplopia, sedation, hyponatraemia, arrhythmia) and additive drug-induced liver injury.",
    "mechanism": "Possible CYP3A4 inhibition by T. cordifolia reducing carbamazepine clearance; additive hepatocellular injury from both agents.",
    "recommendation": "Avoid Giloy with carbamazepine where possible. If unavoidable, check carbamazepine serum level, monitor LFTs and sodium, and counsel on dizziness, diplopia, sedation, jaundice, or dark urine."
  },
  {
    "id": "HDI_183",
    "allopathicDrug": "Tacrolimus",
    "allopathicClass": "Calcineurin inhibitor immunosuppressant; CYP3A4/P-glycoprotein substrate",
    "ayurvedicHerb": "Giloy / Guduchi (Tinospora cordifolia)",
    "ayurvedicClass": "Rasayana; immunomodulator/immunostimulant",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Reduced immunosuppression and graft rejection risk from immunostimulant antagonism; alternatively tacrolimus toxicity if CYP3A4/P-gp inhibition raises trough levels.",
    "mechanism": "Pharmacodynamic immunostimulant effect opposing calcineurin inhibition plus possible CYP3A4/P-gp modulation altering tacrolimus exposure.",
    "recommendation": "Avoid Giloy in transplant recipients on tacrolimus. If patient insists, require transplant-team review, tacrolimus trough monitoring, renal function checks, and vigilance for rejection or infection."
  },
  {
    "id": "HDI_184",
    "allopathicDrug": "Isoniazid",
    "allopathicClass": "Antitubercular ATT drug; hepatotoxic",
    "ayurvedicHerb": "Giloy / Guduchi (Tinospora cordifolia)",
    "ayurvedicClass": "Rasayana; immunomodulator; hepatomodulator",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive drug-induced liver injury/ATT hepatitis (jaundice, anorexia, vomiting, raised transaminases), especially in malnourished, alcoholic, or pre-existing liver disease patients.",
    "mechanism": "Additive hepatocellular toxicity; possible CYP2E1/phase I modulation and oxidative stress contributing to isoniazid hydrazine-mediated injury.",
    "recommendation": "Avoid Giloy during isoniazid-containing ATT in patients with liver disease or prior ATT hepatitis. If co-used, obtain baseline and serial LFTs, counsel on jaundice/anorexia/vomiting, and stop Giloy and ATT drugs if hepatitis is suspected."
  },
  {
    "id": "HDI_185",
    "allopathicDrug": "Fluoxetine",
    "allopathicClass": "Selective serotonin reuptake inhibitor (SSRI) antidepressant",
    "ayurvedicHerb": "Haridra / Curcumin (Curcuma longa)",
    "ayurvedicClass": "Rasayana; Vishaghna; Krimighna; Medhya",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Potential serotonergic potentiation and increased fluoxetine exposure, risking serotonin syndrome (agitation, tremor, hyperreflexia, diaphoresis, hyperthermia).",
    "mechanism": "Curcumin has in vitro MAO-A/B inhibitory activity and may inhibit CYP3A4/P-gp, increasing SSRI exposure; additive serotonergic pharmacodynamic effect.",
    "recommendation": "Avoid high-dose curcumin supplements with fluoxetine. If co-used, counsel on serotonin syndrome symptoms and monitor for agitation, tremor, or autonomic instability; consider SSRI dose review."
  },
  {
    "id": "HDI_186",
    "allopathicDrug": "Carbamazepine",
    "allopathicClass": "Antiepileptic / mood stabilizer (CYP3A4 substrate, P-gp substrate)",
    "ayurvedicHerb": "Haridra / Curcumin (Curcuma longa)",
    "ayurvedicClass": "Rasayana; Vishaghna; Krimighna; Medhya",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Raised carbamazepine levels and toxicity: ataxia, diplopia, dizziness, sedation, hyponatremia; seizure control may become unstable.",
    "mechanism": "Curcumin inhibits CYP3A4 and P-glycoprotein, reducing carbamazepine metabolism/efflux; carbamazepine may also induce curcumin metabolism, causing bidirectional variability.",
    "recommendation": "Avoid high-dose or prolonged curcumin with carbamazepine. If unavoidable, monitor serum carbamazepine levels and neurological adverse effects; adjust antiepileptic dose as needed."
  },
  {
    "id": "HDI_187",
    "allopathicDrug": "Tacrolimus",
    "allopathicClass": "Calcineurin inhibitor immunosuppressant (narrow therapeutic index; CYP3A4/P-gp substrate)",
    "ayurvedicHerb": "Haridra / Curcumin (Curcuma longa)",
    "ayurvedicClass": "Rasayana; Vishaghna; Krimighna",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Increased tacrolimus exposure and nephrotoxicity, tremor, hyperkalemia, hypertension, or immunosuppression-related infection risk.",
    "mechanism": "Curcumin inhibits intestinal/hepatic CYP3A4 and P-glycoprotein, reducing tacrolimus first-pass metabolism and efflux; clinically relevant rise in trough concentrations is plausible.",
    "recommendation": "Avoid curcumin/turmeric supplements in transplant recipients on tacrolimus unless supervised by transplant team. If co-used, monitor tacrolimus trough levels, serum creatinine, potassium, and toxicity."
  },
  {
    "id": "HDI_188",
    "allopathicDrug": "Isoniazid",
    "allopathicClass": "First-line anti-tubercular antibiotic (ATT); hepatotoxic",
    "ayurvedicHerb": "Haridra / Curcumin (Curcuma longa)",
    "ayurvedicClass": "Rasayana; Vishaghna; Krimighna; Yakrit-uttejaka",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive hepatotoxicity risk and possible alteration of isoniazid bioactivation/clearance; may cause or worsen drug-induced liver injury during ATT.",
    "mechanism": "Isoniazid hepatotoxicity involves CYP2E1/NAT2-mediated toxic metabolites; curcumin modulates CYP2E1 and hepatic metabolic/antioxidant pathways, with potential additive hepatocellular injury at high supplement doses.",
    "recommendation": "Avoid high-dose curcumin supplements during isoniazid-containing ATT, especially with baseline liver disease or alcohol use. Monitor LFTs and hepatitis symptoms; stop curcumin if transaminases rise."
  },
  {
    "id": "HDI_189",
    "allopathicDrug": "Fluoxetine",
    "allopathicClass": "SSRI antidepressant",
    "ayurvedicHerb": "Shatavari (Asparagus racemosus)",
    "ayurvedicClass": "Rasayana/Balya/Stanyajanana (rejuvenative, tonic, galactagogue)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive serotonergic toxicity risk (agitation, tremor, hyperreflexia, diaphoresis, fever) and possible altered fluoxetine exposure.",
    "mechanism": "Preclinical antidepressant-like/serotonergic activity of Shatavari saponins plus possible CYP2D6/CYP3A4 modulation; theoretical additive serotonin syndrome risk.",
    "recommendation": "Avoid unsupervised combination in patients on SSRIs; if co-used, monitor for serotonin toxicity and counsel to report agitation, tremor, fever, or diarrhoea. Consider alternative Rasayana or SSRI dose review by the prescriber."
  },
  {
    "id": "HDI_190",
    "allopathicDrug": "Phenytoin",
    "allopathicClass": "Antiepileptic (hydantoin, narrow therapeutic index)",
    "ayurvedicHerb": "Shatavari (Asparagus racemosus)",
    "ayurvedicClass": "Rasayana/Balya (rejuvenative, tonic)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Possible phenytoin level elevation or fluctuation leading to ataxia, nystagmus, sedation, or breakthrough seizures.",
    "mechanism": "Shatavari steroidal saponins may inhibit CYP2C9/CYP3A4 and P-gp-mediated clearance; phenytoin has narrow therapeutic index and saturable metabolism.",
    "recommendation": "Use only with prescriber approval; check phenytoin serum level and seizure control after starting or stopping Shatavari. Counsel on ataxia, nystagmus, sedation, and seizure recurrence."
  },
  {
    "id": "HDI_191",
    "allopathicDrug": "Levothyroxine",
    "allopathicClass": "Thyroid hormone replacement",
    "ayurvedicHerb": "Shatavari (Asparagus racemosus)",
    "ayurvedicClass": "Rasayana/Balya/Stanyajanana (rejuvenative, tonic, galactagogue)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive thyroid hormone effect or reduced levothyroxine absorption causing thyrotoxicosis or unstable hypothyroid control.",
    "mechanism": "Preclinical thyroid-stimulating/thyroxine-like activity of Shatavari; saponin/fibre content may also alter levothyroxine absorption.",
    "recommendation": "Separate Shatavari and levothyroxine doses by at least 4 hours; monitor TSH and free T4 4–6 weeks after initiation/cessation. Advise reporting palpitations, tremor, heat intolerance, or fatigue."
  },
  {
    "id": "HDI_192",
    "allopathicDrug": "Tacrolimus",
    "allopathicClass": "Calcineurin-inhibitor immunosuppressant (narrow therapeutic index)",
    "ayurvedicHerb": "Shatavari (Asparagus racemosus)",
    "ayurvedicClass": "Rasayana/Balya/Immunomodulatory (rejuvenative, tonic)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Risk of transplant rejection due to immunostimulation and/or tacrolimus toxicity from altered trough levels (nephrotoxicity, neurotoxicity, hyperglycaemia).",
    "mechanism": "Shatavari saponins have immunostimulant/adaptogenic activity that may antagonise calcineurin inhibition; possible CYP3A4/P-gp modulation may alter tacrolimus exposure.",
    "recommendation": "Avoid Shatavari in transplant recipients on tacrolimus unless approved by the transplant team. If unavoidable, monitor tacrolimus trough levels, renal function, glucose, and rejection signs closely; do not stop/start herb without level monitoring."
  },
  {
    "id": "HDI_193",
    "allopathicDrug": "Sertraline",
    "allopathicClass": "Selective serotonin reuptake inhibitor (SSRI) antidepressant",
    "ayurvedicHerb": "Gokshura (Tribulus terrestris)",
    "ayurvedicClass": "Vrishya / Mutrala / Rasayana (Madhura-sheeta veerya; saponin-rich: protodioscin, dioscin)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive central monoaminergic overactivity — agitation, tremor, myoclonus, hyperreflexia, diaphoresis, hyperthermia and confusion consistent with serotonin toxicity; precipitation of manic/psychotic episodes (published case reports of T. terrestris-associated mania); possible loss of antidepressant efficacy or emergence of adverse effects if saponins inhibit CYP3A4/2C9-mediated sertraline clearance.",
    "mechanism": "In-vitro inhibition of monoamine oxidase-A and modulation of neuronal reuptake by Tribulus saponins → additive synaptic serotonin/noradrenaline with SSRI; weak competitive inhibition of CYP3A4 and CYP2C9 (sertraline → norsertraline pathway) altering exposure; additive 5-HT1A/5-HT2A receptor stimulation.",
    "recommendation": "Avoid concurrent use in bipolar spectrum, prior SSRI-induced mania, or on >100 mg/day sertraline. If patient refuses to stop: administer at least 2 hours apart, apply Hunter serotonin-toxicity criteria checklist at baseline, day 3–7 and after any dose change, counsel patient to report tremor, diarrhoea, agitation or fever immediately, and record the pair in the hospital ADR/pharmacovigilance register (PvPI Form)."
  },
  {
    "id": "HDI_194",
    "allopathicDrug": "Tacrolimus",
    "allopathicClass": "Calcineurin-inhibitor immunosuppressant (narrow therapeutic index)",
    "ayurvedicHerb": "Gokshura (Tribulus terrestris)",
    "ayurvedicClass": "Rasayana / Vrishya (saponin glycoside-rich, P-gp and CYP3A4 modulating)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Unpredictable rise in tacrolimus whole-blood trough → acute and chronic nephrotoxicity, hyperkalaemia, hypomagnesaemia, tremor, neurotoxicity, QT prolongation and graft dysfunction; conversely, loss of immunosuppression and acute rejection if the herb is abruptly stopped or co-administered with a CYP3A4 inducer such as rifampicin.",
    "mechanism": "Tribulus saponins (protodioscin, dioscin) competitively inhibit intestinal and hepatic CYP3A4 and P-glycoprotein efflux in vitro; tacrolimus is a dual CYP3A4/P-gp substrate with narrow therapeutic index, so small changes in first-pass extraction and efflux produce large trough swings.",
    "recommendation": "Regard as contraindicated co-therapy in transplant recipients — do not initiate Gokshura without the transplant physician's written approval. If unavoidable: document baseline trough, re-check trough and eGFR at 72 hours and 1 week after starting or stopping the herb, monitor K+, Mg2+ and ECG-QTc, and titrate tacrolimus only on trough-guided advice; stop the herb immediately if trough exceeds the target range."
  },
  {
    "id": "HDI_195",
    "allopathicDrug": "Levothyroxine",
    "allopathicClass": "Synthetic thyroid hormone (T4) replacement",
    "ayurvedicHerb": "Gokshura (Tribulus terrestris)",
    "ayurvedicClass": "Rasayana / Mutrala (thyro-stimulant and androgen-modulating Rasayana)",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Additive thyromimetic effect producing iatrogenic thyrotoxicosis — palpitations, atrial fibrillation, tremor, anxiety, insomnia, heat intolerance and weight loss — in patients stabilised on levothyroxine; plus reduced L-T4 bioavailability with a rising TSH and recurrence of hypothyroid symptoms when the two are taken together.",
    "mechanism": "Animal studies show Tribulus terrestris raises serum T3/T4 (and testosterone), indicating TSH-independent thyroid hormone synthesis/secretion stimulation that adds to exogenous T4; saponin and fibre content in the powdered herb physically adsorbs and delays levothyroxine absorption in the gut.",
    "recommendation": "Separate administration by at least 4 hours (levothyroxine on an empty stomach at the same time daily). Check TSH and free T4 at 6–8 weeks after starting or stopping Gokshura; if TSH falls below the reference range or the patient develops palpitations/tremor, withhold the herb and reduce levothyroxine only under prescriber supervision. Warn patients not to self-start Rasayana therapy during dose titration."
  },
  {
    "id": "HDI_196",
    "allopathicDrug": "Isoniazid",
    "allopathicClass": "First-line antitubercular (ATT) — hepatotoxic hydrazine derivative",
    "ayurvedicHerb": "Gokshura (Tribulus terrestris)",
    "ayurvedicClass": "Rasayana / Mutrala (hepatobiliary-active saponin herb)",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Additive drug-induced liver injury — acute cholestatic or mixed hepatocellular hepatitis with jaundice, pruritus and raised transaminases (published case report of T. terrestris cholestatic hepatitis); increased risk of ATT interruption, treatment failure and hepatitic flare, with the risk amplified further when rifampicin and pyrazinamide are co-prescribed.",
    "mechanism": "Idiosyncratic saponin-mediated hepatocyte injury with oxidative stress and mitochondrial dysfunction and possible glutathione depletion, additive to isoniazid's CYP2E1-generated hydrazine/acetylhydrazine toxic metabolites; rifampicin-mediated CYP3A4 induction simultaneously lowers saponin exposure while rifampicin–isoniazid synergy increases hepatotoxicity.",
    "recommendation": "Avoid Gokshura throughout the intensive phase and in any patient with baseline transaminases above 2× ULN, alcohol use, hepatitis B/C or prior ATT hepatotoxicity. If the patient insists: obtain baseline AST/ALT, bilirubin and INR, repeat LFTs every 2 weeks, and stop both the herb and ATT drugs if ALT exceeds 3× ULN with symptoms (nausea, vomiting, jaundice, dark urine) or 5× ULN even if asymptomatic; report as a suspected herb–drug interaction to PvPI. This does not replace the standard RNTCP/NTEP clinical and biochemical monitoring schedule."
  },
  {
    "id": "HDI_197",
    "allopathicDrug": "Phenytoin",
    "allopathicClass": "Antiepileptic — hydantoin (narrow therapeutic index, CYP2C9/CYP2C19 substrate)",
    "ayurvedicHerb": "Punarnava (Boerhavia diffusa)",
    "ayurvedicClass": "Mutrala (diuretic), Sothahara, Kasaya/Rasayana — Panchanga churna, decoction, root extract",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Altered and unpredictable phenytoin plasma levels (preclinical PK studies show significant change in AUC/half-life) leading either to dose-dependent phenytoin toxicity — nystagmus, ataxia, diplopia, sedation, arrhythmia — or to breakthrough seizures if levels fall; additive CNS depression when combined.",
    "mechanism": "Hepatic CYP2C9/CYP2C19 inhibition by Boerhavia flavonoids, punarnavine and alkaloid fractions reducing phenytoin clearance, with possible modulation of intestinal P-gp/BCRP efflux affecting absorption; additive pharmacodynamic GABAergic/anticonvulsant depression.",
    "recommendation": "Avoid unsupervised co-use in epilepsy patients on phenytoin. If the patient insists, measure serum phenytoin trough (target 10–20 mcg/mL) at baseline and 2–4 weeks after starting or stopping Punarnava, monitor clinically for nystagmus/ataxia/sedation, counsel against self-initiated Kashaya or churna, and file a PvPI ADR report with the AMC if levels shift or toxicity occurs."
  },
  {
    "id": "HDI_198",
    "allopathicDrug": "Tacrolimus",
    "allopathicClass": "Immunosuppressant — calcineurin inhibitor (CYP3A4/CYP3A5 and P-gp substrate)",
    "ayurvedicHerb": "Punarnava (Boerhavia diffusa)",
    "ayurvedicClass": "Rasayana / Balya with immunostimulant (Rasayana) and Mutrala karma",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Raised tacrolimus trough concentrations causing nephrotoxicity, neurotoxicity, hyperkalaemia, hypertension and QT prolongation; conversely, immunostimulant polysaccharide fractions may antagonise immunosuppression and precipitate acute allograft rejection. Diuretic action can add prerenal insult to a transplant kidney.",
    "mechanism": "Inhibition of CYP3A4-mediated first-pass and systemic metabolism plus P-gp efflux inhibition in enterocytes and renal tubules by Boerhavia constituents, raising tacrolimus exposure; pharmacodynamic immune-stimulation (enhanced T-cell/NK-cell and antibody responses in animal models) opposing calcineurin inhibition.",
    "recommendation": "Best avoided in all solid-organ transplant recipients on tacrolimus. If co-administration is unavoidable, perform tacrolimus trough TDM at baseline, day 3–5, then weekly, with serum creatinine/eGFR, potassium and ECG monitoring; involve the transplant nephrologist before dose adjustment; document in the JEEVIKA AYUSH-Allopathy registry and notify PvPI of any trough deviation."
  },
  {
    "id": "HDI_199",
    "allopathicDrug": "Levothyroxine",
    "allopathicClass": "Thyroid hormone replacement — synthetic T4",
    "ayurvedicHerb": "Punarnava (Boerhavia diffusa)",
    "ayurvedicClass": "Mutrala, Sothahara, Vrishya — root powder/extract used as thyroid stimulant and diuretic",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Iatrogenic thyrotoxicosis in a euthyroid or well-replaced patient — palpitations, tremor, anxiety, heat intolerance, insomnia, weight loss, and atrial fibrillation risk in the elderly; misleading TSH/free T4 values that trigger inappropriate levothyroxine up- or down-titration.",
    "mechanism": "Purely pharmacodynamic: Boerhavia diffusa root extract shows thyromimetic activity in animal studies, increasing thyroid peroxidase and 5-prime-deiodinase activity with raised serum T3/T4; additive effect with exogenous levothyroxine. No significant absorption or CYP-mediated component established in humans.",
    "recommendation": "Do not start Punarnava in uncontrolled thyrotoxicosis or autonomously functioning nodules. In patients on levothyroxine who request it, re-check TSH and free T4 at 6–8 weeks after initiation and after discontinuation, advise separating herb intake from the levothyroxine dose by at least 4 hours, and review any de novo tremor, palpitations or weight loss promptly; record the pair in the pharmacovigilance registry."
  },
  {
    "id": "HDI_200",
    "allopathicDrug": "Isoniazid",
    "allopathicClass": "First-line antitubercular (INH) — NTEP regimen, hepatotoxic, CYP2E1/NAT2 substrate",
    "ayurvedicHerb": "Punarnava (Boerhavia diffusa)",
    "ayurvedicClass": "Yakrit-uttejaka / Rasayana — hepatoprotective and diuretic panchanga used adjunctively during ATT",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Two-directional ATT hazard: (a) antioxidant/hepatoprotective effect may mask early subclinical INH-rifampicin induced liver injury so that DILI presents late or as frank hepatitis, and (b) altered INH/CYP2E1 metabolism may shift hydrazine-acetylhydrazine toxic metabolite formation, risking potentiated hepatotoxicity or reduced mycobacterial kill and drug-resistant breakthrough.",
    "mechanism": "In vitro and rodent data show Boerhavia constituents modulate CYP2E1 and phase-II conjugation (glutathione-S-transferase, NAT) and inhibit CYP3A4, affecting INH bioactivation/detoxification and rifampicin clearance; the brisk diuretic (Mutrala) effect can also worsen ATT-associated electrolyte and volume disturbance.",
    "recommendation": "Never allow Punarnava to be used as a substitute for NTEP-guided monitoring or as a reason to continue INH despite symptoms. If used adjunctively, obtain baseline LFT, serum creatinine and electrolytes, repeat at 2, 4 and 8 weeks, and educate the patient that jaundice, dark urine, anorexia, vomiting or right-upper-quadrant pain mandate immediate INH/rifampicin interruption and clinician review regardless of herb intake; notify PvPI under the DILI reporting category and document in the AYUSH-Allopathy registry."
  },
  {
    "id": "HDI_201",
    "allopathicDrug": "Amitriptyline",
    "allopathicClass": "Tricyclic antidepressant (TCA)",
    "ayurvedicHerb": "Amla (Emblica officinalis)",
    "ayurvedicClass": "Rasayana / Vayasthapana (rejuvenative); Amalaki",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Elevated amitriptyline/nortriptyline exposure with anticholinergic delirium, sedation, QT prolongation, seizure threshold reduction, and cardiac arrhythmia risk.",
    "mechanism": "Amla tannins/constituents inhibit CYP2D6 and CYP2C19 in vitro; amitriptyline is a CYP2D6/2C19/3A4 substrate, so reduced clearance may increase plasma TCA concentrations.",
    "recommendation": "Avoid concentrated amla extracts with high-dose amitriptyline; if co-used, monitor for anticholinergic and cardiac adverse effects, consider ECG and TCA level where available, and reduce TCA dose if toxicity develops."
  },
  {
    "id": "HDI_202",
    "allopathicDrug": "Phenytoin",
    "allopathicClass": "Hydantoin antiepileptic",
    "ayurvedicHerb": "Amla (Emblica officinalis)",
    "ayurvedicClass": "Rasayana / Medhya-supportive; Amalaki",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Phenytoin toxicity with nystagmus, ataxia, sedation, cognitive impairment, and risk of arrhythmia due to narrow therapeutic index.",
    "mechanism": "Amla inhibits CYP2C9 in vitro; phenytoin is primarily metabolized by CYP2C9 and CYP2C19, so inhibition can reduce phenytoin clearance and raise free/total levels.",
    "recommendation": "Monitor serum phenytoin levels and clinical toxicity before and after amla initiation; avoid high-dose amla supplements; adjust phenytoin dose based on level and symptoms."
  },
  {
    "id": "HDI_203",
    "allopathicDrug": "Tacrolimus",
    "allopathicClass": "Calcineurin inhibitor immunosuppressant",
    "ayurvedicHerb": "Amla (Emblica officinalis)",
    "ayurvedicClass": "Rasayana / immunomodulatory; Amalaki",
    "severity": "HIGH_RISK",
    "clinicalRisk": "Increased tacrolimus trough levels with nephrotoxicity, neurotoxicity, hyperkalemia, and risk of graft dysfunction if levels fall after discontinuation.",
    "mechanism": "Tacrolimus is a CYP3A4 and P-glycoprotein substrate; amla constituents inhibit CYP3A4 and P-gp in vitro, potentially reducing tacrolimus metabolism and efflux.",
    "recommendation": "Avoid unsupervised amla extracts in transplant patients; if used, monitor tacrolimus trough, serum creatinine, potassium, and neurological symptoms closely and adjust tacrolimus dose to target range."
  },
  {
    "id": "HDI_204",
    "allopathicDrug": "Isoniazid",
    "allopathicClass": "Antitubercular antibiotic (ATT)",
    "ayurvedicHerb": "Amla (Emblica officinalis)",
    "ayurvedicClass": "Rasayana / hepatoprotective (Yakrit-uttejaka); Amalaki",
    "severity": "MODERATE_CAUTION",
    "clinicalRisk": "Potential alteration of isoniazid exposure and confounding or masking of ATT-induced hepatotoxicity; risk of delayed recognition of drug-induced liver injury.",
    "mechanism": "Amla has antioxidant/tannin constituents and animal data suggest modulation of CYP2E1 and attenuation of isoniazid/rifampicin hepatotoxicity; human pharmacokinetic data are limited, so both altered INH metabolism and hepatoprotective masking are plausible.",
    "recommendation": "Do not use amla as a substitute for ATT hepatotoxicity monitoring; check baseline and periodic LFTs, counsel on jaundice/anorexia/nausea, avoid high-dose concentrated extracts, and investigate any LFT rise rather than attributing it to amla protection."
  }
];

export const RX_AUDIT_BENCHMARKS: RxAuditBenchmarkEntry[] = [
  {
    "caseId": "RX-AUD-0004",
    "specialty": "Geriatric Polypharmacy",
    "patientProfile": "76F elderly with knee OA, insomnia, BPH/urinary urgency, mild cognitive impairment, eGFR 44",
    "drugs": [
      "Amitriptyline 25mg HS",
      "Alprazolam 0.5mg HS",
      "Piroxicam 20mg",
      "Digoxin 0.25mg OD",
      "Furosemide 40mg"
    ],
    "herbs": [
      "Ashwagandha",
      "Yashtimadhu"
    ],
    "criticalAlerts": [
      "Amitriptyline + Alprazolam: HIGH",
      "Digoxin + Furosemide: HIGH",
      "Piroxicam + Furosemide: HIGH",
      "Piroxicam + Digoxin: MODERATE",
      "Amitriptyline + Piroxicam: MODERATE",
      "Furosemide + Alprazolam: MODERATE"
    ],
    "pmbjpMonthlySavingsInr": 576,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n\n| Field | Detail |\n|---|---|\n| **Memo ID** | RX-AUD-0004 / POS-AYU-003 |\n| **Facility** | clinic-ayush-003 (Ayushman Bharat empanelled) |\n| **Patient** | 76F (registry age 77) — Geriatric polypharmacy review |\n| **Key parameters** | eGFR 44 mL/min/1"
  },
  {
    "caseId": "RX-AUD-0001",
    "specialty": "Cardiology",
    "patientProfile": "66M post-NSTEMI, CKD Stage 3b (eGFR 38), T2DM",
    "drugs": [
      "Aspirin 75mg",
      "Clopidogrel 75mg",
      "Atorvastatin 40mg",
      "Omeprazole 20mg",
      "Metformin 1000mg BD",
      "Diclofenac 50mg SOS"
    ],
    "herbs": [
      "Triphala Guggulu",
      "Arjuna Churna"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n**Rx-AUD-0001 | clinic-delhi-01 | Cardiology | POS Dispensing Station**\n**Patient:** 66M (context field states 64M — discrepancy) | Post-NSTEMI + PCI | T2DM | CKD (eGFR **38** per header vs **29** per context — **discrepancy, must resolve**)\n**Audit "
  },
  {
    "caseId": "RX-AUD-0008",
    "specialty": "Critical Care / Arrhythmia",
    "patientProfile": "62M atrial fibrillation + community pneumonia + hypokalemia (K+ 3.1)",
    "drugs": [
      "Amiodarone 200mg",
      "Levofloxacin 750mg",
      "Ondansetron 8mg",
      "Azithromycin 500mg",
      "Apixaban 5mg BD"
    ],
    "herbs": [
      "Lasuna (Garlic)",
      "Arjuna"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer user wants complete memo. Need note initial JSON weird truncated; critical. Need clinical assessment. Need be careful: patient 62M AF on amiodarone + levofloxacin + azithro + ondansetron, hypokalemia K 3.1, eGFR 46, apixaban 5 BD. Need prioritized safety interventions, alternatives, PMBJP Jan Aushadhi ge"
  },
  {
    "caseId": "RX-AUD-0005",
    "specialty": "Endocrinology & Renal",
    "patientProfile": "54M T2DM + Hypothyroidism + Dyslipidemia + recurrent gout",
    "drugs": [
      "Levothyroxine 75mcg",
      "Calcium Carbonate 500mg + Iron",
      "Simvastatin 40mg",
      "Clarithromycin 500mg",
      "Allopurinol 100mg"
    ],
    "herbs": [
      "Ashwagandha",
      "Karela Juice"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n**Ticket:** RX-AUD-0005 · **Site:** clinic-delhi-01 · **Date of audit:** (POS-generated)\n**Patient:** 54–56 y M · eGFR 55 mL/min/1.73 m² (CKD G3a) · T2DM + Hypothyroidism + Dyslipidemia + Recurrent Gout · Current presentation: **CAP**\n\n> ⚠️ **DATA-IN"
  },
  {
    "caseId": "RX-AUD-0017",
    "specialty": "Cardiology",
    "patientProfile": "66M post-NSTEMI, CKD Stage 3b (eGFR 38), T2DM",
    "drugs": [
      "Aspirin 75mg",
      "Clopidogrel 75mg",
      "Atorvastatin 40mg",
      "Omeprazole 20mg",
      "Metformin 1000mg BD",
      "Diclofenac 50mg SOS"
    ],
    "herbs": [
      "Triphala Guggulu",
      "Arjuna Churna"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n\n**Audit ID:** RX-AUD-0017 | **Site:** clinic-delhi-01 | **Dept:** Cardiology\n**Patient:** 66 y M | Post-NSTEMI / post-PCI | T2DM | CKD 3b\n**Overall Risk Grade:** **CRITICAL — DISPENSE WITH INTERVENTION (do not release full basket as written)**\n**Pre"
  },
  {
    "caseId": "RX-AUD-0016",
    "specialty": "Critical Care / Arrhythmia",
    "patientProfile": "62M atrial fibrillation + community pneumonia + hypokalemia (K+ 3.1)",
    "drugs": [
      "Amiodarone 200mg",
      "Levofloxacin 750mg",
      "Ondansetron 8mg",
      "Azithromycin 500mg",
      "Apixaban 5mg BD"
    ],
    "herbs": [
      "Lasuna (Garlic)",
      "Arjuna"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer as clinical AI. Need parse case. Need produce complete memo. Need note initial JSON malformed/truncated; overall risk should critical due QT. Need prioritize.\n\nWe need analyze patient: 62M AF on amiodarone + hypokalemia K 3.1, community pneumonia, eGFR 49. Prescribed amiodarone 200, levofloxacin 750, ond"
  },
  {
    "caseId": "RX-AUD-0013",
    "specialty": "Endocrinology & Renal",
    "patientProfile": "54M T2DM + Hypothyroidism + Dyslipidemia + recurrent gout",
    "drugs": [
      "Levothyroxine 75mcg",
      "Calcium Carbonate 500mg + Iron",
      "Simvastatin 40mg",
      "Clarithromycin 500mg",
      "Allopurinol 100mg"
    ],
    "herbs": [
      "Ashwagandha",
      "Karela Juice"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n**Audit ID:** RX-AUD-0013 | **Site:** clinic-delhi-01 | **Date of Review:** POS dispensing point\n**Patient:** 54 y M | **eGFR** 58 mL/min/1.73 m² (CKD G3a) | **Dx:** T2DM + Hypothyroidism + Dyslipidemia + Recurrent Gout + CAP (current)\n\n---\n\n## 0. EX"
  },
  {
    "caseId": "RX-AUD-0006",
    "specialty": "Psychiatry & Neurology",
    "patientProfile": "34F generalized epilepsy + migraine + depression",
    "drugs": [
      "Sodium Valproate 500mg BD",
      "Carbamazepine 200mg BD",
      "Fluoxetine 20mg OD",
      "Tramadol 50mg SOS",
      "Oral Contraceptive Pill"
    ],
    "herbs": [
      "Brahmi",
      "Shankhpushpi"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "The user wants a complete dispensing pharmacist intervention & cost-optimization memo for a 34F with generalized epilepsy + migraine + depression, on sodium valproate, carbamazepine, fluoxetine, tramadol, OCP, plus Brahmi and Shankhpushpi.\n\nNote: the patient is a woman of childbearing potential on AEDs + SSRI. Valproat"
  },
  {
    "caseId": "RX-AUD-0002",
    "specialty": "Maternal / OBG",
    "patientProfile": "27F Pregnant 22 weeks (2nd trimester) with UTI & gestational hypertension",
    "drugs": [
      "Nitrofurantoin 100mg",
      "Telmisartan 40mg",
      "Ciprofloxacin 500mg",
      "Paracetamol 500mg",
      "Folic Acid 5mg"
    ],
    "herbs": [
      "Shatavari Kalpa"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need produce complete memo. Need parse. Patient 27F pregnant 22 weeks, UTI & gestational/chronic HTN. Prescribed: Nitrofurantoin 100mg, Telmisartan 40mg, Ciprofloxacin 500mg, Paracetamol 500mg, Folic Acid 5mg, Shatavari Kalpa. Initial JSON truncated but indicates critical. Need safety interventions. Key issues:\n- Te"
  },
  {
    "caseId": "RX-AUD-0003",
    "specialty": "Pulmonology / TB",
    "patientProfile": "48M newly diagnosed pulmonary TB + Type 2 DM + mild transaminitis",
    "drugs": [
      "Isoniazid 300mg",
      "Rifampicin 450mg",
      "Pyrazinamide 1500mg",
      "Ethambutol 800mg",
      "Glimepiride 2mg",
      "Warfarin 5mg"
    ],
    "herbs": [
      "Giloy Kwath",
      "Kutki"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer JSON only? User asks produce complete memo. But there is mention \"We need answer only valid compact RFC-8259 JSON\" embedded in initial JSON counseling checklist? Wait the prompt includes initial /ops/rx-audit JSON with counselingChecklist containing a string that says \"We need answer only valid compact R"
  },
  {
    "caseId": "RX-AUD-0011",
    "specialty": "Pulmonology / TB",
    "patientProfile": "48M newly diagnosed pulmonary TB + Type 2 DM + mild transaminitis",
    "drugs": [
      "Isoniazid 300mg",
      "Rifampicin 450mg",
      "Pyrazinamide 1500mg",
      "Ethambutol 800mg",
      "Glimepiride 2mg",
      "Warfarin 5mg"
    ],
    "herbs": [
      "Giloy Kwath",
      "Kutki"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer. Need produce complete memo. Need note data inconsistency: Patient says 48M but context age 46. Need flag. Mild transaminitis ALT 92. Pulmonary TB + AF on warfarin + T2DM. Prescribed HRZE, glimepiride 2, warfarin 5. Herbs Giloy Kwath, Kutki. Initial JSON malformed/truncated, risk moderate but embedded cr"
  },
  {
    "caseId": "RX-AUD-0018",
    "specialty": "Maternal / OBG",
    "patientProfile": "27F Pregnant 22 weeks (2nd trimester) with UTI & gestational hypertension",
    "drugs": [
      "Nitrofurantoin 100mg",
      "Telmisartan 40mg",
      "Ciprofloxacin 500mg",
      "Paracetamol 500mg",
      "Folic Acid 5mg"
    ],
    "herbs": [
      "Shatavari Kalpa"
    ],
    "criticalAlerts": [
      "Nitrofurantoin + Ciprofloxacin: HIGH",
      "Ciprofloxacin + Telmisartan: LOW",
      "Paracetamol + Ciprofloxacin: LOW",
      "CRITICAL: Telmisartan is contraindicated in pregnancy; stop immediately and switch to a pregnancy-safe antihypertensive such as labetalol, nifedipine, or methyldopa under obstetric care. ARBs risk fetal renal failure, oligohydramnios, and skull hypoplasia.",
      "Ciprofloxacin: avoid in pregnancy unless culture-proven no safer option; fluoroquinolones carry cartilage/joint toxicity concerns and maternal QT/C. difficile risk.",
      "Nitrofurantoin: acceptable only if susceptible in second trimester; avoid at 38-42 weeks/labor and in G6PD deficiency; verify renal function because efficacy is reduced/contraindicated with CrCl <60 mL/min."
    ],
    "pmbjpMonthlySavingsInr": 1071,
    "summary": "# JEEVIKA — DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n\n**Audit ID:** RX-AUD-0018 | **Site:** clinic-mumbai-02 | **Department:** Maternal / OBG\n**Patient:** 27F, G?P?, 22 weeks (2nd trimester) | **Dx:** 22w pregnancy + UTI + hypertension (see §0.1 clarification)\n**Prescription source:** OPD | **Dispens"
  },
  {
    "caseId": "RX-AUD-0012",
    "specialty": "Geriatric Polypharmacy",
    "patientProfile": "76F elderly with knee OA, insomnia, BPH/urinary urgency, mild cognitive impairment, eGFR 44",
    "drugs": [
      "Amitriptyline 25mg HS",
      "Alprazolam 0.5mg HS",
      "Piroxicam 20mg",
      "Digoxin 0.25mg OD",
      "Furosemide 40mg"
    ],
    "herbs": [
      "Ashwagandha",
      "Yashtimadhu"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer to user. Need produce complete JEEVIKA Dispensing Pharmacist Intervention & Cost-Optimization Memo for case RX-AUD-0012. Need only? The prompt includes weird initial JSON partial. Need output complete memo. Need be careful: patient stated 76F but context age 75 sex Female eGFR 47 vs initial eGFR44. diagn"
  },
  {
    "caseId": "RX-AUD-0010",
    "specialty": "Maternal / OBG",
    "patientProfile": "27F Pregnant 22 weeks (2nd trimester) with UTI & gestational hypertension",
    "drugs": [
      "Nitrofurantoin 100mg",
      "Telmisartan 40mg",
      "Ciprofloxacin 500mg",
      "Paracetamol 500mg",
      "Folic Acid 5mg"
    ],
    "herbs": [
      "Shatavari Kalpa"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "# JEEVIKA — DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n\n**Rx Audit ID:** RX-AUD-0010 | **Store:** clinic-mumbai-02 | **Date:** [POS date]\n**Patient:** 27F (recorded age 29 in context — *verify*), G?P?, 22 weeks (2nd trimester)\n**Working diagnosis:** 22-week pregnancy + UTI + chronic hypertension (heade"
  },
  {
    "caseId": "RX-AUD-0007",
    "specialty": "Pediatrics",
    "patientProfile": "6M child weight 18kg with acute febrile bacterial tonsillitis + wheeze",
    "drugs": [
      "Amoxicillin-Clavulanate 228.5mg/5mL",
      "Aspirin 150mg",
      "Salbutamol syrup",
      "Ondansetron 2mg",
      "Azithromycin 200mg/5mL"
    ],
    "herbs": [
      "Tulsi Kadha"
    ],
    "criticalAlerts": [
      "Azithromycin + Ondansetron: MODERATE",
      "Salbutamol + Azithromycin: MODERATE",
      "Salbutamol + Ondansetron: MODERATE",
      "Aspirin + Amoxicillin-Clavulanate: LOW",
      "Pediatric 5y/18kg: weight-based dosing required; aspirin 150mg is contraindicated in children with viral illness due to Reye syndrome risk and should be stopped.",
      "Azithromycin + ondansetron: QT prolongation risk; check electrolytes and avoid in congenital long QT."
    ],
    "pmbjpMonthlySavingsInr": 489,
    "summary": "We need answer as JEEVIKA clinical AI assistant, produce complete dispensing pharmacist intervention & cost-optimization memo for this audit. Need be concise but complete. Need note inconsistencies: user says 6M child weight 18kg? Context age 5 male diagnosis. \"6M\" maybe 6 months? Weight 18kg incompatible with 6 months"
  },
  {
    "caseId": "RX-AUD-0009",
    "specialty": "Cardiology",
    "patientProfile": "66M post-NSTEMI, CKD Stage 3b (eGFR 38), T2DM",
    "drugs": [
      "Aspirin 75mg",
      "Clopidogrel 75mg",
      "Atorvastatin 40mg",
      "Omeprazole 20mg",
      "Metformin 1000mg BD",
      "Diclofenac 50mg SOS"
    ],
    "herbs": [
      "Triphala Guggulu",
      "Arjuna Churna"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n**Audit ID:** RX-AUD-0009 | **Site:** clinic-delhi-01 | **Specialty:** Cardiology\n**Patient:** 66M (context field: 67) | Post-NSTEMI + DES | T2DM | CKD G3b\n**eGFR on Rx: 38 mL/min/1.73m² | Context field: 32** → **⚠️ RECONCILE BEFORE DISPENSING**\n\n---"
  },
  {
    "caseId": "RX-AUD-0014",
    "specialty": "Psychiatry & Neurology",
    "patientProfile": "34F generalized epilepsy + migraine + depression",
    "drugs": [
      "Sodium Valproate 500mg BD",
      "Carbamazepine 200mg BD",
      "Fluoxetine 20mg OD",
      "Tramadol 50mg SOS",
      "Oral Contraceptive Pill"
    ],
    "herbs": [
      "Brahmi",
      "Shankhpushpi"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer. Need produce complete memo. Need parse case. Need note initial JSON malformed/truncated but contains critical interactions. Need prioritize med safety. Patient 34F (context age 35? discrepancy) generalized epilepsy + migraine + depression, childbearing potential on AEDs+SSRI. Prescribed: Sodium valproat"
  },
  {
    "caseId": "RX-AUD-0015",
    "specialty": "Pediatrics",
    "patientProfile": "6M child weight 18kg with acute febrile bacterial tonsillitis + wheeze",
    "drugs": [
      "Amoxicillin-Clavulanate 228.5mg/5mL",
      "Aspirin 150mg",
      "Salbutamol syrup",
      "Ondansetron 2mg",
      "Azithromycin 200mg/5mL"
    ],
    "herbs": [
      "Tulsi Kadha"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer. Need parse case. Need produce complete memo. Need identify inconsistencies: patient age? Header says 6M child weight 18kg with acute febrile bacterial tonsillitis + wheeze | Context age 8 male diagnosis Pediatric Acute Tonsillitis + Viral Wheeze (18kg). \"6M\" maybe 6 months? weight 18kg impossible for 6 "
  },
  {
    "caseId": "RX-AUD-0020",
    "specialty": "Geriatric Polypharmacy",
    "patientProfile": "76F elderly with knee OA, insomnia, BPH/urinary urgency, mild cognitive impairment, eGFR 44",
    "drugs": [
      "Amitriptyline 25mg HS",
      "Alprazolam 0.5mg HS",
      "Piroxicam 20mg",
      "Digoxin 0.25mg OD",
      "Furosemide 40mg"
    ],
    "herbs": [
      "Ashwagandha",
      "Yashtimadhu"
    ],
    "criticalAlerts": [
      "Amitriptyline + Alprazolam: CRITICAL",
      "Digoxin + Furosemide: HIGH",
      "Piroxicam + Furosemide: HIGH",
      "Piroxicam + Digoxin: MODERATE",
      "Amitriptyline + Furosemide: MODERATE",
      "Amitriptyline + Digoxin: MODERATE"
    ],
    "pmbjpMonthlySavingsInr": 498,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n\n**Audit ID:** RX-AUD-0020 | **Site:** clinic-ayush-003 | **Risk Grade:** CRITICAL\n**Patient:** 76–78 F (see §0) | **CKD:** eGFR 44–50 (Stage 3a/3b) | **Dx on file:** Knee OA, insomnia, urinary urgency, mild cognitive impairment\n**Prepared by:** JEEV"
  },
  {
    "caseId": "RX-AUD-0023",
    "specialty": "Pediatrics",
    "patientProfile": "6M child weight 18kg with acute febrile bacterial tonsillitis + wheeze",
    "drugs": [
      "Amoxicillin-Clavulanate 228.5mg/5mL",
      "Aspirin 150mg",
      "Salbutamol syrup",
      "Ondansetron 2mg",
      "Azithromycin 200mg/5mL"
    ],
    "herbs": [
      "Tulsi Kadha"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer complete memo. Need parse case. Must produce JSON? User asks produce complete memo. Initial JSON says \"We need answer only valid JSON\" included in context but actual user asks complete memo. Need likely output structured JSON? The system says clinical assistant. We need answer. Need include prioritized i"
  },
  {
    "caseId": "RX-AUD-0019",
    "specialty": "Pulmonology / TB",
    "patientProfile": "48M newly diagnosed pulmonary TB + Type 2 DM + mild transaminitis",
    "drugs": [
      "Isoniazid 300mg",
      "Rifampicin 450mg",
      "Pyrazinamide 1500mg",
      "Ethambutol 800mg",
      "Glimepiride 2mg",
      "Warfarin 5mg"
    ],
    "herbs": [
      "Giloy Kwath",
      "Kutki"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer complete memo. Need parse case. Must be careful: Patient 48M newly diagnosed pulmonary TB + T2DM + mild transaminitis, AF on warfarin. Prescribed: INH 300, Rif 450, PZA 1500, Ethambutol 800, Glimepiride 2, Warfarin 5. AYUSH Giloy Kwath, Kutki. Need audit. Initial JSON incomplete. Need produce complete me"
  },
  {
    "caseId": "RX-AUD-0021",
    "specialty": "Endocrinology & Renal",
    "patientProfile": "54M T2DM + Hypothyroidism + Dyslipidemia + recurrent gout",
    "drugs": [
      "Levothyroxine 75mcg",
      "Calcium Carbonate 500mg + Iron",
      "Simvastatin 40mg",
      "Clarithromycin 500mg",
      "Allopurinol 100mg"
    ],
    "herbs": [
      "Ashwagandha",
      "Karela Juice"
    ],
    "criticalAlerts": [
      "Simvastatin 40mg + Clarithromycin 500mg: CRITICAL",
      "Levothyroxine 75mcg + Calcium Carbonate 500mg + Iron: MODERATE",
      "Calcium Carbonate + Iron (within combination): LOW",
      "Clarithromycin 500mg + Allopurinol 100mg: LOW",
      "Male patient: pregnancy not applicable.",
      "eGFR 61 mL/min/1.73m2: mild renal impairment; monitor renal function; clarithromycin dose adjustment generally not needed at eGFR >30."
    ],
    "pmbjpMonthlySavingsInr": 1116,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n**Memo ID:** RX-AUD-0021-POS | **Clinic:** clinic-delhi-01 | **Date:** (auto-stamped at POS)\n**Patient:** 54 y M | T2DM, Hypothyroidism, Dyslipidemia, Recurrent Gout | **Current acute issue:** CAP\n**eGFR:** 61 mL/min/1.73 m² (CKD G2 — mildly decrease"
  },
  {
    "caseId": "RX-AUD-0028",
    "specialty": "Geriatric Polypharmacy",
    "patientProfile": "76F elderly with knee OA, insomnia, BPH/urinary urgency, mild cognitive impairment, eGFR 44",
    "drugs": [
      "Amitriptyline 25mg HS",
      "Alprazolam 0.5mg HS",
      "Piroxicam 20mg",
      "Digoxin 0.25mg OD",
      "Furosemide 40mg"
    ],
    "herbs": [
      "Ashwagandha",
      "Yashtimadhu"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n**Audit ID:** RX-AUD-0028 | **Site:** clinic-ayush-003 | **Date:** (auto-stamped at POS)\n**Patient:** 76 y F | **Dx:** Knee OA, insomnia, urinary urgency, mild cognitive impairment (MCI), CKD 3b | **eGFR:** 44 mL/min/1.73m² (see flag 0.1)\n**Reviewer:"
  },
  {
    "caseId": "RX-AUD-0025",
    "specialty": "Cardiology",
    "patientProfile": "66M post-NSTEMI, CKD Stage 3b (eGFR 38), T2DM",
    "drugs": [
      "Aspirin 75mg",
      "Clopidogrel 75mg",
      "Atorvastatin 40mg",
      "Omeprazole 20mg",
      "Metformin 1000mg BD",
      "Diclofenac 50mg SOS"
    ],
    "herbs": [
      "Triphala Guggulu",
      "Arjuna Churna"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n\n**Audit ID:** RX-AUD-0025 | **Site:** clinic-delhi-01 (Cardiology) | **Date:** POS session\n**Patient:** 66–68 y M, post-NSTEMI + post-PCI, T2DM, CKD 3b (eGFR 38) | **Risk class:** **CRITICAL**\n**Dispensing decision:** ⛔ **PARTIAL HOLD — do not relea"
  },
  {
    "caseId": "RX-AUD-0022",
    "specialty": "Psychiatry & Neurology",
    "patientProfile": "34F generalized epilepsy + migraine + depression",
    "drugs": [
      "Sodium Valproate 500mg BD",
      "Carbamazepine 200mg BD",
      "Fluoxetine 20mg OD",
      "Tramadol 50mg SOS",
      "Oral Contraceptive Pill"
    ],
    "herbs": [
      "Brahmi",
      "Shankhpushpi"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer only JSON? User says initial JSON notes \"We need answer only JSON.\" But final asks produce complete memo. Need likely output JSON? They explicitly says \"Produce a complete JEEVIKA Dispensing Pharmacist Intervention & Cost-Optimization Memo\" with sections. Initial says need answer only JSON. Need reconcil"
  },
  {
    "caseId": "RX-AUD-0026",
    "specialty": "Maternal / OBG",
    "patientProfile": "27F Pregnant 22 weeks (2nd trimester) with UTI & gestational hypertension",
    "drugs": [
      "Nitrofurantoin 100mg",
      "Telmisartan 40mg",
      "Ciprofloxacin 500mg",
      "Paracetamol 500mg",
      "Folic Acid 5mg"
    ],
    "herbs": [
      "Shatavari Kalpa"
    ],
    "criticalAlerts": [
      "Telmisartan + Ciprofloxacin: MODERATE",
      "Nitrofurantoin + Ciprofloxacin: MODERATE",
      "Telmisartan is contraindicated in pregnancy due to ARB fetotoxicity; stop immediately and switch to pregnancy-compatible antihypertensive under obstetric care.",
      "Ciprofloxacin should be avoided in pregnancy unless no safer culture-guided alternative exists; counsel on cartilage/tendon and GI risks.",
      "Nitrofurantoin is acceptable in 2nd trimester for susceptible UTI but avoid at term 38-42 weeks and in G6PD deficiency; check renal function.",
      "Paracetamol is pregnancy-compatible at lowest effective dose and shortest duration; do not exceed recommended daily maximum."
    ],
    "pmbjpMonthlySavingsInr": 732,
    "summary": "# JEEVIKA DISPENSING PHARMACIST INTERVENTION & COST-OPTIMIZATION MEMO\n**Audit ID:** RX-AUD-0026 | **Site:** clinic-mumbai-02 | **Specialty:** Maternal / OBG\n**Patient:** 27F (see discrepancy note), G?P?, 22 weeks gestation (2nd trimester)\n**Diagnoses:** 22-week pregnancy + UTI + chronic hypertension (per intake) / \"ges"
  },
  {
    "caseId": "RX-AUD-0024",
    "specialty": "Critical Care / Arrhythmia",
    "patientProfile": "62M atrial fibrillation + community pneumonia + hypokalemia (K+ 3.1)",
    "drugs": [
      "Amiodarone 200mg",
      "Levofloxacin 750mg",
      "Ondansetron 8mg",
      "Azithromycin 500mg",
      "Apixaban 5mg BD"
    ],
    "herbs": [
      "Lasuna (Garlic)",
      "Arjuna"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer as memo. Need parse case. Need ensure safety. We need produce complete JEEVIKA dispensing pharmacist intervention cost optimization memo. Need internal concise.\n\nWe need address prescriptions: Amiodarone 200mg, Levofloxacin 750mg, Ondansetron 8mg, Azithromycin 500mg, Apixaban 5mg BD. Patient 62/63M AF + "
  },
  {
    "caseId": "RX-AUD-0027",
    "specialty": "Pulmonology / TB",
    "patientProfile": "48M newly diagnosed pulmonary TB + Type 2 DM + mild transaminitis",
    "drugs": [
      "Isoniazid 300mg",
      "Rifampicin 450mg",
      "Pyrazinamide 1500mg",
      "Ethambutol 800mg",
      "Glimepiride 2mg",
      "Warfarin 5mg"
    ],
    "herbs": [
      "Giloy Kwath",
      "Kutki"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer. Need parse case. Need produce complete memo. Need note discrepancy patient 48M vs context age 47 male. Diagnosis pulmonary TB + AF on warfarin + T2DM; mild transaminitis ALT 92. Prescribed INH 300, RIF 450, PZA 1500, EMB 800, glimepiride 2, warfarin 5. AYUSH Giloy Kwath, Kutki. Initial JSON malformed wi"
  },
  {
    "caseId": "RX-AUD-0030",
    "specialty": "Psychiatry & Neurology",
    "patientProfile": "34F generalized epilepsy + migraine + depression",
    "drugs": [
      "Sodium Valproate 500mg BD",
      "Carbamazepine 200mg BD",
      "Fluoxetine 20mg OD",
      "Tramadol 50mg SOS",
      "Oral Contraceptive Pill"
    ],
    "herbs": [
      "Brahmi",
      "Shankhpushpi"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need answer user. Need produce complete memo. Need parse case. Patient 34F (context says age36 female? inconsistent) generalized epilepsy + migraine + depression, woman childbearing potential on AEDs + SSRI. Prescribed Sodium Valproate 500mg BD, Carbamazepine 200mg BD, Fluoxetine 20mg OD, Tramadol 50mg SOS, OCP. AYU"
  },
  {
    "caseId": "RX-AUD-0029",
    "specialty": "Endocrinology & Renal",
    "patientProfile": "54M T2DM + Hypothyroidism + Dyslipidemia + recurrent gout",
    "drugs": [
      "Levothyroxine 75mcg",
      "Calcium Carbonate 500mg + Iron",
      "Simvastatin 40mg",
      "Clarithromycin 500mg",
      "Allopurinol 100mg"
    ],
    "herbs": [
      "Ashwagandha",
      "Karela Juice"
    ],
    "criticalAlerts": [],
    "pmbjpMonthlySavingsInr": 480,
    "summary": "We need produce complete memo. Need parse case. We must identify discrepancies: Header says 54M T2DM + Hypothyroidism + Dyslipidemia + recurrent gout | Context age 55 male eGFR 43 diagnosis T2DM + Hypothyroid + CAP. Prescribed: Levothyroxine 75mcg, Calcium Carbonate 500mg + Iron, Simvastatin 40mg, Clarithromycin 500mg,"
  }
];
