import { Injectable } from '@angular/core';
import {from, map, Observable, switchMap} from 'rxjs';
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
    // @ts-ignore
    delete order.id;

    return from(this.orderCollection.add({ ...order }))
      .pipe(
        switchMap(docRef => {
          // Após a criação do documento, você pode obter os dados do Kit a partir do DocumentReference
          return this.orderCollection.doc(docRef.id).get().pipe(
            map(doc => {
              // Certifique-se de ajustar conforme a estrutura real do seu objeto Kit
              return doc.data() as Order;
            })
          );
        })
      );
  }

  update(order: Order): Observable<void> {
    return from(this.orderCollection.doc(order.id).update({ ...order }));
  }

  delete(order: Order) {
    return from(this.orderCollection.doc(order.id).delete());
  }
}
