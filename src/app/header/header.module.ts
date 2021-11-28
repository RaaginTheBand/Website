import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatTabsModule,
    MatToolbarModule,
    SharedModule
  ]
})
export class HeaderModule { }
