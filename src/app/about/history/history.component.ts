import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { History } from '../../core/models/about';
import { DarkModeService } from '../../core/services/dark-mode.service';
import { FirestoreService } from '../../core/services/firestore.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {

  color = '';
  content: History = {} as History;
  isLoaded = false;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private darkmodeService: DarkModeService,
              private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.darkmodeService.isDarkOn.pipe(takeUntil(this.unsubscribe)).subscribe(res => this.color = (res) ? this.darkmodeService.spinnerDark : this.darkmodeService.spinnerLight);
    this.firestoreService.getData<History>('about', 'history').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
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
