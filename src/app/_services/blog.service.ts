import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Blog, CreateBlog } from '../_models/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }
  
  postBlog(val:any) {
    var session = localStorage.getItem('session')
    // console.log("user id from blog api", user_id);
    // const blg : Blog[]=[{postTitle:'', postImage:'',postDescription:''}];
    return this.http.post(`${environment.APIUrl}blog/?key=${session}`,val);
  }

  // UploadPhoto(val: any) {
  //   var user_id = localStorage.getItem('myuserId')
  //   console.log("user id from blog api", user_id);
  //   return this.http.post(`${environment.APIUrl}blog/${user_id}`, val);
  // }

  getBlog():Observable<any[]>{
    var session = localStorage.getItem('session')
    // console.log("user id from blog api", user_id);
    return this.http.get<any[]>(`${environment.APIUrl}blog/?key=${session}`);
  }

  likeBlog(val:any){
    return this.http.post(`${environment.APIUrl}blog/like/`,val);
  }
}
