import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { HomeTasksEffects } from './home-tasks.effects';
import { HomeTaskListComponent } from './notification-manager/home-task-list/home-task-list.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { WorkTaskListComponent } from './notification-manager/work-task-list/work-task-list.component';
import { reducers } from './reducers';
import { TodoListModule } from './todo-list/todo-list.module';
import { WorkTasksEffects } from './work-tasks.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeTaskListComponent,
    NotificationManagerComponent,
    WorkTaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot([
      AppEffects,
      HomeTasksEffects,
      WorkTasksEffects
    ]),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50 })
      : [],
    TodoListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
