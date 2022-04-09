import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClickService } from '../click.service';
import { ClickComponent } from '../click/click.component';
import { ClickModule } from '../click/click.module';

import { OfflineService } from './offline.service';

const routes: Routes = [{ path: '', component: ClickComponent }];

@NgModule({
  imports: [ClickModule, RouterModule.forChild(routes)],
  providers: [
    {
      provide: ClickService,
      useClass: OfflineService
    }
  ]
})
export class OfflineModule {}
