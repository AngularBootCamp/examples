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
export class TodoListComponent {
  @Input() list: string[] = [];
  @Input() icon = '';

  @Output() toggleTask = new EventEmitter<string>();

  toggle(task: string) {
    this.toggleTask.emit(task);
  }
}
