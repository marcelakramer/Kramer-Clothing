import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitSelectionComponent } from './kits/kit-selection/kit-selection.component';
import { PlanSelectionComponent } from './plans/plan-selection/plan-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'kits', component: KitSelectionComponent },
  { path: 'plans', component: PlanSelectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
