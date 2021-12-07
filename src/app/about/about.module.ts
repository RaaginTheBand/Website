import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HistoryComponent } from './history/history.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AboutComponent,
    HistoryComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
