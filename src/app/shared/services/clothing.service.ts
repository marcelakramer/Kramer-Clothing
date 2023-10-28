import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clothing } from '../model/clothing';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ClothingService extends BaseService<Clothing> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/clothing');
  }
}
