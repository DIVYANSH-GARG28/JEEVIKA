// AUTO-CURATED & VERIFIED VIA JEEVIKA /api/v1/documents/analyze & Covexcode diagnostics (bx-live...df3fb3)
// Generated at: 2026-11-27T13:03:18.130Z

export interface LabBiomarkerReference {
  panel: string;
  testName: string;
  loincLikeCode: string;
  unit: string;
  adultMaleRange: string;
  adultFemaleRange: string;
  criticalLow: string;
  criticalHigh: string;
  highMeaning: string;
  lowMeaning: string;
  preAnalyticalPitfall: string;
}

export interface LabPanelBenchmark {
  caseId: string;
  panelType: string;
  patientProfile: string;
  keyFindings: string[];
  criticalPanicFlag: boolean;
  clinicalImpression: string;
  confirmatoryTests: string[];
}

export const LAB_BIOMARKER_CATALOG: LabBiomarkerReference[] = [
  {
    "panel": "Complete Blood Count (CBC) & Peripheral Smear",
    "testName": "Hemoglobin (Hb)",
    "loincLikeCode": "LOINC-718-7",
    "unit": "g/dL",
    "adultMaleRange": "13.0 - 17.0",
    "adultFemaleRange": "12.0 - 15.5",
    "criticalLow": "< 7.0",
    "criticalHigh": "> 20.0",
    "highMeaning": "Hemoconcentration, dehydration, polycythemia vera, chronic hypoxia, smoking, high altitude",
    "lowMeaning": "Iron deficiency, anemia of chronic disease, blood loss, hemolysis, marrow suppression, nutritional deficiency",
    "preAnalyticalPitfall": "Hemolysis, lipemia, IV fluid dilution, prolonged tourniquet, EDTA dilution from underfilled tube"
  },
  {
    "panel": "Complete Blood Count (CBC) & Peripheral Smear",
    "testName": "Total Leukocyte Count (TLC)",
    "loincLikeCode": "LOINC-6690-2",
    "unit": "cells/µL",
    "adultMaleRange": "4,000 - 11,000",
    "adultFemaleRange": "4,000 - 11,000",
    "criticalLow": "< 2,000",
    "criticalHigh": "> 30,000",
    "highMeaning": "Bacterial infection, inflammation, leukemia, steroids, stress, smoking, myeloproliferative disorder",
    "lowMeaning": "Viral infection, marrow failure, chemotherapy, autoimmune neutropenia, severe sepsis, drug-induced",
    "preAnalyticalPitfall": "EDTA-induced platelet clumping, delayed processing, cold agglutinins, underfilled EDTA tube"
  },
  {
    "panel": "Complete Blood Count (CBC) & Peripheral Smear",
    "testName": "Platelet Count",
    "loincLikeCode": "LOINC-777-3",
    "unit": "cells/µL",
    "adultMaleRange": "150,000 - 450,000",
    "adultFemaleRange": "150,000 - 450,000",
    "criticalLow": "< 50,000",
    "criticalHigh": "> 1,000,000",
    "highMeaning": "Reactive thrombocytosis, infection, inflammation, iron deficiency, splenectomy, myeloproliferative neoplasm",
    "lowMeaning": "Dengue, ITP, DIC, marrow suppression, hypersplenism, drug-induced, sepsis",
    "preAnalyticalPitfall": "EDTA-induced pseudothrombocytopenia due to platelet clumping, delayed smear, giant platelets, clot in tube"
  },
  {
    "panel": "Complete Blood Count (CBC) & Peripheral Smear",
    "testName": "Red Blood Cell Count (RBC)",
    "loincLikeCode": "LOINC-789-8",
    "unit": "million/µL",
    "adultMaleRange": "4.5 - 5.9",
    "adultFemaleRange": "4.1 - 5.3",
    "criticalLow": "< 2.0",
    "criticalHigh": "> 7.0",
    "highMeaning": "Polycythemia vera, chronic hypoxia, dehydration, smoking, high altitude, erythropoietin excess",
    "lowMeaning": "Anemia, blood loss, hemolysis, marrow failure, nutritional deficiency, chronic kidney disease",
    "preAnalyticalPitfall": "Dehydration/hemoconcentration, IV fluid dilution, prolonged storage, agglutination affecting impedance counts"
  },
  {
    "panel": "Complete Blood Count (CBC) & Peripheral Smear",
    "testName": "Packed Cell Volume (PCV)/Hematocrit",
    "loincLikeCode": "LOINC-4544-3",
    "unit": "%",
    "adultMaleRange": "40 - 52",
    "adultFemaleRange": "36 - 46",
    "criticalLow": "< 20",
    "criticalHigh": "> 60",
    "highMeaning": "Dehydration, polycythemia, chronic hypoxia, burns, diuretic use, high altitude",
    "lowMeaning": "Anemia, hemorrhage, hemodilution, pregnancy, marrow suppression, hemolysis",
    "preAnalyticalPitfall": "Improper centrifugation, trapped plasma, lipemia, IV fluid dilution, prolonged tourniquet"
  },
  {
    "panel": "Complete Blood Count (CBC) & Peripheral Smear",
    "testName": "Mean Corpuscular Volume (MCV)",
    "loincLikeCode": "LOINC-787-2",
    "unit": "fL",
    "adultMaleRange": "80 - 100",
    "adultFemaleRange": "80 - 100",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Vitamin B12/folate deficiency, hypothyroidism, liver disease, reticulocytosis, alcohol use",
    "lowMeaning": "Iron deficiency, thalassemia, anemia of chronic disease, sideroblastic anemia",
    "preAnalyticalPitfall": "RBC agglutination, marked hyperglycemia, delayed processing, improper sample mixing"
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Total Bilirubin",
    "loincLikeCode": "LOINC-1975-2",
    "unit": "mg/dL",
    "adultMaleRange": "0.3 - 1.2",
    "adultFemaleRange": "0.3 - 1.2",
    "criticalLow": "N/A",
    "criticalHigh": "> 15.0",
    "highMeaning": "Hemolysis, hepatitis, biliary obstruction, cirrhosis, drug-induced liver injury, Gilbert syndrome",
    "lowMeaning": "Usually not clinically significant; may occur with dilutional states",
    "preAnalyticalPitfall": "Hemolysis falsely elevates bilirubin; prolonged light exposure degrades bilirubin"
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Direct Bilirubin",
    "loincLikeCode": "LOINC-1968-7",
    "unit": "mg/dL",
    "adultMaleRange": "0.0 - 0.3",
    "adultFemaleRange": "0.0 - 0.3",
    "criticalLow": "N/A",
    "criticalHigh": "> 5.0",
    "highMeaning": "Cholestasis, biliary obstruction, hepatocellular injury, Dubin-Johnson syndrome",
    "lowMeaning": "Usually not clinically significant",
    "preAnalyticalPitfall": "Hemolysis and lipemia interfere; delayed processing can alter results"
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "SGPT (ALT)",
    "loincLikeCode": "LOINC-1742-6",
    "unit": "U/L",
    "adultMaleRange": "7 - 56",
    "adultFemaleRange": "7 - 45",
    "criticalLow": "N/A",
    "criticalHigh": "> 500",
    "highMeaning": "Hepatocellular injury, NAFLD, viral hepatitis, alcohol, drug toxicity, cholestasis",
    "lowMeaning": "Pyridoxine deficiency, uremia, advanced cirrhosis, frailty",
    "preAnalyticalPitfall": "Hemolysis can interfere; EDTA contamination and delayed serum separation affect results"
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "SGOT (AST)",
    "loincLikeCode": "LOINC-1920-8",
    "unit": "U/L",
    "adultMaleRange": "10 - 40",
    "adultFemaleRange": "10 - 32",
    "criticalLow": "N/A",
    "criticalHigh": "> 500",
    "highMeaning": "Hepatocellular injury, alcohol-related liver disease, rhabdomyolysis, hemolysis, cardiac/muscle injury",
    "lowMeaning": "Pyridoxine deficiency, chronic dialysis, advanced liver disease",
    "preAnalyticalPitfall": "Hemolysis falsely elevates AST; delayed separation and muscle injury from venepuncture can raise values"
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Alkaline Phosphatase (ALP)",
    "loincLikeCode": "LOINC-6768-6",
    "unit": "U/L",
    "adultMaleRange": "40 - 129",
    "adultFemaleRange": "35 - 104",
    "criticalLow": "N/A",
    "criticalHigh": "> 1000",
    "highMeaning": "Cholestasis, biliary obstruction, bone disease, pregnancy, drug-induced cholestasis",
    "lowMeaning": "Hypophosphatasia, malnutrition, hypothyroidism, zinc/magnesium deficiency",
    "preAnalyticalPitfall": "EDTA or citrate contamination lowers ALP; lipemia and hemolysis interfere"
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Serum Albumin",
    "loincLikeCode": "LOINC-1751-7",
    "unit": "g/dL",
    "adultMaleRange": "3.5 - 5.0",
    "adultFemaleRange": "3.5 - 5.0",
    "criticalLow": "< 2.0",
    "criticalHigh": "N/A",
    "highMeaning": "Dehydration, hemoconcentration, prolonged tourniquet use",
    "lowMeaning": "Chronic liver disease, nephrotic syndrome, malnutrition, inflammation, protein-losing enteropathy",
    "preAnalyticalPitfall": "Prolonged tourniquet or standing increases albumin; hemolysis and lipemia interfere"
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "TSH (Ultrasensitive)",
    "loincLikeCode": "LOINC-3016-3",
    "unit": "mIU/L",
    "adultMaleRange": "0.4 - 4.0",
    "adultFemaleRange": "0.4 - 4.0",
    "criticalLow": "< 0.01",
    "criticalHigh": "> 50.0",
    "highMeaning": "Primary hypothyroidism, subclinical hypothyroidism, TSH adenoma, recovery phase of non-thyroidal illness",
    "lowMeaning": "Hyperthyroidism, central hypothyroidism, levothyroxine overtreatment, first-trimester pregnancy",
    "preAnalyticalPitfall": "Biotin supplements and heterophile antibodies cause falsely low TSH; diurnal variation and late-morning sampling affect results"
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Free T4 (FT4)",
    "loincLikeCode": "LOINC-3024-7",
    "unit": "ng/dL",
    "adultMaleRange": "0.8 - 1.8",
    "adultFemaleRange": "0.8 - 1.8",
    "criticalLow": "< 0.4",
    "criticalHigh": "> 4.0",
    "highMeaning": "Graves disease, toxic multinodular goiter, thyroiditis, levothyroxine excess",
    "lowMeaning": "Primary hypothyroidism, central hypothyroidism, severe non-thyroidal illness",
    "preAnalyticalPitfall": "Biotin interference, pregnancy/estrogen-induced binding protein changes, hemolysis, and delayed sample separation"
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Free T3 (FT3)",
    "loincLikeCode": "LOINC-3051-0",
    "unit": "pg/mL",
    "adultMaleRange": "2.3 - 4.2",
    "adultFemaleRange": "2.3 - 4.2",
    "criticalLow": "< 1.0",
    "criticalHigh": "> 10.0",
    "highMeaning": "Graves disease, T3 toxicosis, toxic nodular goiter, thyroid hormone ingestion",
    "lowMeaning": "Hypothyroidism, non-thyroidal illness, starvation, corticosteroid use",
    "preAnalyticalPitfall": "Biotin interference, heparin therapy, delayed processing, and severe non-thyroidal illness falsely lower FT3"
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Anti-Thyroid Peroxidase Antibody (Anti-TPO)",
    "loincLikeCode": "LOINC-8099-7",
    "unit": "IU/mL",
    "adultMaleRange": "< 34",
    "adultFemaleRange": "< 34",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Hashimoto thyroiditis, Graves disease, postpartum thyroiditis, autoimmune thyroid disease",
    "lowMeaning": "Non-autoimmune thyroid disease; does not exclude thyroid autoimmunity",
    "preAnalyticalPitfall": "Hemolysis and lipemia interfere; no fasting required but avoid biotin-containing supplements before testing"
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Anti-Thyroglobulin Antibody (Anti-Tg)",
    "loincLikeCode": "LOINC-8098-9",
    "unit": "IU/mL",
    "adultMaleRange": "< 40",
    "adultFemaleRange": "< 40",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Hashimoto thyroiditis, Graves disease, autoimmune thyroiditis; interferes with thyroglobulin immunoassays",
    "lowMeaning": "Non-autoimmune thyroid disease; absence does not rule out autoimmune thyroid disease",
    "preAnalyticalPitfall": "Hemolysis and lipemia interfere; anti-Tg antibodies can falsely lower or elevate thyroglobulin results depending on assay"
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "TSH Receptor Antibody (TRAb)",
    "loincLikeCode": "LOINC-3033-8",
    "unit": "IU/L",
    "adultMaleRange": "< 1.75",
    "adultFemaleRange": "< 1.75",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Graves disease, neonatal thyrotoxicosis, Graves orbitopathy, relapse risk after antithyroid therapy",
    "lowMeaning": "Non-Graves thyrotoxicosis; low risk of Graves disease",
    "preAnalyticalPitfall": "Biotin supplements and hemolysis can interfere; no fasting required but sample should be processed promptly"
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Serum Creatinine",
    "loincLikeCode": "LOINC-2160-0",
    "unit": "mg/dL",
    "adultMaleRange": "0.7 - 1.3",
    "adultFemaleRange": "0.6 - 1.1",
    "criticalLow": "< 0.3",
    "criticalHigh": "> 5.0",
    "highMeaning": "Acute kidney injury, chronic kidney disease, dehydration/pre-renal azotemia, urinary obstruction, rhabdomyolysis, nephrotoxic drugs",
    "lowMeaning": "Reduced muscle mass/cachexia, pregnancy, advanced liver disease, low-protein states, overhydration",
    "preAnalyticalPitfall": "Jaffe method interference from glucose, ketones, bilirubin, and proteins; delayed serum separation and EDTA contamination can falsely alter results"
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Blood Urea",
    "loincLikeCode": "LOINC-22664-7",
    "unit": "mg/dL",
    "adultMaleRange": "15 - 45",
    "adultFemaleRange": "15 - 40",
    "criticalLow": "< 10",
    "criticalHigh": "> 100",
    "highMeaning": "Pre-renal azotemia/dehydration, renal failure, urinary obstruction, upper GI bleeding, high protein intake, catabolic states",
    "lowMeaning": "Severe liver disease, low protein intake/malnutrition, pregnancy, overhydration, SIADH",
    "preAnalyticalPitfall": "Delayed separation and hemolysis can raise ammonia/urea; high protein meal or GI bleed affects interpretation; EDTA/fluoride contamination"
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Serum Uric Acid",
    "loincLikeCode": "LOINC-3084-1",
    "unit": "mg/dL",
    "adultMaleRange": "3.5 - 7.2",
    "adultFemaleRange": "2.6 - 6.0",
    "criticalLow": "N/A",
    "criticalHigh": "> 12.0",
    "highMeaning": "Gout/hyperuricemia, renal impairment, tumor lysis syndrome, diuretic use, obesity/metabolic syndrome, purine-rich diet",
    "lowMeaning": "Fanconi syndrome, severe liver disease, SIADH, pregnancy, uricosuric drugs, malnutrition",
    "preAnalyticalPitfall": "Hemolysis releases intracellular uric acid; delayed separation and EDTA contamination falsely elevate; recent purine-rich meal affects levels"
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Serum Sodium",
    "loincLikeCode": "LOINC-2951-2",
    "unit": "mmol/L",
    "adultMaleRange": "135 - 145",
    "adultFemaleRange": "135 - 145",
    "criticalLow": "< 120",
    "criticalHigh": "> 160",
    "highMeaning": "Dehydration, diabetes insipidus, osmotic diuresis, hyperaldosteronism, excessive hypertonic saline",
    "lowMeaning": "SIADH, diuretics, heart failure, cirrhosis, adrenal insufficiency, excessive hypotonic fluids",
    "preAnalyticalPitfall": "Pseudohyponatremia with severe hyperlipidemia/hyperproteinemia; EDTA contamination lowers sodium; IV-line sample dilution"
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Serum Potassium",
    "loincLikeCode": "LOINC-2823-3",
    "unit": "mmol/L",
    "adultMaleRange": "3.5 - 5.0",
    "adultFemaleRange": "3.5 - 5.0",
    "criticalLow": "< 2.5",
    "criticalHigh": "> 6.5",
    "highMeaning": "Renal failure, metabolic acidosis, hemolysis, ACE inhibitors/ARBs, potassium-sparing diuretics, adrenal insufficiency",
    "lowMeaning": "Vomiting, diarrhea, diuretics, insulin therapy, metabolic alkalosis, hyperaldosteronism",
    "preAnalyticalPitfall": "Hemolysis falsely raises potassium; EDTA contamination raises potassium; prolonged tourniquet/fist clenching and delayed separation cause pseudohyperkalemia"
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Serum Chloride",
    "loincLikeCode": "LOINC-2075-0",
    "unit": "mmol/L",
    "adultMaleRange": "98 - 107",
    "adultFemaleRange": "98 - 107",
    "criticalLow": "< 80",
    "criticalHigh": "> 120",
    "highMeaning": "Dehydration, hyperchloremic metabolic acidosis, excessive normal saline, renal tubular acidosis, diarrhea",
    "lowMeaning": "Vomiting, diuretics, metabolic alkalosis, SIADH, heart failure, adrenal insufficiency",
    "preAnalyticalPitfall": "EDTA contamination lowers chloride; delayed separation and bicarbonate shifts affect results; hyperlipidemia/hyperproteinemia can cause analytical interference"
  },
  {
    "panel": "Glycemic Control (FBG, PPBG, HbA1c, C-Peptide)",
    "testName": "Fasting Plasma Glucose (FPG)",
    "loincLikeCode": "LOINC-1558-6",
    "unit": "mg/dL",
    "adultMaleRange": "70 - 99",
    "adultFemaleRange": "70 - 99",
    "criticalLow": "< 50",
    "criticalHigh": "> 400",
    "highMeaning": "Diabetes mellitus, prediabetes, stress hyperglycemia, steroid therapy, Cushing syndrome, acute illness/sepsis, pancreatitis.",
    "lowMeaning": "Insulinoma, adrenal insufficiency, hypopituitarism, sepsis, starvation, insulin or sulfonylurea overdose.",
    "preAnalyticalPitfall": "Non-fasting sample; delayed separation without fluoride oxalate tube causes glycolysis and falsely low glucose."
  },
  {
    "panel": "Glycemic Control (FBG, PPBG, HbA1c, C-Peptide)",
    "testName": "2-Hour Postprandial Plasma Glucose (PPBG)",
    "loincLikeCode": "LOINC-1521-4",
    "unit": "mg/dL",
    "adultMaleRange": "70 - 139",
    "adultFemaleRange": "70 - 139",
    "criticalLow": "< 50",
    "criticalHigh": "> 400",
    "highMeaning": "Diabetes mellitus, impaired glucose tolerance, postprandial hyperglycemia, stress, steroid therapy, acute illness.",
    "lowMeaning": "Reactive hypoglycemia, insulinoma, adrenal insufficiency, insulin/sulfonylurea excess, prolonged fasting.",
    "preAnalyticalPitfall": "Incorrect timing after meal or non-standard glucose load; non-fasting/random sample mislabeled as 2-hour postprandial."
  },
  {
    "panel": "Glycemic Control (FBG, PPBG, HbA1c, C-Peptide)",
    "testName": "HbA1c (Glycated Hemoglobin)",
    "loincLikeCode": "LOINC-4548-4",
    "unit": "%",
    "adultMaleRange": "4.0 - 5.6",
    "adultFemaleRange": "4.0 - 5.6",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Poorly controlled diabetes, prediabetes, chronic hyperglycemia; falsely high in iron/B12 deficiency, uremia, alcohol use, splenectomy.",
    "lowMeaning": "Hemolysis, blood loss, pregnancy, recent transfusion, hemoglobinopathies, chronic liver disease; falsely low with shortened RBC survival.",
    "preAnalyticalPitfall": "Hemolyzed sample, hemoglobin variants, recent blood transfusion, iron deficiency, pregnancy, or improper EDTA mixing."
  },
  {
    "panel": "Glycemic Control (FBG, PPBG, HbA1c, C-Peptide)",
    "testName": "C-Peptide (Fasting)",
    "loincLikeCode": "LOINC-1986-9",
    "unit": "ng/mL",
    "adultMaleRange": "0.8 - 3.1",
    "adultFemaleRange": "0.8 - 3.1",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Insulin resistance, obesity, type 2 diabetes, insulinoma, renal impairment, sulfonylurea use.",
    "lowMeaning": "Type 1 diabetes, long-standing type 2 diabetes with beta-cell failure, pancreatectomy, exogenous insulin factitious disorder.",
    "preAnalyticalPitfall": "Non-fasting sample; hemolysis; delayed separation; renal impairment alters clearance and falsely elevates C-peptide."
  },
  {
    "panel": "Glycemic Control (FBG, PPBG, HbA1c, C-Peptide)",
    "testName": "Fasting Serum Insulin",
    "loincLikeCode": "LOINC-1556-0",
    "unit": "µIU/mL",
    "adultMaleRange": "2.6 - 24.9",
    "adultFemaleRange": "2.6 - 24.9",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Insulin resistance, obesity, metabolic syndrome, PCOS, type 2 diabetes, insulinoma, exogenous insulin.",
    "lowMeaning": "Type 1 diabetes, beta-cell failure, hypopituitarism, starvation, exogenous insulin with suppressed endogenous secretion.",
    "preAnalyticalPitfall": "Non-fasting sample; hemolysis; delayed separation; improper handling causes falsely low insulin."
  },
  {
    "panel": "Glycemic Control (FBG, PPBG, HbA1c, C-Peptide)",
    "testName": "Serum Fructosamine",
    "loincLikeCode": "LOINC-15069-8",
    "unit": "µmol/L",
    "adultMaleRange": "205 - 285",
    "adultFemaleRange": "205 - 285",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Uncontrolled diabetes/hyperglycemia over prior 2–3 weeks; renal failure; falsely high with hyperlipidemia or hemolysis.",
    "lowMeaning": "Hypoglycemia, hypoalbuminemia, protein-losing states, hyperthyroidism, recent effective glucose control.",
    "preAnalyticalPitfall": "Hemolysis, lipemia, low albumin, delayed separation; result reflects 2–3 week glycemia and is unreliable in albumin disorders."
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "C-Reactive Protein (CRP), Quantitative",
    "loincLikeCode": "LOINC-1988-5",
    "unit": "mg/dL",
    "adultMaleRange": "0.0 - 0.5",
    "adultFemaleRange": "0.0 - 0.5",
    "criticalLow": "N/A",
    "criticalHigh": ">10.0",
    "highMeaning": "Acute bacterial infection, systemic inflammation, tissue injury, autoimmune flare",
    "lowMeaning": "No defined clinical significance; very low values are normal",
    "preAnalyticalPitfall": "Mild hemolysis/lipemia can interfere; single value is nonspecific—trend with clinical context"
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Erythrocyte Sedimentation Rate (ESR), Westergren",
    "loincLikeCode": "LOINC-4537-7",
    "unit": "mm/hr",
    "adultMaleRange": "0 - 15",
    "adultFemaleRange": "0 - 20",
    "criticalLow": "N/A",
    "criticalHigh": ">100",
    "highMeaning": "Infection, inflammation, malignancy, anemia, pregnancy, autoimmune disease",
    "lowMeaning": "Polycythemia, sickle cell disease, severe leukocytosis, hypofibrinogenemia",
    "preAnalyticalPitfall": "Age/sex/anemia affect results; delay >2 hours, temperature, and tube tilt falsely alter ESR"
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Procalcitonin (PCT), Quantitative",
    "loincLikeCode": "LOINC-33959-8",
    "unit": "ng/mL",
    "adultMaleRange": "<0.05",
    "adultFemaleRange": "<0.05",
    "criticalLow": "N/A",
    "criticalHigh": ">10.0",
    "highMeaning": "Bacterial sepsis/severe infection, systemic inflammation, medullary thyroid carcinoma, renal impairment",
    "lowMeaning": "Viral or localized infection; no bacterial sepsis; antibiotics may suppress levels",
    "preAnalyticalPitfall": "Delayed processing/hemolysis interferes; antibiotics can lower; renal dysfunction falsely raises"
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Uric Acid, Serum",
    "loincLikeCode": "LOINC-3084-1",
    "unit": "mg/dL",
    "adultMaleRange": "3.5 - 7.2",
    "adultFemaleRange": "2.6 - 6.0",
    "criticalLow": "<2.0",
    "criticalHigh": ">12.0",
    "highMeaning": "Gout/hyperuricemia, renal impairment, tumor lysis, diuretics, alcohol, purine-rich diet",
    "lowMeaning": "SIADH, Fanconi syndrome, xanthinuria, uricosurics, low purine intake",
    "preAnalyticalPitfall": "Non-fasting/purine/alcohol intake; delayed separation and hemolysis can falsely alter urate"
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Calcium, Total, Serum",
    "loincLikeCode": "LOINC-17861-6",
    "unit": "mg/dL",
    "adultMaleRange": "8.6 - 10.2",
    "adultFemaleRange": "8.6 - 10.2",
    "criticalLow": "<7.0",
    "criticalHigh": ">12.0",
    "highMeaning": "Primary hyperparathyroidism, malignancy, vitamin D excess, immobilization",
    "lowMeaning": "Hypoparathyroidism, vitamin D deficiency, CKD, hypoalbuminemia (total calcium)",
    "preAnalyticalPitfall": "EDTA contamination falsely lowers; prolonged tourniquet/hemolysis; albumin-corrected calcium needed"
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "25-Hydroxy Vitamin D (25-OH Vit D), Total",
    "loincLikeCode": "LOINC-1989-3",
    "unit": "ng/mL",
    "adultMaleRange": "30 - 100",
    "adultFemaleRange": "30 - 100",
    "criticalLow": "<10",
    "criticalHigh": ">100",
    "highMeaning": "Supplement toxicity, granulomatous disease, lymphoma",
    "lowMeaning": "Deficiency from low sun exposure, malabsorption, CKD/liver disease, obesity",
    "preAnalyticalPitfall": "Season/sun exposure/supplementation and assay variability; lipemia/hemolysis interfere"
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Serum Gamma Glutamyl Transferase (GGT)",
    "loincLikeCode": "LOINC-2324-2",
    "unit": "U/L",
    "adultMaleRange": "8 - 61",
    "adultFemaleRange": "5 - 36",
    "criticalLow": "N/A",
    "criticalHigh": "> 1000",
    "highMeaning": "Cholestasis, biliary obstruction, alcohol use, fatty liver, drug-induced liver injury, pancreatic disease.",
    "lowMeaning": "Usually not clinically significant; rare in hypopituitarism or severe malnutrition.",
    "preAnalyticalPitfall": "Alcohol intake and non-fasting status affect results; avoid EDTA plasma and delayed serum separation."
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Serum Total Bile Acids (Fasting)",
    "loincLikeCode": "LOINC-14628-1",
    "unit": "µmol/L",
    "adultMaleRange": "0 - 10",
    "adultFemaleRange": "0 - 10",
    "criticalLow": "N/A",
    "criticalHigh": "> 40",
    "highMeaning": "Intrahepatic cholestasis, biliary obstruction, intrahepatic cholestasis of pregnancy, PFIC, severe hepatocellular dysfunction.",
    "lowMeaning": "Usually not clinically significant; may occur with ileal malabsorption or impaired bile acid synthesis.",
    "preAnalyticalPitfall": "Non-fasting sample falsely elevates bile acids; use fasting serum and avoid hemolysis."
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Serum Ceruloplasmin",
    "loincLikeCode": "LOINC-2157-8",
    "unit": "mg/dL",
    "adultMaleRange": "20 - 50",
    "adultFemaleRange": "22 - 55",
    "criticalLow": "< 10",
    "criticalHigh": "N/A",
    "highMeaning": "Acute-phase response, estrogen/oral contraceptive use, pregnancy, cholestasis, lymphoma.",
    "lowMeaning": "Wilson disease, copper deficiency, nephrotic syndrome, protein-losing enteropathy, severe liver failure.",
    "preAnalyticalPitfall": "Estrogen, pregnancy, and inflammation falsely elevate; avoid EDTA and use serum separated promptly."
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Serum Alpha-1 Antitrypsin",
    "loincLikeCode": "LOINC-1834-1",
    "unit": "mg/dL",
    "adultMaleRange": "90 - 200",
    "adultFemaleRange": "90 - 200",
    "criticalLow": "< 50",
    "criticalHigh": "N/A",
    "highMeaning": "Acute-phase/inflammatory response, pregnancy, oral contraceptive use, malignancy.",
    "lowMeaning": "Hereditary alpha-1 antitrypsin deficiency, neonatal hepatitis, early-onset emphysema, severe liver disease.",
    "preAnalyticalPitfall": "Acute illness falsely elevates as an acute-phase reactant; avoid hemolysis and delayed serum separation."
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Plasma Ammonia",
    "loincLikeCode": "LOINC-16362-6",
    "unit": "µg/dL",
    "adultMaleRange": "15 - 45",
    "adultFemaleRange": "15 - 45",
    "criticalLow": "N/A",
    "criticalHigh": "> 100",
    "highMeaning": "Hepatic encephalopathy, acute liver failure, cirrhosis, urea cycle disorders, valproate toxicity, GI bleed.",
    "lowMeaning": "Usually not clinically significant; rare with severe malnutrition or urea cycle defects.",
    "preAnalyticalPitfall": "Delayed separation, hemolysis, prolonged tourniquet, and exercise falsely elevate; collect on ice and process rapidly."
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "Serum Lactate Dehydrogenase (LDH)",
    "loincLikeCode": "LOINC-2532-0",
    "unit": "U/L",
    "adultMaleRange": "140 - 280",
    "adultFemaleRange": "140 - 280",
    "criticalLow": "N/A",
    "criticalHigh": "> 1000",
    "highMeaning": "Hepatocellular injury, hemolysis, ischemia/infarction, malignancy, muscle injury, megaloblastic anemia.",
    "lowMeaning": "Usually not clinically significant; rare with genetic LDH deficiency.",
    "preAnalyticalPitfall": "Hemolysis falsely elevates markedly; avoid EDTA and separate serum promptly."
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Serum Ferritin",
    "loincLikeCode": "LOINC-2276-4",
    "unit": "ng/mL",
    "adultMaleRange": "30 - 400",
    "adultFemaleRange": "13 - 150",
    "criticalLow": "< 15",
    "criticalHigh": "> 1000",
    "highMeaning": "Iron overload/hemochromatosis, inflammation/acute-phase reaction, liver disease, malignancy, HLH",
    "lowMeaning": "Iron deficiency, depleted iron stores, chronic blood loss, pregnancy",
    "preAnalyticalPitfall": "Acute inflammation/infection falsely raises ferritin; hemolysis; recent iron therapy; not fasting-dependent"
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Serum Iron",
    "loincLikeCode": "LOINC-2498-4",
    "unit": "µg/dL",
    "adultMaleRange": "65 - 175",
    "adultFemaleRange": "50 - 170",
    "criticalLow": "N/A",
    "criticalHigh": "> 300",
    "highMeaning": "Iron poisoning/overload, hemochromatosis, hemolysis, hepatitis, repeated transfusions",
    "lowMeaning": "Iron deficiency, anemia of chronic disease/inflammation, blood loss, pregnancy",
    "preAnalyticalPitfall": "Diurnal variation (higher AM), recent iron supplements/iron-rich meal, hemolysis falsely high, EDTA contamination"
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Total Iron Binding Capacity (TIBC)",
    "loincLikeCode": "LOINC-2500-7",
    "unit": "µg/dL",
    "adultMaleRange": "250 - 450",
    "adultFemaleRange": "250 - 450",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Iron deficiency, pregnancy, oral contraceptives/estrogen use",
    "lowMeaning": "Anemia of chronic disease, malnutrition, nephrotic syndrome, liver disease",
    "preAnalyticalPitfall": "Serum separator tube contamination, hemolysis, recent iron therapy; non-fasting sample can alter result"
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Vitamin B12 (Cobalamin)",
    "loincLikeCode": "LOINC-2132-9",
    "unit": "pg/mL",
    "adultMaleRange": "200 - 900",
    "adultFemaleRange": "200 - 900",
    "criticalLow": "< 100",
    "criticalHigh": "N/A",
    "highMeaning": "Supplementation, liver disease, myeloproliferative disorders, renal failure, leukemia",
    "lowMeaning": "Megaloblastic anemia, pernicious anemia, vegetarian diet, ileal disease, metformin/PPI use",
    "preAnalyticalPitfall": "Recent B12 injection/supplement falsely high; serum B12 has poor sensitivity in deficiency; hemolysis; EDTA contamination if not serum"
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Serum Folate",
    "loincLikeCode": "LOINC-2284-8",
    "unit": "ng/mL",
    "adultMaleRange": "3.0 - 17.0",
    "adultFemaleRange": "3.0 - 17.0",
    "criticalLow": "< 2.0",
    "criticalHigh": "N/A",
    "highMeaning": "Folate supplementation, recent fortified diet, B12 deficiency (masked), hemolysis",
    "lowMeaning": "Megaloblastic anemia, pregnancy, alcohol use, malabsorption, methotrexate/antifolate therapy",
    "preAnalyticalPitfall": "Serum folate fluctuates with recent diet; hemolysis falsely high; ideally fasting; RBC folate more reliable; EDTA contamination"
  },
  {
    "panel": "Arterial / Venous Blood Gas (ABG/VBG) & Lactate",
    "testName": "Arterial Blood pH",
    "loincLikeCode": "LOINC-2744-1",
    "unit": "pH units",
    "adultMaleRange": "7.35 - 7.45",
    "adultFemaleRange": "7.35 - 7.45",
    "criticalLow": "< 7.20",
    "criticalHigh": "> 7.60",
    "highMeaning": "Alkalemia: respiratory alkalosis (hyperventilation, pain, hypoxia, sepsis, PE, salicylate) or metabolic alkalosis (vomiting, diuretics, alkali excess).",
    "lowMeaning": "Acidemia: respiratory acidosis (COPD, hypoventilation, sedation, neuromuscular weakness) or metabolic acidosis (DKA, lactic acidosis, renal failure, diarrhea).",
    "preAnalyticalPitfall": "Delay in analysis, air bubbles, inadequate heparinization, or venous admixture can falsely alter pH."
  },
  {
    "panel": "Arterial / Venous Blood Gas (ABG/VBG) & Lactate",
    "testName": "Arterial pCO2",
    "loincLikeCode": "LOINC-2019-8",
    "unit": "mm Hg",
    "adultMaleRange": "35 - 45",
    "adultFemaleRange": "35 - 45",
    "criticalLow": "< 20",
    "criticalHigh": "> 60",
    "highMeaning": "Hypercapnia/hypoventilation: COPD, airway obstruction, sedatives/opioids, neuromuscular weakness, obesity hypoventilation, severe asthma.",
    "lowMeaning": "Hyperventilation: anxiety/pain, hypoxia, sepsis, pulmonary embolism, early salicylate toxicity, pregnancy, high altitude.",
    "preAnalyticalPitfall": "Air bubbles lower pCO2; delayed processing or metabolic CO2 production raises pCO2."
  },
  {
    "panel": "Arterial / Venous Blood Gas (ABG/VBG) & Lactate",
    "testName": "Arterial pO2",
    "loincLikeCode": "LOINC-2703-7",
    "unit": "mm Hg",
    "adultMaleRange": "80 - 100",
    "adultFemaleRange": "80 - 100",
    "criticalLow": "< 40",
    "criticalHigh": "N/A",
    "highMeaning": "Supplemental oxygen therapy or hyperbaric oxygen; not usually pathologic unless unintended hyperoxia.",
    "lowMeaning": "Hypoxemia: V/Q mismatch, shunt, hypoventilation, low inspired O2, pulmonary edema/ARDS, pneumonia, PE, asthma/COPD exacerbation.",
    "preAnalyticalPitfall": "Air bubbles falsely raise pO2; delayed analysis and inadequate mixing lower pO2; venous sample gives falsely low pO2."
  },
  {
    "panel": "Arterial / Venous Blood Gas (ABG/VBG) & Lactate",
    "testName": "Bicarbonate (HCO3-)",
    "loincLikeCode": "LOINC-1963-8",
    "unit": "mEq/L",
    "adultMaleRange": "22 - 26",
    "adultFemaleRange": "22 - 26",
    "criticalLow": "< 10",
    "criticalHigh": "> 40",
    "highMeaning": "Metabolic alkalosis: vomiting/nasogastric loss, diuretics, hypokalemia, mineralocorticoid excess, alkali administration; compensatory in chronic respiratory acidosis.",
    "lowMeaning": "Metabolic acidosis: DKA, lactic acidosis, renal failure, diarrhea, renal tubular acidosis, shock; compensatory in chronic respiratory alkalosis.",
    "preAnalyticalPitfall": "Usually calculated from pH and pCO2; air bubbles/delay alter pH and pCO2 and therefore calculated HCO3-."
  },
  {
    "panel": "Arterial / Venous Blood Gas (ABG/VBG) & Lactate",
    "testName": "Lactate (Blood)",
    "loincLikeCode": "LOINC-2524-7",
    "unit": "mmol/L",
    "adultMaleRange": "0.5 - 2.2",
    "adultFemaleRange": "0.5 - 2.2",
    "criticalLow": "N/A",
    "criticalHigh": "> 4.0",
    "highMeaning": "Tissue hypoperfusion/hypoxia: shock, sepsis, ischemia, heart failure, seizures, severe anemia, malignancy, liver failure, metformin toxicity, alcohol.",
    "lowMeaning": "Rarely clinically significant; may be seen with low tissue metabolism or sample dilution.",
    "preAnalyticalPitfall": "Prolonged tourniquet use, fist clenching, delayed processing, hemolysis, or EDTA contamination falsely raise lactate."
  },
  {
    "panel": "Arterial / Venous Blood Gas (ABG/VBG) & Lactate",
    "testName": "Oxygen Saturation (SaO2)",
    "loincLikeCode": "LOINC-2708-6",
    "unit": "%",
    "adultMaleRange": "95 - 100",
    "adultFemaleRange": "95 - 100",
    "criticalLow": "< 85",
    "criticalHigh": "N/A",
    "highMeaning": "Supplemental oxygen or hyperbaric oxygen; generally not pathologic.",
    "lowMeaning": "Hypoxemia: respiratory failure, V/Q mismatch, shunt, pulmonary edema/ARDS, pneumonia, PE, COPD/asthma exacerbation; anemia lowers O2 content but not SaO2.",
    "preAnalyticalPitfall": "Air bubbles and delay alter blood gas values; pulse oximetry may be falsely normal in CO poisoning or methemoglobinemia."
  },
  {
    "panel": "Lipid Profile & ASCVD Risk Biomarkers",
    "testName": "Apolipoprotein A1 (ApoA1)",
    "loincLikeCode": "LOINC-1869-8",
    "unit": "mg/dL",
    "adultMaleRange": "95 - 175",
    "adultFemaleRange": "100 - 200",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Estrogen use, exercise, alcohol, pregnancy, familial hyperalphalipoproteinemia; generally favorable.",
    "lowMeaning": "Increased ASCVD risk, diabetes, smoking, obesity, inflammation, Tangier disease, liver disease.",
    "preAnalyticalPitfall": "Hemolysis and lipemia can interfere; non-fasting sample acceptable but must be documented."
  },
  {
    "panel": "Lipid Profile & ASCVD Risk Biomarkers",
    "testName": "Apolipoprotein B (ApoB)",
    "loincLikeCode": "LOINC-1884-7",
    "unit": "mg/dL",
    "adultMaleRange": "55 - 120",
    "adultFemaleRange": "50 - 110",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Familial hypercholesterolemia, metabolic syndrome, diabetes, nephrotic syndrome, hypothyroidism; atherogenic.",
    "lowMeaning": "Abetalipoproteinemia, malnutrition, hyperthyroidism, advanced liver disease, sepsis.",
    "preAnalyticalPitfall": "Non-fasting acceptable; marked lipemia or delayed serum separation can bias results."
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Thyroid Stimulating Hormone (TSH), Serum",
    "loincLikeCode": "LOINC-3016-3",
    "unit": "µIU/mL",
    "adultMaleRange": "0.40 - 4.50",
    "adultFemaleRange": "0.40 - 4.50",
    "criticalLow": "< 0.01",
    "criticalHigh": "> 20.0",
    "highMeaning": "Primary hypothyroidism, subclinical hypothyroidism, Hashimoto thyroiditis, recovery phase of thyroiditis, TSH-secreting adenoma, thyroid hormone resistance, non-thyroidal illness.",
    "lowMeaning": "Hyperthyroidism/Graves disease, toxic nodule, thyroiditis, central hypothyroidism, excessive levothyroxine, glucocorticoids/dopamine, non-thyroidal illness.",
    "preAnalyticalPitfall": "Diurnal variation (highest late night/early morning), biotin supplements, heterophile antibody interference, improper sample timing after levothyroxine dose; fasting not required."
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Free Triiodothyronine (FT3), Serum",
    "loincLikeCode": "LOINC-3051-0",
    "unit": "pg/mL",
    "adultMaleRange": "2.3 - 4.2",
    "adultFemaleRange": "2.0 - 4.2",
    "criticalLow": "< 1.0",
    "criticalHigh": "> 10.0",
    "highMeaning": "Graves disease/toxic nodule, T3 thyrotoxicosis, thyroiditis, excessive liothyronine/levothyroxine, assay interference.",
    "lowMeaning": "Primary or central hypothyroidism, non-thyroidal illness, starvation/low-calorie intake, severe systemic illness, drug effect.",
    "preAnalyticalPitfall": "Biotin and heterophile antibody interference in immunoassays; delayed processing/hemolysis; abnormal albumin or thyroid hormone-binding proteins can affect free hormone immunoassay."
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Free Thyroxine (FT4), Serum",
    "loincLikeCode": "LOINC-3024-7",
    "unit": "ng/dL",
    "adultMaleRange": "0.80 - 1.80",
    "adultFemaleRange": "0.80 - 1.80",
    "criticalLow": "< 0.50",
    "criticalHigh": "> 3.00",
    "highMeaning": "Graves disease/toxic nodule, thyroiditis, excessive thyroid hormone replacement, assay interference, rare TSH-secreting adenoma.",
    "lowMeaning": "Primary or central hypothyroidism, severe non-thyroidal illness, pituitary disease, drug effect.",
    "preAnalyticalPitfall": "Biotin/heterophile antibody interference, hemolysis, prolonged storage; pregnancy/estrogen alter total T4 more than FT4 but free immunoassays may still be affected by binding-protein abnormalities."
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Anti-Thyroid Peroxidase Antibody (Anti-TPO), Serum",
    "loincLikeCode": "LOINC-8099-2",
    "unit": "IU/mL",
    "adultMaleRange": "< 34",
    "adultFemaleRange": "< 34",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Hashimoto thyroiditis, Graves disease, postpartum thyroiditis, other autoimmune thyroid disease; may precede overt thyroid dysfunction.",
    "lowMeaning": "Normal/negative result; not clinically significant when reduced.",
    "preAnalyticalPitfall": "Hemolysis/lipemia and biotin or heterophile antibody interference; no fasting needed; avoid repeat testing soon after acute illness unless clinically indicated."
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Total Triiodothyronine (T3), Serum",
    "loincLikeCode": "LOINC-3053-6",
    "unit": "ng/dL",
    "adultMaleRange": "80 - 200",
    "adultFemaleRange": "80 - 200",
    "criticalLow": "< 50",
    "criticalHigh": "> 300",
    "highMeaning": "Hyperthyroidism/T3 toxicosis, thyroiditis, excessive thyroid hormone replacement, increased TBG due to pregnancy/estrogen/OCP.",
    "lowMeaning": "Hypothyroidism, central hypothyroidism, non-thyroidal illness, low TBG, starvation/malnutrition, drug effect.",
    "preAnalyticalPitfall": "Pregnancy, estrogen/OCP and other TBG changes alter total T3; biotin/heterophile interference; hemolysis and delayed separation."
  },
  {
    "panel": "Thyroid Profile (TSH, Free T3, Free T4, Anti-TPO)",
    "testName": "Total Thyroxine (T4), Serum",
    "loincLikeCode": "LOINC-3026-2",
    "unit": "µg/dL",
    "adultMaleRange": "4.5 - 12.5",
    "adultFemaleRange": "4.5 - 12.5",
    "criticalLow": "< 2.0",
    "criticalHigh": "> 15.0",
    "highMeaning": "Hyperthyroidism, thyroiditis, excessive levothyroxine, increased TBG due to pregnancy/estrogen/OCP or hepatitis.",
    "lowMeaning": "Primary or central hypothyroidism, non-thyroidal illness, low TBG, nephrotic syndrome, malnutrition, drug effect.",
    "preAnalyticalPitfall": "TBG changes with pregnancy/estrogen/OCP, illness and drugs affect total T4; biotin/heterophile interference; hemolysis and prolonged storage."
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine Protein (Dipstick/Random)",
    "loincLikeCode": "LOINC-2888-6",
    "unit": "mg/dL",
    "adultMaleRange": "Negative (0 - 15)",
    "adultFemaleRange": "Negative (0 - 15)",
    "criticalLow": "N/A",
    "criticalHigh": ">300 mg/dL",
    "highMeaning": "Glomerular proteinuria, diabetic nephropathy, hypertension, UTI, fever, pre-eclampsia, overflow proteinuria",
    "lowMeaning": "N/A; normal is negative, low values not clinically significant",
    "preAnalyticalPitfall": "Alkaline urine or contamination can cause false-positive dipstick; concentrated urine may overestimate"
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine Glucose (Dipstick)",
    "loincLikeCode": "LOINC-5792-7",
    "unit": "mg/dL",
    "adultMaleRange": "Negative (0 - 15)",
    "adultFemaleRange": "Negative (0 - 15)",
    "criticalLow": "N/A",
    "criticalHigh": ">1000 mg/dL",
    "highMeaning": "Uncontrolled diabetes mellitus, renal glycosuria, SGLT2 inhibitor use, pregnancy, Fanconi syndrome",
    "lowMeaning": "N/A; normal is negative, low values not clinically significant",
    "preAnalyticalPitfall": "Ascorbic acid, bleach, or oxidizing agents can cause false-negative/false-positive dipstick results"
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine Ketones (Dipstick)",
    "loincLikeCode": "LOINC-5934-5",
    "unit": "mg/dL",
    "adultMaleRange": "Negative (0 - 5)",
    "adultFemaleRange": "Negative (0 - 5)",
    "criticalLow": "N/A",
    "criticalHigh": ">80 mg/dL",
    "highMeaning": "Diabetic ketoacidosis, starvation ketosis, prolonged vomiting, high-fat/low-carb diet, pregnancy",
    "lowMeaning": "N/A; normal is negative, low values not clinically significant",
    "preAnalyticalPitfall": "Expired strips, delayed reading, or urine evaporation can cause false-negative results"
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine RBC (Microscopic)",
    "loincLikeCode": "LOINC-5782-8",
    "unit": "/HPF",
    "adultMaleRange": "0 - 2",
    "adultFemaleRange": "0 - 2",
    "criticalLow": "N/A",
    "criticalHigh": ">50 /HPF",
    "highMeaning": "UTI, glomerulonephritis, urolithiasis, urinary tract malignancy, trauma, anticoagulation, menstruation",
    "lowMeaning": "N/A; absence of RBCs is normal",
    "preAnalyticalPitfall": "Menstrual blood, contamination, or vigorous exercise can cause false-positive hematuria"
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine Microalbumin",
    "loincLikeCode": "LOINC-14957-5",
    "unit": "mg/L",
    "adultMaleRange": "0 - 30",
    "adultFemaleRange": "0 - 30",
    "criticalLow": "N/A",
    "criticalHigh": ">300 mg/L",
    "highMeaning": "Early diabetic nephropathy, hypertensive nephrosclerosis, glomerular disease, transient fever/exercise/UTI",
    "lowMeaning": "N/A; dilute urine can falsely lower albumin concentration",
    "preAnalyticalPitfall": "Exercise, fever, UTI, or menstruation can transiently elevate; avoid within 24 hours"
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Spot Urine Albumin/Creatinine Ratio (ACR)",
    "loincLikeCode": "LOINC-9318-7",
    "unit": "mg/g",
    "adultMaleRange": "0 - 30",
    "adultFemaleRange": "0 - 30",
    "criticalLow": "N/A",
    "criticalHigh": ">300 mg/g",
    "highMeaning": "Diabetic kidney disease, hypertensive nephropathy, glomerulonephritis, pre-eclampsia",
    "lowMeaning": "N/A; dilute urine can falsely lower ACR",
    "preAnalyticalPitfall": "Dehydration concentrates and dilute urine lowers ACR; avoid exercise, UTI, menstruation; first-morning sample preferred"
  },
  {
    "panel": "Fever & Vector-Borne Panel (Dengue NS1/IgM, Malaria, Widal, Scrub Typhus)",
    "testName": "Dengue NS1 Antigen (ELISA/Rapid)",
    "loincLikeCode": "LOINC-75377-2",
    "unit": "S/CO index",
    "adultMaleRange": "Negative: <1.0 S/CO",
    "adultFemaleRange": "Negative: <1.0 S/CO",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Acute dengue infection, typically days 1–5 of illness; may be negative in secondary dengue.",
    "lowMeaning": "Negative, very early infection, or sampling after day 5; low sensitivity in secondary dengue.",
    "preAnalyticalPitfall": "Late sampling, hemolysis, rheumatoid factor/heterophile antibodies causing false positives."
  },
  {
    "panel": "Fever & Vector-Borne Panel (Dengue NS1/IgM, Malaria, Widal, Scrub Typhus)",
    "testName": "Dengue IgM Antibody (ELISA/MAC-ELISA)",
    "loincLikeCode": "LOINC-75376-4",
    "unit": "S/CO index",
    "adultMaleRange": "Negative: <1.0 S/CO",
    "adultFemaleRange": "Negative: <1.0 S/CO",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Recent dengue infection; may cross-react with other flaviviruses such as Japanese encephalitis.",
    "lowMeaning": "Negative, too early in infection (<5 days), or no recent dengue; IgM may wane after weeks.",
    "preAnalyticalPitfall": "Collection before day 5, hemolysis, rheumatoid factor, and flavivirus cross-reactivity."
  },
  {
    "panel": "Fever & Vector-Borne Panel (Dengue NS1/IgM, Malaria, Widal, Scrub Typhus)",
    "testName": "Malaria Antigen (Pf HRP2/pLDH Rapid/ELISA)",
    "loincLikeCode": "LOINC-32700-7",
    "unit": "Qualitative",
    "adultMaleRange": "Negative",
    "adultFemaleRange": "Negative",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Positive for Plasmodium falciparum or mixed infection; HRP2 may persist for weeks after treatment.",
    "lowMeaning": "Negative does not exclude P. vivax/ovale/malariae, low parasitemia, or HRP2 gene deletion.",
    "preAnalyticalPitfall": "Rheumatoid factor/heterophile antibodies causing false positives; testing after treatment; HRP2 deletion."
  },
  {
    "panel": "Fever & Vector-Borne Panel (Dengue NS1/IgM, Malaria, Widal, Scrub Typhus)",
    "testName": "Malaria Parasite Smear (Thick & Thin Film)",
    "loincLikeCode": "LOINC-32701-5",
    "unit": "parasites/µL",
    "adultMaleRange": "No parasites seen",
    "adultFemaleRange": "No parasites seen",
    "criticalLow": "N/A",
    "criticalHigh": ">100,000 parasites/µL",
    "highMeaning": "Malaria parasitemia; high counts suggest severe falciparum malaria and treatment urgency.",
    "lowMeaning": "No parasites seen; may be early infection, low parasitemia, or prior antimalarial treatment.",
    "preAnalyticalPitfall": "Delayed smear preparation, EDTA storage, poor thick-film quality, and low parasitemia."
  },
  {
    "panel": "Fever & Vector-Borne Panel (Dengue NS1/IgM, Malaria, Widal, Scrub Typhus)",
    "testName": "Widal Test (Salmonella Typhi O & H Agglutination)",
    "loincLikeCode": "LOINC-32710-6",
    "unit": "Titer",
    "adultMaleRange": "O <1:80; H <1:160",
    "adultFemaleRange": "O <1:80; H <1:160",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Current/recent typhoid, past exposure/vaccination, or endemic baseline; cross-reacts with non-typhoidal Salmonella.",
    "lowMeaning": "Early typhoid (<7 days), prior antibiotics, or no typhoid; Widal has limited sensitivity.",
    "preAnalyticalPitfall": "Prior vaccination/exposure, antibiotics before sampling, prozone phenomenon; paired sera preferred."
  },
  {
    "panel": "Fever & Vector-Borne Panel (Dengue NS1/IgM, Malaria, Widal, Scrub Typhus)",
    "testName": "Scrub Typhus IgM Antibody (ELISA)",
    "loincLikeCode": "LOINC-48558-6",
    "unit": "S/CO index",
    "adultMaleRange": "Negative: <1.0 S/CO",
    "adultFemaleRange": "Negative: <1.0 S/CO",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Acute Orientia tsutsugamushi infection; may cross-react with other rickettsial antigens.",
    "lowMeaning": "Negative, too early in infection (<7 days), prior doxycycline, or no scrub typhus.",
    "preAnalyticalPitfall": "Sampling too early, doxycycline before testing, and rheumatoid factor/rickettsial cross-reactivity."
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "Troponin I (Cardiac)",
    "loincLikeCode": "LOINC-10839-9",
    "unit": "ng/mL",
    "adultMaleRange": "< 0.034 (hs-cTnI; assay-specific)",
    "adultFemaleRange": "< 0.016 (hs-cTnI; assay-specific)",
    "criticalLow": "N/A",
    "criticalHigh": "> 0.04 ng/mL (assay-specific; high-risk > 0.1)",
    "highMeaning": "Myocardial injury/infarction, myocarditis, pulmonary embolism, sepsis, renal failure, tachyarrhythmia, post-cardiac procedure",
    "lowMeaning": "Not clinically significant; undetectable is normal",
    "preAnalyticalPitfall": "Hemolysis, delayed centrifugation, fibrin clots, EDTA contamination, heterophile antibodies; follow assay-specific serum/plasma tube"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "BNP (B-type Natriuretic Peptide)",
    "loincLikeCode": "LOINC-30934-4",
    "unit": "pg/mL",
    "adultMaleRange": "< 100",
    "adultFemaleRange": "< 100",
    "criticalLow": "N/A",
    "criticalHigh": "> 900 (HF likely; no universal critical)",
    "highMeaning": "Heart failure, LV dysfunction, pulmonary embolism, renal impairment, advanced age, sepsis",
    "lowMeaning": "Normal/low; obesity may lower BNP and does not fully exclude heart failure",
    "preAnalyticalPitfall": "Use EDTA plasma per assay; BNP is unstable—avoid delayed processing, hemolysis, and improper tube type"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "D-Dimer",
    "loincLikeCode": "LOINC-48065-7",
    "unit": "mg/L FEU",
    "adultMaleRange": "< 0.50",
    "adultFemaleRange": "< 0.50",
    "criticalLow": "N/A",
    "criticalHigh": "No universal critical; > 5.0 suggests high thrombotic burden",
    "highMeaning": "Venous thromboembolism, pulmonary embolism, DIC, surgery, trauma, pregnancy, malignancy, infection, advanced age",
    "lowMeaning": "Normal; with low pretest probability helps exclude VTE",
    "preAnalyticalPitfall": "Underfilled citrate tube, heparin contamination, hemolysis, lipemia, delayed processing; age/pregnancy falsely elevate"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "Prothrombin Time (PT)",
    "loincLikeCode": "LOINC-5902-2",
    "unit": "seconds",
    "adultMaleRange": "11.0 - 13.5",
    "adultFemaleRange": "11.0 - 13.5",
    "criticalLow": "N/A",
    "criticalHigh": "> 20 (or INR > 5.0; bleeding risk)",
    "highMeaning": "Liver disease, vitamin K deficiency, warfarin, DIC, factor deficiency, massive transfusion",
    "lowMeaning": "Usually not clinically significant; shortened PT is rare and nonspecific",
    "preAnalyticalPitfall": "Underfilled citrate tube, heparin contamination, hemolysis, lipemia, delayed processing; wrong thromboplastin ISI affects INR"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "International Normalized Ratio (INR)",
    "loincLikeCode": "LOINC-6301-6",
    "unit": "ratio",
    "adultMaleRange": "0.8 - 1.2",
    "adultFemaleRange": "0.8 - 1.2",
    "criticalLow": "N/A",
    "criticalHigh": "> 5.0 (bleeding risk)",
    "highMeaning": "Warfarin therapy, liver disease, vitamin K deficiency, DIC, factor deficiency",
    "lowMeaning": "Usually not clinically significant; may be seen in hypercoagulable states or lab variation",
    "preAnalyticalPitfall": "Incorrect citrate tube fill, heparin contamination, lipemia, hemolysis, delayed processing; invalid if thromboplastin ISI incorrect"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "Activated Partial Thromboplastin Time (aPTT)",
    "loincLikeCode": "LOINC-3173-2",
    "unit": "seconds",
    "adultMaleRange": "25 - 35",
    "adultFemaleRange": "25 - 35",
    "criticalLow": "N/A",
    "criticalHigh": "> 70 (bleeding risk; assay-dependent)",
    "highMeaning": "Heparin therapy, factor deficiency, lupus anticoagulant, liver disease, DIC, von Willebrand disease",
    "lowMeaning": "Usually not clinically significant; shortened in acute phase, pregnancy, malignancy",
    "preAnalyticalPitfall": "Underfilled citrate tube, heparin contamination, hemolysis, lipemia, delayed processing; improper mixing/clotting"
  },
  {
    "panel": "Arterial / Venous Blood Gas (ABG/VBG) & Lactate",
    "testName": "Base Excess (BE)",
    "loincLikeCode": "LOINC-1925-7",
    "unit": "mEq/L",
    "adultMaleRange": "-2.0 - +2.0",
    "adultFemaleRange": "-2.0 - +2.0",
    "criticalLow": "< -10.0",
    "criticalHigh": "> +10.0",
    "highMeaning": "Metabolic alkalosis or alkali excess: vomiting, diuretics, hypokalemia, mineralocorticoid excess, bicarbonate therapy.",
    "lowMeaning": "Metabolic acidosis: lactic acidosis, DKA, renal failure, shock, diarrhea, toxins; base deficit severity correlates with illness.",
    "preAnalyticalPitfall": "Calculated value dependent on accurate pH/pCO2 and hemoglobin; delayed sample, air bubbles, or wrong Hb entry alters BE."
  },
  {
    "panel": "Arterial / Venous Blood Gas (ABG/VBG) & Lactate",
    "testName": "Blood Lactate",
    "loincLikeCode": "LOINC-2524-7",
    "unit": "mmol/L",
    "adultMaleRange": "0.5 - 2.2",
    "adultFemaleRange": "0.5 - 2.2",
    "criticalLow": "N/A",
    "criticalHigh": "> 4.0",
    "highMeaning": "Tissue hypoperfusion/hypoxia: sepsis, shock, cardiac failure, mesenteric ischemia, seizures, liver failure, metformin/toxins, malignancy.",
    "lowMeaning": "Usually not clinically significant; rare low values may reflect very small sample volume, severe liver dysfunction, or analytical error.",
    "preAnalyticalPitfall": "Prolonged tourniquet/exercise raises lactate; delayed processing causes RBC glycolysis and falsely high lactate; use fluoride-oxalate tube and analyze promptly."
  },
  {
    "panel": "Glycemic Control (FBG, PPBG, HbA1c, C-Peptide)",
    "testName": "Fasting Insulin",
    "loincLikeCode": "LOINC-1556-0",
    "unit": "µIU/mL",
    "adultMaleRange": "2.6 - 24.9",
    "adultFemaleRange": "2.6 - 24.9",
    "criticalLow": "< 1.0",
    "criticalHigh": "> 100",
    "highMeaning": "Insulin resistance, metabolic syndrome, type 2 diabetes, insulinoma, PCOS, exogenous insulin therapy, insulin autoantibodies",
    "lowMeaning": "Type 1 diabetes, beta-cell failure, starvation, hypopituitarism, exogenous insulin-induced hypoglycemia with suppressed endogenous secretion",
    "preAnalyticalPitfall": "Must be true 8–12 h fasting; hemolysis and delayed separation falsely lower insulin; patients on insulin therapy may show assay interference from antibodies"
  },
  {
    "panel": "Glycemic Control (FBG, PPBG, HbA1c, C-Peptide)",
    "testName": "HOMA-IR (Homeostatic Model Assessment of Insulin Resistance)",
    "loincLikeCode": "LOINC-62867-9",
    "unit": "ratio",
    "adultMaleRange": "< 2.0",
    "adultFemaleRange": "< 2.0",
    "criticalLow": "N/A",
    "criticalHigh": "> 5.0",
    "highMeaning": "Significant insulin resistance, metabolic syndrome, type 2 diabetes, NAFLD, PCOS, obesity, subclinical Cushing syndrome",
    "lowMeaning": "Enhanced insulin sensitivity, beta-cell failure with low insulin output, malnutrition, type 1 diabetes (low insulin with high glucose)",
    "preAnalyticalPitfall": "Derived index (FPG × fasting insulin ÷ 405); invalid if sample is non-fasting, hemolyzed, or if insulin assay antibodies/hemolysis distort the input values"
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Serum Sodium (Na+)",
    "loincLikeCode": "LOINC-2951-2",
    "unit": "mmol/L",
    "adultMaleRange": "135 - 145",
    "adultFemaleRange": "135 - 145",
    "criticalLow": "< 120",
    "criticalHigh": "> 160",
    "highMeaning": "Hypernatremia: dehydration, GI/renal water loss, diabetes insipidus, hypertonic saline, osmostat dysfunction.",
    "lowMeaning": "Hyponatremia: SIADH, diuretics, vomiting/diarrhea, heart/liver/renal failure, adrenal insufficiency, hyperglycemia.",
    "preAnalyticalPitfall": "IV-line saline contamination; hyperlipidemia/hyperproteinemia pseudohyponatremia; delayed separation; non-fasting not required."
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Serum Potassium (K+)",
    "loincLikeCode": "LOINC-2823-3",
    "unit": "mmol/L",
    "adultMaleRange": "3.5 - 5.0",
    "adultFemaleRange": "3.5 - 5.0",
    "criticalLow": "< 2.5",
    "criticalHigh": "> 6.5",
    "highMeaning": "Hyperkalemia: AKI/CKD, hemolysis, rhabdomyolysis, acidosis, hypoaldosteronism, ACEi/ARB/spironolactone, sample contamination.",
    "lowMeaning": "Hypokalemia: vomiting/diarrhea, diuretics, insulin/beta-agonists, hyperaldosteronism, renal tubular loss, poor intake.",
    "preAnalyticalPitfall": "Hemolysis, EDTA contamination, prolonged tourniquet/fist clenching, delayed separation, thrombocytosis/leukocytosis."
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Ionized Calcium (iCa2+)",
    "loincLikeCode": "LOINC-1994-3",
    "unit": "mmol/L",
    "adultMaleRange": "1.10 - 1.30",
    "adultFemaleRange": "1.10 - 1.30",
    "criticalLow": "< 0.80",
    "criticalHigh": "> 1.60",
    "highMeaning": "Hypercalcemia: primary hyperparathyroidism, malignancy, vitamin D toxicity, immobilization, thiazides.",
    "lowMeaning": "Hypocalcemia: hypoparathyroidism, vitamin D deficiency, sepsis, citrate toxicity, pancreatitis, alkalosis.",
    "preAnalyticalPitfall": "pH changes with air exposure; heparin/EDTA contamination; delayed processing; anaerobic collection essential."
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Serum Bicarbonate (HCO3-)",
    "loincLikeCode": "LOINC-1963-8",
    "unit": "mmol/L",
    "adultMaleRange": "22 - 26",
    "adultFemaleRange": "22 - 26",
    "criticalLow": "< 10",
    "criticalHigh": "> 40",
    "highMeaning": "Metabolic alkalosis: vomiting, diuretics, hypoaldosteronism; compensated respiratory acidosis.",
    "lowMeaning": "Metabolic acidosis: DKA, lactic acidosis, CKD/AKI, diarrhea, renal tubular acidosis; compensated respiratory alkalosis.",
    "preAnalyticalPitfall": "Air exposure loses CO2 and falsely lowers HCO3; delayed separation; improper anaerobic sample handling."
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Anion Gap (AG)",
    "loincLikeCode": "LOINC-1863-0",
    "unit": "mmol/L",
    "adultMaleRange": "8 - 16",
    "adultFemaleRange": "8 - 16",
    "criticalLow": "< 4",
    "criticalHigh": "> 20",
    "highMeaning": "High anion gap metabolic acidosis: ketoacidosis, lactic acidosis, renal failure, methanol/ethylene glycol/salicylate toxicity.",
    "lowMeaning": "Hypoalbuminemia, hypercalcemia/hypermagnesemia, lithium toxicity, laboratory error; low AG rarely critical.",
    "preAnalyticalPitfall": "Hypoalbuminemia lowers AG; K+ inclusion changes range; delayed separation raises lactate; sample contamination."
  },
  {
    "panel": "Renal Function Test (RFT) & Electrolytes",
    "testName": "Urea/Creatinine Ratio (BUN/Creatinine Ratio)",
    "loincLikeCode": "LOINC-3094-0",
    "unit": "ratio",
    "adultMaleRange": "12 - 20",
    "adultFemaleRange": "12 - 20",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Prerenal azotemia (dehydration, CHF, GI bleed), catabolic state, high protein intake, urinary obstruction.",
    "lowMeaning": "Hepatic failure, malnutrition/low protein intake, overhydration, pregnancy, SIADH.",
    "preAnalyticalPitfall": "Urea affected by protein intake/steroids; creatinine affected by muscle mass; hemolysis/delayed separation alter results; unreliable in dialysis/advanced CKD."
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Soluble Transferrin Receptor (sTfR)",
    "loincLikeCode": "LOINC-30248-9",
    "unit": "mg/L",
    "adultMaleRange": "1.8 - 4.6",
    "adultFemaleRange": "1.7 - 4.4",
    "criticalLow": "N/A",
    "criticalHigh": "> 8.0",
    "highMeaning": "Iron deficiency erythropoiesis, hemolytic anemia, increased erythropoiesis; useful to distinguish iron deficiency from anemia of chronic disease.",
    "lowMeaning": "Reduced erythropoiesis, aplastic anemia, chronic kidney disease; not usually clinically critical.",
    "preAnalyticalPitfall": "Serum preferred; hemolysis, EDTA contamination, and recent iron therapy can alter results."
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Serum Vitamin B12 (Cobalamin)",
    "loincLikeCode": "LOINC-2132-9",
    "unit": "pg/mL",
    "adultMaleRange": "200 - 900",
    "adultFemaleRange": "200 - 900",
    "criticalLow": "< 100",
    "criticalHigh": "> 2000",
    "highMeaning": "Recent B12 supplementation/injection, myeloproliferative disorders, liver disease, renal disease.",
    "lowMeaning": "Dietary deficiency, pernicious anemia, malabsorption, ileal disease, metformin/PPI use.",
    "preAnalyticalPitfall": "Recent oral/parenteral B12 falsely raises; pregnancy and low folate may lower; protect sample from light."
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Serum Methylmalonic Acid (MMA)",
    "loincLikeCode": "LOINC-13964-3",
    "unit": "µmol/L",
    "adultMaleRange": "0.00 - 0.40",
    "adultFemaleRange": "0.00 - 0.40",
    "criticalLow": "N/A",
    "criticalHigh": "> 1.0",
    "highMeaning": "Confirmed B12 deficiency, renal impairment, methylmalonic acidemia; elevated in tissue B12 deficiency even when serum B12 is borderline.",
    "lowMeaning": "Not clinically significant; rare inborn errors of metabolism.",
    "preAnalyticalPitfall": "Renal impairment falsely raises; delayed separation and hemolysis increase results; standardize fasting status."
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "RBC Folate",
    "loincLikeCode": "LOINC-2284-8",
    "unit": "ng/mL",
    "adultMaleRange": "140 - 628",
    "adultFemaleRange": "140 - 628",
    "criticalLow": "< 100",
    "criticalHigh": "N/A",
    "highMeaning": "Recent folate supplementation; not a toxicity marker; high folate may mask B12 deficiency.",
    "lowMeaning": "Folate deficiency, poor intake, malabsorption, pregnancy, alcohol use, hemolytic states.",
    "preAnalyticalPitfall": "Avoid hemolysis and recent transfusion; separate promptly; recent folate supplements falsely raise."
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Plasma Homocysteine",
    "loincLikeCode": "LOINC-13965-0",
    "unit": "µmol/L",
    "adultMaleRange": "5 - 15",
    "adultFemaleRange": "5 - 12",
    "criticalLow": "N/A",
    "criticalHigh": "> 50",
    "highMeaning": "B12/folate deficiency, chronic kidney disease, hypothyroidism, homocystinuria, MTHFR variants; thrombotic risk marker.",
    "lowMeaning": "Usually not clinically significant; may reflect supplementation or improved B-vitamin status.",
    "preAnalyticalPitfall": "EDTA plasma separated within 30 min; non-fasting, delayed processing, and hemolysis falsely raise."
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine Microalbumin (Albumin), Quantitative",
    "loincLikeCode": "LOINC-14957-5",
    "unit": "mg/L",
    "adultMaleRange": "0.0 - 20.0",
    "adultFemaleRange": "0.0 - 20.0",
    "criticalLow": "N/A",
    "criticalHigh": "> 300.0",
    "highMeaning": "Microalbuminuria 30-300 mg/g, overt albuminuria >300 mg/g; diabetic kidney disease, hypertension, glomerulonephritis, preeclampsia; transient with fever/exercise/UTI.",
    "lowMeaning": "Not clinically significant; low values may reflect dilute urine.",
    "preAnalyticalPitfall": "Transient elevation with exercise, fever, UTI, menstruation, heart failure; first-morning sample preferred."
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine Creatinine, Quantitative",
    "loincLikeCode": "LOINC-2162-6",
    "unit": "mg/dL",
    "adultMaleRange": "40 - 300",
    "adultFemaleRange": "20 - 250",
    "criticalLow": "N/A",
    "criticalHigh": "N/A",
    "highMeaning": "Concentrated urine, dehydration, high muscle mass, excessive meat intake, prerenal azotemia.",
    "lowMeaning": "Dilute urine, high fluid intake, low muscle mass, cachexia, pregnancy.",
    "preAnalyticalPitfall": "Hydration status and muscle mass affect value; overhydration lowers creatinine; enzymatic assay less affected by glucose/ketones."
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Spot Urine Albumin-to-Creatinine Ratio (UACR)",
    "loincLikeCode": "LOINC-14959-1",
    "unit": "mg/g",
    "adultMaleRange": "0 - 30",
    "adultFemaleRange": "0 - 30",
    "criticalLow": "N/A",
    "criticalHigh": "> 300",
    "highMeaning": "Microalbuminuria 30-300 mg/g; overt albuminuria >300 mg/g; diabetic kidney disease, hypertensive nephrosclerosis, glomerulonephritis, preeclampsia.",
    "lowMeaning": "Not clinically significant; very low values may reflect dilute urine.",
    "preAnalyticalPitfall": "First-morning sample preferred; avoid exercise, fever, UTI, menstruation; hydration affects creatinine and ratio."
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine Total Protein, Quantitative",
    "loincLikeCode": "LOINC-2888-6",
    "unit": "mg/dL",
    "adultMaleRange": "0 - 20",
    "adultFemaleRange": "0 - 20",
    "criticalLow": "N/A",
    "criticalHigh": "> 300",
    "highMeaning": "Glomerular proteinuria, tubular proteinuria, overflow proteinuria; nephrotic-range proteinuria when marked; UTI/vaginal contamination can cause false elevation.",
    "lowMeaning": "Not clinically significant.",
    "preAnalyticalPitfall": "False elevation from hemoglobin/myoglobin, contrast, vaginal secretions; urine pH and delayed storage affect results."
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Spot Urine Protein-to-Creatinine Ratio (UPCR)",
    "loincLikeCode": "LOINC-2890-2",
    "unit": "g/g",
    "adultMaleRange": "< 0.15",
    "adultFemaleRange": "< 0.15",
    "criticalLow": "N/A",
    "criticalHigh": "> 3.5",
    "highMeaning": "Pathological proteinuria; >0.15 g/g abnormal, >3.5 g/g suggests nephrotic-range proteinuria; glomerular or tubulointerstitial disease.",
    "lowMeaning": "Not clinically significant; dilute urine may lower ratio.",
    "preAnalyticalPitfall": "Use same spot sample as creatinine; dehydration can mask proteinuria; avoid blood contamination."
  },
  {
    "panel": "Urine Routine, Microalbumin & Spot ACR",
    "testName": "Urine Protein Electrophoresis with Immunofixation",
    "loincLikeCode": "LOINC-13979-0",
    "unit": "Interpretation",
    "adultMaleRange": "No monoclonal band",
    "adultFemaleRange": "No monoclonal band",
    "criticalLow": "N/A",
    "criticalHigh": "Monoclonal band present",
    "highMeaning": "Monoclonal gammopathy, AL amyloidosis, light-chain disease; glomerular protein pattern may indicate nephrotic proteinuria.",
    "lowMeaning": "N/A",
    "preAnalyticalPitfall": "Concentrated urine needed; avoid blood contamination; protease degradation; first-morning sample preferred."
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "High-Sensitivity C-Reactive Protein (hs-CRP)",
    "loincLikeCode": "LOINC-30522-7",
    "unit": "mg/L",
    "adultMaleRange": "0.0 - 3.0",
    "adultFemaleRange": "0.0 - 3.0",
    "criticalLow": "N/A",
    "criticalHigh": "> 10.0",
    "highMeaning": "Acute bacterial infection, autoimmune/systemic inflammation, tissue injury, malignancy; values >3.0 mg/L also indicate higher cardiovascular risk.",
    "lowMeaning": "No significant inflammation; low values are usually not clinically concerning; hepatic failure may blunt the acute-phase response.",
    "preAnalyticalPitfall": "Recent infection/inflammation, exercise, trauma or surgery can falsely elevate; hemolysis, lipemia and delayed processing may interfere."
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Procalcitonin (PCT)",
    "loincLikeCode": "LOINC-33959-8",
    "unit": "ng/mL",
    "adultMaleRange": "0.00 - 0.05",
    "adultFemaleRange": "0.00 - 0.05",
    "criticalLow": "N/A",
    "criticalHigh": "> 10.0",
    "highMeaning": "Bacterial sepsis/severe infection, septic shock, severe systemic inflammation, medullary thyroid carcinoma, renal failure; trend helps guide antibiotic response.",
    "lowMeaning": "Viral or localized infection, uncomplicated inflammation; low values do not fully exclude early bacterial sepsis.",
    "preAnalyticalPitfall": "Delayed serum/plasma separation, hemolysis, lipemia, EDTA contamination or prolonged storage can falsely alter PCT; avoid unnecessary antibiotics before sampling if interpreting."
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Ionized Calcium (iCa)",
    "loincLikeCode": "LOINC-1994-3",
    "unit": "mmol/L",
    "adultMaleRange": "1.15 - 1.33",
    "adultFemaleRange": "1.15 - 1.33",
    "criticalLow": "< 0.80",
    "criticalHigh": "> 1.60",
    "highMeaning": "Primary hyperparathyroidism, malignancy-associated hypercalcemia, vitamin D excess, acidosis; confirm with PTH and total calcium.",
    "lowMeaning": "Hypoparathyroidism, vitamin D deficiency, CKD, alkalosis, severe sepsis; correlate with albumin and total calcium.",
    "preAnalyticalPitfall": "Anaerobic collection and prompt processing required; EDTA contamination, prolonged tourniquet, pH changes and delayed separation falsely alter ionized calcium."
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "25-Hydroxy Vitamin D (25-OH Vit D)",
    "loincLikeCode": "LOINC-1989-3",
    "unit": "ng/mL",
    "adultMaleRange": "30 - 100",
    "adultFemaleRange": "30 - 100",
    "criticalLow": "< 10",
    "criticalHigh": "> 100",
    "highMeaning": "Vitamin D toxicity/excess supplementation, granulomatous disease, lymphoma; hypercalcemia risk.",
    "lowMeaning": "Vitamin D deficiency/insufficiency, malabsorption, CKD, liver disease, inadequate sun exposure.",
    "preAnalyticalPitfall": "Seasonal/sun exposure variation, hemolysis/lipemia; protect sample from light and avoid delay; fasting not required."
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "Cardiac Troponin I (cTnI)",
    "loincLikeCode": "LOINC-10839-9",
    "unit": "ng/mL",
    "adultMaleRange": "<0.04",
    "adultFemaleRange": "<0.04",
    "criticalLow": "N/A",
    "criticalHigh": ">0.50 (or above assay 99th percentile URL)",
    "highMeaning": "Myocardial injury/ACS, myocarditis, pulmonary embolism, sepsis, renal failure, demand ischemia",
    "lowMeaning": "N/A; low troponin does not exclude early ACS if sampled too early",
    "preAnalyticalPitfall": "Hemolysis, delayed serum separation, EDTA contamination, improper specimen type; use serum/heparin plasma per assay"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "B-type Natriuretic Peptide (BNP)",
    "loincLikeCode": "LOINC-30934-4",
    "unit": "pg/mL",
    "adultMaleRange": "<100",
    "adultFemaleRange": "<100",
    "criticalLow": "N/A",
    "criticalHigh": ">900",
    "highMeaning": "Heart failure/volume overload, pulmonary embolism, renal dysfunction, sepsis, advanced age",
    "lowMeaning": "Not usually critical; low BNP may occur in obesity or flash pulmonary edema",
    "preAnalyticalPitfall": "EDTA tube required; hemolysis, delayed processing, and NT-proBNP/BNP interchange can cause misinterpretation"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "D-Dimer (quantitative)",
    "loincLikeCode": "LOINC-48065-7",
    "unit": "mg/L FEU",
    "adultMaleRange": "<0.50",
    "adultFemaleRange": "<0.50",
    "criticalLow": "N/A",
    "criticalHigh": ">5.0 (assay-dependent; no universal critical threshold)",
    "highMeaning": "VTE/PE/DVT, DIC, sepsis, pregnancy, malignancy, recent surgery/trauma",
    "lowMeaning": "N/A; low D-dimer helps exclude VTE in low pretest probability",
    "preAnalyticalPitfall": "Citrate underfill/overfill, hemolysis, lipemia, delayed processing, rheumatoid factor interference, incorrect age-adjusted cutoff"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "Prothrombin Time/INR (PT/INR)",
    "loincLikeCode": "LOINC-6301-6",
    "unit": "INR ratio; PT seconds",
    "adultMaleRange": "INR 0.8-1.2 (PT 11-13.5 s)",
    "adultFemaleRange": "INR 0.8-1.2 (PT 11-13.5 s)",
    "criticalLow": "N/A",
    "criticalHigh": "INR >5.0 or PT >3x control (bleeding risk)",
    "highMeaning": "Warfarin therapy, liver failure, vitamin K deficiency, DIC, coagulopathy",
    "lowMeaning": "N/A; low INR is not usually critical",
    "preAnalyticalPitfall": "Citrate tube underfill/overfill, hematocrit >55%, wrong tube, delayed testing, heparin contamination"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "Fibrinogen",
    "loincLikeCode": "LOINC-3255-7",
    "unit": "mg/dL",
    "adultMaleRange": "200-400",
    "adultFemaleRange": "200-400",
    "criticalLow": "<100",
    "criticalHigh": ">700 (assay-dependent)",
    "highMeaning": "Acute inflammation, infection, pregnancy, malignancy, trauma, estrogen use",
    "lowMeaning": "DIC, liver failure, massive transfusion, congenital/acquired fibrinogen deficiency",
    "preAnalyticalPitfall": "Citrate underfill/overfill, delayed processing, hemolysis, lipemia"
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Transferrin Saturation (TSAT)",
    "loincLikeCode": "LOINC-2502-3",
    "unit": "%",
    "adultMaleRange": "20 - 50",
    "adultFemaleRange": "15 - 50",
    "criticalLow": "< 10",
    "criticalHigh": "> 70",
    "highMeaning": "Iron overload, hemochromatosis, iron poisoning, sideroblastic anemia, ineffective erythropoiesis",
    "lowMeaning": "Iron deficiency anemia, anemia of inflammation, CKD, chronic disease",
    "preAnalyticalPitfall": "Diurnal variation in serum iron and recent oral iron can falsely alter TSAT"
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Serum Vitamin B12",
    "loincLikeCode": "LOINC-2132-9",
    "unit": "pg/mL",
    "adultMaleRange": "200 - 900",
    "adultFemaleRange": "200 - 900",
    "criticalLow": "< 100",
    "criticalHigh": "> 2000",
    "highMeaning": "Recent B12 supplementation, liver disease, myeloproliferative disorders, renal failure, malignancy",
    "lowMeaning": "Pernicious anemia, vegetarian diet, malabsorption, ileal disease, metformin/PPI use",
    "preAnalyticalPitfall": "Recent B12 injection/supplement or hemolysis can falsely elevate B12"
  },
  {
    "panel": "Iron Studies, B12, Folate & Anemia Workup",
    "testName": "Total Iron-Binding Capacity (TIBC)",
    "loincLikeCode": "LOINC-2500-7",
    "unit": "µg/dL",
    "adultMaleRange": "250 - 450",
    "adultFemaleRange": "250 - 450",
    "criticalLow": "< 100",
    "criticalHigh": "N/A",
    "highMeaning": "Iron deficiency, pregnancy, oral contraceptive use, estrogen therapy",
    "lowMeaning": "Iron overload, anemia of inflammation, malnutrition, liver disease, nephrotic syndrome",
    "preAnalyticalPitfall": "Recent iron therapy, diurnal variation, hemolysis, or EDTA contamination can alter TIBC"
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Serum C-Reactive Protein (CRP), Quantitative",
    "loincLikeCode": "LOINC-1988-5",
    "unit": "mg/L",
    "adultMaleRange": "0.0 - 5.0",
    "adultFemaleRange": "0.0 - 5.0",
    "criticalLow": "N/A",
    "criticalHigh": "> 100.0",
    "highMeaning": "Acute bacterial infection, sepsis, major trauma/surgery, active autoimmune or inflammatory disease, tissue necrosis, malignancy.",
    "lowMeaning": "No significant inflammation; not clinically useful for exclusion of localized infection; low levels expected in healthy adults.",
    "preAnalyticalPitfall": "Hemolysis, lipemia, delayed serum separation, or improper sample storage can falsely alter CRP; use serum/plasma per lab protocol."
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Serum Procalcitonin (PCT)",
    "loincLikeCode": "LOINC-33959-8",
    "unit": "ng/mL",
    "adultMaleRange": "< 0.5",
    "adultFemaleRange": "< 0.5",
    "criticalLow": "N/A",
    "criticalHigh": "> 10.0",
    "highMeaning": "Severe bacterial sepsis/septic shock, severe pneumonia, bacterial meningitis, major systemic infection; high risk of organ dysfunction.",
    "lowMeaning": "Low likelihood of severe bacterial infection; may be low in viral infection, localized infection, or early sepsis.",
    "preAnalyticalPitfall": "Hemolysis, lipemia, delayed separation, and improper storage can falsely lower or elevate PCT; follow lab-specific collection tube requirements."
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Serum Total Calcium",
    "loincLikeCode": "LOINC-17861-6",
    "unit": "mg/dL",
    "adultMaleRange": "8.6 - 10.2",
    "adultFemaleRange": "8.6 - 10.2",
    "criticalLow": "< 6.0",
    "criticalHigh": "> 13.0",
    "highMeaning": "Primary hyperparathyroidism, malignancy, vitamin D toxicity, granulomatous disease, thyrotoxicosis, immobilization.",
    "lowMeaning": "Hypoparathyroidism, vitamin D deficiency, chronic kidney disease, pancreatitis, sepsis, massive transfusion citrate toxicity.",
    "preAnalyticalPitfall": "EDTA contamination falsely lowers calcium; prolonged tourniquet/hemoconcentration falsely raises it; albumin and pH affect total calcium."
  },
  {
    "panel": "Inflammatory & Bone/Metabolic (CRP, ESR, Procalcitonin, Uric Acid, Calcium, Vit D)",
    "testName": "Serum 25-Hydroxy Vitamin D (25-OH Vit D), Total",
    "loincLikeCode": "LOINC-1989-3",
    "unit": "ng/mL",
    "adultMaleRange": "30 - 100",
    "adultFemaleRange": "30 - 100",
    "criticalLow": "< 10",
    "criticalHigh": "> 100",
    "highMeaning": "Vitamin D toxicity/excess supplementation, hypercalcemia risk, granulomatous disease with extrarenal activation; monitor calcium.",
    "lowMeaning": "Vitamin D deficiency/insufficiency, malabsorption, chronic kidney disease, limited sun exposure, osteomalacia/rickets risk.",
    "preAnalyticalPitfall": "Hemolysis, lipemia, delayed separation, seasonal/sun exposure, and assay method variability can alter 25-OH vitamin D results."
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "High-Sensitivity Troponin I (hs-cTnI)",
    "loincLikeCode": "LOINC-89579-7",
    "unit": "ng/L",
    "adultMaleRange": "0 - 34",
    "adultFemaleRange": "0 - 16",
    "criticalLow": "N/A",
    "criticalHigh": "> 34 (male) / > 16 (female) with rise/fall delta",
    "highMeaning": "Acute myocardial injury/infarction, myocarditis, PE, sepsis, CKD, tachycardia; interpret with serial delta and clinical context",
    "lowMeaning": "Low probability of acute myocardial injury; serial sampling needed if early presentation",
    "preAnalyticalPitfall": "Hemolysis, delayed separation, EDTA contamination, improper specimen type; use serum/plasma per assay and serial timing"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "Prothrombin Time/International Normalized Ratio (PT/INR)",
    "loincLikeCode": "LOINC-6301-6",
    "unit": "ratio",
    "adultMaleRange": "0.8 - 1.2",
    "adultFemaleRange": "0.8 - 1.2",
    "criticalLow": "N/A",
    "criticalHigh": "> 5.0",
    "highMeaning": "Warfarin therapy, liver disease, vitamin K deficiency, DIC, factor deficiency, bleeding risk",
    "lowMeaning": "Hypercoagulable states, warfarin underdosing; low INR generally not critical",
    "preAnalyticalPitfall": "Citrate underfill/overfill, hematocrit >55%, delayed processing, thromboplastin ISI variability"
  },
  {
    "panel": "Cardiac & Coagulation (Troponin I, BNP, D-Dimer, PT/INR, aPTT)",
    "testName": "Anti-Xa Heparin Assay",
    "loincLikeCode": "LOINC-32739-7",
    "unit": "IU/mL",
    "adultMaleRange": "0.30 - 0.70 (UFH therapeutic)",
    "adultFemaleRange": "0.30 - 0.70 (UFH therapeutic)",
    "criticalLow": "N/A",
    "criticalHigh": "> 1.2",
    "highMeaning": "Heparin excess, bleeding risk, renal impairment, dosing error",
    "lowMeaning": "Subtherapeutic heparin, inadequate dosing, timing error",
    "preAnalyticalPitfall": "Timing after dose, citrate tube fill, platelet-poor plasma requirement, heparin line contamination"
  },
  {
    "panel": "Liver Function Test (LFT) & Bilirubin",
    "testName": "AST/ALT Ratio (De Ritis Ratio)",
    "loincLikeCode": "LOINC-73945-0",
    "unit": "ratio",
    "adultMaleRange": "0.7 - 1.4",
    "adultFemaleRange": "0.7 - 1.4",
    "criticalLow": "N/A",
    "criticalHigh": "> 2.0",
    "highMeaning": "Suggests alcohol-related liver disease, cirrhosis, or advanced fibrosis; also seen with muscle injury/hemolysis.",
    "lowMeaning": "Suggests viral hepatitis, NAFLD, or muscle injury; nonspecific and needs clinical correlation.",
    "preAnalyticalPitfall": "Calculated from AST/ALT; hemolysis elevates AST disproportionately and falsely raises ratio; use same sample."
  }
];

export const LAB_PANEL_BENCHMARKS: LabPanelBenchmark[] = [
  {
    "caseId": "LAB-DX-0003",
    "panelType": "CKD Stage 4 & Hyperkalemia Panic",
    "patientProfile": "64M diabetic nephropathy missed 2 dialysis/nephrology visits, fatigue",
    "keyFindings": [
      "Serum Creatinine: 4.9 mg/dL",
      "Serum Potassium (K+): 6.4 mEq/L",
      "Hemoglobin: 8.1 g/dL",
      "Serum Bicarbonate: 14 mEq/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Emergency: treat K+ 6.4 mEq/L immediately (IV calcium gluconate if ECG changes, insulin-dextrose, beta-agonist, potassium binder; arrange urgent dialysis if refractory). Admit/monitor, repeat non-hemolyzed potassium and ECG. Manage metabolic acidosis, uremia, volume status, anemia, and CKD-mineral bone disorder. Nephro",
    "confirmatoryTests": [
      "Urgent 12-lead ECG",
      "Repeat serum potassium with non-hemolyzed sample",
      "Arterial/Venous blood gas for pH and bicarbonate",
      "CBC with peripheral smear, iron studies, vitamin B12/folate",
      "Serum calcium, phosphate, PTH, 25-OH vitamin D"
    ]
  },
  {
    "caseId": "LAB-DX-0004",
    "panelType": "Microcytic Anemia Differential (IDA vs Thalassemia Trait)",
    "patientProfile": "23F pre-marital/ANC screening with fatigue and pallor",
    "keyFindings": [
      "Hemoglobin: 8.6 g/dL",
      "MCV: 64 fL",
      "RDW-CV: 19.8 %",
      "Serum Ferritin: 7.2 ng/mL"
    ],
    "criticalPanicFlag": false,
    "clinicalImpression": "Findings are strongly consistent with iron deficiency anemia (Hb 8.6 g/dL, MCV 64 fL, RDW 19.8%, ferritin 7.2 ng/mL, low iron, high TIBC). No immediate critical panic flag, but clinically significant anemia. Initiate oral iron therapy with reticulocyte/Hb response check in 2-4 weeks; investigate and treat menorrhagia a",
    "confirmatoryTests": [
      "Repeat CBC with peripheral blood smear and reticulocyte count",
      "Serum ferritin/iron studies already suggestive; monitor response after iron therapy",
      "Hb HPLC/electrophoresis if microcytosis persists after iron repletion or if family history/thalassemia suspected",
      "Evaluate menorrhagia: pregnancy test, TSH, coagulation profile, pelvic ultrasound as clinically indicated",
      "Consider stool occult blood/GI evaluation if history suggests GI blood loss or if anemia is refractory"
    ]
  },
  {
    "caseId": "LAB-DX-0015",
    "panelType": "Acute Pancreatitis + Alcoholic Hepatitis",
    "patientProfile": "41M severe epigastric pain radiating to back, recurrent vomiting",
    "keyFindings": [
      "Serum Lipase: 1640 U/L",
      "Serum Amylase: 890 U/L",
      "Triglycerides: 920 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Urgent clinical evaluation for acute pancreatitis with severe hypertriglyceridemia and possible alcoholic hepatitis. Admit/observe, keep NPO as appropriate, IV fluids, analgesia, antiemetics, monitor calcium, triglycerides, LFTs, CBC, renal function, and assess severity/complications. Treat hypocalcemia if confirmed an",
    "confirmatoryTests": [
      "Repeat serum lipase/amylase and CBC",
      "Ionized calcium and albumin-corrected calcium",
      "Fasting lipid profile after acute phase; repeat triglycerides",
      "Liver function tests including INR, bilirubin, albumin",
      "Abdominal ultrasound to assess gallstones/biliary dilation"
    ]
  },
  {
    "caseId": "LAB-DX-0018",
    "panelType": "Obstructive vs Hepatocellular LFT",
    "patientProfile": "52F RUQ colicky pain, pruritus, dark urine, clay-colored stools",
    "keyFindings": [
      "Total Bilirubin: 8.4 mg/dL",
      "Direct Bilirubin: 6.9 mg/dL",
      "Alkaline Phosphatase (ALP): 640 U/L",
      "GGT: 420 U/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Obstructive/cholestatic jaundice with markedly elevated bilirubin, ALP and GGT and suspected gallstones. Arrange urgent ultrasound and MRCP, refer to GI/surgery, and consider ERCP if CBD stone with obstruction or cholangitis is suspected. Monitor for fever, right upper quadrant pain, sepsis and worsening INR/mental sta",
    "confirmatoryTests": [
      "Urgent abdominal ultrasound",
      "MRCP",
      "CBC, CRP and blood cultures if fever or pain",
      "Repeat LFT and PT/INR trending",
      "ERCP if common bile duct stone with obstruction or cholangitis is suspected"
    ]
  },
  {
    "caseId": "LAB-DX-0014",
    "panelType": "Overt Hypothyroidism & Dyslipidemia",
    "patientProfile": "39F weight gain, cold intolerance, irregular cycles",
    "keyFindings": [
      "TSH: 42.6 uIU/mL",
      "Free T4: 0.48 ng/dL",
      "LDL Cholesterol: 174 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "This is severe overt primary hypothyroidism with autoimmune thyroiditis and secondary dyslipidemia. Start levothyroxine, usually weight-based approximately 1.6 mcg/kg/day in young otherwise healthy adults, with lower starting dose if cardiac risk; recheck TSH/Free T4 in 6–8 weeks and titrate. Counsel about adherence an",
    "confirmatoryTests": [
      "Repeat TSH and Free T4 to confirm severity and monitor treatment",
      "Anti-TPO already positive; no immediate repeat needed unless clinically indicated",
      "Fasting lipid profile repeat after thyroid treatment optimization",
      "CBC, liver enzymes ALT/AST, CK, creatinine, fasting glucose/HbA1c",
      "ECG if cardiac symptoms or before high-dose levothyroxine in high-risk patients"
    ]
  },
  {
    "caseId": "LAB-DX-0006",
    "panelType": "Overt Hypothyroidism & Dyslipidemia",
    "patientProfile": "39F weight gain, cold intolerance, irregular cycles",
    "keyFindings": [
      "TSH: 42.6 uIU/mL",
      "Free T4: 0.48 ng/dL",
      "LDL Cholesterol: 174 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Urgent clinician review is advised for severe overt hypothyroidism with low Free T4 and very high Anti-TPO. Initiate/optimize levothyroxine after clinical assessment, using cautious dosing if CAD or elderly; recheck TSH/Free T4 in 6-8 weeks. Evaluate for myxedema warning signs. Treat dyslipidemia primarily by correctin",
    "confirmatoryTests": [
      "Repeat fasting TSH and Free T4 to confirm; anti-TPO already supportive",
      "CBC, comprehensive metabolic panel, electrolytes, creatinine, CK, fasting glucose/HbA1c",
      "ECG if symptomatic or bradycardic",
      "Fasting lipid panel again after euthyroid state achieved (usually 6-8 weeks after levothyroxine optimization)",
      "Consider morning cortisol if adrenal insufficiency is suspected before levothyroxine escalation"
    ]
  },
  {
    "caseId": "LAB-DX-0001",
    "panelType": "Dengue Fever & CBC Monitoring",
    "patientProfile": "28M Day-4 high fever, retro-orbital pain, petechiae",
    "keyFindings": [
      "Hemoglobin: 15.8 g/dL",
      "Hematocrit (PCV): 47.6 %",
      "Platelet Count: 22000 /uL",
      "AST (SGOT): 184 U/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Immediate emergency/hospital evaluation and admission. Dengue with warning signs likely: NS1 positive, platelets 22,000/uL, gum bleed, rising HCT. Start careful isotonic IV crystalloid resuscitation per dengue protocol; avoid NSAIDs/aspirin/IM injections. Monitor vitals, urine output, HCT and platelets every 6–12 hours",
    "confirmatoryTests": [
      "Serial CBC with platelet count and hematocrit every 6–12 hours or as clinically indicated",
      "Dengue IgM/IgG ELISA (NS1 already positive)",
      "PT/INR, aPTT, fibrinogen if bleeding is present",
      "Liver function tests and renal function/metabolic panel",
      "Urgent ultrasound for ascites, pleural effusion, gallbladder wall edema if warning signs"
    ]
  },
  {
    "caseId": "LAB-DX-0010",
    "panelType": "Obstructive vs Hepatocellular LFT",
    "patientProfile": "52F RUQ colicky pain, pruritus, dark urine, clay-colored stools",
    "keyFindings": [
      "Total Bilirubin: 8.4 mg/dL",
      "Direct Bilirubin: 6.9 mg/dL",
      "Alkaline Phosphatase (ALP): 640 U/L",
      "GGT: 420 U/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Cholestatic/obstructive LFT pattern with conjugated hyperbilirubinemia and markedly elevated ALP/GGT. Given jaundice, itching, and suspected gallstones, urgently assess for biliary obstruction/cholangitis with RUQ ultrasound and MRCP as needed; check CBC/CRP, lipase, and blood cultures if febrile. Arrange ERCP if CBD s",
    "confirmatoryTests": [
      "Urgent abdominal ultrasound (RUQ)",
      "MRCP if ultrasound is inconclusive or CBD stone is suspected",
      "CBC, CRP, and blood cultures if fever/rigors",
      "Lipase/amylase",
      "Hepatitis B/C serology and autoimmune liver markers if no obstruction is found"
    ]
  },
  {
    "caseId": "LAB-DX-0011",
    "panelType": "CKD Stage 4 & Hyperkalemia Panic",
    "patientProfile": "64M diabetic nephropathy missed 2 dialysis/nephrology visits, fatigue",
    "keyFindings": [
      "Serum Creatinine: 4.9 mg/dL",
      "Serum Potassium (K+): 6.4 mEq/L",
      "Hemoglobin: 8.1 g/dL",
      "Serum Bicarbonate: 14 mEq/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "This is a medical emergency. Admit/ER referral immediately for K+ 6.4 mEq/L with ECG monitoring and acute hyperkalemia treatment (IV calcium if ECG changes, insulin-dextrose, beta-agonist, potassium binders as appropriate). Hold potassium-raising drugs and dietary potassium. Urgent nephrology consult for advanced kidne",
    "confirmatoryTests": [
      "Urgent 12-lead ECG and continuous cardiac monitoring",
      "Repeat serum potassium urgently to exclude hemolysis/sample error",
      "ABG or venous blood gas for acidosis",
      "Renal ultrasound to assess kidney size/obstruction",
      "Urine routine, urine protein/creatinine ratio"
    ]
  },
  {
    "caseId": "LAB-DX-0002",
    "panelType": "Obstructive vs Hepatocellular LFT",
    "patientProfile": "52F RUQ colicky pain, pruritus, dark urine, clay-colored stools",
    "keyFindings": [
      "Total Bilirubin: 8.4 mg/dL",
      "Direct Bilirubin: 6.9 mg/dL",
      "Alkaline Phosphatase (ALP): 640 U/L",
      "GGT: 420 U/L"
    ],
    "criticalPanicFlag": false,
    "clinicalImpression": "Cholestatic obstructive LFT pattern with direct hyperbilirubinemia and marked ALP/GGT elevation. Arrange urgent abdominal ultrasound, followed by MRCP/ERCP as indicated. Assess for cholangitis; if fever/RUQ pain/hypotension/confusion are present, treat as emergency with antibiotics and urgent ERCP. Check CBC, CRP, rena",
    "confirmatoryTests": [
      "Urgent abdominal ultrasound (RUQ) to assess gallstones and biliary dilatation",
      "MRCP if ultrasound is inconclusive or CBD obstruction is suspected",
      "ERCP for confirmation and therapeutic management if CBD obstruction/cholangitis is confirmed",
      "CBC, CRP, and blood cultures if fever/RUQ pain present",
      "Serum lipase/amylase if pancreatitis is suspected"
    ]
  },
  {
    "caseId": "LAB-DX-0016",
    "panelType": "HELLP / Severe Preeclampsia Obstetric Panel",
    "patientProfile": "29F G2P1 at 34 weeks gestation, BP 166/110, RUQ pain & headache",
    "keyFindings": [
      "Platelet Count: 68000 /uL",
      "AST (SGOT): 264 U/L",
      "LDH: 840 U/L",
      "Uric Acid: 7.9 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Obstetric emergency: admit immediately for severe preeclampsia/HELLP evaluation. Monitor blood pressure, urine output, platelets, LFTs, LDH, renal function, and coagulation. Start magnesium sulfate seizure prophylaxis and antihypertensives per protocol if severe preeclampsia; give antenatal corticosteroids if preterm a",
    "confirmatoryTests": [
      "Repeat CBC with platelet count and peripheral blood smear for schistocytes",
      "Hemolysis workup: LDH, haptoglobin, indirect bilirubin, reticulocyte count",
      "Repeat AST, ALT, alkaline phosphatase, and bilirubin",
      "Coagulation profile: PT/INR, aPTT, fibrinogen, D-dimer",
      "Renal function tests and urine protein-to-creatinine ratio"
    ]
  },
  {
    "caseId": "LAB-DX-0007",
    "panelType": "Acute Pancreatitis + Alcoholic Hepatitis",
    "patientProfile": "41M severe epigastric pain radiating to back, recurrent vomiting",
    "keyFindings": [
      "Serum Lipase: 1640 U/L",
      "Serum Amylase: 890 U/L",
      "Triglycerides: 920 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Admit for urgent evaluation and management of acute pancreatitis. Provide IV fluids, analgesia, antiemetics, NPO initially, and close monitoring of vitals, urine output, calcium, glucose, and triglycerides. Avoid alcohol strictly. Evaluate alcoholic hepatitis severity with bilirubin, PT/INR, albumin, Maddrey DF/MELD, a",
    "confirmatoryTests": [
      "Serial serum lipase/amylase and comprehensive metabolic panel",
      "CBC with differential, CRP, and blood culture if febrile/septic",
      "Fasting lipid profile and HbA1c",
      "Liver function tests including bilirubin, albumin, PT/INR, and ammonia if encephalopathy",
      "Viral hepatitis panel and autoimmune liver markers if indicated"
    ]
  },
  {
    "caseId": "LAB-DX-0012",
    "panelType": "Microcytic Anemia Differential (IDA vs Thalassemia Trait)",
    "patientProfile": "23F pre-marital/ANC screening with fatigue and pallor",
    "keyFindings": [
      "Hemoglobin: 8.6 g/dL",
      "MCV: 64 fL",
      "RDW-CV: 19.8 %",
      "Serum Ferritin: 7.2 ng/mL"
    ],
    "criticalPanicFlag": false,
    "clinicalImpression": "Treat as iron deficiency anemia likely secondary to menorrhagia. Start oral iron with reticulocyte/Hb response check in 2-4 weeks; evaluate menorrhagia cause. Confirm no mixed thalassemia trait if anemia does not improve or family history is positive. Transfusion only if symptomatic/severe or clinician deems necessary.",
    "confirmatoryTests": [
      "Peripheral blood smear",
      "Reticulocyte count",
      "Serum ferritin repeat with CRP if inflammation suspected",
      "Hb electrophoresis/HPLC if iron deficiency persists after treatment or family history suggests thalassemia",
      "Gynecologic evaluation for menorrhagia; consider pregnancy test if applicable"
    ]
  },
  {
    "caseId": "LAB-DX-0008",
    "panelType": "HELLP / Severe Preeclampsia Obstetric Panel",
    "patientProfile": "29F G2P1 at 34 weeks gestation, BP 166/110, RUQ pain & headache",
    "keyFindings": [
      "Platelet Count: 68000 /uL",
      "AST (SGOT): 264 U/L",
      "LDH: 840 U/L",
      "Uric Acid: 7.9 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Admit to obstetric high-dependency care immediately. This is a HELLP/severe preeclampsia emergency with severe thrombocytopenia, transaminitis, elevated LDH, proteinuria 3+, renal impairment, headache and RUQ pain. Start magnesium sulfate seizure prophylaxis if not contraindicated, control BP with safe antihypertensive",
    "confirmatoryTests": [
      "Repeat CBC with platelet count and peripheral smear for schistocytes",
      "Haptoglobin, serum bilirubin, reticulocyte count",
      "PT/INR, aPTT, fibrinogen, D-dimer",
      "Blood group and crossmatch; arrange platelets if indicated",
      "Urine protein/creatinine ratio and repeat urinalysis"
    ]
  },
  {
    "caseId": "LAB-DX-0017",
    "panelType": "Dengue Fever & CBC Monitoring",
    "patientProfile": "28M Day-4 high fever, retro-orbital pain, petechiae",
    "keyFindings": [
      "Hemoglobin: 15.8 g/dL",
      "Hematocrit (PCV): 47.6 %",
      "Platelet Count: 22000 /uL",
      "AST (SGOT): 184 U/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Emergency admission/urgent clinical review. This is dengue with warning signs, severe thrombocytopenia (22,000/uL), mucosal bleeding, leukopenia, transaminitis, and rising hematocrit suggesting plasma leakage. Monitor vitals, urine output, serial platelet count and hematocrit; use cautious IV crystalloids; avoid NSAIDs",
    "confirmatoryTests": [
      "Urgent repeat CBC with platelet count and hematocrit every 6–12 hours",
      "PT/INR, aPTT, fibrinogen, D-dimer if available",
      "Dengue IgM/IgG serology or dengue RT-PCR if clinically indicated",
      "Liver function tests, renal function tests, electrolytes",
      "Blood group and crossmatch; keep transfusion readiness"
    ]
  },
  {
    "caseId": "LAB-DX-0009",
    "panelType": "Dengue Fever & CBC Monitoring",
    "patientProfile": "28M Day-4 high fever, retro-orbital pain, petechiae",
    "keyFindings": [
      "Hemoglobin: 15.8 g/dL",
      "Hematocrit (PCV): 47.6 %",
      "Platelet Count: 22000 /uL",
      "AST (SGOT): 184 U/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "URGENT: refer/admit to hospital for dengue with bleeding and severe thrombocytopenia. Monitor vitals, hydration, urine output, repeat CBC/HCT/platelets every 6-12 hours, PT/INR, LFT/RFT and ultrasound for plasma leakage. Use judicious isotonic IV fluids if leakage/shock; avoid NSAIDs, aspirin and IM injections. Transfu",
    "confirmatoryTests": [
      "Dengue IgM/IgG ELISA serology (NS1 already positive)",
      "Dengue RT-PCR if fever day <=5",
      "Repeat CBC, hematocrit and platelet count every 6-12 hours",
      "PT/INR, aPTT and fibrinogen if bleeding persists",
      "Liver function tests, renal function tests and electrolytes"
    ]
  },
  {
    "caseId": "LAB-DX-0013",
    "panelType": "Megaloblastic & Dimorphic Anemia",
    "patientProfile": "45M pure vegetarian with paresthesia in feet and beefy red tongue",
    "keyFindings": [
      "Hemoglobin: 7.4 g/dL",
      "MCV: 114 fL",
      "Vitamin B12: 112 pg/mL",
      "LDH: 980 U/L"
    ],
    "criticalPanicFlag": false,
    "clinicalImpression": "{\"criticalPanicFlag\":false,\"criticalAlerts\":[\"URGENT but not a standard numeric panic value: low vitamin B12 112 pg/mL with tingling and unsteady gait indicates neurologic involvement; start parenteral B12 promptly.\",\"Pancytopenia/bicytopenia: Hb 7.4 g/dL, TLC 3,400/uL, platelets 95,000/uL; needs same-day clinician rev",
    "confirmatoryTests": []
  },
  {
    "caseId": "LAB-DX-0005",
    "panelType": "Megaloblastic & Dimorphic Anemia",
    "patientProfile": "45M pure vegetarian with paresthesia in feet and beefy red tongue",
    "keyFindings": [
      "Hemoglobin: 7.4 g/dL",
      "MCV: 114 fL",
      "Vitamin B12: 112 pg/mL",
      "LDH: 980 U/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Urgent hematology/clinical review for severe macrocytic anemia with pancytopenia, low B12, and neurologic symptoms. Start appropriate Vitamin B12 replacement after confirming diagnosis; avoid folate alone. Investigate cause of B12 deficiency and pancytopenia; monitor blood counts and neurologic status.",
    "confirmatoryTests": [
      "Serum methylmalonic acid (MMA) and homocysteine",
      "Peripheral blood smear review",
      "Intrinsic factor antibodies and anti-parietal cell antibodies",
      "Iron studies and folate/thyroid evaluation if indicated",
      "Bone marrow aspirate/biopsy if pancytopenia unexplained or to exclude infiltration"
    ]
  },
  {
    "caseId": "LAB-DX-0020",
    "panelType": "Microcytic Anemia Differential (IDA vs Thalassemia Trait)",
    "patientProfile": "23F pre-marital/ANC screening with fatigue and pallor",
    "keyFindings": [
      "Hemoglobin: 8.6 g/dL",
      "MCV: 64 fL",
      "RDW-CV: 19.8 %",
      "Serum Ferritin: 7.2 ng/mL"
    ],
    "criticalPanicFlag": false,
    "clinicalImpression": "This panel strongly suggests iron deficiency anemia: low Hb, low MCV/MCH, high RDW-CV, low ferritin 7.2 ng/mL, low serum iron, and high TIBC. Thalassemia trait remains in the differential but is less likely with this ferritin/RDW pattern. Start oral iron therapy with clinical counseling, investigate menorrhagia, and co",
    "confirmatoryTests": [
      "Peripheral blood smear",
      "HbA2 and HbF by HPLC/hemoglobin electrophoresis if thalassemia trait suspected",
      "CBC repeat after 4-6 weeks of iron therapy to assess response",
      "Serum ferritin repeat and iron studies after treatment",
      "Evaluate menorrhagia: pelvic ultrasound and gynecology referral as clinically indicated"
    ]
  },
  {
    "caseId": "LAB-DX-0019",
    "panelType": "CKD Stage 4 & Hyperkalemia Panic",
    "patientProfile": "64M diabetic nephropathy missed 2 dialysis/nephrology visits, fatigue",
    "keyFindings": [
      "Serum Creatinine: 4.9 mg/dL",
      "Serum Potassium (K+): 6.4 mEq/L",
      "Hemoglobin: 8.1 g/dL",
      "Serum Bicarbonate: 14 mEq/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Emergency management required. K+ 6.4 is a panic value: obtain STAT ECG, give IV calcium gluconate for cardiac stabilization if ECG changes, shift potassium intracellularly with insulin+glucose and/or nebulized salbutamol, and use potassium binders if appropriate. Avoid nephrotoxins and potassium-raising drugs. eGFR 13",
    "confirmatoryTests": [
      "STAT repeat serum potassium in non-hemolyzed sample",
      "STAT 12-lead ECG for peaked T waves, widened QRS, arrhythmia",
      "Venous/arterial blood gas for pH and bicarbonate confirmation",
      "Renal ultrasound to assess kidney size, obstruction, and chronicity",
      "CBC with reticulocyte count, iron studies, vitamin B12/folate, and erythropoietin if indicated"
    ]
  },
  {
    "caseId": "LAB-DX-0021",
    "panelType": "Megaloblastic & Dimorphic Anemia",
    "patientProfile": "45M pure vegetarian with paresthesia in feet and beefy red tongue",
    "keyFindings": [
      "Hemoglobin: 7.4 g/dL",
      "MCV: 114 fL",
      "Vitamin B12: 112 pg/mL",
      "LDH: 980 U/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Urgent hematology review is advised. This is a symptomatic macrocytic pancytopenia with very low B12 and neurological signs; start parenteral cyanocobalamin promptly rather than waiting for all confirmatory tests. Do not give folate alone. Check MMA/homocysteine, intrinsic factor and parietal cell antibodies, iron stud",
    "confirmatoryTests": [
      "Serum methylmalonic acid (MMA) and homocysteine to confirm functional B12 deficiency",
      "Intrinsic factor antibodies and anti-parietal cell antibodies for pernicious anemia",
      "Peripheral smear review and reticulocyte count",
      "Iron studies, ferritin, folate, TSH, and renal/hepatic profile to assess dimorphic/mixed anemia and pancytopenia",
      "Coombs test, haptoglobin, and hemolysis workup if LDH/bilirubin remain unexplained"
    ]
  },
  {
    "caseId": "LAB-DX-0024",
    "panelType": "HELLP / Severe Preeclampsia Obstetric Panel",
    "patientProfile": "29F G2P1 at 34 weeks gestation, BP 166/110, RUQ pain & headache",
    "keyFindings": [
      "Platelet Count: 68000 /uL",
      "AST (SGOT): 264 U/L",
      "LDH: 840 U/L",
      "Uric Acid: 7.9 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Treat as obstetric emergency: admit to labor and delivery/ICU, control blood pressure, start magnesium sulfate seizure prophylaxis if severe preeclampsia, monitor platelets/coagulation/LFTs/renal function closely, arrange fetal assessment, and involve obstetrics, anesthesia, and neonatology for urgent delivery planning",
    "confirmatoryTests": [
      "Immediate obstetric emergency consult and maternal-fetal monitoring",
      "Repeat CBC with peripheral smear, reticulocyte count, haptoglobin, indirect bilirubin, and LDH",
      "Coagulation profile: PT/INR, aPTT, fibrinogen, D-dimer",
      "Repeat LFTs, renal function tests, uric acid, and urine protein:creatinine ratio",
      "Blood pressure monitoring and antihypertensive response assessment"
    ]
  },
  {
    "caseId": "LAB-DX-0026",
    "panelType": "Obstructive vs Hepatocellular LFT",
    "patientProfile": "52F RUQ colicky pain, pruritus, dark urine, clay-colored stools",
    "keyFindings": [
      "Total Bilirubin: 8.4 mg/dL",
      "Direct Bilirubin: 6.9 mg/dL",
      "Alkaline Phosphatase (ALP): 640 U/L",
      "GGT: 420 U/L"
    ],
    "criticalPanicFlag": false,
    "clinicalImpression": "Obstructive/cholestatic jaundice with marked direct hyperbilirubinemia and ALP/GGT elevation. Assess urgently for biliary obstruction and cholangitis; order abdominal ultrasound, proceed to MRCP/ERCP if dilated ducts or suspected choledocholithiasis, and monitor INR/renal function.",
    "confirmatoryTests": [
      "Urgent abdominal ultrasound (first-line for gallstones and biliary dilatation)",
      "MRCP if bile ducts are dilated or ultrasound is inconclusive",
      "CBC, CRP, and blood cultures if fever or abdominal pain (rule out cholangitis)",
      "Repeat LFT, INR, renal function, and electrolytes",
      "Consider ERCP if choledocholithiasis with dilated ducts or cholangitis is suspected"
    ]
  },
  {
    "caseId": "LAB-DX-0025",
    "panelType": "Dengue Fever & CBC Monitoring",
    "patientProfile": "28M Day-4 high fever, retro-orbital pain, petechiae",
    "keyFindings": [
      "Hemoglobin: 15.8 g/dL",
      "Hematocrit (PCV): 47.6 %",
      "Platelet Count: 22000 /uL",
      "AST (SGOT): 184 U/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "URGENT: Admit/emergency evaluate. This is dengue with warning signs: severe thrombocytopenia, gum bleeding, and hemoconcentration. Start isotonic IV crystalloids per dengue protocol; monitor vitals, urine output, HCT, and platelets closely. Avoid NSAIDs/aspirin and IM injections. Check coagulation profile, LFT/RFT, and",
    "confirmatoryTests": [
      "Repeat CBC with platelet count and hematocrit every 6–12 hours or per dengue protocol",
      "Dengue IgM/IgG serology if clinically indicated",
      "PT/INR, APTT, fibrinogen",
      "Repeat liver function tests",
      "Renal function tests and electrolytes"
    ]
  },
  {
    "caseId": "LAB-DX-0023",
    "panelType": "Acute Pancreatitis + Alcoholic Hepatitis",
    "patientProfile": "41M severe epigastric pain radiating to back, recurrent vomiting",
    "keyFindings": [
      "Serum Lipase: 1640 U/L",
      "Serum Amylase: 890 U/L",
      "Triglycerides: 920 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Urgent hospital admission for acute pancreatitis with possible alcoholic hepatitis. Start IV fluids, analgesia, antiemetics, NPO initially then early enteral nutrition as tolerated; monitor urine output, BUN/creatinine, calcium, glucose, oxygenation, and organ failure. Treat alcohol withdrawal and give thiamine/folate/",
    "confirmatoryTests": [
      "Abdominal ultrasound now to assess gallbladder/biliary pancreatitis",
      "Contrast-enhanced CT abdomen if diagnosis unclear, severe disease, or no improvement after 48–72 hours",
      "Repeat serum calcium with albumin and ionized calcium; CBC, CRP, BUN/creatinine, LDH, glucose, blood gas/lactate",
      "Fasting lipid panel, HbA1c, TSH, renal function, and medication review for hypertriglyceridemia",
      "Liver tests with bilirubin, PT/INR, albumin, platelets; calculate MELD and Maddrey Discriminant Function"
    ]
  },
  {
    "caseId": "LAB-DX-0029",
    "panelType": "Megaloblastic & Dimorphic Anemia",
    "patientProfile": "45M pure vegetarian with paresthesia in feet and beefy red tongue",
    "keyFindings": [
      "Hemoglobin: 7.4 g/dL",
      "MCV: 114 fL",
      "Vitamin B12: 112 pg/mL",
      "LDH: 980 U/L"
    ],
    "criticalPanicFlag": false,
    "clinicalImpression": "Urgent hematology/neurology review. Draw confirmatory samples (MMA, homocysteine, intrinsic factor/parietal cell antibodies, smear, iron studies) and start prompt parenteral vitamin B12 therapy without waiting for all results. Do not give folate alone. Evaluate for pernicious anemia/malabsorption and monitor CBC, retic",
    "confirmatoryTests": [
      "Serum methylmalonic acid (MMA)",
      "Serum homocysteine",
      "Intrinsic factor antibodies",
      "Anti-parietal cell antibodies",
      "Peripheral blood smear for hypersegmented neutrophils and dimorphic anemia"
    ]
  },
  {
    "caseId": "LAB-DX-0028",
    "panelType": "Microcytic Anemia Differential (IDA vs Thalassemia Trait)",
    "patientProfile": "23F pre-marital/ANC screening with fatigue and pallor",
    "keyFindings": [
      "Hemoglobin: 8.6 g/dL",
      "MCV: 64 fL",
      "RDW-CV: 19.8 %",
      "Serum Ferritin: 7.2 ng/mL"
    ],
    "criticalPanicFlag": false,
    "clinicalImpression": "Treat as iron deficiency anemia likely secondary to menorrhagia. Start oral iron and evaluate response with repeat CBC/ferritin in 4-8 weeks. Counsel on iron-rich diet and investigate menstrual blood loss. Exclude thalassemia trait with Hb electrophoresis/HPLC if anemia persists or iron stores normalize without expecte",
    "confirmatoryTests": [
      "Peripheral blood smear review",
      "Reticulocyte count",
      "C-reactive protein to interpret ferritin as acute-phase reactant",
      "Hemoglobin electrophoresis/HPLC to exclude thalassemia trait, especially if iron therapy response is poor or family history positive",
      "Gynecologic evaluation for menorrhagia (pelvic ultrasound/TSH/coagulation as indicated)"
    ]
  },
  {
    "caseId": "LAB-DX-0022",
    "panelType": "Overt Hypothyroidism & Dyslipidemia",
    "patientProfile": "39F weight gain, cold intolerance, irregular cycles",
    "keyFindings": [
      "TSH: 42.6 uIU/mL",
      "Free T4: 0.48 ng/dL",
      "LDL Cholesterol: 174 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Treat as overt primary hypothyroidism with autoimmune Hashimoto thyroiditis. Initiate levothyroxine after clinical review using weight-based dosing, lower starting dose if cardiac risk, and recheck TSH/Free T4 in 6-8 weeks. Counsel adherence and separation from calcium/iron by 4 hours. Manage dyslipidemia as likely sec",
    "confirmatoryTests": [
      "Repeat TSH, Free T4, and Free T3",
      "Anti-thyroglobulin antibody",
      "Thyroid ultrasound if goiter/nodule or diagnostic uncertainty",
      "Fasting lipid profile repeat",
      "HbA1c and fasting glucose"
    ]
  },
  {
    "caseId": "LAB-DX-0027",
    "panelType": "CKD Stage 4 & Hyperkalemia Panic",
    "patientProfile": "64M diabetic nephropathy missed 2 dialysis/nephrology visits, fatigue",
    "keyFindings": [
      "Serum Creatinine: 4.9 mg/dL",
      "Serum Potassium (K+): 6.4 mEq/L",
      "Hemoglobin: 8.1 g/dL",
      "Serum Bicarbonate: 14 mEq/L"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Renal emergency: K+ 6.4 with eGFR 13 and severe acidosis. Obtain immediate ECG; if ECG changes are present, give IV calcium gluconate for cardiac membrane stabilization. Lower potassium with insulin-dextrose and nebulized salbutamol; consider sodium bicarbonate for severe acidosis and arrange urgent nephrology/dialysis",
    "confirmatoryTests": [
      "Urgent 12-lead ECG and repeat serum potassium avoiding hemolysis",
      "Venous or arterial blood gas for pH, bicarbonate, and anion gap",
      "Renal ultrasound to exclude obstruction and assess kidney size",
      "Urinalysis and urine albumin-to-creatinine ratio",
      "CBC with reticulocyte count, iron studies, B12, and folate"
    ]
  },
  {
    "caseId": "LAB-DX-0030",
    "panelType": "Overt Hypothyroidism & Dyslipidemia",
    "patientProfile": "39F weight gain, cold intolerance, irregular cycles",
    "keyFindings": [
      "TSH: 42.6 uIU/mL",
      "Free T4: 0.48 ng/dL",
      "LDL Cholesterol: 174 mg/dL"
    ],
    "criticalPanicFlag": true,
    "clinicalImpression": "Treat as severe overt hypothyroidism likely due to Hashimoto thyroiditis. Start levothyroxine, typically weight-based ~1.6 mcg/kg/day in a young adult without cardiac disease, and review in 6–8 weeks with TSH/Free T4. Assess for myxedema warning signs. Do not start statin solely for lipids until thyroid is corrected; r",
    "confirmatoryTests": [
      "Repeat TSH and Free T4 6–8 weeks after starting levothyroxine",
      "Anti-TPO already positive; repeat not essential unless clinically indicated",
      "Fasting lipid panel after achieving euthyroid state",
      "CBC, electrolytes, creatinine, liver enzymes before/while initiating therapy",
      "ECG if cardiac symptoms or risk factors; pregnancy test if applicable before treatment"
    ]
  }
];
