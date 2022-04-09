import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterDisplayComponent } from './counter-display.component';
import { AppState, reducers } from './state';

@NgModule({
  declarations: [AppComponent, CounterDisplayComponent],
  imports: [BrowserModule, StoreModule.forRoot<AppState>(reducers)],
  bootstrap: [AppComponent]
})
export class AppModule {}
