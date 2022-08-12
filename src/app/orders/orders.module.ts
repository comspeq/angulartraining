import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterpromotionPipe } from './pipes/filterpromotion.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { DiscountPipe } from '../pipes/discount.pipe';


@NgModule({
  declarations: [
    OrdersComponent,
    FilterCategoryPipe,
    FilterpromotionPipe,
    SafePipe,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
