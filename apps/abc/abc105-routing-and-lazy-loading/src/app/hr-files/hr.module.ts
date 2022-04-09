import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchModule } from '../search/search.module';

import { HrFilesSearchComponent } from './hr-files-search.component';

const hrRoutes: Routes = [
  { path: '', component: HrFilesSearchComponent }
];

@NgModule({
  declarations: [HrFilesSearchComponent],
  imports: [
    CommonModule,
    SearchModule,
    RouterModule.forChild(hrRoutes)
  ] // import MODULES
})
export class HrModule {}
