import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[lib-button]',
  templateUrl: './button.component.html',
  styles: [
    `
      .lib-button {
        padding: 8px;
        border-radius: 4px;
      }
    `,
  ],
})
export class ButtonComponent {
  @HostBinding('class') classes = 'lib-button';
}
