import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRoutingModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ContactModule { }
