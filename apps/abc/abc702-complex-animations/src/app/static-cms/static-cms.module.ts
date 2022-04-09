import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CmsStaticComponent } from './static-cms.component';

const cmsRoutes: Routes = [
  { path: '', component: CmsStaticComponent }
];

@NgModule({
  declarations: [CmsStaticComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cmsRoutes),
    ReactiveFormsModule
  ],
  bootstrap: [CmsStaticComponent]
})
export class CmsStaticModule {}
