import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';

const employeeRoutes: Routes = [
  { path: '', component: EmployeeComponent }
];

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(employeeRoutes)
  ],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule {}
