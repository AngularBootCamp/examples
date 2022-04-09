import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, firstValueFrom } from 'rxjs';
import { shareReplay, startWith, switchMap } from 'rxjs/operators';

import { ClickService } from '../click.service';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable()
export class SinglePlayerService implements ClickService {
  private refresh = new Subject<void>();
  readonly clickCount = this.refresh.pipe(
    startWith(undefined),
    switchMap(() => this.http.get<number>(apiUrl + '/count')),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  constructor(private http: HttpClient) {
    console.log('Single Player Service Activated');
  }

  async increment() {
    await firstValueFrom(this.http.post(apiUrl + '/increment', ''));
    this.refresh.next();
  }
}
