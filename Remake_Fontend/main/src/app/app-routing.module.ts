import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';
import { UserManagementComponent } from 'src/components/user-management/user-management.component';
import { UserInformationComponent } from 'src/components/user-information/user-information.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { ResetPasswordComponent } from 'src/components/reset-password/reset-password.component';
import { AuthGuard } from 'src/components/auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'userManagement', component: UserManagementComponent, canActivate: [AuthGuard]},
  {path: 'userInfo', component: UserInformationComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
