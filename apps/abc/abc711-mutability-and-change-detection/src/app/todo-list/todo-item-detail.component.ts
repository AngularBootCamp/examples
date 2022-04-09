import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';

import { Item } from '../item/item-types';

@Component({
  selector: 'item-detail',
  templateUrl: './todo-item-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class TodoItemDetailComponent {
  @Input() item: Item | undefined;
  @Output() toggle = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.toggle.emit();
  }

  transform(input: boolean) {
    const checkMark = '\u2713';
    const checkbox = '\u2751';
    return input ? checkMark : checkbox;
  }
}
