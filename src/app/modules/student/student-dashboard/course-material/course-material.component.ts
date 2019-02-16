import { StudentCourseService } from './../../../../services/studentcourse.service';
import { StudentService } from './../../../../services/student.service';
import { StorageService } from './../../../../services/storage.service';
import { CourseMaterialService } from './../../../../services/courseMaterial.service';
import { CourseService } from './../../../../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.scss'],
  providers: [
    CourseService,
    StorageService,
    StudentCourseService,
    CourseMaterialService,
    StudentService
  ]
})
export class CourseMaterialComponent implements OnInit {
  currentUserInfo: any;
  currentUserWithAccess: any;
  data: any;
  _isSpinning: boolean = true;
  studentId: any;
  public items: any = [];
  result: any;
  selectedCourse: any;
  material: any;
  constructor(
    private courseService: CourseService,
    private courseMaterialService: CourseMaterialService,
    private studentService: StudentService,
    private storageService: StorageService,
    private studentCourseService: StudentCourseService
  ) {}

  async ngOnInit() {
    this.currentUserInfo = this.storageService.getCurrentUserId();

    this.studentService
      .getStudentId(this.currentUserInfo)
      .subscribe((result: any) => {
        this.studentId = result.data[0].id;
        console.log('this', this.studentId);
        this.studentCourseService
          .getByStudentId(this.studentId)
          .subscribe((result: any) => {
            console.log(result.data);
            result.data.forEach(element => {
              this.items.push(element.course.course_name);
            });
          });
      });

    await this.courseService.getAll().subscribe((result: any) => {});
  }

  public refreshValue(value: any) {
    this.courseService
      .getByCourseName(this.selectedCourse)
      .subscribe((result: any) => {
        this.result = result.data[0].id;
        this.courseData(this.result);
      });
  }

  ngOnDestroy(): void {}

  courseData(course_id: any) {
    this.courseMaterialService
      .getByCourseId(course_id)
      .subscribe((result: any) => {
        this.material = result.data;
        console.log('bmbn', this.material);
      });
  }
}
