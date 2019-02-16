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
import { UserService } from '../../../../../services';
import { StudentCourseService } from '../../../../../services/studentcourse.service';
import { StorageService } from '../../../../../services/storage.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [
    AuthService,
    CourseService,
    InstructorService,
    StudentCourseService,
    StorageService,
    UserService
  ]
})
export class CourseUpdateComponent implements OnInit {
  currentUserInfo: any;
  currentUserWithAccess: any;
  data: any;
  _isSpinning: boolean = true;
  id: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private studentCourseService: StudentCourseService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.getData();
  }

  async getData() {
    this.currentUserInfo = this.authService.getCurrentUserId();
    console.log(this.currentUserInfo);

    await this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    await this.studentCourseService
      .getByCouseId(this.id)
      .subscribe((result: any) => {
        this.data = result.data;
        console.log(this.data);
      });
    // await this.userService
    //   .getAll(this.currentUserInfo.id)
    //   .subscribe((result: any) => {
    //     this.data = result.data;
    //     this._isSpinning = false;
    //   });
  }

  delete(id: any) {
    this.userService.delete(id).subscribe((result: any) => {
      this.getData();
    });
  }
}
