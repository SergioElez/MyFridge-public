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
  getRecipeAllListFromUser(userID: string): Observable<Object> {
    var subject = new Subject<Object>();

    // Array de objetos lista que contiene el nombre de la lista y la lista de recetas
    let recipeList: { nameList: string, list: object }[] = [];

    // Obtenemos los ids de las recetas favoritas
    let listRecipesId = this.dbService.getRecipeAllListFromUser(userID)

    // Hacemos el subscribe ya que necesito obtener los ids de la base de datos  
    listRecipesId.subscribe(idRecipeList => {
      // console.log(idRecipeList["idRecipes"]);

      // Recorremos la lista de listas
      for (let i = 0; i < idRecipeList["idRecipes"].length; i++) 
      {
        // Con esto obtengo el nombre de la lista actual (favoritos, lista1, lista2, etc)
        let currentListName = Object.getOwnPropertyNames(idRecipeList["idRecipes"][i])[0];

        // La lista la cojo asi
        let list = idRecipeList["idRecipes"][i][currentListName];

        // Añadimos las propiedades de la lista (recipe-0, recipe-1, etc)
        // Esto es para saber cuandos ids vamos a tener que consultar
        let propIdNames = [];
        for (let propName in list)
        {
          propIdNames.push(propName);
        }

        // Recorremos cada lista de ids
        for (let y = 0; y < propIdNames.length; y++)
        {
          let currentRecipeId = list[propIdNames[y]];

          let recipe = this.getRecipe(currentRecipeId);

          recipe.subscribe(recipe => {
            // Sobreescribimos el objeto con la informacion de la receta
            // (Substituimos el id de la receta por la receta que obtenemos de la API)
            list[propIdNames[y]] = recipe["meals"];

            let newRecipe = { nameList: currentListName, list: list };

            // Comprobamos que no haya duplicados
            if (this.CheckDuplicates(newRecipe, recipeList))
              recipeList.push(newRecipe)

            // console.log(recipeList)
            localStorage.setItem('recipeList', JSON.stringify(recipeList));

            subject.next(recipeList);
            return subject
          })
        }
      }
      subject.next(recipeList);
      return subject
    })
    return subject
  }

  CheckDuplicates(object, recipeList): boolean {

    for (let i = 0; i < recipeList.length; i++)
    {
      if (recipeList[i].nameList == object.nameList)
        return false;
    }

    return true;
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
