import { Injectable } from '@angular/core';
import '../../../assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  send(email: string, name: string, text: string): void {
    Email.send({
      SecureToken: '9bfceb19-3294-40ab-adf8-da4cc9c165be',
      To: 'raagintheband@gmail.com',
      From: email,
      Subject: 'Contact Raagin',
      Body: `${text}

      Sent from: ${name}`
    }).then((message: any) => alert(message));
  }
}
