import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Members } from '../../core/models/about';
import { DarkModeService } from '../../core/services/dark-mode.service';
import { FirestoreService } from '../../core/services/firestore.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {

  color = '';
  content: Members = {} as Members;
  isLoaded = false;
  names: string[] = [];
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private darkmodeService: DarkModeService,
              private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.darkmodeService.isDarkOn.pipe(takeUntil(this.unsubscribe)).subscribe(res => this.color = (res) ? this.darkmodeService.spinnerDark : this.darkmodeService.spinnerLight);
    this.firestoreService.getData<Members>('about', 'members').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.content = res;
        this.names = Object.keys(res).sort();
        this.isLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
