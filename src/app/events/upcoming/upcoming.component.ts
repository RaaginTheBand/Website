import { Component, Input, OnInit } from '@angular/core';

import { Upcoming } from '../../core/models/events';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  @Input('spinnerColor') color = '';
  @Input('data') content: Upcoming = {} as Upcoming;
  @Input() isLoaded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
