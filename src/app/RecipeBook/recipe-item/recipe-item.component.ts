import { Component, OnInit, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  @Input('idx') idx: number;
  name: string;
  description: string;
  imagePath: string;

  // @Output() recipeSelected = new EventEmitter<void>();
  
  constructor(private recipeService: RecipesService) {

  }

  ngOnInit(): void {
    
    
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if(changes.recipe && changes.recipe.currentValue) {
      this.name = this.recipe.name;
      this.description = this.recipe.description;
      this.imagePath = this.recipe.imagePath;

    }
  }

  makeEvent($event: any) {
    this.recipeService.recipeSelected.next(this.recipe);
  }

}
