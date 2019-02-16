import swal from 'sweetalert2';
import { InstructorService } from './../../../../../services/instructor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../../../services/auth.service';
import { CourseService } from './../../../../../services/course.service';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [AuthService, CourseService, InstructorService]
})
export class CourseUpdateComponent implements OnInit {
  id: number;
  data: any;
  sub: Subscription;
  userID: any;
  currentUser: any;
  instructorSearchOptions = [];
  loginServerError: any;
  validateForm: FormGroup;
  currentUserInfo: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private courseService: CourseService,
    private instructorService: InstructorService
  ) {
    this.validateForm = this.fb.group({
      course_name: ['', [Validators.required]],
      course_type_id: ['', [Validators.required]],
      instructor_id: ['', [Validators.required]],
      room: ['', [Validators.required]]
    });
  }

  submitForm = ($event, value) => {
    // console.log($event);
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    const formData: FormData = new FormData();
    formData.append('course_name', value.course_name);
    formData.append('course_type_id', value.course_type_id);
    formData.append('instructor_id', value.instructor_id);
    formData.append('room', value.room);

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
        this.courseService
          .update(this.id, {
            course_name: value.course_name,
            course_type_id: value.course_type_id,
            instructor_id: value.instructor_id,
            room: value.room
          })
          .subscribe(() => {
            this.router.navigate(['/admin-dashboard/course/all-course']);
          });
        swal('Updated!', 'Course has been updated.', 'success');
      }
    });
  };

  async ngOnInit() {
    this.currentUserInfo = this.authService.getCurrentUserInfo();

    await this.route.params.subscribe(params => {
      this.id = +params['id'];
      // console.log('hi', this.id);
    });

    await this.courseService.getById(this.id).subscribe(result => {
      this.data = result;
      this.validateForm.patchValue(this.data.data);
    });

    await this.instructorService.getAll().subscribe((result: any) => {
      result.data.forEach(element => {
        this.instructorSearchOptions.push({
          label: element.user.user_name,
          value: element.id
        });
      });
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
