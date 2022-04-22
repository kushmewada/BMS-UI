import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser!: User;

  constructor(private router:Router, private service:AuthenticationService){
    this.service.currentUser.subscribe(x=>this.currentUser = x);
  }

  logout() {
    this.service.logout().subscribe((resp:any) => {
      if (resp.success) {
        console.log(resp,'77777777777777');
      }
    });
    this.router.navigate(['login']);
}
}
