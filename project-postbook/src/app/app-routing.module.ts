import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeprivateComponent } from './components/homeprivate/homeprivate.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  //AuthGuard se è loggato può visualizzare la view
  {
    path: 'homeprivate',
    component: HomeprivateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "myprofile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
