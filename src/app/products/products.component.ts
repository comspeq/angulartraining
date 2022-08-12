import { Component, OnInit } from '@angular/core';
import { ProductService } from './Shared/product.service';
import { Route, Router } from '@angular/router';
import { products } from './Model/Product';
import { productdetails } from '../orders/Shared/Interface/details';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
product: productdetails[]=[];

  constructor(private service:ProductService,public route:Router) { }

  ngOnInit(): void {
    this.service.getproduct().subscribe(result=>{this.product=result as productdetails[]});
  }
  categories="All";

  selected(category:string)
  {
    this.route.navigate(['/Products/P']);
    this.categories = category;
  }

}
