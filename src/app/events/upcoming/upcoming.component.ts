import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Upcoming } from '../../core/models/events';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnChanges {

  @Input('spinnerColor') color = '';
  @Input('data') content: Upcoming = {} as Upcoming;
  @Input() isLoaded = false;
  isEvent = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content']['currentValue'] && this.content) {
      this.isEvent = Boolean(changes['content']['currentValue']['events'].length || this.content.events.length);
    }
  }

}
