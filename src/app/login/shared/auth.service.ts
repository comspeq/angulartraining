import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  
  public isLoggedIn:boolean = false;

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    if(sessionStorage.getItem('value'))
    {
      this.isLoggedIn = true;
    }
    else
    {
      this.isLoggedIn = false;
    }
  }
  
  getAllData()
  {
    return this.http.get('http://localhost:3000/userBasicInfo') as Observable<Users[]>
  }
  getCartInfo()
  {
    return this.http.get('http://localhost:3000/cartItems') as Observable<Users[]>
  }
  
  loggedIn()
  {
    if(sessionStorage.getItem('value'))
    {
     return true;
    }else{
     return false;
    }
  }

}
