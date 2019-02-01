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
    path: 'home',
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [...PAGES_COMPONENTS],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
