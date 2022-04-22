import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service'; 
import { ConfirmedValidator } from '../_helpers/confirmed.validator'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  submit = false;
  success = '';
  formGrp: FormGroup = new FormGroup({});
  constructor(private service: AuthenticationService, private fb: FormBuilder) {
    this.formGrp = fb.group(
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

  // firstName = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(2),
  // ]);
  // lastName = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(2),
  // ]);
  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern(
  //     '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
  //   ),
  //   Validators.minLength(8),
  // ]);
  // confirm_password = new FormControl('', [Validators.required]);
  // mNo = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern('[- +()0-9]{10,}'),
  //   Validators.minLength(10),
  //   Validators.maxLength(10),
  // ]);

  // formGrp = new FormGroup(
  //   {
  //     firstName: new FormControl('', [Validators.required]),
  //     lastName: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(8),
  //     ]),
  //     confirm_password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(8),
  //     ]),
  //     mNo: new FormControl('', [Validators.required]),
  //   },

  //   // CustomValidators.mustMatch('password', 'confirm_password')
  // );

  // formGrp = new FormGroup({
  //   firstName: this.firstName,
  //   lastName: this.lastName,
  //   email: this.email,
  //   password: this.password,
  //   confirm_password: this.confirm_password,
  //   mNo: this.mNo,
  // });

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
    this.success = JSON.stringify(this.formGrp.value);
  }

  creatAc() {
    this.submit = true;
    if (this.formGrp.invalid) {
      return;
    }
    var val = {
      ...this.formGrp.value,
    };
    this.service.signUp(val).subscribe((res:any) => {
      alert(res.toString());
    });
    console.log(val);
  }
}
