import { Action } from "@ngrx/store";
import { Ingredient } from "../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

const initialState = {
  ingredients: [
    new Ingredient('Tomatoes', 20),
    new Ingredient('Apples', 10)
  ]
};

export function ShoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredientAction) {
  switch(action.type) {
    case ShoppingListActions.ADD_INGREDIENT:

      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return initialState;
    break;
  }

}
