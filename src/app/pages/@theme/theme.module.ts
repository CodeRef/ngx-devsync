import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent
} from './components';

import {
    LandingComponent,
    OneColumnComponent,
    TwoColumnsComponent,
    ThreeColumnsComponent
} from './layouts';

const COMPONENTS = [
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    LandingComponent,
    OneColumnComponent,
    TwoColumnsComponent,
    ThreeColumnsComponent
];
@NgModule({
    imports: [],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ThemeModule,
        };
    }
}
