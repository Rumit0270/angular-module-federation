import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogLibService {
  private _count = 0;

  constructor() {}

  log(message: string) {
    console.log(`LogLibService: ${this._count}`, message);
    this._count++;
  }
}
