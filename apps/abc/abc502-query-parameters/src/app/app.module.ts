import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { EmployeeListHeaderComponent } from './employee-list-header/employee-list-header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: '', component: EmployeeDashboardComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    }),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    EmployeeFilterComponent,
    EmployeeListComponent,
    EmployeeListHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
