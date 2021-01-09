import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;

  startedEditingSub: Subscription;
  editMode = false;
  editedItemIdx: number;
  editedIngredient: Ingredient;

  constructor(private shoppingService: ShoppingService, private store: Store<{shoppingList: {ingredients: Array<Ingredient>}}>) { }

  ngOnInit(): void {
    this.startedEditingSub = this.shoppingService.startedEditing.subscribe((id: number) => {
      this.editedItemIdx = id;
      this.editedIngredient = this.shoppingService.getIngredient(this.editedItemIdx);
      this.editMode = true;

      this.slForm.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount,
      });
    });
  }

  ngOnDestroy() {
    this.startedEditingSub.unsubscribe();
  }

  addIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIdx, newIngredient);
      this.editMode = false;
    } else {
      // this.shoppingService.addIngredient(value.name, value.amount);
      this.store.dispatch(new ShoppingListActions.AddIngredientAction(new Ingredient(value.name, value.amount)));
    }

    this.slForm.reset();


  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.editedIngredient = null;
    this.editedItemIdx = null;
  }

  onDelete() {
    this.shoppingService.removeIngredient(this.editedItemIdx);
    this.onClear();
  }




}
