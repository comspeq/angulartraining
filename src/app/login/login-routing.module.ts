import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login.component';
import { PracticeComponent } from './practice/practice.component';
// import { PracticeComponent } from './practice/practice.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',component : RegisterComponent},
  { path: 'cart',component:CartPageComponent, canActivate:[AuthGuard]},
  { path: 'address',component:AddressComponent},
   {path:'practice',component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
