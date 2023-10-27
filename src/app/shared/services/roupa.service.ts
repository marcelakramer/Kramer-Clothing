import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roupa } from '../model/roupa';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class RoupaService extends BaseService<Roupa> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/roupa');
  }
}
