import { Component, Input, OnInit } from '@angular/core';

import { Past } from '../../core/models/events';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.scss']
})
export class PastComponent implements OnInit {

  @Input('spinnerColor') color = '';
  @Input('data') content: Past[] = [];
  @Input() isLoaded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
