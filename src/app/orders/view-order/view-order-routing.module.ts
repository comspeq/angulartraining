import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustOrderDetailsComponent } from './component/cust-order-details/cust-order-details.component';
import { CustOrderViewOrderItemResolverService } from './resolvers/cust-order-view-order-item-resolver.service';
import { CustOrderViewOrderResolverService } from './resolvers/cust-order-view-order-resolver.service';
import { ViewOrderResolverService } from './resolvers/view-order-resolver.service';
import { ViewOrderComponent } from './view-order.component';

const routes: Routes = [
  { path: '', component: ViewOrderComponent, resolve: { orders: ViewOrderResolverService }},
  {
    path: ':id', component: CustOrderDetailsComponent, resolve: {
      order: CustOrderViewOrderResolverService,
      orderItems: CustOrderViewOrderItemResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewOrderRoutingModule { }
