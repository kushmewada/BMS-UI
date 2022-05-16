import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.APIUrl}auth/login/`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          this.loggedIn.next(true);
          // localStorage.setItem('myuserId', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  get isLoggedIn() {
    localStorage.removeItem('user_id')
    return this.loggedIn.asObservable(); // {2}
    
  }

  logout(val1:any){
    return this.http.post(`${environment.APIUrl}auth/logout/`,val1);
  }

  signUp(val: any) {
    return this.http.post(`${environment.APIUrl}auth/signup/`, val);
  }
}
