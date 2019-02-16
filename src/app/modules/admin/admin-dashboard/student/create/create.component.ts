import { UserService } from './../../../../../services/user.service';
import { StudentService } from './../../../../../services/student.service';
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
import swal from 'sweetalert2';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-student-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [UserService, StudentService, AuthService]
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
    private authService: AuthService,
    private studentService: StudentService,
    private userService: UserService
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

  async ngOnInit() {
    this.getData();
  }

  async getData() {
    await this.studentService.getAll().subscribe((result: any) => {
      this.data = result.data;
    });
  }

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
        swal({
          title: 'Success!',
          text: 'Student Created.',
          type: 'success',
          timer: 2000
        });
        this.router.navigate(['/admin-dashboard/student/all-student']);
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

  approve(id: number) {
    this.userService.update(id, { status: '1' }).subscribe((result: any) => {
      // console.log('hello', result);
      this.router.navigate(['/admin-dashboard/student/all-student']);
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
        this.studentService.delete(id).subscribe((result: any) => {
          this.getData();
        });
        swal('Deleted!', 'Student has been deleted.', 'success');
      }
    });
  }
}
