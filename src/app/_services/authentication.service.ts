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

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.APIUrl}user/login/`, {
        username,
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
    return this.loggedIn.asObservable(); // {2}
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('myuserId');
    this.loggedIn.next(false);
    this.currentUserSubject.next(null!);
    var user_id = localStorage.getItem('myuserId')
    return this.http.get(`${environment.APIUrl}user/logout/?user_id=${user_id}`);
  }

  signUp(val: any) {
    return this.http.post(`${environment.APIUrl}user/signup/`, val);
  }
}
