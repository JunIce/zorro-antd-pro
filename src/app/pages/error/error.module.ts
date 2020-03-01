import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error.component';
import { NzCardModule, NzResultModule, NzButtonModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzResultModule,
    NzButtonModule,
    RouterModule
  ]
})
export class ErrorModule { }
