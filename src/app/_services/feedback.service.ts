import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  postFeedback(val : any){
    return this.http.post(`${environment.APIUrl}me/feedback/`,val);
  }

  getFeedback(){
    var session = localStorage.getItem('session')
    return this.http.get(`${environment.APIUrl}me/feedback/?key=${session}`)
  }
}
