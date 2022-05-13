import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Blog, CreateBlog } from '../_models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  postBlog(val: any) {
    var session = localStorage.getItem('session');
    // let header = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer' + localStorage.getItem('session')});
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('session' ) || '',
      }),
    };
    return this.http.post(`${environment.APIUrl}blog/`, val, httpOptions);
  }

  // UploadPhoto(val: any) {
  //   var user_id = localStorage.getItem('myuserId')
  //   console.log("user id from blog api", user_id);
  //   return this.http.post(`${environment.APIUrl}blog/${user_id}`, val);
  // }

  getBlog(): Observable<any[]> {
    // var session = localStorage.getItem('session');
    // console.log("user id from blog api", user_id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('session' ) || '',
      }),
    };
    return this.http.get<any[]>(`${environment.APIUrl}blog/`, httpOptions);
  }

  likeBlog(val: any) {
    return this.http.post(`${environment.APIUrl}blog/like/`, val);
  }
}
