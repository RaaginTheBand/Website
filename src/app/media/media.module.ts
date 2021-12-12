import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    MediaComponent,
    PhotosComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
