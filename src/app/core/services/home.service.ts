import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  default: Observable<Home | undefined> = new Observable;
  promo: Observable<Home | undefined> = new Observable;

  constructor(private store: Firestore) { }

  getData(documentName: string): Observable<Home> {
    return docData(doc(this.store, `home/${documentName}`)) as Observable<Home>;
  }
}
