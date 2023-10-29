import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/user');
  }
}
