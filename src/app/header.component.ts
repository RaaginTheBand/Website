import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { StorageMap } from '@ngx-pwa/local-storage';

import { storageKeys } from './core/constants/storage';
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
  storageKeys = storageKeys;
  tabs = tabs;
  @Output() mobileMenuOpen = new EventEmitter<boolean>();

  constructor(private darkModeService: DarkModeService,
              private faConfig: FaConfig,
              private router: Router,
              private storage: StorageMap) {
    this.faConfig.defaultPrefix = 'fab';
    this.storage.get<boolean>(this.storageKeys.DARK_MODE, { type: 'boolean' }).subscribe((res) => {
      this.isDarkOn = (res !== undefined) ? res : false;
      this.darkModeService.isDarkOn.next(this.isDarkOn);
    });
    this.storage.get<string>(this.storageKeys.SPINNER_COLOR, { type: 'string' }).subscribe((res) => {
      if (res == undefined) {
        this.storage.set(this.storageKeys.SPINNER_COLOR, this.darkModeService.spinnerLight, { type: 'string' }).subscribe(() => {});
      }
    });
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
    this.storage.set(this.storageKeys.DARK_MODE, this.isDarkOn, { type: 'boolean' }).subscribe(() => {});
    const color = (this.isDarkOn) ? this.darkModeService.spinnerDark : this.darkModeService.spinnerLight;
    this.storage.set(this.storageKeys.SPINNER_COLOR, color, { type: 'string' }).subscribe(() => {});
  }

}
