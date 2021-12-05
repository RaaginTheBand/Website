import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getData<T>(collectionName: string, documentName: string): Observable<T> {
    return docData(doc(this.firestore, `${collectionName}/${documentName}`)) as Observable<T>;
  }
}
