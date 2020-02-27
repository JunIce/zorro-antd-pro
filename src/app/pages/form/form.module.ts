import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseComponent } from './base/base.component';
import { AdvanceComponent } from './advance/advance.component';
import { StepFormComponent } from './step-form/step-form.component';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    FormComponent,
    BaseComponent, AdvanceComponent, StepFormComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormModule { }
