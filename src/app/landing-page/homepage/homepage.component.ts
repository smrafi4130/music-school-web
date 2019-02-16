import { StudentService } from './../../services/student.service';
import { InstructorService } from './../../services/instructor.service';
import { CourseService } from './../../services/course.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Howler, Howl } from 'howler';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [UserService, CourseService, InstructorService, StudentService]
})
export class HomepageComponent implements OnInit {
  studentData: any;
  courseData: any;
  instructorData: any;
  userData: any;
  value1: any;
  value2: any;
  value3: any;
  value4: any;

  constructor(
    private instructorService: InstructorService,
    private courseService: CourseService,
    private userService: UserService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.instructorService.getAll().subscribe((result: any) => {
      this.instructorData = result.data;
      this.value4 = this.instructorData.length;
    });
    this.courseService.getAll().subscribe((result: any) => {
      this.courseData = result.data;
      this.value3 = this.courseData.length;
    });
    this.userService.getAll().subscribe((result: any) => {
      this.userData = result.data;
      this.value2 = this.userData.length;
    });
    this.studentService.getAll().subscribe((result: any) => {
      this.studentData = result.data;
      this.value1 = this.studentData.length;
    });
  }
}
