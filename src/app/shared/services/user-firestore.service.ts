import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { User } from '../model/user';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})
export class UserFirestoreService {
  private userCollection: AngularFirestoreCollection<User>;
  private COLLECTION_NAME: string = 'users';
  private islogged: boolean = false;

  constructor(private afs: AngularFirestore) {
    this.userCollection = afs.collection(this.COLLECTION_NAME)
  }

  getAll(): Observable<User[]> {
    return this.userCollection.valueChanges({idField: 'id'});
  }

//   getByAny(item: { key: string; value: string }): Observable<User[]> {
//     return this.http.get<User[]>(`${this.baseUrl}?${item.key}=${item.value}`);
//   }

//   create(user: User) {
//     return this.http.post<User>(`${this.baseUrl}`, user);
//   }

//   update(user: User) {
//     return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
//   }

//   delete(user: User) {
//     return this.http.delete<User>(`${this.baseUrl}/${user.id}`);
//   }

  changeLoggedIn(bool: boolean) {
    this.islogged = bool;
  }

  isLoggedIn(): boolean {
    return this.islogged;
  }
}
