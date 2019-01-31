import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {HomeComponent} from './pages/home/home.component';

const PAGES_COMPONENTS = [
  AdminComponent,
  HomeComponent
];

const routes: Routes = [
  // { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
     { 
        path: 'admin',
        component:  AdminComponent
     },
     {
       path: '',
       component: HomeComponent
     }
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
];

@NgModule({
  declarations:[...PAGES_COMPONENTS],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
