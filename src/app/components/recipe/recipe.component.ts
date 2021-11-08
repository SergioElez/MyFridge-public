import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

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
  recipeTags = [];
  recipeInstructions: string;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
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
      this.recipeTags = recipe.strTags;

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
  }

}
