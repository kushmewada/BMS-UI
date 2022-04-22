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
    const blg : Blog[]=[{postTitle:'', postImage:'',postDescription:''}];
    return this.http.post(`${environment.APIUrl}blog/`,val);
  }

  UploadPhoto(val: any) {
    return this.http.post(`${environment.APIUrl}/blog`, val);
  }

  getBlog():Observable<any[]>{
    return this.http.get<any[]>(`${environment.APIUrl}blog/`);
  }


}
