import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ViserModule } from 'viser-ng';

@NgModule({
  declarations: [DashboardComponent, ChartCardComponent, ChartBarComponent],
  imports: [
    CommonModule,
    FormsModule,

    DashboardRoutingModule,
    NgZorroAntdModule,
    ViserModule
  ]
})
export class DashboardModule { }
