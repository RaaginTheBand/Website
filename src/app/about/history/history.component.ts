import { Component, OnInit } from '@angular/core';
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
export class HistoryComponent implements OnInit {

  color = '';
  content: History = {} as History;
  isLoaded = false;

  constructor(private darkmodeService: DarkModeService,
              private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.darkmodeService.isDarkOn.subscribe(res => this.color = (res) ? this.darkmodeService.spinnerDark : this.darkmodeService.spinnerLight);
    this.firestoreService.getData<History>('about', 'history').subscribe(res => {
      if (res) {
        this.content = res;
        this.isLoaded = true;
      }
    });
  }

}
