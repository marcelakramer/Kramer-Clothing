import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plano } from '../model/plano';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PlanoService extends BaseService<Plano> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/plano');
  }
}
