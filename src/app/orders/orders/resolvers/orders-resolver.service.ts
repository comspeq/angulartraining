import { CartItems } from './../../Shared/Interface/cart-item';
import { CartServiceService } from './../../Shared/cart-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersResolverService implements Resolve<CartItems[]>{

  constructor(private cartser:CartServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<CartItems[]>  {
    return this.cartser.getCartItems();
  }
}
