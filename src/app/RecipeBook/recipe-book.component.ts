import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipesService) {
    
   }

  ngOnInit(): void {

    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    })
  }


}
