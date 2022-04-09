import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormToppingsComponent } from './form-toppings/form-toppings.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSelectComponent,
    FormToppingsComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
