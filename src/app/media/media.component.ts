import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { storageKeys } from '../core/constants/storage';
import { Photo, Video } from '../core/models/media';
import { FirestoreService } from '../core/services/firestore.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit, OnDestroy {

  color = '';
  isPhotosLoaded = false;
  isVideosLoaded = false;
  photosData: Photo = {} as Photo;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);
  videosData: Video = {} as Video;

  constructor(private firestoreService: FirestoreService,
              private storage: StorageMap,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Media | Raagin - Tucson\'s Indian Cover Band');
    this.storage.watch(storageKeys.SPINNER_COLOR, { type: 'string' }).subscribe(val => {
      if (val) {
        this.color = val;
      }
    });
    this.firestoreService.getData<Photo>('media', 'photos').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.photosData = res;
        this.isPhotosLoaded = true;
      }
    });
    this.firestoreService.getData<Video>('media', 'videos').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.videosData = res;
        this.isVideosLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
