import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/login/shared/auth.service';
import { CartServiceService } from 'src/app/orders/Shared/cart-service.service';
import { productdetails } from 'src/app/orders/Shared/Interface/details';
import { Order } from 'src/app/orders/Shared/Interface/order';
import { OrdersService } from 'src/app/orders/Shared/orders.service';
import { products } from '../Model/Product';
import { ProductService } from '../Shared/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  newOrder :Order ={
    id: 0,
    orderDate: new Date(),
    name: '',
    address: '',
    pincode: 0,
    contactNo: 0,
    orderAmount: 0,
  }

  constructor(
    private route:ActivatedRoute, 
    private productSvc: ProductService,
    public router: Router,
    private toastr:ToastrService,
    private orderser:OrdersService,
    private cartser:CartServiceService,
    private fb: FormBuilder,
    private authService: AuthService
    ) {  this.myForm(); }

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

    @ViewChild('name') name!: ElementRef  //name=#name
    @ViewChild('address') address!: ElementRef
    @ViewChild('pinCode') pinCode!: ElementRef
    @ViewChild('phoneNo') phoneNo!: ElementRef
    @ViewChild('amount') amount!: ElementRef

  productid!:any;
  product$!:Observable<productdetails>
  requiredForm!: FormGroup;
  details !:productdetails
  showMsg: boolean = false;
  buyMsg: boolean=false;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.productid = Number(params.get('id')||'')
      this.product$ = this.productSvc.getProductById(this.productid)
    })
    this.details = this.route.snapshot.data['products'];
  }
  sessionvalue!: string;
  addProductToCart(details : productdetails){
    if(sessionStorage.getItem('value')!=null)
    {
    this.cartser.addProductToCart(details).subscribe(details => console.log("Product added successfully",details))
    this.showMsg= true;
    // this.router.navigate(['Orders']);
    // window.location.reload();
    this.toastr.success('Product added Successfully!');
    }
    else{
      this.router.navigate(['/login']);
      this.toastr.info('Please Log In');
    }
  }

  buyProduct(details:productdetails){
    if(sessionStorage.getItem('value')!=null)
    {
    this.newOrder.name=this.name.nativeElement.value
    this.newOrder.address=this.address.nativeElement.value
    this.newOrder.pincode=this.pinCode.nativeElement.value
    this.newOrder.contactNo=this.phoneNo.nativeElement.value
    this.newOrder.orderAmount=details.price

    this.orderser.createOrder(this.newOrder).subscribe(postedOrder =>{
      console.log("New Order Created",postedOrder);
      this.orderser.buyProduct(details,postedOrder.id).subscribe(details => console.log("Product added successfully",details))
    })
    this.buyMsg=true;
    this.toastr.success('Order Placed Successfully!');
    // window.location.reload();
    this.router.navigate(['/viewOrder']);
    }
  else
  {
    this.router.navigate(['/login']);
    this.toastr.info('Please Log In');
  }
  }


  buynow()
  {
    if(sessionStorage.getItem('value')!=null)
    {
      this.router.navigate(['/cart']);
    }else{
      this.router.navigate(['/login']);
      this.toastr.info('Please Log In');
    }
  }


}
