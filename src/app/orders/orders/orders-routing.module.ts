import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrdersResolverService } from './resolvers/orders-resolver.service';

const routes: Routes = [
  { path: '', component: OrdersComponent,resolve:{ orders: OrdersResolverService} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
