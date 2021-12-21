import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { storageKeys } from '../core/constants/storage';
import { History, Members } from '../core/models/about';
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

  constructor(private firestoreService: FirestoreService,
              private storage: StorageMap) { }

  ngOnInit(): void {
    this.storage.watch(storageKeys.SPINNER_COLOR, { type: 'string' }).subscribe(val => {
      if (val) {
        this.color = val;
      }
    });
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
