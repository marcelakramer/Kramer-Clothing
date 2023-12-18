import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingSelectionComponent } from './clothing-selection/clothing-selection.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ClothingPageComponent } from './clothing-page/clothing-page.component';


@NgModule({
  declarations: [
    ClothingSelectionComponent,
    ClothingPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    ClothingSelectionComponent,
    ClothingPageComponent,
  ]
})
export class ClothingModule { }
