import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, mergeMap, throwError } from 'rxjs';
import { BaseService } from './base.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/user');
  }

  override create(user: User): Observable<User> {
    return this.http.get<User[]>(`${this.baseUrl}?_email=${user.email}`).pipe(
      mergeMap((existingUsers) => {
        if (existingUsers.length > 0) {
          return throwError('Email já cadastrado');
        } else {
          return this.http.post<User>(this.baseUrl, user);
        }
      })
    );
  }

  authenticate(email: string, password: string): Observable<User> {
    return this.http
      .get<User[]>(`${this.baseUrl}?_email=${email}&_password=${password}`)
      .pipe(
        map((users) => {
          if (users.length === 1) {
            return users[0];
          } else {
            throw new Error('Credenciais inválidas');
          }
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
