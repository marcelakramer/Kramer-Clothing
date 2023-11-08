import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitSelectionComponent } from './kit-selection/kit-selection.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    KitSelectionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    KitSelectionComponent
  ]
})
export class KitsModule { }
