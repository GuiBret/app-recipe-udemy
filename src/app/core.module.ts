import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipesService } from './RecipeBook/recipes.service';
import { ShoppingService } from './ShoppingList/shopping.service';

@NgModule({
  providers: [RecipesService, ShoppingService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}]
})

export class CoreModule {}
