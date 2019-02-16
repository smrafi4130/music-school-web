import { CourseService } from './../../../../../services/course.service';
import { Router } from '@angular/router';
import { StorageService } from './../../../../../services/storage.service';
import { StudentService } from './../../../../../services/student.service';
import { StudentCourseService } from './../../../../../services/studentcourse.service';
import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-course-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [
    StudentCourseService,
    StudentService,
    StorageService,
    CourseService
  ]
})
export class CourseCreateComponent {
  id: any;
  data: any;
  studentId: any;
  currentUserInfo: any;
  mainData: any;
  myCourseData: any;
  finalData: any;
  totalCourse: any;
  missing: any;
  constructor(
    private studentCourseService: StudentCourseService,
    private studentService: StudentService,
    private storageService: StorageService,
    private router: Router,
    private courseService: CourseService
  ) {}
  ngOnInit() {
    this.currentUserInfo = this.storageService.getCurrentUserId();

    this.studentService
      .getStudentId(this.currentUserInfo)
      .subscribe((result: any) => {
        this.studentId = result.data[0].id;
        console.log(this.studentId);
        this.studentCourseService
          .notByStudentId(this.studentId)
          .subscribe((result: any) => {
            console.log('rafi', result.data);
          });
        // console.log('this', this.studentId);

        // this.studentCourseService
        //   .getByStudentId(this.studentId)
        //   .subscribe((result: any) => {
        //     this.myCourseData = result.data;
        //     this.myCourseData.forEach(element => {
        //       this.finalData = element.course_id;
        //       console.log('this', this.finalData);
        //     });
        //   });
      });

    this.studentService
      .getStudentId(this.currentUserInfo)
      .subscribe((result: any) => {
        this.studentId = result.data[0].id;
        // console.log('this', this.studentId);
        this.courseService.getAll().subscribe((result: any) => {
          this.data = result.data;
          this.data.forEach(element => {
            this.totalCourse = element.id;
            console.log('hi', this.totalCourse);
          });
          // console.log('abc', this.mainData);
        });
      });

    this.missing = this.totalCourse.filter(
      item => this.finalData.indexOf(item) < 0
    );
    console.log(this.missing);
  }

  register(id: Number) {
    if (id == this.finalData) {
      swal({
        title: 'Failed!',
        text: 'You are already registered to this course',
        type: 'error',
        timer: 2000
      });
    } else {
      this.studentCourseService
        .create({
          student_id: this.studentId,
          course_id: id,
          marks: '0.0'
        })
        .subscribe((result: any) => {
          swal({
            title: 'Success!',
            text: 'Registration to this course success',
            type: 'success',
            timer: 2000
          });
          this.router.navigate(['/student-dashboard/course/all-course']);
        });
    }
  }
}
