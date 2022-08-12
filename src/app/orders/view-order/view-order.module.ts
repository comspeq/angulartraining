import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewOrderComponent } from './view-order.component';
import { DatePipe } from './pipes/date.pipe';
import { OrderItemAmountPipe } from './pipes/order-item-amount.pipe';
import { CustOrderDetailsComponent } from './component/cust-order-details/cust-order-details.component';



@NgModule({
  declarations: [
    ViewOrderComponent,
    CustOrderDetailsComponent,
    DatePipe,
    OrderItemAmountPipe,
  ],
  imports: [
    CommonModule,
    ViewOrderRoutingModule
  ]
})
export class ViewOrderModule { }
