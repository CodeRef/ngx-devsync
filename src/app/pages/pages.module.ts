import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {HeaderComponent} from './@theme/components/header/header.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [
        PagesComponent,
    HeaderComponent
    ]
})
export class PagesModule { }
