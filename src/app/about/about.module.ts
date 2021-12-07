import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HistoryComponent } from './history/history.component';
import { MembersComponent } from './members/members.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    HistoryComponent,
    MembersComponent
  ],
  imports: [
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
