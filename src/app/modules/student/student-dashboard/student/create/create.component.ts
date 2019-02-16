import { AuthService } from './../../../../../services/auth.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-student-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class StudentCreateComponent implements OnInit {
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
    { label: 'Student', value: '2' },
    { label: 'Instrcutor', value: '1' }
  ];

  validateForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.validateForm = this.fb.group({
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', []],
      email: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      contact_no: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      access_group_id: ['2']
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
    formData.append('first_name', value.first_name);
    formData.append('last_name', value.last_name);
    formData.append('contact_no', value.contact_no);
    formData.append('address', value.address);
    formData.append('gender', value.gender);
    formData.append('access_group_id', '2');

    this.authService
      .signup({
        email: value.email,
        password: value.password,
        user_name: value.user_name,
        first_name: value.first_name,
        last_name: value.last_name,
        address: value.address,
        gender: value.gender,
        contact_no: value.contact_no,
        access_group_id: value.access_group_id
      })
      .subscribe((result: any) => {
        this.router.navigate(['/pages/student/all-student']);
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
