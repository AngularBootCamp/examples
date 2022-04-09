import { Component } from '@angular/core';

import { regionRecords } from './records';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  regionInfo = regionRecords;
  unitsScale = 100 / 10000;
  revenueScale = 100 / 50000000;

  // Avoid computation in templates
  regionClass(regionName: string) {
    return 'region-' + regionName;
  }
}
