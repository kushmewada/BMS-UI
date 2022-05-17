import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  postFeedback(val : any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('session' ) || '',
      }),
    };
    return this.http.post(`${environment.APIUrl}feedback/`,val,httpOptions);
  }

  getFeedback(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('session' ) || '',
      }),
    };
    var user_id = localStorage.getItem('userid')
    return this.http.get(`${environment.APIUrl}feedback/?user_id=${user_id}`,httpOptions)
  }
}
