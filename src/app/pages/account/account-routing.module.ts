import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { CenterComponent } from './center/center.component';
import { SettingComponent } from './setting/setting.component';
import { BaseComponent } from './setting/base/base.component';
import { SecurityComponent } from './setting/security/security.component';
import { CustomComponent } from './setting/custom/custom.component';
import { BindComponent } from './setting/bind/bind.component';
import { NotificationComponent } from './setting/notification/notification.component';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'center', component: CenterComponent },
      {
        path: 'setting',
        component: SettingComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'base' },
          { path: 'base', component: BaseComponent },
          { path: 'security', component: SecurityComponent },
          { path: 'custom', component: CustomComponent },
          { path: 'bind', component: BindComponent },
          { path: 'notification', component: NotificationComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
