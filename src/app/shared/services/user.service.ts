import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'http://localhost:5420/users';
  private islogged: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getByAny(item: { key: string; value: string }): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${item.value}`);
  }

  getById(id: string) {
    return this.http.get<User>(`${this.baseUrl}?id=${id}`)
  }

  create(user): Observable<User> {
    return this.http.post<User>(
      this.baseUrl,
      JSON.stringify(
        {
          name: user.name,
          email: user.email,
          password: user.password
        }
      ),
      this.httpOptions
    );
  }

  update(user: User) {
    return this.http.put<User>(`${this.baseUrl}?id=${user.id}`, user);
  }

  delete(user: User) {
    return this.http.delete<User>(`${this.baseUrl}/${user.id}`);
  }

  changeLoggedIn(bool: boolean) {
    this.islogged = bool;
  }

  isLoggedIn(): boolean {
    return this.islogged;
  }
}
