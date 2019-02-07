import { ModuleWithProviders, NgModule } from '@angular/core';
import {
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent
} from './components';

import {
    FullPageComponent,
    OneColumnComponent,
    TwoColumnsComponent,
    ThreeColumnsComponent
} from './layouts';

const COMPONENTS = [
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    FullPageComponent,
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
