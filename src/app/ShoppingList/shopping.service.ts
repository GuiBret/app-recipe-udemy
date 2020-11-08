import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Array<Ingredient>;

  newIngredientList = new Subject<Array<Ingredient>>();

  startedEditing = new Subject<number>();

  
  constructor() {
    this.ingredients = [
      new Ingredient('Tomatoes', 20),
      new Ingredient('Apples', 10)
    ];
   }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  addIngredient(name: string, qty: number) {
    this.ingredients.push({name: name, amount: qty});
    this.newIngredientList.next(this.getIngredients());

  }

  addIngredients(ingredients: Array<Ingredient>) {
    console.log(ingredients);
    this.ingredients.push(...ingredients);
    this.newIngredientList.next(this.getIngredients());
    
  } 

  updateIngredient(idx: number, newIngredient: Ingredient) {
    this.ingredients[idx] = newIngredient;
    this.newIngredientList.next(this.getIngredients());
  }

  removeIngredient(index: number) {
    console.log(this.ingredients)
    this.ingredients.splice(index, 1);
    console.log(this.ingredients)
    this.newIngredientList.next(this.getIngredients());
  }

  
}
