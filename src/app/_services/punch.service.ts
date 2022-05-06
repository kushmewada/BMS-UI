import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PunchService {

  constructor(private http : HttpClient) { }

  punchIn(val : any){
    return this.http.post(`${environment.APIUrl}me/attendance/`,val);
  }
}
