import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../_services/authentication.service';
import { ConfirmedValidator } from '../_helpers/confirmed.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  submit = false;
  // success = '';
  loading = false;
  formGrp: FormGroup = new FormGroup({});

  constructor(
    private service: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.formGrp = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            // Validators.pattern(
            //   '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
            // ),
            Validators.minLength(8),
          ],
        ],
        confirm_password: ['', [Validators.required]],
        mNo: [
          '',
          [
            Validators.required,
            Validators.pattern('[- +()0-9]{10,}'),
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
      },
      {
        validator: ConfirmedValidator('password', 'confirm_password'),
      }
    );
  }

  ngOnInit(): void {}

  get f() {
    return this.formGrp.controls;
  }

  onSubmit() {
    this.submit = true;
    if (this.formGrp.invalid) {
      return;
    }
    var val = {
      ...this.formGrp.value,
    };
    // this.success = JSON.stringify(this.formGrp.value);
  }

  creatAc() {
    this.submit = true;

    if (this.formGrp.invalid) {
      return;
    }
    this.loading = true;
    var val = {
      ...this.formGrp.value,
    };
    this.service.signUp(val).subscribe((res: any) => {
      var alertMsg = res.alert;
      var result = res.result;
      if (result == true) {
        console.log(res.alert, 'alaert responce');
        // alert(alertMsg.toString(alert));
        this.router.navigate(['log-in']);
        this.toastrService.success(alertMsg);
        console.log(val, 'value responce ');
      } else {
        this.loading = false;
        this.toastrService.error(alertMsg);
        console.log(alertMsg);
      }
    });

    //
  }
}
