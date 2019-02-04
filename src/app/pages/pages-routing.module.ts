import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import {AboutComponent} from './about/about.component';

// import {LandingComponent} from './@theme/layouts/landing/landing.component';
// import {OneColumnComponent} from './@theme/layouts/one-column/one-column.component';

// import {
//     LandingComponent,
//     OneColumnComponent,
//     TwoColumnsComponent,
//     ThreeColumnsComponent
// } from './@theme/layouts';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
        // component: LandingComponent,
        // children: [
        //     {
        //         path: '',
        //         //component: HomeComponent,
        //         loadChildren: './home/home.module#HomeModule'
        //     },
        //     // {
        //     //     path: 'about',
        //     //     component: AboutComponent
        //     // }
        // ]
    },
    // {
    //     path:'about',
    //     component:OneColumnComponent,
    //     children:[
    //         {
    //             path:'',
    //             component:AboutComponent
    //         }
    //     ]
    // }
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
