import {NgModule} from '@angular/core';

import {HomeComponent, AboutComponent, BlogComponent, ContactComponent, TeamComponent} from './';
import {HomeRoutingModule} from './home-routing.module';

import {LandingComponent, OneColumnComponent} from '../@theme/layouts';

import {
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent
} from '../@theme/components';


const COMPONENTS = [
    LandingComponent,
    OneColumnComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    TeamComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent
];
@NgModule({
    imports: [HomeRoutingModule],
    declarations: [...COMPONENTS]
})
export class HomeModule {}
