import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { storageKeys } from '../core/constants/storage';
import { Contact } from '../core/models/contact';
import { DarkModeService } from '../core/services/dark-mode.service';
import { EmailService } from '../core/services/email.service';
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
  formData: FormGroup;
  instagramIcon = faInstagram;
  isDarkOn = false;
  isLoaded = false;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private darkModeService: DarkModeService,
              private emailService: EmailService,
              private faConfig: FaConfig,
              private firestoreService: FirestoreService,
              private form: FormBuilder,
              private storage: StorageMap,
              private titleService: Title) {
    this.faConfig.defaultPrefix = 'fab';
    this.formData = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      name: [''],
      text: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Contact | Raagin - Tucson\'s Indian Cover Band');
    this.storage.watch(storageKeys.SPINNER_COLOR, { type: 'string' }).subscribe(val => {
      if (val) {
        this.color = val;
      }
    });
    this.darkModeService.isDarkOn.pipe(takeUntil(this.unsubscribe)).subscribe(val => {
      if (val !== undefined) {
        this.isDarkOn = val;
      }
    });
    this.firestoreService.getData<Contact>('contact', 'default').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.content = res;
        this.isLoaded = true;
      }
    });
  }

  send(): void {
    const info = this.formData.value;
    if (info.email && info.text) {
      this.emailService.send(info.email, info.text, info.name);
      this.emailService.emailSent.pipe(takeUntil(this.unsubscribe)).subscribe(val => {
        if (val) {
          this.formData.reset();
          alert('Your message has been sent!');
        } else {
          alert('Unfortunately, your message could not be sent at this time. Please try again later or email raagintheband@gmail.com directly.');
        }
      });
    } else {
      alert('Please enter your email address and message.');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
