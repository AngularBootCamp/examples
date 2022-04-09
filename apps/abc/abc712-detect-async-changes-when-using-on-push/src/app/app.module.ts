import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PollResultsWithAsyncPipeComponent } from './poll-results/poll-results-with-async-pipe.component';
import { PollResultsWithManualSubscribeComponent } from './poll-results/poll-results-with-manual-subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    PollResultsWithAsyncPipeComponent,
    PollResultsWithManualSubscribeComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
