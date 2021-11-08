import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Array de objetos Lista (titulo y lista de recetas)
  recipeList: { title: string, list: any[] }[] = [];

  // En este objeto metemos todas las listas de recetas
  objectRecipe;


  constructor(private appService: AppService,
    private router: Router) { }

  async ngOnInit() {

    // Obtenemos las listas del usuario actual
    let recipeList = await this.appService.getRecipeAllListFromUser("69DHXLGnntbBAybMhU3TFROrb702")
    recipeList.subscribe(listsRecipes => {

      if (!this.objectRecipe)
        window.location.reload();

      if (this.objectRecipe && this.objectRecipe.length > 0)
        for (let i = 0; i < this.objectRecipe.length; i++)
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
      this.objectRecipe = listsRecipes;
    })

  }

  // Comprobamos que no haya recetas duplicadas
  isDuplicate(listName): boolean {

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
