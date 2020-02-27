import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AnalysisComponent } from './analysis/analysis.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'analysis', component: AnalysisComponent },
      { path: 'workspace', component: WorkspaceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
