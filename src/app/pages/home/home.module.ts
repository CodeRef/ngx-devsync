import {NgModule} from '@angular/core';

import {HomeComponent, AboutComponent, BlogComponent, ContactComponent, TeamComponent,LoginComponent,
    RegisterComponent} from './';
import {HomeRoutingModule} from './home-routing.module';

import {FullPageComponent, OneColumnComponent} from '../@theme/layouts';

import {
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent
} from '../@theme/components';


const COMPONENTS = [
    FullPageComponent,
    OneColumnComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    TeamComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
];
@NgModule({
    imports: [HomeRoutingModule],
    declarations: [...COMPONENTS]
})
export class HomeModule {}
