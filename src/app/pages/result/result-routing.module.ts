import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';



const routes: Routes = [
  {
    path: '',
    component: ResultComponent,
    children: [
      { path: 'success', component: SuccessComponent },
      { path: 'failure', component: FailureComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
