import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FooterComponent } from './@theme/components/footer/footer.component';
const PAGES_COMPONENTS = [
    AdminComponent,
    FooterComponent
];
@NgModule({
    imports: [
        AdminRoutingModule,
        DashboardModule
    ],
    declarations: [...PAGES_COMPONENTS]
})
export class AdminModule { }
