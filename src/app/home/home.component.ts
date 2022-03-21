import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StorageMap } from '@ngx-pwa/local-storage';
import { EMPTY, ReplaySubject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';


import { storageKeys } from '../core/constants/storage';
import { Home } from '../core/models/home';
import { FirestoreService } from '../core/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  color = '';
  content: Home = {} as Home;
  isLoaded = false;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private firestoreService: FirestoreService,
              private storage: StorageMap,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Raagin - Tucson\'s Indian Cover Band');
    this.storage.watch(storageKeys.SPINNER_COLOR, { type: 'string' }).subscribe(val => {
      if (val) {
        this.color = val;
      }
    });
    this.firestoreService.getData<Home>('home', 'promo').pipe(concatMap(doc => doc === null ? EMPTY : this.firestoreService.getData<Home>('home', 'default')), takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.content = res;
        this.isLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
