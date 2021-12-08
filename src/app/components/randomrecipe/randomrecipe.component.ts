import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-randomrecipe',
  templateUrl: './randomrecipe.component.html',
  styleUrls: ['./randomrecipe.component.scss']
})
export class RandomrecipeComponent implements OnInit {

  recipeID: string;
  recipeCategory: string;
  recipeThumb: string;
  recipeName: string;
  recipeIngredients = [];
  recipeMeasures = [];
  recipeMeasuresString = [];
  recipeYoutubeLink: string;
  recipeTags;
  recipeInstructions: string;

  isFavorited: boolean = false;

  clickAddToCategory: boolean = false;

  userLists;

  logued: boolean = false;

  // Cantidad de comensales
  numberOfDiners = 1;

  enlaceReceta;
  fontSize;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private dbService: DbService,
    private clipboard: Clipboard,
  ) {


  }

  ngOnInit(): void {
    this.fetchRandomRecipe();

    this.enlaceReceta = window.location.href;

    this.userLists = JSON.parse(localStorage.getItem('userRecipeList'));
    console.log(this.userLists)

    if (localStorage.getItem('logued') === 'true')
      this.logued = true;
    if (localStorage.getItem('logued') === 'false')
      this.logued = false;
  }

  fetchRandomRecipe(): void {
    this.recipeIngredients = [];
    this.recipeMeasures = [];

    this.appService.getRandomRecipe().subscribe(recipe => {

      recipe = recipe.meals[0];
      this.recipeID = recipe.idMeal;
      this.recipeThumb = recipe.strMealThumb;
      this.recipeName = recipe.strMeal;
      this.recipeCategory = recipe.strCategory;
      this.recipeInstructions = recipe.strInstructions;
      this.recipeYoutubeLink = recipe.strYoutube;

      // Ponemos espacios entre las comas
      if (recipe.strTags)
        this.recipeTags = recipe.strTags.replaceAll(',', ', ')


      for (let index = 1; index <= 20; index++)
      {
        let ingredient = 'strIngredient' + index;
        let measure = 'strMeasure' + index;

        if (recipe[ingredient] && recipe[measure])
        {
          this.recipeIngredients.push(recipe[ingredient]);

          // Obtenemos el numero de medida
          let measureNumber = recipe[measure].split(' ')[0];

          // FORMATEO

          // SI es un numero
          if (!isNaN(parseInt(measureNumber)))
          {
            // Le quitamos los string que no queremos 
            if (measureNumber.search('g') != -1)
              measureNumber = recipe[measure].split('g')[0];
            if (measureNumber.search('tbs') != -1)
              measureNumber = recipe[measure].split('tbs')[0];
            if (measureNumber.search('ml') != -1)
              measureNumber = recipe[measure].split('ml')[0];
            if (measureNumber.search('l') != -1)
              measureNumber = recipe[measure].split('l')[0];
            if (measureNumber.search('-') != -1)
              measureNumber = recipe[measure].split('-')[0];
            if (measureNumber.search('rd') != -1)
              measureNumber = recipe[measure].split('rd')[0];

            // Si hay un / dividimos la cantidad
            if (measureNumber.search('/') != -1)
              measureNumber = parseInt(recipe[measure].split('/')[0]) / parseInt(recipe[measure].split('/')[1]);
          }
          else
          {
            // Si no es un numero la cantidad es 1
            measureNumber = 1;
          }


          let measureString = '';
          for (let i = 1; i < recipe[measure].split(' ').length; i++)
          {
            measureString = measureString + recipe[measure].split(' ')[i] + " ";
          }
          console.log(measureNumber)
          console.log(measureString)

          this.recipeMeasures.push(measureNumber);
          this.recipeMeasuresString.push(measureString);
        } else if (recipe[ingredient])
        {
          this.recipeIngredients.push(recipe[ingredient]);
        }
      }

      // console.log(this.recipeIngredients)
      console.log(recipe)

      this.appService.setSpecificRecipe(recipe);
    });

    // Comprobamos si esta receta esta en favoritos
    if (this.isThisRecipeFavourite())
      this.isFavorited = true;
  }

  isThisRecipeFavourite() {

    var userRecipeList = JSON.parse(localStorage.getItem('userRecipeList'));

    for (var list = 0; list < userRecipeList.length; list++)
    {
      for (var recipe = 0; recipe < userRecipeList[list]['list'].length; recipe++)
      {
        let currentRecipeId = userRecipeList[list]['list'][recipe]

        if (this.recipeID == currentRecipeId)
          return true;
      }
    }
    return false;
  }

  clickAddRecipeToFavourite() {
    this.isFavorited = true;
    this.dbService.addRecipeToCategory(this.recipeID, 'favourites');
  }

  removeFromFavourites() {
    this.isFavorited = false;
  }

  addToCategory() {
    this.clickAddToCategory = !this.clickAddToCategory;
  }

  share() {
    this.clipboard.copy(this.enlaceReceta);
  }

  addThisRecipeToUserList(userList) {
    console.log(this.recipeID)
    this.dbService.addRecipeToCategory(this.recipeID, userList);
  }

}
