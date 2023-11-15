import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitMainPageComponent } from './kits/kit-main-page/kit-main-page.component';
import { PlanMainPageComponent } from './plans/plan-main-page/plan-main-page.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ClothingSelectionComponent } from './clothing/clothing-selection/clothing-selection.component';
import { ThankYouComponent } from './layout/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: '/kits/', pathMatch: 'full' },
  { path: 'kits/:userId?', component: KitMainPageComponent },
  { path: 'plans/:kitId/:userId?', component: PlanMainPageComponent },
  { path: 'clothes/:kitId/:planId/:userId?', component: ClothingSelectionComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'thank-you/:userId', component: ThankYouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
