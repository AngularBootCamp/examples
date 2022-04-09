import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Item } from '../item/item-types';

@Component({
  selector: 'todo-list-onpush-strategy',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListOnpushStrategyComponent {
  @Input() todoItems: Item[] = [];
  @Output() toggleItem = new EventEmitter<number>();
}
