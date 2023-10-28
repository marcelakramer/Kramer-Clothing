import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacote } from '../model/pacote';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PacoteService extends BaseService<Pacote> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/pacote');
  }
}
