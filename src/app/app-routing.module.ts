import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlogComponent } from './blog/blog.component';
import { CreatblogComponent } from './blog/creatblog/creatblog.component';
import { UsrProComponent } from './usr-pro/usr-pro.component';
import { AttendanceComponent } from './usr-pro/attendance/attendance.component';
import { LikesComponent } from './blog/likes/likes.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { CommentsComponent } from './blog/comments/comments.component';
import { MsgComponent } from './feed-back/msg/msg.component';

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
  { path: 'creatBlog', component: CreatblogComponent },
  { path: 'Me', component: UsrProComponent, canActivate: [AuthGuard] },
  { path: 'leave', component: AttendanceComponent },
  { path: 'likes', component: LikesComponent },
  { path: 'feedback', component: FeedBackComponent },
  { path: 'comments', component: CommentsComponent },
  {path: 'msg', component:MsgComponent},

  // { path: '**', redirectTo: 'log-in' },
];
export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
