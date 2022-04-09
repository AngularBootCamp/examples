import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeTaskListService } from './home-task-list.service';

@Component({
  selector: 'home-task-list',
  templateUrl: './home-task-list.component.html'
})
export class HomeTaskListComponent {
  done: Observable<string[]>;
  todo: Observable<string[]>;

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  constructor(private homeTaskListService: HomeTaskListService) {
    this.done = homeTaskListService.done;
    this.todo = homeTaskListService.todo;
  }

  setStatus(task: string, complete: boolean) {
    this.homeTaskListService.setTaskStatus(task, complete);
  }
}
