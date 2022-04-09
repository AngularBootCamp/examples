import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchModule } from '../search/search.module';

import { PayrollReportComponent } from './payroll-report/payroll-report.component';
import { PayrollScreenComponent } from './payroll-screen.component';
import { PayrollSearchComponent } from './payroll-search/payroll-search.component';

const payrollRoutes: Routes = [
  {
    path: '',
    component: PayrollScreenComponent,
    children: [
      { path: '', redirectTo: 'search' },
      { path: 'search', component: PayrollSearchComponent },
      { path: 'report', component: PayrollReportComponent }
    ]
  }
];

@NgModule({
  declarations: [
    PayrollReportComponent,
    PayrollScreenComponent,
    PayrollSearchComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SearchModule,
    RouterModule.forChild(payrollRoutes)
  ]
})
export class PayrollModule {}
