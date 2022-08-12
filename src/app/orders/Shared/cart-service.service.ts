import { environment } from 'src/environments/environment';
import { productdetails } from 'src/app/orders/Shared/Interface/details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItems } from './Interface/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(public http:HttpClient) { }

  getCartItems(){
    return this.http.get<CartItems[]>(`${environment.stock}/cartItems?_expand=product`) 
  }

  addProductToCart(details : productdetails){
    const newCartItem : CartItems ={
      id:0,
      productId:details.id,
      quantity:1
    }
    return this.http.post<CartItems>(`${environment.stock}/cartItems`,newCartItem)
  }

  removeProductFromCart(cartItemId : number){
    return this.http.delete<CartItems>(`${environment.stock}/cartItems/${cartItemId}`) 
  }

  updateCartItemQuantity(cartItemId : number, cartItem: CartItems){
    return this.http.put<CartItems>(`${environment.stock}/cartItems/${cartItemId}`,cartItem) 
  }
}
