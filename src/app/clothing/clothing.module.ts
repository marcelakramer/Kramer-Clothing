import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClothingSelectionComponent } from './clothing-selection/clothing-selection.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: 'clothing-selection', component: ClothingSelectionComponent}
]

@NgModule({
  declarations: [
    ClothingSelectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    ClothingSelectionComponent
  ]
})
export class ClothingModule { }
