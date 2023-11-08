import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PlanSelectionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    PlanSelectionComponent
  ]
})
export class PlansModule { }
