import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListModule } from '../todo-list/todo-list.module';

import { DoComponent } from './do.component';
import { HomeTaskListComponent } from './home-task-list/home-task-list.component';
import { WorkTaskListComponent } from './work-task-list/work-task-list.component';

const doRoutes: Routes = [{ path: '', component: DoComponent }];

@NgModule({
  declarations: [
    DoComponent,
    HomeTaskListComponent,
    WorkTaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(doRoutes),
    TodoListModule
  ]
})
export class DoModule {}
