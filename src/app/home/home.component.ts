import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading=false;
  users:any = [];

  constructor(private userserv: UserService) { }

  ngOnInit(): void {
    this.loading=true;
    this.userserv.getAll().pipe(first()).subscribe(users=>{
      this.loading = false;
      this.users = users;
      console.log(this.users)
    })
  }
}
