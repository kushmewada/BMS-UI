import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-usr-pro',
  templateUrl: './usr-pro.component.html',
  styleUrls: ['./usr-pro.component.css']
})
export class UsrProComponent implements OnInit {
  loading=false;
  users:any = [];

  userPro:any = [];
  getdata:any = [];

  constructor(private userserv: UserService) { }

  ngOnInit(): void {
    this.loading=true;
    this.userserv.getAll().subscribe((resp: any) => {
      // console.log(resp,"for chack")
      this.getdata = resp.data
      //  console.log(resp,"here i am")
      // console.log(JSON.stringify(resp, null , 2));
      // console.log(this.getdata,"object forms")
        let data = resp.data
        this.getdata=[]
        this.getdata.push(resp.data);
        console.log(this.getdata,"hello")
        // console.log(data, "data of array formate")
        return data
      
    });
  }

}
