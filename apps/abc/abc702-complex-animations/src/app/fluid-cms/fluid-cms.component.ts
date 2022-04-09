import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { shrinkTextOnUpdate } from './fluid-cms.animations';

@Component({
  selector: 'fluid-cms-component',
  templateUrl: './fluid-cms.component.html',
  animations: [shrinkTextOnUpdate],
  styleUrls: ['./fluid-cms.component.scss']
})
export class CmsFluidComponent {
  sizeAndSpeed = new FormGroup({
    animationSpeed: new FormControl(500),
    size: new FormControl(12)
  });
}
