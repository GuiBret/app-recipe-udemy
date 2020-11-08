import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {
  recipesChanged$: Subscription;
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Array<Recipe>;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipesChanged$ = this.recipeService.recipesChanged.subscribe((recipes: Array<Recipe>) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.recipesChanged$.unsubscribe();
  }

  

}
