import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Array de objetos Lista (titulo y lista de recetas)
  recipeList: { title: string, list: any[] }[] = [];
  // listOfRecipesList: { title: string, list: { title: string, list: any[] }[] }[] = [];

  objetoRecetas;

  listas = []

  cant = "";
  prueba = "";
  recetas;
  favoritos;

  //recipeList: { nameList: string, list: object }[] = [];

  // Variable que indice el indice de la array de listas
  index = 0;
  cantidad;

  constructor(private appService: AppService) { }

  async ngOnInit() {

    // let favouriteRecipeList = await this.appService.getRecipeListFromUser("69DHXLGnntbBAybMhU3TFROrb702", "lista1")
    // 
    // this.AddRecipeList(favouriteRecipeList, "Favoritos");


    // 
    // let recipeList2 = await this.appService.getRecipeAllListFromUser("69DHXLGnntbBAybMhU3TFROrb702")
    // 
    // recipeList2.subscribe(listsRecipes => {
    // if (this.cantidad && this.cantidad > 0 && this.objetoRecetas)
    // {
    // console.log(this.objetoRecetas)
    // console.log(this.cantidad)
    // 
    // 


    // this.prueba = JSON.stringify(listsRecipes);
    // this.recetas = listsRecipes;
    // this.cant = listsRecipes['length']
    // 
    // 
    // let newRecipeList = [];
    // let newRecipeName;
    // 
    // 
    // 
    // 
    // for (let i = 0; i < this.cantidad; i++)
    // {
    // 
    // if (listsRecipes && listsRecipes['length'] > 0)
    // {
    // 
    // if (listsRecipes[i])
    // {
    // 
    // let currentList = listsRecipes[i].list['recipe-' + i];
    // 
    // if (isNaN(currentList) && currentList != undefined)
    // {
    // console.log(currentList[0])
    // this.favoritos = currentList[0];
    // this.listas.push(currentList[0]);
    // }
    // 
    // newRecipeName = listsRecipes[i]["nameList"];
    // console.log(newRecipeName)
    // 
    // if (newRecipeName && currentList && isNaN(currentList) && this.CheckDuplicates(currentList[0]["idMeal"], newRecipeList, newRecipeName))
    // {
    // newRecipeList.push(currentList[0])
    // }
    // 
    // }
    // if (newRecipeList.length > 0)
    // this.recipes.push({ title: newRecipeName, list: newRecipeList })
    // 
    // console.log(newRecipeName)
    // console.log(newRecipeList)
    // 
    // }
    // 
    // }
    // }
    // })


    let recipeList = await this.appService.getRecipeAllListFromUser("69DHXLGnntbBAybMhU3TFROrb702")
    recipeList.subscribe(listsRecipes => {

      if (this.objetoRecetas.length > 0)
        for (let i = 0; i < this.objetoRecetas.length; i++)
        {
          if (listsRecipes[i])
          {

            //Anadimos la lista que no este repetida
            if (!this.isDuplicate(listsRecipes[i].nameList))
            {

              // En este objeto vamos a meter la lista de recetas que estamos recorriendo
              let newRecipeList = [];
              let newRecipeListName = listsRecipes[i].nameList;


              // Setteamos la lista local con la que recibimos
              let currentList = listsRecipes[i]['list'];

              console.log(newRecipeListName)
              console.log(currentList)

              // Añadimos las propiedades de la lista (recipe-0, recipe-1, etc)
              // Esto es para saber cuandos ids vamos a tener que consultar
              let propIdNames = [];
              for (let propName in currentList)
              {
                propIdNames.push(propName);
              }

              // Recorro cada receta de la current recipe list
              for (let recipe = 0; recipe < propIdNames.length; recipe++)
              {

                let currentRecipe = listsRecipes[i]['list']['recipe-' + recipe];

                if (isNaN(currentRecipe))
                {
                  // Hago un push de la receta a la lista
                  newRecipeList.push(currentRecipe[0])
                  console.log(currentRecipe[0])

                }
                else
                {
                  // Si es un id buscamos la receta (Esto es porque a veces en lugar de recibir la receta recibe solo la id, 
                  // por eso la volvemos a pedir al servicio)
                  let newrecipe = this.appService.getRecipe(currentRecipe);
                  newrecipe.subscribe(recipe => {
                    newRecipeList.push(recipe['meals'][0])
                  })
                }

              }

              // Hacemos un push del la lista actual de recetas
              this.recipeList.push({ title: newRecipeListName, list: newRecipeList })
            }
          }
        }

      // console.log(this.recipeList)

    })


    // CON ESTO OBTENEMOS LA CANTIDAD DE LISTAS QUE TIENE EL USUARIO
    // ES SUPER IMPORTANTE QUE ESTE METODO ESTE DEBAJO DEL ANTERIOR SUBSCRIBE YA QUE SI NO, NO RECOQUE BIEN LA CANTIDAD DE LISTAS

    let recipeListGet = await this.appService.getRecipeAllListFromUser("69DHXLGnntbBAybMhU3TFROrb702")
    recipeListGet.subscribe(listsRecipes => {
      // this.cantidad = listsRecipes['length'];
      this.objetoRecetas = listsRecipes;
    })


    // this.AddRecipeList(recipeList, "recipeList");


  }

  // Comprobamos que no haya recetas duplicadas
  isDuplicate(listName): boolean {

    // for (let i = 0; i < list.length; i++)
    // {
    // if (list[i]["idMeal"] === id)
    // return false;
    // }

    for (let i = 0; i < this.recipeList.length; i++)
    {
      if (this.recipeList[i]['nameList'] == listName || this.recipeList[i]['title'] == listName)
      {
        return true;
      }
    }

    return false;
  }
}
