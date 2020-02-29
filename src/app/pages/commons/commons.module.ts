import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ]
})
export class CommonsModule { }
