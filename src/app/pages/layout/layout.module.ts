import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainComponent } from './main/main.component';
import { SideComponent } from './side/side.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ErrorModule } from '../error/error.module';
import { TestModule } from '../test/test.module';
import { FormModule } from '../form/form.module';
import { ProfileModule } from '../profile/profile.module';
import { ResultModule } from '../result/result.module';
import { AccountModule } from '../account/account.module';



@NgModule({
  declarations: [
    LayoutComponent,

    MainComponent,
    SideComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,

    LayoutRoutingModule,
    ErrorModule,
    TestModule,
    ProfileModule,
    ResultModule,
    AccountModule
  ]
})
export class LayoutModule { }
