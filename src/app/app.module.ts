import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { HowComponent } from './how/how.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    MenuComponent,
    IndexComponent,
    FooterComponent,
    HowComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
