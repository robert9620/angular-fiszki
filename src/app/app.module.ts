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

@NgModule({
  declarations: [
    MenuComponent,
    IndexComponent,
    FooterComponent,
    HowComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
