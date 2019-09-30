import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SuperAdminSidebarComponent } from './super-admin-sidebar/super-admin-sidebar.component';
import { TokenInterceptor } from './auth/token.interceptor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SuperAdminDashboardComponent,
    AdminDashboardComponent,
    TrainerDashboardComponent,
    StudentDashboardComponent,
    EnquiryComponent,
    SuperAdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    AngularFontAwesomeModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
