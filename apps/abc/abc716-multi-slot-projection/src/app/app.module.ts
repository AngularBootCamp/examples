import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  BlueWrapperComponent,
  BlueWrapperDirective
} from './blue-wrapper.component';
import { GreenWrapperComponent } from './green-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueWrapperComponent,
    BlueWrapperDirective,
    GreenWrapperComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
