import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import '../../../assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailSent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  send(email: string, text: string, name?: string): void {
    Email.send({
      SecureToken: '9bfceb19-3294-40ab-adf8-da4cc9c165be',
      To: 'raagintheband@gmail.com',
      From: 'raagintheband@gmail.com',
      Subject: 'Contact Raagin',
      Body: text + '<br><br>' + 'Sent from: ' + ((name) ? name + ' - ' : '') + email
    }).then((message: any) => {
      this.emailSent.next(message == 'OK');
    });
  }
}
