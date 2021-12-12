import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Contact } from '../core/models/contact';
import { DarkModeService } from '../core/services/dark-mode.service';
import { FirestoreService } from '../core/services/firestore.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  color = '';
  content: Contact = {} as Contact;
  facebookIcon = faFacebookF;
  instagramIcon = faInstagram;
  isLoaded = false;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private darkmodeService: DarkModeService,
              private faConfig: FaConfig,
              private firestoreService: FirestoreService) {
    this.faConfig.defaultPrefix = 'fab';
  }

  ngOnInit(): void {
    this.darkmodeService.isDarkOn.pipe(takeUntil(this.unsubscribe)).subscribe(res => this.color = (res) ? this.darkmodeService.spinnerDark : this.darkmodeService.spinnerLight);
    this.firestoreService.getData<Contact>('contact', 'default').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.content = res;
        this.isLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
