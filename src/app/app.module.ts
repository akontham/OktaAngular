import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    LogoutComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
