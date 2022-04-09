import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  getDoneWork,
  getTodoWork,
  setWorkTask
} from '../../work-task.state';

/*
  Components now pass and receive information between itself
  and the store
*/
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

  workTask(worktask: string, complete: boolean) {
    this.store.dispatch(setWorkTask({ worktask, complete }));
  }
}
