import { Component, OnDestroy, OnInit } from '@angular/core';
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
  photosData: Photo[] = [];
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);
  videosData: Video[] = [];

  constructor(private firestoreService: FirestoreService,
              private storage: StorageMap) { }

  ngOnInit(): void {
    this.storage.watch(storageKeys.SPINNER_COLOR, { type: 'string' }).subscribe(val => {
      if (val) {
        this.color = val;
      }
    });
    this.firestoreService.getData<{photos: Photo[]}>('media', 'photos').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.photosData = res.photos;
        this.isPhotosLoaded = true;
      }
    });
    this.firestoreService.getData<{videos: Video[]}>('media', 'videos').pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      if (res) {
        this.videosData = res.videos;
        this.isVideosLoaded = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

}
