import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PastComponent } from './past/past.component';


@NgModule({
  declarations: [
    EventsComponent,
    UpcomingComponent,
    PastComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
