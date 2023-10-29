import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../model/plan';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PlanService extends BaseService<Plan> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/plan');
  }
}
