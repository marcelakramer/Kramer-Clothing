import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kit } from 'src/app/shared/model/kit';
import { Order } from 'src/app/shared/model/order';
import { Plan } from 'src/app/shared/model/plan';
import { KitService } from 'src/app/shared/services/kit.service';
import { MessageSweetService } from 'src/app/shared/services/message.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { PlanService } from 'src/app/shared/services/plan.service';

@Component({
  selector: 'app-order-listing',
  templateUrl: './order-listing.component.html',
  styleUrls: ['./order-listing.component.scss']
})
export class OrderListingComponent implements OnInit{
  orders: Order[] = [];
  columns: string[] = ['id', 'date', 'devolutionDate', 'status', 'price', 'kit', 'plan', 'actions'];
  userId: string = '';
  kitsLabels: Object = {};
  plansLabels: Object = {};


  constructor(private orderService: OrderService, private planService: PlanService, private kitService: KitService, private activatedRoute: ActivatedRoute, private router: Router, private messageService: MessageSweetService) {}

  ngOnInit(): void {
    this.userId = (this.activatedRoute.snapshot.params['userId']);
    this.orderService.getByAny({key: 'userId', value: this.userId}).subscribe(
      response => {
        console.log(response);

        this.orders = response;
      }
    );
    this.kitService.getAll().subscribe(
      response => {
      this.kitsLabels = this.mapKitsToLabels(response);
      }
    );
    this.planService.getAll().subscribe(
      response => {
      this.plansLabels = this.mapPlansToLabels(response);
      }
    );
  }

  mapKitsToLabels(kits: Kit[]): { [key: number]: string } {
    const labels: { [key: number]: string } = {};

    kits.forEach((kit) => {
      labels[kit.id] = kit.name;
    });

    return labels;
  }

  mapPlansToLabels(plans: Plan[]): { [key: number]: string } {
    const labels: { [key: number]: string } = {};

    plans.forEach((plan) => {
      labels[plan.id] = plan.duration;
    });

    return labels;
  }

  isReturned(order: Order): boolean {
    return order.status === 'Returned';
  }

  returnOrder(order: Order): void {
    const index = this.orders.findIndex(obj => obj.id === order.id);
    this.orders[index].status = 'Returned';
    this.orderService.update(this.orders[index]).subscribe();
  }

  deleteOrder(order: Order): void {
    const index = this.orders.findIndex(obj => obj.id === order.id);
    this.orderService.delete(this.orders[index]).subscribe(
      () => {
        this.orderService.getByAny({key: 'userId', value: this.userId}).subscribe(
          response => {
            this.orders = response;
          }
        );
        this.messageService.success('Order deleted successfully.');
      }
    );

  }

  goBack() {
    this.router.navigate(['/profile', this.userId]);
  }

}
