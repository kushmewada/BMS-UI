import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]>{
    // console.log( localStorage.getItem('myuserId'),'<----from userProfile Api side');
    var user_id = localStorage.getItem('myuserId')
    // console.log("user id from blog api", user_id);
    return this.http.get<any[]>(`${environment.APIUrl}user/profile/?user_id=${user_id}`);
  }

 staff(): Observable<any[]>{
  var user_id = localStorage.getItem('myuserId')
  return this.http.get<any[]>(`${environment.APIUrl}user/?user_id=${user_id}`);
 }
}
