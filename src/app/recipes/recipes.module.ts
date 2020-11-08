import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeBookComponent } from '../RecipeBook/recipe-book.component';
import { RecipeDetailComponent } from '../RecipeBook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '../RecipeBook/recipe-item/recipe-item.component';
import { RecipeListComponent } from '../RecipeBook/recipe-list/recipe-list.component';
import { SelectRecipeWarningComponent } from '../select-recipe-warning/select-recipe-warning.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from './recipes-routing.moduie';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    SelectRecipeWarningComponent,
    RecipeEditComponent,

  ],
  imports: [
    RecipesRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule {

}
