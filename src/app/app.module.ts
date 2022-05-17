import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './_services/authentication.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlogComponent } from './blog/blog.component';
import { CreatblogComponent } from './blog/creatblog/creatblog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoValidationDirective } from './dir/no-validation.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsrProComponent } from './usr-pro/usr-pro.component';
import { AttendanceComponent } from './usr-pro/attendance/attendance.component';
import { CommentsComponent } from './blog/comments/comments.component';
import { LikesComponent } from './blog/likes/likes.component';
import { FooterComponent } from './footer/footer.component';
import { AttenComponent } from './atten/atten.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { MsgComponent } from './feed-back/msg/msg.component';
import { PunchTimePipe } from './_pipe/punch-time.pipe';
import { UpdateProComponent } from './usr-pro/update-pro/update-pro.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    BlogComponent,
    CreatblogComponent,
    NavbarComponent,
    NoValidationDirective,
    UsrProComponent,
    AttendanceComponent,
    CommentsComponent,
    LikesComponent,
    FooterComponent,
    AttenComponent,
    FeedBackComponent,
    MsgComponent,
    PunchTimePipe,
    UpdateProComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000, // seconds
      positionClass: 'toast-bottom-right'
    }),
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
