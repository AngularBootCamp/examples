import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState, emptyCart, pickApples, pickBerry } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  berry: Observable<number>;
  apple: Observable<number>;
  total: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.berry = store.select(myAppState => myAppState.berryCounter);
    this.apple = store.select(state => state.appleCounter);
    // Internally, store.select uses RxJS that looks like this:
    this.total = store.pipe(
      map(s => s.berryCounter + s.appleCounter)
    );
  }

  pickBerry() {
    this.store.dispatch(pickBerry());
  }

  pickApple(count: number) {
    this.store.dispatch(pickApples({ count }));
  }

  empty() {
    this.store.dispatch(emptyCart());
  }
}
