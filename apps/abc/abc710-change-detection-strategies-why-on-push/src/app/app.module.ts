import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock.component';
import { DataGridComponent } from './data-grid.component';

@NgModule({
  declarations: [AppComponent, ClockComponent, DataGridComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
