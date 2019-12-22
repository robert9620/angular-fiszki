import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from '../../components/index/index.component';
import {HowComponent} from '../../components/how/how.component';
import {LoginComponent} from '../../components/login/login.component';
import {RegisterComponent} from '../../components/register/register.component';
import {HomeComponent} from '../../components/home/home.component';
import {AuthGuardService} from '../../services/auth-guard/auth-guard.service';
import {LetsLearnComponent} from '../../components/lets-learn/lets-learn.component';
import {SetsComponent} from '../../components/sets/sets/sets.component';
import {AccountComponent} from '../../components/account/account.component';
import {FavouriteSetsComponent} from '../../components/sets/favourite-sets/favourite-sets.component';
import {EditSetComponent} from '../../components/sets/edit-set/edit-set.component';
import {AddNewSetComponent} from '../../components/sets/add-new-set/add-new-set.component';
import {FindSetComponent} from '../../components/sets/find-set/find-set.component';
import {SetsMenuComponent} from '../../components/sets/sets-menu.component';


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
    path: 'nauka',
    component: LetsLearnComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'zestawy',
    component: SetsMenuComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: '', redirectTo: '/zestawy/moje-zestawy', pathMatch: 'full'},
      {path: 'moje-zestawy', component: SetsComponent},
      {path: 'ulubione', component: FavouriteSetsComponent},
      {path: 'edycja', component: EditSetComponent},
      {path: 'dodawanie', component: AddNewSetComponent},
      {path: 'wyszukiwanie', component: FindSetComponent}
    ]
  },
  {
    path: 'moje-konto',
    component: AccountComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'biurko',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
