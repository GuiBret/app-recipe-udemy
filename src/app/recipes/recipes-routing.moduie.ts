import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeBookComponent } from '../RecipeBook/recipe-book.component';
import { RecipeDetailComponent } from '../RecipeBook/recipe-detail/recipe-detail.component';
import { SelectRecipeWarningComponent } from '../select-recipe-warning/select-recipe-warning.component';
import { RecipesResolverService } from '../shared/recipes-resolver.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: RecipeBookComponent,
  children: [
    { path: '', component: SelectRecipeWarningComponent, pathMatch: 'full'},
    { path: 'new', component: RecipeEditComponent, },

    { path: ':recipeid', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
