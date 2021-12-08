import { Component, Input } from '@angular/core';

import { History } from '../../core/models/about';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  @Input('spinnerColor') color = '';
  @Input('data') content: History = {} as History;
  @Input() isLoaded = false;

  constructor() { }

}
