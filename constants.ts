
import { Ingredient, RollType } from './types';

export const BASE_FLOUR_REFERENCE_AMOUNT_G = 500; // 500g of flour as a reference for recipe proportions

// --- Kalkulator Bułek (Rolls Calculator) Constants ---
export const DOUGH_YIELD_FACTOR_ROLLS = 1.319;
export const BASE_ROLL_COUNT = 10;

export const BASE_RECIPE_INGREDIENTS_ROLLS: Ingredient[] = [
  { id: 'flour', name: 'Mąka pszenna (typ 500-550)', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G },
  { id: 'water', name: 'Woda (letnia)', unit: 'ml', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.5 }, // Zmieniono z 0.6 na 0.5
  { id: 'yeast', name: 'Drożdże świeże', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.05 },
  { id: 'salt', name: 'Sól', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.015 },
  { id: 'sugar', name: 'Cukier', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.02 },
  { id: 'oil', name: 'Olej roślinny', unit: 'ml', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.036 },
  { id: 'bakingImprover', name: 'Polepszacz piekarniczy', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.005 },
];

export const ROLL_TYPES: RollType[] = [
  { id: 'large', name: 'Bułka duża', finalWeightGrams: 100, displayName: 'Bułka duża (100g wagi/szt.)' },
  { id: 'small', name: 'Bułka mała', finalWeightGrams: 50, displayName: 'Bułka mała (50g wagi/szt.)' },
  { id: 'krakowska', name: 'Bułka krakowska (baton)', finalWeightGrams: 400, displayName: 'Bułka krakowska (400g wagi/szt.)' },
];

export const ROLL_CONFIG = {
  id: 'rolls',
  name: 'Bułki',
  types: ROLL_TYPES,
  ingredients: BASE_RECIPE_INGREDIENTS_ROLLS,
  yieldFactor: DOUGH_YIELD_FACTOR_ROLLS,
  baseCount: BASE_ROLL_COUNT,
  defaultSelectedTypeId: 'small', // ID of the RollType to have the baseCount
  initialQuantities: ROLL_TYPES.reduce((acc, rollType) => {
    acc[rollType.id] = rollType.id === 'small' ? BASE_ROLL_COUNT.toString() : '0';
    return acc;
  }, {} as Record<string, string>),
};


// --- Kalkulator Rogali (Croissant/Sweet Roll Calculator) Constants ---
export const DOUGH_YIELD_FACTOR_ROGALS = 1.375; // From image: 137.5%
export const BASE_ROGAL_COUNT = 10; // Default quantity for one of the rogal types

export const BASE_RECIPE_INGREDIENTS_ROGALS: Ingredient[] = [
  { id: 'flour', name: 'Mąka pszenna (typ 500-550)', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G },
  { id: 'water', name: 'Woda (letnia)', unit: 'ml', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.5 }, // Zmieniono z 0.6 na 0.5
  { id: 'yeast', name: 'Drożdże świeże', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.05 },
  { id: 'sugar', name: 'Cukier', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.1 },
  { id: 'margarine', name: 'Margaryna', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.07 },
  { id: 'milkPowder', name: 'Mleko w proszku', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.018 },
  { id: 'salt', name: 'Sól', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.015 },
  { id: 'bakingImproverRogal', name: 'Polepszacz (do rogali)', unit: 'g', baseAmount: BASE_FLOUR_REFERENCE_AMOUNT_G * 0.003 },
];

export const ROGAL_TYPES: RollType[] = [
  { id: 'rogale', name: 'Rogale', finalWeightGrams: 100, displayName: 'Rogale (100g wagi/szt.)' },
  { id: 'plecionki', name: 'Plecionki', finalWeightGrams: 100, displayName: 'Plecionki (100g wagi/szt.)' },
  { id: 'maslana', name: 'Bułka maślana', finalWeightGrams: 70, displayName: 'Bułka maślana (70g wagi/szt.)' },
];

export const ROGAL_CONFIG = {
  id: 'croissants',
  name: 'Rogale',
  types: ROGAL_TYPES,
  ingredients: BASE_RECIPE_INGREDIENTS_ROGALS,
  yieldFactor: DOUGH_YIELD_FACTOR_ROGALS,
  baseCount: BASE_ROGAL_COUNT,
  defaultSelectedTypeId: 'rogale', // ID of the RogalType to have the baseCount
  initialQuantities: ROGAL_TYPES.reduce((acc, rogalType) => {
    acc[rogalType.id] = rogalType.id === 'rogale' ? BASE_ROGAL_COUNT.toString() : '0';
    return acc;
  }, {} as Record<string, string>),
};

export const CALCULATOR_CONFIGS = {
  [ROLL_CONFIG.id]: ROLL_CONFIG,
  [ROGAL_CONFIG.id]: ROGAL_CONFIG,
};
