import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    OrderHeaderComponent,
    OrderItemsComponent,
    OrderListComponent,
    OrderManagerComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
