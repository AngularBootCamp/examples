import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Task } from '../types';

/*

  Notice that the component becomes a pass through...
  Q: So why not just remove the component?
  A: Why use multiple components at all?

*/
@Component({
  selector: 'home-task-list',
  templateUrl: './home-task-list.component.html'
})
export class HomeTaskListComponent {
  @Input() done: string[] = [];
  @Input() todo: string[] = [];
  @Output() toggleTask = new EventEmitter<Task>();

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  toggle(outputTask: string, outputComplete: boolean) {
    const outputToDo = {
      task: outputTask,
      complete: outputComplete
    };
    this.toggleTask.emit(outputToDo);
  }
}
