import { Component } from '@angular/core';

import { Order, fakeApiOrders } from '../api-types';

@Component({
  selector: 'order-manager',
  templateUrl: './order-manager.component.html'
})
export class OrderManagerComponent {
  orderList: Order[];
  selectedOrder: Order | undefined;

  constructor() {
    this.orderList = fakeApiOrders;
  }

  setOrder(order: Order) {
    this.selectedOrder = order;
  }
}
