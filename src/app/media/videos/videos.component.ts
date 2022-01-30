import { Component, Input } from '@angular/core';

import { Video } from '../../core/models/media';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  @Input('spinnerColor') color = '';
  @Input('data') content: Video = {} as Video;
  @Input() isLoaded = false;

  constructor() { }

}
