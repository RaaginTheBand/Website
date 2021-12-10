import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { UpcomingComponent } from './upcoming/upcoming.component';


@NgModule({
  declarations: [
    EventsComponent,
    UpcomingComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
