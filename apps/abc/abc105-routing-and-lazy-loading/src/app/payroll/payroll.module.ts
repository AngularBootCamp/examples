import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchModule } from '../search/search.module';

import { PayrollSearchComponent } from './payroll-search.component';

const payrollRoutes: Routes = [
  { path: '', component: PayrollSearchComponent }
];

@NgModule({
  declarations: [PayrollSearchComponent],
  imports: [
    CommonModule,
    SearchModule,
    RouterModule.forChild(payrollRoutes)
  ]
})
export class PayrollModule {}
