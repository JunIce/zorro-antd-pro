import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { ResultComponent } from './result.component';
import { ResultRoutingModule } from './result-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';



@NgModule({
  declarations: [SuccessComponent, FailureComponent, ResultComponent, UnauthorizeComponent, NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
