import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  allCategories = [];
  recipeName: string;
  inputError: boolean;

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.inputError = false;

    this.allCategories = this.appService.getRecipeCategoriesData();

    // Si no ha datos guardados hacemos la consulta
    if (this.allCategories.length === 0)
      this.getRecipeCategories();
  }

  // Get meal categories
  getRecipeCategories(): void {
    this.appService.getRecipeCategories().subscribe(data => {
      data.categories.forEach((category, index) => {
        this.allCategories[index] = category;
      });
      this.appService.setRecipeCategories(this.allCategories);
    });
  }

  // Actualizamos el nombre de la receta a buscar con el input del usuario a tiempo real
  update(inputValue: string): void {
    this.recipeName = inputValue;
    // Descomentar para verlo en tiempo real
    //console.log(this.recipeName);
  }

  // Navigate user to recipe list view
  search(): void {
    console.log(this.recipeName);
    if (this.recipeName === undefined)
    {
      this.inputError = true;
    } else
    {
      this.router.navigate(['/recipelist', this.recipeName]);
    }
  }
}