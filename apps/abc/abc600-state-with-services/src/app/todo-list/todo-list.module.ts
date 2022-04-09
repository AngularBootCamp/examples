import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToDoListComponent } from './todo-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToDoListComponent],
  exports: [ToDoListComponent]
})
export class TodoListModule {}
