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
  names: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content']) {
      this.names = Object.keys(this.content).sort();
    }
  }

}
