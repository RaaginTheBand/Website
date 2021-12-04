import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EMPTY, ReplaySubject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';
import { Home } from '../core/models/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  content: Home | undefined;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
    const promoObs = this.store.collection('home').doc<Home>('promo').valueChanges();
    const defaultObs = this.store.collection('home').doc<Home>('default').valueChanges();

    promoObs.pipe(concatMap(doc => doc === null ? EMPTY : defaultObs), takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.content = res;
        console.log(this.content);
      }
    });
  }

  isHomeType(obj: any): obj is Home {
    return obj.title !== undefined;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
