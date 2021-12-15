import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { tabs } from './core/constants/tabs';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentTabIndex: number = 0;
  facebookIcon = faFacebookSquare;
  instagramIcon = faInstagramSquare;
  isDarkOn = false;
  tabs = tabs;

  constructor(private darkModeService: DarkModeService,
              private faConfig: FaConfig,
              private router: Router) {
    this.faConfig.defaultPrefix = 'fab';
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event && event instanceof NavigationEnd) {
        this.setCurrentTabIndex(event.url.substring(1));
      }
    });
  }

  selectTab(index: number): void {
    this.router.navigate([this.tabs[index].route]);
  }

  setCurrentTabIndex(path: string): void {
    this.currentTabIndex = this.tabs.findIndex(tab => tab.route == path);
  }

  toggleTheme(): void {
    this.isDarkOn = !this.isDarkOn;
    this.darkModeService.isDarkOn.next(this.isDarkOn);
  }

}
