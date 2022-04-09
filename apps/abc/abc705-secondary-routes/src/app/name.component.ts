import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <h2>Hello {{ name | async }}!</h2>
    <p>I am a sample component.</p>
  `
})
export class NameComponent {
  name: Observable<string>;

  constructor(route: ActivatedRoute) {
    this.name = route.paramMap.pipe(
      map(params => params.get('name') as string)
    );
  }
}
