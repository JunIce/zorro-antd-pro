import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { CenterComponent } from './center/center.component';
import { SettingComponent } from './setting/setting.component';
import { BaseComponent } from './setting/base/base.component';
import { SecurityComponent } from './setting/security/security.component';
import { CustomComponent } from './setting/custom/custom.component';
import { BindComponent } from './setting/bind/bind.component';
import { NotificationComponent } from './setting/notification/notification.component';
import { AccountComponent } from './account.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CenterComponent,
    SettingComponent,
    BaseComponent,
    SecurityComponent,
    CustomComponent,
    BindComponent,
    NotificationComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
