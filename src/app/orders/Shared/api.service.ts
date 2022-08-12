import { userdetails } from './Interface/userdetails';
import { productdetails } from './Interface/details';
import { EnqiryForm } from './enqiry-form.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { review } from './Interface/review';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  enquiry  : EnqiryForm  = new EnqiryForm();
  enquirylist !: EnqiryForm[];

  productdetail : any[] =[];
  userdetail : any[] =[];
  review : any[] = [];


  constructor(public http:HttpClient) { }

  getProduct(){
    return this.http.get('http://localhost:3000/products') as Observable<productdetails[]>;
  }

  getUser(){
    return this.http.get('http://localhost:3000/users') as Observable<userdetails[]>;
  }

  getProductByID(id:number){
    return this.http.get('http://localhost:3000'+ `/products/${id}`); 
  }

}
