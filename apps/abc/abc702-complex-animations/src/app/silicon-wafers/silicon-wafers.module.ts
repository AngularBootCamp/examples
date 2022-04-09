import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SiliconWafersComponent } from './silicon-wafers.component';

const cmsRoutes: Routes = [
  { path: '', component: SiliconWafersComponent }
];

@NgModule({
  declarations: [SiliconWafersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cmsRoutes),
    ReactiveFormsModule
  ],
  bootstrap: [SiliconWafersComponent]
})
export class SiliconWafersModule {}
