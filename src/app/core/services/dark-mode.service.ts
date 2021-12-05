import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  isDarkOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // spinnerColor = (this.isDarkOn) ? '#7fdcdb' : '#7f0000';
  spinnerDark = '#7fdcdb';
  spinnerLight = '#7f0000';

  constructor() { }
}
