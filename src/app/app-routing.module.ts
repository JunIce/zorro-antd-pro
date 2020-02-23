import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/layout/main/main.component';

const routes: Routes = [
  // { path: 'customers', loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule) },
  // { path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule) },
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
