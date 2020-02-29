import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { BasicComponent } from './basic/basic.component';
import { AdvanceComponent } from './advance/advance.component';


const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            { path: 'basic', component: BasicComponent },
            { path: 'advance', component: AdvanceComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
