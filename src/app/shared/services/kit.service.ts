import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kit } from '../model/kit';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class KitService extends BaseService<Kit> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/kit');
  }
}
