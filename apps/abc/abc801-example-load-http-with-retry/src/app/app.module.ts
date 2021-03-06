import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EmployeeDetailComponent } from './employeeDetail';
import { EmployeeDisplayComponent } from './employeeDisplay';
import { EmployeeListComponent } from './employeeList';
import { PageComponent } from './page';

@NgModule({
  declarations: [
    EmployeeDetailComponent,
    EmployeeDisplayComponent,
    EmployeeListComponent,
    PageComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [PageComponent]
})
export class AppModule {}
