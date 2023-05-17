import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';
import { HeaderComponent } from './../components/header/header.component';
import { UserManagementComponent } from 'src/components/user-management/user-management.component';
import { UserInformationComponent } from 'src/components/user-information/user-information.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { ResetPasswordComponent } from 'src/components/reset-password/reset-password.component';
import { PageDefaultComponent } from 'src/components/page-default/page-default.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    UserManagementComponent,
    UserInformationComponent,
    RegisterComponent,
    ResetPasswordComponent,
    PageDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
