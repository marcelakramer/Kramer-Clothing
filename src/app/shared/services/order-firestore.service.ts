import { Injectable } from '@angular/core';
import {from, map, Observable} from 'rxjs';
import { Order } from '../model/order';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class OrderFirestoreService {
  private orderCollection: AngularFirestoreCollection<Order>;
  private COLLECTION_NAME: string = 'orders';

  constructor(private afs: AngularFirestore) {
    this.orderCollection = afs.collection(this.COLLECTION_NAME);
  }

  getAll(): Observable<Order[]> {
    return this.orderCollection.valueChanges({ idField: 'id' });
  }

  getByAny(item: { key: string; value: string }): Observable<Order[]> {
    let orderByAny: AngularFirestoreCollection<Order>;
    orderByAny = this.afs.collection(this.COLLECTION_NAME, (ref) =>
      ref.where(item.key, '==', item.value)
    );

    return orderByAny.get().pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data()))
    );
  }

  create(order: Order): Observable<object> {
    return from(this.orderCollection.add({...order}));
  }

  update(order: Order): Observable<void> {
    return from(this.orderCollection.doc(order.id).update({ ...order }));
  }

  delete(order: Order) {
    return from(this.orderCollection.doc(order.id).delete());
  }
}
