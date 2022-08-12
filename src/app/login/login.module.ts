import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { CartPageComponent } from './cart-page/cart-page.component'
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { PracticeComponent } from './practice/practice.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CartPageComponent,
    PracticeComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers:[AuthGuard,AuthService]
})
export class LoginModule { }
