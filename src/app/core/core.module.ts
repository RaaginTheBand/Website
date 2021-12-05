import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';
import { FirestoreService } from './services/firestore.service';


@NgModule({
  providers: [
    DarkModeService,
    FirestoreService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already imported');
    }
  }
}
