import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { Tabs } from './core/models/tabs';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  facebookIcon = faFacebookSquare;
  instagramIcon = faInstagramSquare;
  isDarkOn = false;
  tabs: Tabs[] = [
    { name: 'Home', route: '' },
    { name: 'About', route: 'about' },
    { name: 'Events', route: 'events' },
    { name: 'Media', route: 'media' },
    { name: 'Contact', route: 'contact' }
  ];

  constructor(private darkModeService: DarkModeService,
              private faConfig: FaConfig,
              private router: Router) {
    this.faConfig.defaultPrefix = 'fab';
  }

  ngOnInit(): void {
  }

  selectTab(index: number): void {
    this.router.navigate([this.tabs[index].route]);
  }

  toggleTheme(): void {
    this.isDarkOn = !this.isDarkOn;
    this.darkModeService.isDarkOn.next(this.isDarkOn);
  }

}
