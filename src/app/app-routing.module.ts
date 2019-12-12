import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {HowComponent} from './how/how.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


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
    path: '**',
    redirectTo: '/strona-glowna'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
