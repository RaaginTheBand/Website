import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    MediaComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
