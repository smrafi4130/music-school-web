import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../../../services/auth.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services';
import { Subscription } from 'rxjs';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-student-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [UserService, AuthService]
})
export class StudentUpdateComponent implements OnInit {
  id: number;
  data: any;
  sub: Subscription;
  userID: any;
  currentUser: any;
  currentUserInfo: any;

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
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.validateForm = this.fb.group({
      // user_name: ['', [Validators.required]],
      // password: ['', [Validators.required]],
      // confirmPassword: ['', []],
      email: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      contact_no: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]]
      // access_group_id: ['1']
      // avatar: ['', []],
    });
  }

  async ngOnInit() {
    this.currentUserInfo = this.authService.getCurrentUserInfo();

    await this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('hi', this.id);
    });

    await this.userService.getById(this.id).subscribe(result => {
      this.data = result;
      this.validateForm.patchValue(this.data.data);
    });

    // this.currentUserInfo = this.authService.getCurrentUserInfo();

    // await this.userService
    //   .getById(this.currentUserInfo.id)
    //   .subscribe(result => {
    //     this.data = result;
    //     this.validateForm.patchValue(this.data.data);
    //   });
  }

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    const formData: FormData = new FormData();
    // formData.append('user_name', value.user_name);
    // formData.append('password', value.password);
    // formData.append('confirmPassword', value.password);
    formData.append('email', value.email);
    formData.append('first_name', value.first_name);
    formData.append('last_name', value.last_name);
    formData.append('contact_no', value.contact_no);
    formData.append('address', value.address);
    formData.append('gender', value.gender);
    // formData.append('access_group_id', '1');

    this.userService.update(this.id, formData).subscribe(() => {
      this.router.navigate(['/dashboard/student']);
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
