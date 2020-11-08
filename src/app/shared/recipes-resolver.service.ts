import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../RecipeBook/recipe.model';
import { HttpService } from './services/http.service';
import { RecipesService } from '../RecipeBook/recipes.service';

@Injectable({
    providedIn: "root"
})

export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private httpSvc: HttpService, private recipeSvc: RecipesService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const recipes = this.recipeSvc.getRecipes()
      if(recipes.length === 0) {
        return this.httpSvc.fetchRecipes();
      } else {
        return recipes;
      }

    }

}
