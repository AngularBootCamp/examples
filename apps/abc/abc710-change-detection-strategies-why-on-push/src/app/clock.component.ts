import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'abc-clock',
  templateUrl: './clock.component.html'
})
export class ClockComponent {
  time = interval(10).pipe(map(v => v / 100));
}
