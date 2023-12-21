import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clothing } from 'src/app/shared/model/clothing';
import { Kit } from 'src/app/shared/model/kit';
import { ClothingService } from 'src/app/shared/services/clothing.service';
import { KitService } from 'src/app/shared/services/kit.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { PlanService } from 'src/app/shared/services/plan.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-clothing-page',
  templateUrl: './clothing-page.component.html',
  styleUrls: ['./clothing-page.component.scss']
})
export class ClothingPageComponent {
  selectedClothing: Clothing = new Clothing('', '', '', '', '', '', '');
  selectedClothingKit: Kit = new Kit('', '', 0);
  orderId: string = '';
  userId: string = '';

  constructor(private clothingService: ClothingService, private kitService: KitService, private activatedRoute: ActivatedRoute,  private router: Router) {}

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params['orderId'];
    this.userId = this.activatedRoute.snapshot.params['userId'];
    const clothingId = this.activatedRoute.snapshot.params['clothingId'];
    this.clothingService.getByAny({key: 'id',  value: clothingId}).subscribe(
      response => {
        this.selectedClothing = response[0];
        this.kitService.getByAny({key: 'id',  value: this.selectedClothing.kitId}).subscribe(
          response => {
            this.selectedClothingKit = response[0];
          });
      });

  }

  goBackToClothingSelection(): void {
    this.router.navigate(['clothing-selection', this.orderId, this.userId]);
  }

}
