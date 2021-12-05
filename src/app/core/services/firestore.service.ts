import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  default: Observable<Home | undefined> = new Observable;
  promo: Observable<Home | undefined> = new Observable;

  constructor(private firestore: Firestore) { }

  getData<T>(collectionName: string, documentName: string): Observable<T> {
    return docData(doc(this.firestore, `${collectionName}/${documentName}`)) as Observable<T>;
  }
}
