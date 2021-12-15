import { Component } from '@angular/core';

import { tabs } from './core/constants/tabs';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  darkMode = false;
  isMobileMenuOpen = false;
  tabs = tabs;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.isDarkOn.subscribe((bool) => {
      this.darkMode = bool;
    });
  }

  close(): void {
    this.isMobileMenuOpen = false;
  }

  open(event: boolean) {
    this.isMobileMenuOpen = true;
  }
}
