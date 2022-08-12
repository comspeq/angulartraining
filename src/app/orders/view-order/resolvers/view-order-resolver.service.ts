import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { OrdersService } from 'src/app/orders/Shared/orders.service';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/orders/Shared/Interface/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewOrderResolverService implements Resolve<Order[]>{

  constructor(private orderser:OrdersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> {
     return this.orderser.getAllOrders()
  }
}
