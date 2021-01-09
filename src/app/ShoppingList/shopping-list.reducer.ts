import { Ingredient } from "../shared/ingredient.model";

const initialState = {
  ingredients: [
    new Ingredient('Tomatoes', 20),
    new Ingredient('Apples', 10)
  ]
};

export function ShoppingListReducer(state = initialState, action) {


}
