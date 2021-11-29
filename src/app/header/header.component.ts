import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  facebookIcon = faFacebookSquare;
  instagramIcon = faInstagramSquare;

  constructor(faConfig: FaConfig) {
    faConfig.defaultPrefix = 'fab';
  }

  ngOnInit(): void {
  }

}
