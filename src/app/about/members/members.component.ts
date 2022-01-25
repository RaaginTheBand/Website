import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Members } from '../../core/models/about';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnChanges {

  @Input('spinnerColor') color = '';
  @Input('data') content: Members = {} as Members;
  @Input() isLoaded = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content'] && this.content.lineup) {
      this.content.lineup.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

}
