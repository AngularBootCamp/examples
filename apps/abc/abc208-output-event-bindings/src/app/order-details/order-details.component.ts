import { Component, Input } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('selectedOrderDetails') sod: Order | undefined;
}
