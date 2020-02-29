import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { AdvanceComponent } from './advance/advance.component';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PageHeaderComponent } from '../commons/page-header/page-header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonsModule } from '../commons/commons.module';



@NgModule({
  declarations: [BasicComponent, AdvanceComponent, ProfileComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    CommonsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
