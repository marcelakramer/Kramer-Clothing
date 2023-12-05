import { Injectable } from '@angular/core';
import {from, map, Observable} from 'rxjs';
import { Plan } from '../model/plan';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PlanFirestoreService {
  private planCollection: AngularFirestoreCollection<Plan>;
  private COLLECTION_NAME: string = 'plans';

  constructor(private afs: AngularFirestore) {
    this.planCollection = afs.collection(this.COLLECTION_NAME);
  }

  getAll(): Observable<Plan[]> {
    return this.planCollection.valueChanges({ idField: 'id' });
  }

  getByAny(item: { key: string; value: string }): Observable<Plan[]> {
    let planByAny: AngularFirestoreCollection<Plan>;
    planByAny = this.afs.collection(this.COLLECTION_NAME, (ref) =>
      ref.where(item.key, '==', item.value)
    );

    return planByAny.get().pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data()))
    );
  }

  create(plan: Plan): Observable<object> {
    return from(this.planCollection.add(Object.assign({}, plan)));
  }

  update(plan: Plan): Observable<void> {
    return from(this.planCollection.doc(plan.id).update({ ...plan }));
  }

  delete(plan: Plan) {
    return from(this.planCollection.doc(plan.id).delete());
  }
}
