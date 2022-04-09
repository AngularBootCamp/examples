import { Component } from '@angular/core';

import { Order, mockApiOrders } from '../api-types';

@Component({
  selector: 'order-manager',
  templateUrl: './order-manager.component.html'
})
export class OrderManagerComponent {
  orderList: Order[] = mockApiOrders;
  selectedOrder: Order | undefined;

  choose(i: number) {
    this.selectedOrder = this.orderList[i];
  }
}
