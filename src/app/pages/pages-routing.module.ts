import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {LandingComponent} from './@theme/layouts/landing/landing.component';

// import {
//     LandingComponent,
//     OneColumnComponent,
//     TwoColumnsComponent,
//     ThreeColumnsComponent
// } from './@theme/layouts';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                // loadChildren: './home/home.module#HomeModule'
            },
            // {
            //     path: 'landing',
            //     component: HomeComponent
            // }
        ]
    }

];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
