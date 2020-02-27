import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { BaseComponent } from './base/base.component';
import { AdvanceComponent } from './advance/advance.component';
import { StepFormComponent } from './step-form/step-form.component';

const routes: Routes = [
    {
        path: '',
        component: FormComponent,
        children: [
            { path: 'base', component: BaseComponent },
            { path: 'step-form', component: StepFormComponent },
            { path: 'advance', component: AdvanceComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }
