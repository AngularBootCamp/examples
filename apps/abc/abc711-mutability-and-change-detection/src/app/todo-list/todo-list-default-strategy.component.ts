import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Item } from '../item/item-types';

@Component({
  selector: 'todo-list-default-strategy',
  templateUrl: './todo-list.component.html'
  // changeDetection: ChangeDetectionStrategy.Default
})
export class TodoListDefaultStrategyComponent {
  @Input() todoItems: Item[] = [];
  @Output() toggleItem = new EventEmitter<number>();
}
