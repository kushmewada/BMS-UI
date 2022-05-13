import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service : AuthenticationService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.service.currentUserValue;
    if (currentUser) {
        // logged in so return true
        return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/log-in'], { queryParams: { returnUrl: state.url } });
    
    this.service.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/log-in']);
          return false;
        }
        return true;
      })
    );
    return false;
    
}
  
}