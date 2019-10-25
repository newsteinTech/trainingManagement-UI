import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlacementsComponent } from './placements/placements.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'Home', component: HomeComponent},
  {path: 'signUp', component: RegisterUserComponent},
  {path:'logIn', component:LoginComponent},
  {path:'getUsers', component: UsersComponent, canActivate:[AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path:'pricing', component: PricingComponent},
  {path:'placements', component: PlacementsComponent},
  {path:'services', component: ServicesComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', redirectTo:"Home", pathMatch:"full"},
  {path:'', redirectTo:"Home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterUserComponent, LoginComponent, HomeComponent, AboutComponent, PlacementsComponent, 
  ServicesComponent, ContactComponent]
