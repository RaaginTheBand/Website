import { Component, Input } from '@angular/core';

import { Past } from '../../core/models/events';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent {

  @Input('spinnerColor') color = '';
  @Input('data') content: Past[] = [];
  @Input() isLoaded = false;

  constructor() { }

}
