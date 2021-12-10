import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PastComponent } from './past/past.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EventsComponent,
    UpcomingComponent,
    PastComponent
  ],
  imports: [
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
