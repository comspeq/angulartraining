import { CartItems } from './../../Shared/Interface/cart-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartTotal'
})
export class CartTotalPipe implements PipeTransform {

  transform(cartItem: CartItems[]): number {
    const result = cartItem
      .map(cartItems => (cartItems.product?.price ?? 0) * (cartItems.quantity))
      .reduce((a:number , b:number) => a + b)
    return result;
  }
}
