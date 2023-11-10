import { Component, OnInit } from '@angular/core';
import { Kit } from 'src/app/shared/model/kit';
import { KitService } from 'src/app/shared/services/kit.service';

@Component({
  selector: 'app-kit-selection',
  templateUrl: './kit-selection.component.html',
  styleUrls: ['./kit-selection.component.scss']
})
export class KitSelectionComponent implements OnInit{
  kits: Kit[] = [];
  selectedKit: Kit | null = null;

  constructor(private kitService: KitService) {}

  ngOnInit(): void {
      this.kitService.getAll().subscribe(
        response => {
          response.map((kit) => {
            this.kits.push(
              new Kit(
                '',
                kit.name,
                kit.factor
              )
            )
          })
        }
      )
      console.log(this.kits);
  }

  toggleSelected(kit: Kit): void {
    if (this.isSelected(kit)) {
      this.selectedKit = null;
    } else {
      this.selectedKit = kit;
    }
    console.log(this.selectedKit);
  }

  isSelected(kit: Kit): boolean {
    return this.selectedKit === kit;
  }
}
