import { orderItems } from 'src/app/orders/Shared/Interface/order-item';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { OrdersService } from 'src/app/orders/Shared/orders.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustOrderViewOrderItemResolverService implements Resolve<orderItems[]>{

  constructor(private orderser:OrdersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<orderItems[]> {
    const orderId = Number(route.paramMap.get('id'))    
    return this.orderser.getOrderItemsByOrderId(orderId)
  }
}
