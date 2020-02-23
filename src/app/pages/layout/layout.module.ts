import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainComponent } from './main/main.component';
import { SideComponent } from './side/side.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [MainComponent, SideComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,

    LayoutRoutingModule
  ]
})
export class LayoutModule { }
