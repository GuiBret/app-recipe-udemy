import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../ShoppingList/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Array<Recipe>>();
  // private recipes: Array<Recipe> = [new Recipe('Mashed potatoes', 
  //                                   'A recipe of mashed potatoes',
  //                                   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mashed_potatoes_%281%29.jpg/800px-Mashed_potatoes_%281%29.jpg',
  //                                   [
  //                                     new Ingredient('Potatoes', 40),
  //                                     new Ingredient('Butter', 2),
  //                                     new Ingredient('Salt', 1)
  //                                   ]), 
                                    
  //                                   new Recipe('Quadruple Bypass Burger', 
  //                                              'A rather healthy meal',
  //                                              'https://i.pinimg.com/originals/b4/91/d4/b491d4396ff22b6efabc370943fe80ec.jpg',
  //                                              [
  //                                                new Ingredient('Patty', 4),
  //                                                new Ingredient('Bun', 2),
  //                                                new Ingredient('Salad', 4),
  //                                                new Ingredient('BBQ Sauce', 3)
  //                                              ])];
  private recipes: Array<Recipe> = [];
  recipeSelected = new Subject<Recipe>();
  

  constructor(private shoppingService: ShoppingService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingService.addIngredients(ingredients);
    
    
  }

  getRecipeByIndex(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes);
    
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes);
  }

  setRecipes(recipes: Array<Recipe>) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
  }
}
