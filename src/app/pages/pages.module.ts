import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {HeaderComponent} from './@theme/components/header/header.component';
import { NavComponent } from './@theme/components/nav/nav.component';
import { MainComponent } from './@theme/components/main/main.component';
import { FooterComponent } from './@theme/components/footer/footer.component';



@NgModule({
    imports: [
        PagesRoutingModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [
        PagesComponent,
        HeaderComponent,
        NavComponent,
        MainComponent,
        FooterComponent
    ]
})
export class PagesModule { }
