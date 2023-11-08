import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { UnloggedHeaderComponent } from './unlogged-header/unlogged-header.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FooterComponent,
    UnloggedHeaderComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    UnloggedHeaderComponent
  ]
})
export class LayoutModule { }
