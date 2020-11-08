import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './ShoppingList/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './RecipeBook/recipe-book.component';
import { RecipeDetailComponent } from './RecipeBook/recipe-detail/recipe-detail.component';
import { SelectRecipeWarningComponent } from './select-recipe-warning/select-recipe-warning.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './shared/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
    {path: 'recipe-list', component: RecipeBookComponent, children: [
        { path: '', component: SelectRecipeWarningComponent, pathMatch: 'full'},
        { path: 'new', component: RecipeEditComponent, },

        { path: ':recipeid', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: '', redirectTo: "recipe-list", pathMatch: 'full'},
    { path: 'auth', component: AuthComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
