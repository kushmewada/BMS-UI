import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  user1: any = [];
  userId: any = [];
  returnUrl!: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthenticationService,
    private toastrService: ToastrService
  ) {
    if (this.service.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'Me';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.service
      .login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe((data) => {
        var alertMsg = data.alert;
        var result = data.result;
        var get = data.data.access;
        localStorage.setItem('session', get);
        // alert(alertMsg.toString(alert));
        var user_id = data.data.id;
        console.log(user_id,"user_id")
        // localStorage.setItem('user_id', user_id);
        localStorage.setItem('userid',data.data.id)
        if (result === true) {
          this.user1 = data;
          // console.log(this.user1,"me");
          this.userId = this.user1.data.id;
          this.toastrService.success(alertMsg);
          this.router.navigate([this.returnUrl]);
          // localStorage.setItem('myuserId', this.userId);
          // console.log(this.userId, '<-----User id login view');
        } else {
          this.loading = false;
          this.toastrService.error(alertMsg);
        }
      });
  }
}
