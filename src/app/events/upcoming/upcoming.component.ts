import { Component, Input } from '@angular/core';

import { Upcoming } from '../../core/models/events';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent {

  @Input('spinnerColor') color = '';
  @Input('data') content: Upcoming = {} as Upcoming;
  @Input() isLoaded = false;

  constructor() { }

}
