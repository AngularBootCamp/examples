import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  getDoneWork,
  getTodoWork,
  setWorkTask
} from '../../work-tasks.state';

@Component({
  selector: 'work-task-list',
  templateUrl: './work-task-list.component.html'
})
export class WorkTaskListComponent {
  done: Observable<string[]>;
  todo: Observable<string[]>;

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  constructor(private store: Store) {
    this.done = store.select(getDoneWork);
    this.todo = store.select(getTodoWork);
  }

  workTask(task: string, complete: boolean) {
    this.store.dispatch(setWorkTask({ task, complete }));
  }
}
