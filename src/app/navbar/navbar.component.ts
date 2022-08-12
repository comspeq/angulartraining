import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../login/shared/auth.service';
import { Users } from '../login/shared/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService,private toastr:ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.authService.getAllData().subscribe(res=>{
      this.Nametag=res.findIndex(user=>user.id === Number(sessionStorage.key(0)?.substring(5))+1)
      const dat = res.find(user=>user.id-1 == this.Nametag)
      this.value = dat?.firstname;
     })
    this.authService.getCartInfo().subscribe(res=>this.CartTotal=res.length);
  }
  Nametag!:any;
  value!:any;
  CartTotal!:number;

  cartTotal(){
    this.authService.getCartInfo().subscribe(res=>this.CartTotal=res.length);
  }


  logout()
  {
    this.authService.getAllData().subscribe(res=>
      {
        sessionStorage.clear();
        this.toastr.info('Logged out Successfully');
        window.location.reload();
        this.authService.isLoggedIn=false;
        this.route.navigate(['/Products/P']);
      })
  }

}

