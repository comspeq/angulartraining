import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DiscountPipe } from './pipes/discount.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    FilterPipe,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class ProductsModule { }
