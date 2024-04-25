import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogLibService {
  constructor() {}

  log(message: string) {
    console.log('LogLibService: ', message);
  }
}
