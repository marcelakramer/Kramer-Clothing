import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListingComponent } from './order-listing/order-listing.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    OrderListingComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    OrderListingComponent
  ]
})
export class OrderModule { }
