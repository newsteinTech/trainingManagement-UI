import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SuperAdminSidebarComponent } from './super-admin-sidebar/super-admin-sidebar.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'superAdminDashboard',component:SuperAdminSidebarComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'trainerDashboard',component:TrainerDashboardComponent},
  {path:'studentDashboard',component:StudentDashboardComponent},
  {path:'enquiry',component:EnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
