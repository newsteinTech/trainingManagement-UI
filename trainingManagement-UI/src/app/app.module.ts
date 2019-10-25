import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PlacementsComponent } from './placements/placements.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginService } from './login.service';
import { SignUpService } from './sign-up.service';
import { InterceptorService } from './interceptor.service';
import { UsersComponent } from './users/users.component';


@NgModule({

  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PlacementsComponent,
    ContactComponent,
    LoginComponent,
    PricingComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [],
      {
          // Tell the router to use the hash instead of HTML5 pushstate.
          useHash: true,

          // In order to get anchor / fragment scrolling to work at all, we need to
          // enable it on the router.
          anchorScrolling: "enabled",

          // Once the above is enabled, the fragment link will only work on the
          // first click. This is because, by default, the Router ignores requests
          // to navigate to the SAME URL that is currently rendered. Unfortunately,
          // the fragment scrolling is powered by Navigation Events. As such, we
          // have to tell the Router to re-trigger the Navigation Events even if we
          // are navigating to the same URL.
          onSameUrlNavigation: "reload",

          // Let's enable tracing so that we can see the aforementioned Navigation
          // Events when the fragment is clicked.
          enableTracing: true,
          scrollPositionRestoration: "enabled"
      }
    ),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,SignUpService,{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
