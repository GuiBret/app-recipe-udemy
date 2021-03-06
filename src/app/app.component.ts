import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './ShoppingList/shopping.service';
import { RecipesService } from './RecipeBook/recipes.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private authSvc: AuthService) {

  }
  ngOnInit() {
    this.authSvc.autoLogin();
  }

}
