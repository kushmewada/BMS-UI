import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    var user_id = localStorage.getItem('userid')
    // console.log("user id from blog api", user_id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('session' ) || '',
      }),
    };
    return this.http.get<any[]>(`${environment.APIUrl}users/profile/?user_id=${user_id}`,httpOptions);
  }

 staff(): Observable<any[]>{
  var user_id = localStorage.getItem('myuserId')
  return this.http.get<any[]>(`${environment.APIUrl}user/?user_id=${user_id}`);
 }

 upDatePro( val :any ){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : localStorage.getItem('session' ) || '',
    }),
  };
   return this.http.put(`${environment.APIUrl}users/profile/`,val, httpOptions);
 }

 getAllStaff(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : localStorage.getItem('session' ) || '',
    }),
  };
  return this.http.get(`${environment.APIUrl}users/profile/`,httpOptions);
 }
}
