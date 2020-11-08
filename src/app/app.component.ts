import { Component } from '@angular/core';
import { ShoppingService } from './ShoppingList/shopping.service';
import { RecipesService } from './RecipeBook/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private recipesService: RecipesService) {

  }
  ngOnInit() {

  }
  
}
