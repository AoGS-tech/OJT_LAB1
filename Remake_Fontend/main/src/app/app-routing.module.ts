import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';
import { UserManagementComponent } from 'src/components/user-management/user-management.component';
import { UserInformationComponent } from 'src/components/user-information/user-information.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { ResetPasswordComponent } from 'src/components/reset-password/reset-password.component';
import { PageDefaultComponent } from 'src/components/page-default/page-default.component';

const routes: Routes = [
  {path: '', redirectTo: '/pageDefault', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'userManagement', component: UserManagementComponent},
  {path: 'userInfo', component: UserInformationComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'pageDefault', component: PageDefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
