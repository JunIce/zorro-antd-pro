import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { ResultComponent } from './result.component';
import { ResultRoutingModule } from './result-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [SuccessComponent, FailureComponent, ResultComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
