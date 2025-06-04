export interface Ingredient {
  id: string;
  name: string;
  unit: string;
  baseAmount: number; // Amount for BASE_FLOUR_REFERENCE_AMOUNT_G (which is 500g flour)
}

export interface CalculatedIngredient extends Ingredient {
  amount: number; // Calculated amount
}

export interface RollType {
  id: string;
  name: string; // Internal name or key
  displayName: string; // Name for UI, e.g., "Bułka duża (100g wagi/szt.)"
  finalWeightGrams: number; // Final weight of one roll of this type
}