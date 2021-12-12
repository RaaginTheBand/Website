import { NgModule } from '@angular/core';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MediaComponent,
    PhotosComponent,
    VideosComponent
  ],
  imports: [
    MediaRoutingModule,
    SharedModule
  ]
})
export class MediaModule { }
