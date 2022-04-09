import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-third',
  template: ` <div class="outline-box">Third Component</div> `,
  styleUrls: ['./third.component.css'],
  encapsulation: ViewEncapsulation.Emulated // this is the default
  // encapsulation: ViewEncapsulation.None
})
export class ThirdComponent {}
