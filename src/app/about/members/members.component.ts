import { Component, OnInit } from '@angular/core';

import { Members } from '../../core/models/about';
import { FirestoreService } from '../../core/services/firestore.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  content: Members = {} as Members;
  isLoaded = false;
  names: string[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getData<Members>('about', 'members').subscribe(res => {
      if (res) {
        this.content = res;
        this.names = Object.keys(res).sort();
        this.isLoaded = true;
      }
    });
  }

}
