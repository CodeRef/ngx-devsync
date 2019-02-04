import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PAGES_COMPONENTS = [

];

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  }
];

@NgModule({
  declarations: [...PAGES_COMPONENTS],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
