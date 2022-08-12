import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient,public route:Router,private toastr: ToastrService,public authService:AuthService) { }

  ngOnInit(): void {
  }
  RegisterForm = new FormGroup({
    firstname : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+$')
    ]),
    lastname : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+$')
    ]),
    email : new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password : new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    cpassword : new FormControl('',[
      Validators.required,
      Validators.minLength(8),
    ])
  })

  get firstname() { return this.RegisterForm.get('firstname'); }
  get lastname() { return this.RegisterForm.get('lastname'); }
  get email() { return this.RegisterForm.get('email'); }
  get password() { return this.RegisterForm.get('password'); }
  get cpassword() { return this.RegisterForm.get('cpassword'); }

  MatchPass()
  {
    if(this.password?.value!==this.cpassword?.value)
    {
      return true;
    }else
    {
      return false;
    }
  }
  RegisterUser()
  {
    this.authService.getAllData().subscribe(res=>{
      if(res.find(user => user.email === this.email?.value))
      {
        this.toastr.error('E-mail already exists','Sorry :-(');
      }
      else
      {
        this.http.post('http://localhost:3000/userBasicInfo',this.RegisterForm.getRawValue(),{
      withCredentials:true}).subscribe(res=>
        {
          console.log(res)
          this.toastr.success('Account Created Successfully');
          this.route.navigate(['/login']);
        });
      }
    });
  }
}
