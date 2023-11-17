import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/shared/model/plan';
import { PlanService } from 'src/app/shared/services/plan.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/model/user';
import { Order } from 'src/app/shared/model/order';
import { KitService } from 'src/app/shared/services/kit.service';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss']
})
export class PlanSelectionComponent {
  plans: Plan[] = [];
  selectedPlan: Plan | null = null;
  order: Order = new Order('', '', '', '', 0, '', '', [], '');
  user: User | null = null;

  constructor(private planService: PlanService, private orderService: OrderService, private userService: UserService, private kitService: KitService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.planService.getAll().subscribe(
        response => {
          this.plans = response;
        }
      )
      const orderId = this.activatedRoute.snapshot.params['orderId'];
      this.orderService.getByAny({key: 'id',  value: orderId}).subscribe(
        response => {
          this.order = response[0];
          this.kitService.getByAny({key: 'id',  value: this.order.kitId}).subscribe(
            response => {
              const kit = response[0];
              this.updatePrices(kit.factor);
            }
          )
        }
      );
      const userId = (this.activatedRoute.snapshot.params['userId?']);
      this.userService.getByAny({key: 'id', value: userId}).subscribe(
        response => {
          this.user = response[0];
        }
      )
  }

  toggleSelected(plan: Plan): void {
    if (this.isSelected(plan)) {
      this.selectedPlan = null;
    } else {
      this.selectedPlan = plan;
    }
  }

  isSelected(plan: Plan): boolean {
    return this.selectedPlan === plan;
  }

  canContinue(): boolean {
    return this.selectedPlan !== null;
  }

  updatePrices(factor: number): void {
    this.plans.map((plan) => plan.basePrice = plan.basePrice * factor);
  }

  updateOrder(): void {
    if (this.selectedPlan?.id) {
      this.order.planId = this.selectedPlan?.id;
      let devolutionDate = new Date(this.order.date);
      devolutionDate.setDate(devolutionDate.getDate() + this.selectedPlan?.duration);
      this.order.devolutionDate = devolutionDate.toDateString();
      this.order.price = this.selectedPlan.basePrice
    }
    this.orderService.update(this.order).subscribe();
  }

  goToKits(): void {
    this.orderService.delete(this.order).subscribe();
    this.router.navigate(['/kits', this.user?.id]);
  }

  goToClothes(): void {
    this.updateOrder();
    this.router.navigate(['/clothes', this.order?.id, this.user?.id])
  }

}
