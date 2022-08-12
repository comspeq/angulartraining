import { orderItems } from './Interface/order-item';
import { Order } from './Interface/order';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productdetails } from './Interface/details';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private orderhttp:HttpClient) { }

  getAllOrders(){
    return this.orderhttp.get<Order[]>(environment.stock +'/orders');
  }

  getorderitems(id:number){
    return this.orderhttp.get<orderItems[]>(`${environment.stock}/orderItems/${id}`);
  }

  getOrderById(orderId:number){
    return this.orderhttp.get<Order[]>(environment.stock +`/orders/${orderId}`);
    //orderItems?_expand=order
  }

  getOrderItemsByOrderId(orderId: number) {
    return this.orderhttp.get<orderItems[]>(`${environment.stock}/orderItems?_expand=product&orderId=${orderId}`)
  }

  createOrder(order:Order){
    return this.orderhttp.post<Order>(environment.stock +'/orders',order);
  }

  createOrderItem(orderItem: orderItems){
    return this.orderhttp.post<orderItems[]>(environment.stock +'/orderItems',orderItem);
  }

  buyProduct(details:productdetails,orderId:number){
    const newOrder : orderItems ={
      id:0,
      productId:details.id,
      orderId:orderId,
      quantity:1
    }
    return this.orderhttp.post<orderItems>(`${environment.stock}/orderItems`,newOrder)
  }

  deleteOrder(orderId: number) {
    return this.orderhttp.delete<Number>(`${environment.stock}/orders/${orderId}`)
  }
}
