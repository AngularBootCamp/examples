import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoListModule {}
