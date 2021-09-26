import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Array de objetos Lista (titulo y lista de recetas)
  recipes: { title: string, list: any[] }[] = [];

  // Variable que indice el indice de la array de listas
  index = 0;

  constructor(private appService: AppService) { }

  async ngOnInit() {

    let favouriteRecipeList = await this.appService.getRecipeListFromUser("69DHXLGnntbBAybMhU3TFROrb702", "lista1")

    this.AddRecipeList(favouriteRecipeList, "Favoritos");

    let recipeList = await this.appService.getRecipeListFromUser("69DHXLGnntbBAybMhU3TFROrb702", "lista2")

    //this.AddRecipeList(recipeList, "lista2");



    console.log(this.recipes)
  }


  private AddRecipeList(recipeList, title) {
    let currentList = {
      title: title,
      list: []
    };

    // Recibo un observable de observables (esto es porque si los guardo en una array no puedo obtenerlos observables)
    recipeList.subscribe(recipes => {
      // Añado cada receta sin duplicados
      recipes[this.index].subscribe(recipe => {

        if (this.CheckDuplicates(recipe["meals"][0]["idMeal"], currentList.list))
          currentList.list.push(recipe["meals"][0]);
      });

      this.index++;
    });

    this.recipes.push(currentList);
  }

  // Comprobamos que no haya recetas duplicadas
  CheckDuplicates(id, list): boolean {

    for (let i = 0; i < list.length; i++)
    {
      if (list[i]["idMeal"] === id)
        return false;
    }

    return true;
  }
}
