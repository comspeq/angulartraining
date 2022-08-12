import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './Error/page-notfound/page-notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'Products/P',pathMatch:'full'},
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'Products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: '', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '', loadChildren: () => import('./questionnaire/questionnaire.module').then(m => m.QuestionnaireModule) },

  {path:'**',component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
