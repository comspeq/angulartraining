import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../login/shared/auth.service';
import { Order } from 'src/app/orders/Shared/Interface/order';
import { orderItems } from './../Shared/Interface/order-item';
import { CartTotalPipe } from './pipes/cart-total.pipe';
import { OrdersService } from './../Shared/orders.service';
import { CartServiceService } from './../Shared/cart-service.service';
import { CartItems } from './../Shared/Interface/cart-item';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  newOrder :Order ={
    id: 0,
    orderDate: new Date(),
    name: '',
    address: '',
    pincode: 0,
    contactNo: 0,
    orderAmount: 0,
  }

  requiredForm!: FormGroup;
  // buyMsg: boolean = false;

  constructor( private router:Router,
    private route:ActivatedRoute,
    private cartser: CartServiceService,
    private orderser:OrdersService,
    private authService:AuthService,
    private toastr: ToastrService,
    private fb: FormBuilder) { 
      this.myForm();
    }

    cartItem : CartItems[] =[]
    CartTotal!:number;
    totalDisplay = true;

    @ViewChild('name') name!: ElementRef  //name=#name
    @ViewChild('address') address!: ElementRef
    @ViewChild('pinCode') pinCode!: ElementRef
    @ViewChild('phoneNo') phoneNo!: ElementRef
    @ViewChild('amount') amount!: ElementRef 
  

    myForm() {
      this.requiredForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ],
      phoneNo: ['', [Validators.required,
        Validators.minLength(10)] ],
        pincode: ['', [Validators.required,
        Validators.minLength(6)] ],
      });
    }

  ngOnInit(): void {
    console.log("order component")
    this.cartItem = this.route.snapshot.data['orders']; //orders is the name in routing module (resolver)

    this.authService.getCartInfo().subscribe(res=>this.CartTotal=res.length);
  }

  quantityChanged(i: number, value: number) {
    const newCartItem = { ...this.cartItem[i] }
    newCartItem.quantity = value
    console.log("qty upd = ", value);
    this.cartser.updateCartItemQuantity(newCartItem.id, newCartItem).subscribe(savedCartItem => {
      //this.cartItems[i] = {...savedCartItem}
      this.cartser.getCartItems().subscribe(cartItem => this.cartItem = cartItem)
    })
  }

  getOrderTotal() {        
    const result = this.cartItem
      .map(orderItem => (orderItem?.product?.price ?? 0) * (orderItem?.quantity ?? 0))
      .reduce((a: number, b: number) => a + b)      
      return result
  }
  
  removeProductFromCart(id:number){
    console.log("Removing Process");
    this.cartser.removeProductFromCart(id).subscribe(cartItem =>{
      this.cartser.getCartItems().subscribe(cartItems => this.cartItem = cartItems)
      this.toastr.error('Product Removed Successfully');
      window.location.reload();
    })
  }

  createOrder(){
    const cartTotalPipe = new CartTotalPipe();
    const orderAmount = cartTotalPipe.transform(this.cartItem)

    this.newOrder.name=this.name.nativeElement.value
    this.newOrder.address=this.address.nativeElement.value
    this.newOrder.pincode=this.pinCode.nativeElement.value
    this.newOrder.contactNo=this.phoneNo.nativeElement.value
    this.newOrder.orderAmount=orderAmount

    this.orderser.createOrder(this.newOrder).subscribe(postedOrder =>{
      console.log("New Order Created",postedOrder);

      let newOrderItem: orderItems
      const cartItemCount = this.cartItem.length
      this.cartItem.forEach((cartItem: CartItems,createIndex:number)=>{
        newOrderItem={
          id:0,
          productId: cartItem.productId,
          orderId: postedOrder.id,
          quantity:cartItem.quantity
        }
        this.orderser.createOrderItem(newOrderItem).subscribe(res=> console.log(res))
        // this.buyMsg= true;
        
        this.toastr.success('Shopped Successfully');
        this.router.navigate(['/questionnaire'])
        
        if(cartItemCount === (createIndex + 1))
        {
          this.cartItem.forEach((cartItem: CartItems,deleteIndex:number)=>{
            this.cartser.removeProductFromCart(cartItem.id).subscribe(res =>{
              console.log("Item Removed",cartItem.id);

              if(cartItemCount === (deleteIndex + 1)){
                this.router.navigate(['/questionnaire'])
              }
            })
          })
        }
      })
    })
    //  this.router.navigateByUrl('/Products/P');
  }
}
