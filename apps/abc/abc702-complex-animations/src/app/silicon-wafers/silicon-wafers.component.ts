import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { updateSimulation } from './silicon-wafers.animations';

@Component({
  selector: 'wafers-component',
  templateUrl: './silicon-wafers.component.html',
  styleUrls: ['./silicon-wafers.component.scss'],
  animations: [updateSimulation]
})
export class SiliconWafersComponent {
  etchDepth = new FormControl(50);
  etchTime = new FormControl(3);
}
