import { Component } from '@angular/core';
import { Plan } from 'src/app/shared/model/plan';
import { PlanService } from 'src/app/shared/services/plan.service';

@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss']
})
export class PlanSelectionComponent {
  plans: Plan[] = [];
  selectedPlan: Plan | null = null;

  constructor(private planService: PlanService) {}

  ngOnInit(): void {
      this.planService.getAll().subscribe(
        response => {
          this.plans = response;
        }
      )
      console.log(this.plans);
  }

  toggleSelected(plan: Plan): void {
    if (this.isSelected(plan)) {
      this.selectedPlan = null;
    } else {
      this.selectedPlan = plan;
    }
    console.log(this.selectedPlan);
  }

  isSelected(plan: Plan): boolean {
    return this.selectedPlan === plan;
  }

  canContinue(): boolean {
    return this.selectedPlan !== null;
  }
}
