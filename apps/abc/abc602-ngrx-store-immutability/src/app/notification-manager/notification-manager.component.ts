import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { HomeTaskState, homeTasksReceived } from '../home-task.state';
import { completeAll } from '../state';
import { WorkTaskState, workTasksReceived } from '../work-task.state';

@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html'
})
export class NotificationManagerComponent {
  constructor(private store: Store) {
    const worktasks: WorkTaskState = {
      doneWork: [
        'file paperwork',
        'send emails',
        'work on project A',
        'submit report to manager'
      ],
      todoWork: ['work on project B', 'update task list']
    };

    const hometasks: HomeTaskState = {
      doneHome: [
        'cook dinner',
        'go grocery shopping',
        'sweep the floors',
        'do the laundry'
      ],
      todoHome: ['fix the leaky faucet', 'mow the lawn']
    };

    store.dispatch(workTasksReceived({ worktasks }));
    store.dispatch(homeTasksReceived({ hometasks }));
  }

  completeAll() {
    this.store.dispatch(completeAll());
  }
}
