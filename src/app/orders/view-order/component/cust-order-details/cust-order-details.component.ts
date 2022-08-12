import { productdetails } from 'src/app/orders/Shared/Interface/details';
import { ApiService } from 'src/app/orders/Shared/api.service';
import { customerDetail } from './../../../Shared/Interface/customerDetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/orders/Shared/cart-service.service';
import { CartItems } from 'src/app/orders/Shared/Interface/cart-item';
import { Order } from 'src/app/orders/Shared/Interface/order';
import { orderItems } from 'src/app/orders/Shared/Interface/order-item';
import { OrdersService } from 'src/app/orders/Shared/orders.service';
import { CartTotalPipe } from '../../../orders/pipes/cart-total.pipe';
// import { CartTotalPipe } from '../../../orders/pipes/cart-total.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cust-order-details',
  templateUrl: './cust-order-details.component.html',
  styleUrls: ['./cust-order-details.component.css']
})
export class CustOrderDetailsComponent implements OnInit {

  order!: Order
  orderItems!: orderItems[]

  constructor(private route:ActivatedRoute ,private orderService:OrdersService,private apiser:ApiService) { }

  ngOnInit(): void {
    this.order = this.route.snapshot.data['order']
    this.orderItems = this.route.snapshot.data['orderItems']
  }

  getOrderProduct$(productId: number) : Observable<productdetails> {    
    console.log("productId", productId);
    return this.apiser.getProductByID(productId) as any
  }

  getOrderTotal() {        
    const result = this.orderItems
      .map(orderItem => (orderItem?.product?.price ?? 0) * (orderItem?.quantity ?? 0))
      .reduce((a: number, b: number) => a + b)      
      return result
  }
}
