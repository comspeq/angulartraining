import { OrdersService } from 'src/app/orders/Shared/orders.service';
import { Order } from 'src/app/orders/Shared/Interface/order';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustOrderViewOrderResolverService implements Resolve<Order[]>{

  constructor(private orderser:OrdersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> {
    const orderID = Number(route.paramMap.get('id'))    
    return this.orderser.getOrderById(orderID)
  }
}
