import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { UnloggedHeaderComponent } from './unlogged-header/unlogged-header.component';
import { MatButtonModule } from '@angular/material/button';
import { LoggedHeaderComponent } from './logged-header/logged-header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


@NgModule({
  declarations: [
    FooterComponent,
    UnloggedHeaderComponent,
    LoggedHeaderComponent,
    MainPageComponent,
    ThankYouComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    UnloggedHeaderComponent,
    LoggedHeaderComponent,
    MainPageComponent,
    ThankYouComponent
  ]
})
export class LayoutModule { }
