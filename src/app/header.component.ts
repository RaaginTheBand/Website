import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { tabs } from './core/constants/tabs';
import { DarkModeService } from './core/services/dark-mode.service';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentTabIndex: number = 0;
  facebookIcon = faFacebookSquare;
  instagramIcon = faInstagramSquare;
  isDarkOn: boolean;
  tabs = tabs;
  @Output() mobileMenuOpen = new EventEmitter<boolean>();

  constructor(private darkModeService: DarkModeService,
              private localStorageService: LocalStorageService,
              private faConfig: FaConfig,
              private router: Router) {
    this.faConfig.defaultPrefix = 'fab';
    this.isDarkOn = (this.localStorageService.get('darkMode') !== null) ? this.localStorageService.get('darkMode') : false;
    this.darkModeService.isDarkOn.next(this.isDarkOn);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event && event instanceof NavigationEnd) {
        this.setCurrentTabIndex(event.url.substring(1));
      }
    });
  }

  openMobileMenu(): void {
    this.mobileMenuOpen.emit(true);
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
    this.localStorageService.set('darkMode', this.isDarkOn);
  }

}
