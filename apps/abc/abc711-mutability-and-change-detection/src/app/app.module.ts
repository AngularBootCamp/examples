import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemDetailComponent } from './todo-list/todo-item-detail.component';
import { TodoListDefaultStrategyComponent } from './todo-list/todo-list-default-strategy.component';
import { TodoListOnpushStrategyComponent } from './todo-list/todo-list-onpush-strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemDetailComponent,
    TodoListDefaultStrategyComponent,
    TodoListOnpushStrategyComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
