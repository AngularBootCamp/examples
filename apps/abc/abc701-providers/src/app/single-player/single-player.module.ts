import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClickService } from '../click.service';
import { ClickComponent } from '../click/click.component';
import { ClickModule } from '../click/click.module';

import { SinglePlayerService } from './single-player.service';

const routes: Routes = [{ path: '', component: ClickComponent }];

@NgModule({
  imports: [
    ClickModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    {
      provide: ClickService,
      useClass: SinglePlayerService
    }
  ]
})
export class SinglePlayerModule {}
