import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PagesComponent} from './pages.component';
const routes:Routes=[
    {
        path:'',
        component:PagesComponent,
        children:[
            {
                path:'landing',
                component:HomeComponent
            }
        ]
    }
    
];
@NgModule({
    declarations:[HomeComponent],
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PagesRoutingModule{}