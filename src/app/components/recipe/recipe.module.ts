import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RecipeComponent],
  imports: [
    FormsModule,
    MatIconModule,
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
