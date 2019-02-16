import { InstructorService } from './../../../../../services/instructor.service';
import { AuthService } from './../../../../../services/auth.service';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../../services';
import { Subscription } from 'rxjs';
// import { UserService } from '../../../services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-instructor-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [UserService, InstructorService]
})
export class InstructorUpdateComponent implements OnInit {
  id: number;
  data: any;
  sub: Subscription;
  userID: any;
  currentUser: any;

  loginServerError: any;

  genderSearchOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Not Specified', value: 'not-specified' }
  ];
  accessGroupSearchOptions = [
    { label: 'Student', value: '2' },
    { label: 'Instrcutor', value: '1' }
  ];
  zilaSearchOptions: any;
  upazilaSearchOptions: any;
  divisionSearchOptions: any;
  division_id: any;
  zila_id: any;
  upazila_id: any;

  divisionSelect: any;
  oldImages = [];
  validateForm: FormGroup;
  ImageFile: File;
  @ViewChild('Image') Image;
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    const formData: FormData = new FormData();
    formData.append('email', value.email);
    formData.append('first_name', value.first_name);
    formData.append('last_name', value.last_name);
    formData.append('contact_no', value.contact_no);
    formData.append('address', value.address);
    formData.append('gender', value.gender);
    // formData.append('access_group_id', '1');

    console.log(value);

    swal({
      title: 'Are you sure?',
      text: 'Changes will be saved',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!'
    }).then(result => {
      if (result.value) {
        this.userService
          .update(this.id, {
            email: value.email,
            first_name: value.first_name,
            last_name: value.last_name,
            contact_no: value.contact_no,
            address: value.address,
            gender: value.gender
          })
          .subscribe((result: any) => {
            console.log(result);

            this.router.navigate([
              '/admin-dashboard/instructor/all-instructor'
            ]);
          });
        swal('Updated!', 'Instructor has been updated.', 'success');
      }
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
  currentUserInfo: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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
    });

    await this.userService.getById(this.id).subscribe(result => {
      console.log(result);
      this.data = result;
      this.validateForm.patchValue(this.data.data);
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
}
