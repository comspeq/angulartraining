import { prodCategory } from './Interface/prodCategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category : Array<any> =[]

  constructor(public http:HttpClient) { }

  getcategory(){
    return this.http.get('http://localhost:3000/category') as Observable<prodCategory[]>;
  }
}
