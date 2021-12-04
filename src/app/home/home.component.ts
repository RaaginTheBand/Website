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

  content: Home = {} as Home;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
    const promoObs = this.store.collection('home').doc<Home>('promo').valueChanges();
    const defaultObs = this.store.collection('home').doc<Home>('default').valueChanges();

    promoObs.pipe(concatMap(doc => doc === null ? EMPTY : defaultObs), takeUntil(this.unsubscribe)).subscribe(res => {
      if (res && this.isHomeType(res)) {
        this.content = res;
        this.formatText();
      }
    });
  }

  formatText(): void {
    if (this.content.text.includes('\\n')) {
      this.content.text = this.content.text.replace(/\\n/g, '<br>');
    }
    // if (text && text.includes('\t')) {
    //   //
    // }
  }

  isHomeType(obj: any): obj is Home {
    return obj.title !== undefined;
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
