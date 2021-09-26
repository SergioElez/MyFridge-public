import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from "../../environments/environment";
import { DbService } from './db.service';

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
  constructor(private http: HttpClient, private dbService: DbService) {

    // let recipeList = this.getFavouritesRecipeFromUser("69DHXLGnntbBAybMhU3TFROrb702")
    // 
    // Recibo un observable de observables (esto es porque si los guardo en una array no puedo obtenerlos observables)
    // recipeList.subscribe(recipes => {
    // 
    // Recorremos las recetas 
    // for (let i = 0; i < recipes.length; i++)
    // {
    // recipes[i].subscribe(recipe => {
    // 
    // console.log(recipe["meals"][0]);
    // })
    // }
    // 
    // })
  }

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
    let recipe = this.http.get(environment.apiURL.mealRecipe + '?i=' + recipeID);
    // console.log(recipeID)
    return recipe;
  }

  // Guardo una receta especifica
  setSpecificRecipe(recipe: Array<string>): void {
    this.recipe = recipe;
  }

  // Obtengo una receta por nombre
  getRecipeByName(name: string): Observable<any> {
    return this.http.get(environment.apiURL.recipeByName + '?s=' + name);
  }


  // Obtengo una receta por nombre (Este metodo me costo bastante por el tema de los observer y subscribe)
  getRecipeListFromUser(userID: string, list): Observable<any> {

    var recipesArray = new Subject<Observable<any>[]>();
    let recipes: Observable<any>[] = [];

    // const listRecipesId: string[] = await this.dbService.getRecipeListFromUser(userID, "favourites");

    // Obtenemos los ids de las recetas favoritas
    let listRecipesId = this.dbService.getRecipeListFromUser(userID, list)

    // Hacemos el subscribe ya que necesito obtener los ids de la base de datos  
    listRecipesId.subscribe(idRecipeList => {

      // console.log(idRecipeList)
      // Hacemos una consulta por cada id para obtener la receta
      for (let i = 0; i < idRecipeList.length; i++)
      {
        let recipe = this.getRecipe(idRecipeList[i]);

        // Guardamos la primera receta
        recipes.push(recipe)

        // Con esto guardamos la receta en forma de Observer para luego devolverlo y que pueda actulizar
        recipesArray.next(recipes);
      }

    })
    return recipesArray;


    recipesArray.subscribe(xd => {
      // console.log(xd)
    })


  }
}
