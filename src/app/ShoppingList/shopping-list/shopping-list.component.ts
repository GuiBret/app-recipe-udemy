import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Array<Ingredient>}>;
  private igChangedSub: Subscription;
  constructor(
    private shoppingService: ShoppingService,
    private store: Store<{shoppingList: {ingredients: Array<Ingredient>}}>) { }

  ngOnInit(): void {

    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingService.getIngredients();

    this.igChangedSub = this.shoppingService.newIngredientList.subscribe((ingredients_list: Array<Ingredient>) => {
      console.log('Coucou');
      // this.ingredients = ingredients_list;
    })
  }

  addIngredientToList(new_ingredient: Ingredient) {
    // this.ingredients.push(new_ingredient);
  }

  ngOnDestroy() {
    this.igChangedSub.unsubscribe();
  }

  onEditItem(id: number) {
    this.shoppingService.startedEditing.next(id);
  }

}
