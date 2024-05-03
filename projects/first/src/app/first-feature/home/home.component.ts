import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LogLibService } from 'shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: { app: 'first' },
})
export class HomeComponent {
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _logLibService: LogLibService
  ) {}

  handleClick() {
    this._logLibService.log('Loading todos...');
    this._router.navigate(['todos'], { relativeTo: this._route });
  }
}
