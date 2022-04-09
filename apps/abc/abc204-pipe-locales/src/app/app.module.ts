import { registerLocaleData } from '@angular/common';
// load data for any additional locales you may need
import localeDe from '@angular/common/locales/de'; // Germany
import localeFr from '@angular/common/locales/fr'; // France
import localeRu from '@angular/common/locales/ru'; // Russia
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// register locale data
registerLocaleData(localeDe);
registerLocaleData(localeFr);
registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
