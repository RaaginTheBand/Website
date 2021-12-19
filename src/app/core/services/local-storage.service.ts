import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  clear(): void {
    if (this.isLocalStorageSupported) {
      this.localStorage.clear();
    }
  }

  get(key: string): any {
    if (this.isLocalStorageSupported) {
      const json = this.localStorage.getItem(key);
      if (json) {
        return JSON.parse(json);
      }
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }

  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }
}
