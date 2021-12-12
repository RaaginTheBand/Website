import { Component, Input } from '@angular/core';

import { Photo } from '../../core/models/media';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  @Input('spinnerColor') color = '';
  @Input('data') content: Photo[] = [];
  @Input() isLoaded = false;

  constructor() { }

}
