import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Arrays para guardar los datos
  allRecipeCategoriesData = [];
  recipesCategory = [];
  categoryData = {};
  recipe = {};

  // HttpClient para hacer consultas a la API
  constructor(private http: HttpClient) { }

  // LA MAYORIA DE FUNCIONES DE ESTE SERVICIO SON GETTERS Y SETTERS DE RECETAS O ARRAYS Y CONSULTAS A LA API

  // Guardo las categorias
  setRecipeCategories(data: Array<string>): void {
    this.allRecipeCategoriesData = data;
  }

  // Obtengo las categorias de mi array
  getRecipeCategoriesData(): Array<any> {
    return this.allRecipeCategoriesData;
  }

  // Obtengo las categorias de la API
  getRecipeCategories(): Observable<any> {
    return this.http.get(environment.apiURL.allCategories);
  }

  // Obtengo una receta aleatoria desde la API
  getRandomRecipe(): Observable<any> {
    return this.http.get(environment.apiURL.randomMeal);
  }

  // Guardo las recetas de una categoria
  setRecipesByCategory(data: Array<any>): void {
    this.recipesCategory = data;
  }

  // Obtengo las recetas de la categoria que estan en mi array
  getRecipesByCategoryStoredData(): Array<any> {
    return this.recipesCategory;
  }

  // Obtengo recetas por categoria de la API
  getRecipesByCategory(categoryName: string): Observable<any> {
    return this.http.get(environment.apiURL.mealsByCategory + '?c=' + categoryName);
  }

  // Obtengo los datos de una categoria especifica
  getCategoryData(categoryName: string): Object {
    for (let id = 0; id < this.allRecipeCategoriesData.length; id++)
    {
      let recipe = this.allRecipeCategoriesData[id];

      if (recipe.strCategory === categoryName)
      {
        this.categoryData = recipe;
        break;
      }

    }
    return this.categoryData;
  }

  // Obtengo una receta especifica
  getRecipe(recipeID: string): Observable<any> {
    return this.http.get(environment.apiURL.mealRecipe + '?i=' + recipeID);
  }

  // Guardo una receta especifica
  setSpecificRecipe(recipe: Array<string>): void {
    this.recipe = recipe;
  }

  // Obtengo una receta por nombre
  getRecipeByName(name: string): Observable<any> {
    return this.http.get(environment.apiURL.recipeByName + '?s=' + name);
  }
}
