import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser!: User;
  nav = true
  isLoggedIn$: Observable<boolean> | undefined;  

  constructor(private router:Router, private service:AuthenticationService){
    this.service.currentUser.subscribe(x=>this.currentUser = x);
    
  }

  ngOnInit() {
    this.isLoggedIn$ = this.service.isLoggedIn; // {2}
  }

//   logout() {
//     this.service.logout().subscribe((resp:any) => {
//       this.nav = false
//       if (resp.success) {
//         console.log(resp,'77777777777777');
//       }
//     });
//     this.router.navigate(['log-in']);
// }
}
