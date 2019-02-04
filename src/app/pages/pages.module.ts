import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import {
    ThemeModule
} from './@theme/theme.module';

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule.forRoot()
    ],
    declarations: [
        PagesComponent,
        HomeComponent
    ]
})
export class PagesModule { }
