import { Component, OnInit } from '@angular/core';

import { History } from '../../core/models/about';
import { FirestoreService } from '../../core/services/firestore.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  content: History = {} as History;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getData<History>('about', 'history').subscribe(res => {
      if (res) {
        this.content = res;
      }
    });
  }

}
