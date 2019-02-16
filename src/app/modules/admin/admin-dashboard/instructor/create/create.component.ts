import { InstructorService } from './../../../../../services/instructor.service';
import { UserService } from './../../../../../services/user.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../services/auth.service';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';
// import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [AuthService, InstructorService, UserService]
})
export class InstructorCreateComponent implements OnInit {
  id: number;
  data: any;
  sub: Subscription;
  userID: any;
  currentUser: any;

  genderSearchOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Not Specified', value: 'not-specified' }
  ];
  accessGroupSearchOptions = [
    { label: 'Student', value: '2' },
    { label: 'Instrcutor', value: '1' }
  ];
  pass: any;
  validateForm: FormGroup;
  @ViewChild('Image') Image;
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
    formData.append('access_group_id', '1');

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
      .subscribe(() => {
        swal({
          title: 'Success!',
          text: 'Instructor Created.',
          type: 'success',
          timer: 2000
        });
        // this._notification.success('Successful', 'Instructor Create Succeeded');
        this.router.navigate(['/admin-dashboard/instructor/all-instructor']);
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private instructorService: InstructorService
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
      access_group_id: ['1']
      // avatar: ['', []],
    });
  }

  async ngOnInit() {
    this.getData();
  }

  async getData() {
    await this.instructorService.getAll().subscribe((result: any) => {
      this.data = result.data;
    });
  }

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

  approve(id: number) {
    this.userService.update(id, { status: '1' }).subscribe((result: any) => {
      // console.log('hello', result);
      this.router.navigate(['/admin-dashboard/instructor/all-instructor']);
    });
  }

  delete(id: any) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        this.instructorService.delete(id).subscribe((result: any) => {
          this.getData();
        });
        swal('Deleted!', 'Instructor has been deleted.', 'success');
      }
    });
  }
}
