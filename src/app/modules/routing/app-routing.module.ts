import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from '../../components/index/index.component';
import {HowComponent} from '../../components/how/how.component';
import {LoginComponent} from '../../components/login/login.component';
import {RegisterComponent} from '../../components/register/register.component';
import {HomeComponent} from '../../components/home/home.component';
import {AuthGuardService} from '../../services/auth-guard/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/strona-glowna',
    pathMatch: 'full'
  },
  {
    path: 'strona-glowna',
    component: IndexComponent
  },
  {
    path: 'jak-to-dziala',
    component: HowComponent
  },
  {
    path: 'logowanie',
    component: LoginComponent
  },
  {
    path: 'rejestracja',
    component: RegisterComponent
  },
  {
    path: 'biurko',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '/strona-glowna'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }