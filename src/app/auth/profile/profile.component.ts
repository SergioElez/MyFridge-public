import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Array de objetos Lista (titulo y lista de recetas)
  recipeList: { title: string, list: any[] }[] = [];
  recipeListIds: { title: string, list: number[] }[] = [];
  recipeListFirebaseIds: { idFirebase: string, idRecipes: number }[] = [];

  // En este objeto metemos todas las listas de recetas
  objectRecipe;

  newListName: string = '';

  createdList: boolean = false;

  listNameToDelete: string;
  clickDeleteList: boolean = false;

  constructor(
    private db: DbService,
    private appService: AppService,
    private router: Router) { }

  async ngOnInit() {

    // Obtenemos las listas del usuario actual
    let recipeList = await this.appService.getRecipeAllListFromUser("69DHXLGnntbBAybMhU3TFROrb702")
    recipeList.subscribe(listsRecipes => {

      // Si por lo que sea no aun no ha hecho la peticion a la API, recarga la pagina para que la haga
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

              // En esa variable guardamos los ids de las recetas de esta lista
              let idRecipeList: number[] = [];

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

                // SI LA RECETA NO ESTA OCULTA
                if (currentRecipe)
                {
                  if (isNaN(currentRecipe))
                  {
                    if (currentRecipe && currentRecipe[0])
                    {
                      let id = currentRecipe[0]['idMeal'];
                      idRecipeList.push(parseInt(id));

                      // Anyadimos el id de firebase para luego poder utiliarlo
                      currentRecipe[0].idFirebase = propIdNames[recipe];

                      // Hago un push de la receta a la lista
                      newRecipeList.push(currentRecipe[0])

                    }
                  }
                  else
                  {
                    idRecipeList.push(currentRecipe);

                    // Si es un id buscamos la receta (Esto es porque a veces en lugar de recibir la receta recibe solo la id, 
                    // por eso la volvemos a pedir al servicio)
                    let newrecipe = this.appService.getRecipe(currentRecipe);
                    newrecipe.subscribe(rec => {

                      if (rec['meals'])
                      {
                        // Anyadimos el id de firebase para luego poder utiliarlo
                        rec['meals'][0].idFirebase = propIdNames[recipe];

                        newRecipeList.push(rec['meals'][0])
                      }
                    })
                  }
                }


              }

              // Hacemos un push del la lista actual de recetas
              this.recipeList.push({ title: newRecipeListName, list: newRecipeList })
              this.recipeListIds.push({ title: newRecipeListName, list: idRecipeList })
            }
          }
        }

      // console.log(this.recipeListIds)

      // Guardamos la lista de ids para luego cachearla y utilizarla para consultar si tienes recetas favoritas
      localStorage.setItem('userRecipeList', JSON.stringify(this.recipeListIds));

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

  deleteRecipeFromList(category, idFirebase, idRecipe): void {
    console.log(idFirebase)
    this.db.deleteRecipeFromCategory(idFirebase, idRecipe, category);
  }

  createNewRecipeList(listName): void {
    if (listName.length > 0)
    {
      this.createdList = true;
      console.log(this.createdList)
      this.db.createNewRecipeList(listName);
      this.newListName = '';
    }

  }

  deleteList(listName) {
    console.log(listName)
    this.clickDeleteList = !this.clickDeleteList;
    this.listNameToDelete = listName;
  }

  acceptDeleteList() {

  }

  cancelDeleteList() {

  }

}
