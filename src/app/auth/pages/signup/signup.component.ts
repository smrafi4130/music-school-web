import { NotificationService } from './../../../services/notification.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileHolder, UploadMetadata } from 'angular2-image-upload';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService, AuthService, NotificationService]
})
export class SignupComponent implements OnInit {
  id: number;
  data: any;
  sub: Subscription;
  userID: any;
  currentUser: any;
  pass: any;

  genderSearchOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Not Specified', value: 'not-specified' }
  ];
  accessGroupSearchOptions = [
    { label: 'Student', value: '3' },
    { label: 'Instrcutor', value: '2' }
  ];

  validateForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    this.validateForm = this.fb.group({
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', []],
      email: ['', [Validators.required]],
      // first_name: ['', [Validators.required]],
      // last_name: ['', [Validators.required]],
      // contact_no: ['', [Validators.required]],
      // address: ['', [Validators.required]],
      // gender: ['', [Validators.required]],
      access_group_id: ['', [Validators.required]]
      // avatar: ['', []],
    });
  }

  ngOnInit() {}

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    const formData: FormData = new FormData();
    formData.append('user_name', value.user_name);
    formData.append('password', value.password);
    formData.append('confirmPassword', value.password);
    formData.append('email', value.email);
    formData.append('access_group_id', value.access_group_id);

    this.authService
      .signup({
        email: value.email,
        password: value.password,
        user_name: value.user_name,
        access_group_id: value.access_group_id
      })
      .subscribe((result: any) => {
        this.notificationService
          .create({
            user_id: '1',
            notification: value.user_name + '  requested to signup',
            status: '1'
          })
          .subscribe((result: any) => {});
        // swal({
        //   title: 'Success!',
        //   text: 'Student Created.',
        //   type: 'success',
        //   timer: 2000
        // });
        this.router.navigate(['/auth/login']);
      });
  };

  passwordConfirmationValidator = (
    control: FormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }
}
