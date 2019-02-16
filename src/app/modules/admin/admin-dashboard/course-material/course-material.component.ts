import { CourseMaterialService } from './../../../../services/courseMaterial.service';
import { CourseService } from './../../../../services/course.service';
import { AuthService } from './../../../../services/auth.service';
import { AccessGroupService } from './../../../../services/access-group.service';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.scss'],
  providers: [
    AuthService,
    UserService,
    CourseService,
    AccessGroupService,
    CourseMaterialService
  ]
})
export class CourseMaterialComponent implements OnInit {
  currentUserInfo: any;
  currentUserWithAccess: any;
  data: any;
  _isSpinning: boolean = true;

  public items: any = [];
  result: any;
  selectedCourse: any;
  material: any;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private accessGroupService: AccessGroupService,
    private courseService: CourseService,
    private courseMaterialService: CourseMaterialService
  ) {}

  async ngOnInit() {
    await this.courseService.getAll().subscribe((result: any) => {
      // console.log(result);
      result.data.forEach(element => {
        this.items.push(element.course_name);
      });
    });
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

  delete(id: any) {
    console.log(id);
    this.courseMaterialService.delete(id).subscribe((result: any) => {});
  }
}
