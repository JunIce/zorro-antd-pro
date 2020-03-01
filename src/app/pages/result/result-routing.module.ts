import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { ServerErrorComponent } from './server-error/server-error.component';



const routes: Routes = [
  {
    path: '',
    component: ResultComponent,
    children: [
      { path: 'success', component: SuccessComponent },
      { path: 'failure', component: FailureComponent },
      { path: 'not-found', component: NotFoundComponent },
      { path: 'unauthorize', component: UnauthorizeComponent },
      { path: 'server-error', component: ServerErrorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
