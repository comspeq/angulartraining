import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../login/shared/auth.guard';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'viewOrder', loadChildren: () => import('./view-order/view-order.module').then(m => m.ViewOrderModule) , canActivate:[AuthGuard]},
  { path: 'Orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), canActivate:[AuthGuard] }];
  //canActive for Orders
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
