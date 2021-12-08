import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { History, Members } from '../core/models/about';
import { DarkModeService } from '../core/services/dark-mode.service';
import { FirestoreService } from '../core/services/firestore.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  color = '';
  historyData: History = {} as History;
  isHistoryLoaded = false;
  isMembersLoaded = false;
  membersData: Members = {} as Members;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private darkmodeService: DarkModeService,
              private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.darkmodeService.isDarkOn.pipe(takeUntil(this.unsubscribe)).subscribe(res => this.color = (res) ? this.darkmodeService.spinnerDark : this.darkmodeService.spinnerLight);
    this.firestoreService.getData<History>('about', 'history').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.historyData = res;
        this.isHistoryLoaded = true;
      }
    });
    this.firestoreService.getData<Members>('about', 'members').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.membersData = res;
        this.isMembersLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
