import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { storageKeys } from '../core/constants/storage';
import { Past, Upcoming } from '../core/models/events';
import { FirestoreService } from '../core/services/firestore.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  color = '';
  isPastLoaded = false;
  isUpcomingLoaded = false;
  pastData: Past = {} as Past;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);
  upcomingData: Upcoming = {} as Upcoming;

  constructor(private firestoreService: FirestoreService,
              private storage: StorageMap,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Events | Raagin - Tucson\'s Indian Cover Band');
    this.storage.watch(storageKeys.SPINNER_COLOR, { type: 'string' }).subscribe(val => {
      if (val) {
        this.color = val;
      }
    });
    this.firestoreService.getData<Upcoming>('events', 'upcoming').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.upcomingData = res;
        this.isUpcomingLoaded = true;
      }
    });
    this.firestoreService.getData<Past>('events', 'past').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.pastData = res;
        this.isPastLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
