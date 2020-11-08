import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) {

   }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {

      this.recipe = this.recipeService.getRecipeByIndex(params['recipeid']);
      this.id = params['recipeid'];

    })
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  redirectToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    console.log(this.id);
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe-list']);
  }


}
