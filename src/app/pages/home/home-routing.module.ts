import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    LandingComponent,
    OneColumnComponent
} from '../@theme/layouts';
import {
    HomeComponent,
    AboutComponent
} from './';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }, {
        path: 'about',
        component: OneColumnComponent,
        children: [
            {
                path: '',
                component: AboutComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
