import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
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
    SharedModule,
    ShoppingListRouting
  ]
})

export class ShoppingListModule {}
