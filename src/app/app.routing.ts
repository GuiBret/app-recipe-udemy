import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './ShoppingList/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './RecipeBook/recipe-book.component';
import { RecipeDetailComponent } from './RecipeBook/recipe-detail/recipe-detail.component';
import { SelectRecipeWarningComponent } from './select-recipe-warning/select-recipe-warning.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './shared/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [

  {path: '', redirectTo: "/recipe-list", pathMatch: 'full'},
  {path: 'recipe-list', loadChildren: () => import('./recipes/recipes.module').then((mod) => mod.RecipesModule)},
  {path: 'shopping-list', loadChildren: () => import('./ShoppingList/shoppinglist.module').then((mod) => mod.ShoppingListModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule)},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
