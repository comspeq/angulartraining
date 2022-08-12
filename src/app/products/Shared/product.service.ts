import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productdetails } from 'src/app/orders/Shared/Interface/details';
import { environment } from 'src/environments/environment';
import { products } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
Product : productdetails[]=[];
  constructor(public http:HttpClient) { }
  getproduct() {
    return this.http.get('http://localhost:3000/products')
  }

  getProductById(id:number)
  {
    return this.http.get<productdetails>(`${environment.stock}/products/${id}`)// as Observable<Product[]>
    
  }
}
