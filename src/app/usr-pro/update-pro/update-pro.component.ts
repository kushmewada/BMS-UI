import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-update-pro',
  templateUrl: './update-pro.component.html',
  styleUrls: ['./update-pro.component.css']
})
export class UpdateProComponent implements OnInit {

  constructor(private UserServ : UserService) { }
  Update :any = [];

  myForm = new FormGroup ({
    firstName : new FormControl('', [ ]),
    lastName : new FormControl('',[]),
    image : new FormControl('',[]),
    address: new FormControl('',[]),
  })

  get f() {
    return this.myForm.controls;
  }
  
  submit(){
    var formValue = this.myForm.value;
    var firstName = formValue.firstName;
    var lastName = formValue.lastName;
    var image = formValue.image;
    var address = formValue.address;
    var user_id = localStorage.getItem('user_id')
    var val = {
      firstName,
      lastName,
      image,
      address,
      user_id
    }
    this.UserServ.upDatePro(val).subscribe((resp)=>{
      console.log(resp,"Update Profile data")
    })
  }
  ngOnInit(): void {
    
  }

}
