import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';

import { TestRoutingModule } from './test-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    TestRoutingModule
  ]
})
export class TestModule { }
