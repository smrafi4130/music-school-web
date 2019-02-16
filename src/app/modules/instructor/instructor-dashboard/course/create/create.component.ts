import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CourseService } from './../../../../../services/course.service';
import { InstructorService } from './../../../../../services/instructor.service';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IOption } from 'ng-select';

// import { UserService } from '../../../services';

@Component({
  selector: 'app-course-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [CourseService, InstructorService]
})
export class CourseCreateComponent implements OnInit {
  id: number;
  _date = new Date();
  _date_ = new Date();
  data: any;
  sub: Subscription;
  userID: any;
  currentUser: any;
  instructorSearchOptions: Array<IOption> = [];
  validateForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private courseService: CourseService,
    private instructorService: InstructorService
  ) {
    this.validateForm = this.fb.group({
      course_name: ['', [Validators.required]],
      course_type_id: ['', [Validators.required]],
      instructor_id: ['', [Validators.required]],
      room: ['', [Validators.required]],
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]]
      // avatar: ['', []],
    });
  }

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    const formData: FormData = new FormData();
    formData.append('course_name', value.course_name);
    formData.append('course_type_id', value.course_type_id);
    formData.append('instructor_id', value.instructor_id);
    formData.append('room', value.room);

    this.courseService
      .create({
        course_name: value.course_name,
        course_type_id: value.course_type_id,
        instructor_id: value.instructor_id,
        room: value.room
      })
      .subscribe(() => {
        swal({
          title: 'Success!',
          text: 'Course Created.',
          type: 'success',
          timer: 2000
        });
        this.router.navigate(['/admin-dashboard/course/all-course']);
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

  async ngOnInit() {
    await this.instructorService.getAll().subscribe((result: any) => {
      result.data.forEach(element => {
        this.instructorSearchOptions.push({
          label: element.user.user_name,
          value: element.id
        });
      });
    });
  }
}
