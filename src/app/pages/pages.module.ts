import {NgModule} from '@angular/core';

import {PagesRoutingModule} from './pages-routing.module';

import {PagesComponent} from './pages.component';
// import {ThemeModule } from './@theme/theme.module';
const COMPONENTS = [
    PagesComponent
];

@NgModule({
    imports: [
        PagesRoutingModule,
        // ThemeModule.forRoot()
    ],
    declarations: [...COMPONENTS]
})
export class PagesModule {}
