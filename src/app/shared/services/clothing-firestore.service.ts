import { Injectable } from '@angular/core';
import {from, map, Observable} from 'rxjs';
import { Clothing } from '../model/clothing';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ClothingFirestoreService {
  private clothingCollection: AngularFirestoreCollection<Clothing>;
  private COLLECTION_NAME: string = 'clothings';

  constructor(private afs: AngularFirestore) {
    this.clothingCollection = afs.collection(this.COLLECTION_NAME);
  }

  getAll(): Observable<Clothing[]> {
    return this.clothingCollection.valueChanges({ idField: 'id' });
  }

  getByAny(item: { key: string; value: string }): Observable<Clothing[]> {
    let clothingByAny: AngularFirestoreCollection<Clothing>;
    clothingByAny = this.afs.collection(this.COLLECTION_NAME, (ref) =>
      ref.where(item.key, '==', item.value)
    );

    return clothingByAny.get().pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data()))
    );
  }

  create(clothing: Clothing): Observable<object> {
    return from(this.clothingCollection.add(Object.assign({}, clothing)));
  }

  update(clothing: Clothing): Observable<void> {
    return from(this.clothingCollection.doc(clothing.id).update({ ...clothing }));
  }

  delete(clothing: Clothing) {
    return from(this.clothingCollection.doc(clothing.id).delete());
  }
}
