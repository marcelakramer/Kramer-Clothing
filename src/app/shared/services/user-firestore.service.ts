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

  getByAny(item: { key: string; value: string }): Observable<User[]> {
    let userByAny: AngularFirestoreCollection<User>;
    userByAny = this.afs.collection(this.COLLECTION_NAME, ref =>
      ref.where(item.key, '==', item.value)
    );

    return userByAny.get().pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data()))
    );
  }

  create(user: User): Observable<object> {
    return from(this.userCollection.add(Object.assign({}, user)));
  }

  update(user: User): Observable<void> {
    return from(this.userCollection.doc(user.id).update({...user}));
  }

  delete(user: User) {
    return from(this.userCollection.doc(user.id).delete())
  }

  changeLoggedIn(bool: boolean) {
    this.islogged = bool;
  }

  isLoggedIn(): boolean {
    return this.islogged;
  }
}
