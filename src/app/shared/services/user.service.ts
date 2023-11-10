import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, mergeMap, throwError } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getByAny(item: { key: string; value: string }): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}?${item.key}=${item.value}`);
  }

  create(user: User) {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  update(user: User) {
    return this.http.put<User>(`${this.baseUrl}/user/${user.email}`, user);
  }

  delete(user: User) {
    return this.http.delete<User>(`${this.baseUrl}/user/${user.email}`);
  }
}
