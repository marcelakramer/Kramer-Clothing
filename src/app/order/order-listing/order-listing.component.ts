import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/model/order';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.scss']
})
export class OrderListingComponent implements OnInit{
  orders: Order[] = [];
  columns: string[] = ['id', 'date', 'devolutionDate', 'status', 'price', 'kit', 'plan', 'actions'];

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute, router: Router) {}

  ngOnInit(): void {
    const userId = (this.activatedRoute.snapshot.params['userId']);
    this.orderService.getByAny({key: 'userId', value: userId}).subscribe(
      response => {
        this.orders = response;
      }
    )
  }

}
