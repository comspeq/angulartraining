import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(
    public authService:AuthService,
    private http:HttpClient,
    private toastr:ToastrService,
    public route:Router
    ) { }

  ngOnInit(): void {
  }
  AddressForm = new FormGroup({
    userId: new FormControl('',[
      Validators.required
    ]),
    name : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+$')
    ]),
    phone : new FormControl('',[
      Validators.required,
      Validators.pattern('@"^[0-9]{10}$"')
    ]),
    door_no : new FormControl('',[
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    street : new FormControl('',[
      Validators.required,
      Validators.pattern('[a-zA-Z]+$')
    ]),
    city : new FormControl('',[
      Validators.required,
    ]),
    zipcode : new FormControl('',[
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    state : new FormControl('',[
      Validators.required,
    ]),
    country : new FormControl('',[
      Validators.required,
    ]),
  })

  get userId() { return this.AddressForm.get('userId'); }
  get name() { return this.AddressForm.get('name'); }
  get phone() { return this.AddressForm.get('phone'); }
  get door_no() { return this.AddressForm.get('door_no'); }
  get street() { return this.AddressForm.get('street'); }
  get city() { return this.AddressForm.get('city'); }
  get zipcode() { return this.AddressForm.get('zipcode'); }
  get state() { return this.AddressForm.get('state'); }
  get country() { return this.AddressForm.get('country'); }

  Address()
  {
    // this.authService.getAllData().subscribe(res=>{
    //   if(res.find(user => user.email === this.email?.value))
    //   {
    //     this.toastr.error('E-mail already exists','Sorry :-(');
    //   }
    //   else
    //   {
    //     this.http.post('http://localhost:3000/userBasicInfo',this.AddressForm.getRawValue(),{
    //   withCredentials:true}).subscribe(res=>
    //     {
    //       console.log(res)
    //       this.toastr.success('Account Created Successfully');
    //       this.route.navigate(['/login']);
    //     });
    //   }
    // });
  }

}
