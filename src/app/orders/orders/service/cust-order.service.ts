import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/orders/Shared/Interface/order';
import { orderItems } from 'src/app/orders/Shared/Interface/order-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustOrderService {

  constructor(private http:HttpClient) { }

  getOrderDetails(){
    return this.http.get<orderItems[]>(`${environment.stock}/orderItems?_expand=order`) 
  }

  getOrderById(orderId : number){
    return this.http.get<Order>(`${environment.stock}/orderItems/${orderId}?_expand=order`)
  }

  getOrderByOrderId(orderId : number){
    return this.http.get<orderItems[]>(`${environment.stock}/orderItems?_expand=product&orderId=${orderId}`)
  }
}
