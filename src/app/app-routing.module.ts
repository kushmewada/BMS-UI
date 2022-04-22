import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlogComponent } from './blog/blog.component';
import { CreatblogComponent } from './blog/creatblog/creatblog.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'', component:LoginComponent},
  {path:'signup', component:SignUpComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'creatBlog', component:CreatblogComponent},


  { path: '**', redirectTo: '' }
];
export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
