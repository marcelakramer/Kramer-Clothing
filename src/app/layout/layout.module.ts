import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { UnloggedHeaderComponent } from './unlogged-header/unlogged-header.component';
import { MatButtonModule } from '@angular/material/button';
import { LoggedHeaderComponent } from './logged-header/logged-header.component';


@NgModule({
  declarations: [
    FooterComponent,
    UnloggedHeaderComponent,
    LoggedHeaderComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    UnloggedHeaderComponent,
    LoggedHeaderComponent
  ]
})
export class LayoutModule { }
