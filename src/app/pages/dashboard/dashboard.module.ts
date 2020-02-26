import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ViserModule } from 'viser-ng';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AnalysisComponent } from './analysis/analysis.component';


@NgModule({
  declarations: [AnalysisComponent, DashboardComponent, ChartCardComponent, ChartBarComponent, WorkspaceComponent],
  imports: [
    CommonModule,
    FormsModule,

    DashboardRoutingModule,
    NgZorroAntdModule,
    ViserModule
  ]
})
export class DashboardModule { }
