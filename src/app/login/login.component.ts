import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './shared/auth.service';
import { Users } from './shared/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  previousUrl!: string;
  constructor(private http:HttpClient, public authService: AuthService,public route:Router,private toastr:ToastrService) 
  { 

  }

  ngOnInit(): void {
    if(this.authService.loggedIn())
    {
     this.route.navigate(['/Products/P'])
    }
  }
  LoginForm = new FormGroup({
    // id:new FormControl(''),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ])
  })

  get email() { return this.LoginForm.get('email');}
  get password(){ return this.LoginForm.get('password');}

  LoginUser()
  {
    this.authService.getAllData().subscribe(res=>
      {
        const index = res.findIndex(user => user.email === this.email?.value && user.password == this.password?.value)
        // findIndex for invalid username and password will be -1
        console.log(index);
        if(res.find(user => user.email === this.email?.value && user.password == this.password?.value))
        {
          sessionStorage.clear()//to remove existing logged in users
          sessionStorage.setItem('value',JSON.stringify(index));
          this.toastr.success('Logged In Successfully');
          this.authService.isLoggedIn=true;
          this.route.navigate(['/Products/P'])
        }
        else
        {
          this.toastr.error('Invalid Username/Password');
        }
      });
  }
}
 