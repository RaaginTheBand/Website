import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from './services/dark-mode.service';
import { FirestoreService } from './services/firestore.service';
import { LocalStorageService } from './services/local-storage.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DarkModeService,
    FirestoreService,
    LocalStorageService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already imported');
    }
  }
}
