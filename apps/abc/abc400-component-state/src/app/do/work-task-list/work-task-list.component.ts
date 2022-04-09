import { Component } from '@angular/core';

@Component({
  selector: 'work-task-list',
  templateUrl: './work-task-list.component.html'
})
export class WorkTaskListComponent {
  done = [
    'file paperwork',
    'send emails',
    'work on project A',
    'submit report to manager'
  ];

  todo = ['work on project B', 'update task list'];

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  toggleTask(task: string, complete: boolean) {
    if (complete) {
      this.done = this.done.filter(curTask => curTask !== task);
      this.todo.push(task);
    } else {
      this.todo = this.todo.filter(curTask => curTask !== task);
      this.done.push(task);
    }
  }
}
