import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomrecipeRoutingModule } from './randomrecipe-routing.module';
import { RandomrecipeComponent } from './randomrecipe.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RandomrecipeComponent],
  imports: [
    FormsModule,
    MatIconModule,
    CommonModule,
    RandomrecipeRoutingModule
  ]
})
export class RandomrecipeModule { }
