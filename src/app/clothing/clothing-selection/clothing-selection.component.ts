import { Component, OnInit } from '@angular/core';
import { Clothing } from 'src/app/shared/model/clothing';
import { Plan } from 'src/app/shared/model/plan';
import { Kit } from 'src/app/shared/model/kit';
import { ClothingService } from 'src/app/shared/services/clothing.service';
@Component({
  selector: 'app-clothing-selection',
  templateUrl: './clothing-selection.component.html',
  styleUrls: ['./clothing-selection.component.scss']
})
export class ClothingSelectionComponent implements OnInit{
  clothes: Clothing[] = [];
  selectedClothes: Clothing[] = [];
  clothesRemaining: number = 5;
  //plan: Plan;
  //kit: Kit;

  constructor(private clothingService: ClothingService) {}

  ngOnInit(): void {
      this.clothingService.getAll().subscribe(
        response => {
          this.clothes = response;
          });
        }

  toggleSelected(clothing: Clothing): void {
    if (this.isSelected(clothing)) {
      this.selectedClothes = this.selectedClothes.filter((c) => c !== clothing);
    } else if (this.clothesRemaining === 0) {
      alert("There are no remaining clothes to choose.");
    } else {
      this.selectedClothes.push(clothing);
    }
    this.calcClothesRemaining()
    console.log(this.selectedClothes);
  }

  isSelected(clothing: Clothing): boolean {
    return this.selectedClothes.includes(clothing);
  }

  calcClothesRemaining(): void {
    this.clothesRemaining = 5 - this.selectedClothes.length;
  }

  canContinue(): boolean {
    return this.clothesRemaining === 0;
  }

}
