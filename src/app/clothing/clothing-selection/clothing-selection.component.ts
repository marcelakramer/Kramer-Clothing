import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothing } from 'src/app/shared/model/clothing';
import { Plan } from 'src/app/shared/model/plan';
import { Kit } from 'src/app/shared/model/kit';
import { ClothingService } from 'src/app/shared/services/clothing.service';
import { PlanService } from 'src/app/shared/services/plan.service';
import { KitService } from 'src/app/shared/services/kit.service';
import { UserService } from 'src/app/shared/services/user.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { User } from 'src/app/shared/model/user';
import { Order } from 'src/app/shared/model/order';
@Component({
  selector: 'app-clothing-selection',
  templateUrl: './clothing-selection.component.html',
  styleUrls: ['./clothing-selection.component.scss']
})
export class ClothingSelectionComponent implements OnInit{
  clothes: Clothing[] = [];
  selectedClothes: Clothing[] = [];
  clothesRemaining: number | undefined;
  order: Order = new Order('', '', '', '', 0, '', '', [], '');
  kit: Kit | null = null;
  plan: Plan | null = null;
  user: User | null = null;

  constructor(private clothingService: ClothingService, private orderService: OrderService, private planService: PlanService, private kitService: KitService, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    const orderId = this.activatedRoute.snapshot.params['orderId'];
      this.orderService.getByAny({key: 'id',  value: orderId}).subscribe(
        response => {
          this.order = response[0];
          this.kitService.getByAny({key: 'id',  value: this.order.kitId}).subscribe(
            response => {
              this.kit = response[0];
            }
          );
          this.planService.getByAny({key: 'id',  value: this.order.planId}).subscribe(
            response => {
              this.plan = response[0];
            }
          );

          if (this.order.kitId.toString() === '4') {
            this.clothingService.getAll().subscribe(
              response => {
                this.clothes = response;
                this.calcClothesRemaining();
              });
          } else {
            this.clothingService.getByAny({key: 'kitId', value: this.order.kitId.toString()}).subscribe(
              response => {
                this.clothes = response;
                this.calcClothesRemaining();
              });
          }
        }
      );

    const userId = (this.activatedRoute.snapshot.params['userId']);
    this.userService.getByAny({key: 'id', value: userId}).subscribe(
      response => {
        this.user = response[0];
      }
    );
  }

  toggleSelected(clothing: Clothing): void {
    if (this.isSelected(clothing)) {
      this.selectedClothes = this.selectedClothes.filter((c) => c !== clothing);
    } else if (this.clothesRemaining === 0) {
      alert("There are no remaining clothes to choose.");
    } else {
      this.selectedClothes.push(clothing);
    }
    this.calcClothesRemaining();
  }

  isSelected(clothing: Clothing): boolean {
    return this.selectedClothes.includes(clothing);
  }

  isUnavailable(clothing: Clothing): boolean {
    return !this.selectedClothes.includes(clothing) && this.canContinue();
  }

  calcClothesRemaining(): void {
    if (this.plan !== null) {
      this.clothesRemaining = this.plan?.numOfClothes - this.selectedClothes.length;
    }
  }

  canContinue(): boolean {
    return this.clothesRemaining === 0;
  }

  updateOrder(): void {
    const clothesIds = this.selectedClothes.map(clothing => clothing.id);
    this.order.clothesIds = clothesIds;
    this.orderService.update(this.order).subscribe();
  }
  
  goToClothingInfo(clothing: Clothing) {
    this.router.navigate(['clothing', clothing.id, this.order.id, this.user?.id]);
  }

  goToPlans(): void {
    this.router.navigate(['plans', this.order.id, this.user?.id]);
  }

  goToFinalPage(): void {
    this.updateOrder();
    this.router.navigate(['thank-you', this.user?.id]);
  }

}
