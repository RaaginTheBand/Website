import { Component, Input, OnInit } from '@angular/core';

import { History } from '../../core/models/about';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input('spinnerColor') color = '';
  @Input('data') content: History = {} as History;
  @Input() isLoaded = false;
  isPortrait = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(orientation: portrait)']).subscribe((state: BreakpointState) => {
      if (state) {
        this.isPortrait = state.matches;
      }
    });
  }

}
