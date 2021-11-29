import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { DarkModeService } from '../core/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  facebookIcon = faFacebookSquare;
  instagramIcon = faInstagramSquare;
  isDarkOn = false;

  constructor(private darkModeService: DarkModeService,
              faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fab';
  }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.isDarkOn = !this.isDarkOn;
    this.darkModeService.isDarkOn.next(this.isDarkOn);
  }

}
