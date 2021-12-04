import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Home } from '../core/models/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  default: Home | undefined;
  promo: Home | undefined;

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
    this.store.collection('home').doc<Home>('promo').valueChanges().subscribe(res => {
      if (res && this.isHomeType(res)) {
        this.promo = res;
        console.log(this.promo);
      }
    });
    this.store.collection('home').doc<Home>('default').valueChanges().subscribe(res => {
      if (res && this.isHomeType(res)) {
        this.default = res;
        console.log(this.default);
      }
    });
  }

  isHomeType(obj: any): obj is Home {
    return obj.title !== undefined;
  }

}
