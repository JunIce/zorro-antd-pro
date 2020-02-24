import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';


@NgModule({
  declarations: [DashboardComponent, ChartCardComponent, ChartBarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgZorroAntdModule
  ]
})
export class DashboardModule { }
