import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { tabs } from './core/constants/tabs';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentPath = '';
  darkMode = false;
  isMobileMenuOpen = false;
  tabs = tabs;

  constructor(private darkModeService: DarkModeService,
              private router: Router) {
    this.darkModeService.isDarkOn.subscribe((bool) => {
      this.darkMode = bool;
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event && event instanceof NavigationEnd) {
        this.currentPath = event.url.substring(1);
      }
    });
  }

  close(): void {
    this.isMobileMenuOpen = false;
  }

  menuSelect(route: string): void {
    this.router.navigate([route]);
    this.close();
  }

  open(event: boolean) {
    this.isMobileMenuOpen = true;
  }
}
