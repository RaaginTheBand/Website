import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';
import { HomeService } from './services/home.service';


@NgModule({
  providers: [
    DarkModeService,
    HomeService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule already imported');
    }
  }
}
