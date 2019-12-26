import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowComponent } from './components/how/how.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {HttpService} from './services/http/http.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './services/auth-guard/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuLoggedInComponent } from './components/menu/menu-logged-in/menu-logged-in.component';
import { MenuNotLoggedInComponent } from './components/menu/menu-not-logged-in/menu-not-logged-in.component';
import { LetsLearnComponent } from './components/lets-learn/lets-learn.component';
import { SetsComponent } from './components/sets/sets/sets.component';
import { AccountComponent } from './components/account/account/account.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { FavouriteSetsComponent } from './components/sets/favourite-sets/favourite-sets.component';
import { AddNewSetComponent } from './components/sets/add-new-set/add-new-set.component';
import { FindSetComponent } from './components/sets/find-set/find-set.component';
import { EditSetComponent } from './components/sets/edit-set/edit-set.component';
import { SetsMenuComponent } from './components/sets/sets-menu.component';
import { AccountMenuComponent } from './components/account/account-menu.component';
import { ChangePasswordComponent } from './components/account/change-password/change-password.component';
import { LearnComponent } from './components/lets-learn/learn/learn.component';

@NgModule({
  declarations: [
    MenuComponent,
    IndexComponent,
    FooterComponent,
    HowComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuLoggedInComponent,
    MenuNotLoggedInComponent,
    LetsLearnComponent,
    SetsComponent,
    AccountComponent,
    FavouriteSetsComponent,
    AddNewSetComponent,
    FindSetComponent,
    EditSetComponent,
    SetsMenuComponent,
    AccountMenuComponent,
    ChangePasswordComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [HttpService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      }
    ],
  bootstrap: [MenuComponent]
})
export class AppModule { }
