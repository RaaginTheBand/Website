import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Past, Upcoming } from '../core/models/events';
import { DarkModeService } from '../core/services/dark-mode.service';
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
  pastData: Past[] = [];
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);
  upcomingData: Upcoming = {} as Upcoming;

  constructor(private darkModeService: DarkModeService,
              private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getData<Upcoming>('events', 'upcoming').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.upcomingData = res;
        this.isUpcomingLoaded = true;
      }
    });
    this.firestoreService.getData<any>('events', 'past').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.pastData = res.events;
        this.isPastLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
