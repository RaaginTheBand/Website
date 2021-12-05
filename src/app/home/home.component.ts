import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, ReplaySubject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';
import { Home } from '../core/models/home';
import { FirestoreService } from '../core/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  content: Home = {} as Home;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {

    this.firestoreService.getData<Home>('home', 'promo').pipe(concatMap(doc => doc === null ? EMPTY : this.firestoreService.getData<Home>('home', 'default')), takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
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

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
