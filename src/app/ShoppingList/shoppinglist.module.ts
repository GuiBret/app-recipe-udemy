import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from '../shared/dropdown.directive';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListRouting } from './shoppinglist.routing';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    ShoppingListRouting
  ]
})

export class ShoppingListModule {}
