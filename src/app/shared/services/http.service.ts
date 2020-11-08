import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/RecipeBook/recipe.model';
import { RecipesService } from 'src/app/RecipeBook/recipes.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private recipeService: RecipesService, private authSvc: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http.put('https://udemy-project-9f32b.firebaseio.com/recipes.json', recipes).subscribe();
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://udemy-project-9f32b.firebaseio.com/recipes.json')
             .pipe(
               map((recipes: Array<Recipe>) => {
                  return recipes.map((recipe) => {
                    return {...recipe, ingredients: (recipe.ingredients) ? recipe.ingredients : []};
                  });
             }), tap(recipes => {
              this.recipeService.setRecipes(recipes);
             }));



  }
}
