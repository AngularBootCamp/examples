import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class ToDoListComponent {
  @Input() list: string[] = [];
  @Input() icon = '';
  @Output() setTaskStatus = new EventEmitter<string>();

  setStatus(task: string) {
    this.setTaskStatus.emit(task);
  }
}
