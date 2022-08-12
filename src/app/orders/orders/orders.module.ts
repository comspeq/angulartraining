import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { CartTotalPipe } from './pipes/cart-total.pipe';
import { FormsModule, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { QuantityadjustmentComponent } from './quantityadjustment/quantityadjustment.component';
import { DiscountPipe } from './pipes/discount.pipe';


@NgModule({
  declarations: [
    OrdersComponent,
    CartTotalPipe,
    QuantityadjustmentComponent,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder]
})
export class OrdersModule { }
