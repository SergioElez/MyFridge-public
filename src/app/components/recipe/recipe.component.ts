import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipeID: string;
  recipeCategory: string;
  recipeThumb: string;
  recipeName: string;
  recipeIngredients = [];
  recipeMeasures = [];
  recipeYoutubeLink: string;
  recipeTags;
  recipeInstructions: string;

  isFavorited: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private dbService: DbService
  ) { }

  ngOnInit(): void {
    this.getRecipeID();
    this.fetchRecipe(this.recipeID);
  }

  getRecipeID(): void {
    this.recipeID = this.route.snapshot.paramMap.get('id');
  }

  fetchRecipe(recipeID: string): void {
    this.recipeIngredients = [];
    this.recipeMeasures = [];

    this.appService.getRecipe(recipeID).subscribe(recipe => {
      recipe = recipe.meals[0];
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
          this.recipeMeasures.push(recipe[measure]);
        } else if (recipe[ingredient])
        {
          this.recipeIngredients.push(recipe[ingredient]);
        }
      }

      // console.log(this.recipeIngredients)
      // console.log(this.recipeMeasures)

      this.appService.setSpecificRecipe(recipe);
    });

    if (this.isThisRecipeFavourite())
      this.isFavorited = true;
  }

  isThisRecipeFavourite() {

    var userRecipeList = JSON.parse(localStorage.getItem('userRecipeList'));

    for (var list = 0; list < userRecipeList.length; list++)
    {
      console.log(userRecipeList[list]['title'])

      for (var recipe = 0; recipe < userRecipeList[list]['list'].length; recipe++)
      {
        let currentRecipeId = userRecipeList[list]['list'][recipe]

        if (this.recipeID == currentRecipeId)
        {
          return true;
        }

      }

    }

    return false;
  }

}
