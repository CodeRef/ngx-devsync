import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    FullPageComponent,
    OneColumnComponent
} from '../@theme/layouts';
import {
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent
} from './';

const routes: Routes = [
    {
        path: '',
        component: FullPageComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }, {
        path: 'login',
        component: FullPageComponent,
        children: [{
            path: '',
            component: LoginComponent
        }
        ]
    },
    {
        path: 'register',
        component: FullPageComponent,
        children: [
            {
                path: '',
                component: RegisterComponent
            }
        ]
    },
    {
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
