import {NgModule} from '@angular/core';

import {HomeComponent, AboutComponent, BlogComponent, ContactComponent, TeamComponent} from './';
import {HomeRoutingModule} from './home-routing.module';

import {LandingComponent, OneColumnComponent} from '../@theme/layouts';
const COMPONENTS = [
    LandingComponent,
    OneColumnComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    TeamComponent
];
@NgModule({
    imports: [HomeRoutingModule],
    declarations: [...COMPONENTS]
})
export class HomeModule {}