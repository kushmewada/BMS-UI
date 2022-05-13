import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PunchService {

  constructor(private http : HttpClient) { }

  punchIn(val : any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('session' ) || '',
      }),
    };
    return this.http.post(`${environment.APIUrl}attendance/`,val, httpOptions);
  }

  getPunch(){
    // const session = localStorage.getItem('session')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : localStorage.getItem('session' ) || '',
      }),
    };
    return this.http.get(`${environment.APIUrl}attendance/all-attendance/`, httpOptions);
  }
}
