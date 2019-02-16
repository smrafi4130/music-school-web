import { InstructorService } from './../../../../services/instructor.service';
import { StorageService } from './../../../../services/storage.service';
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
    CourseMaterialService,
    InstructorService
  ]
})
export class CourseMaterialComponent implements OnInit {
  currentUserInfo: any;
  id: any;
  currentUserWithAccess: any;
  data: any;
  _isSpinning: boolean = true;
  currentUserId: any;
  public items: any = [];
  result: any;
  selectedCourse: any;
  material: any;
  constructor(
    private courseService: CourseService,
    private courseMaterialService: CourseMaterialService,
    private storageService: StorageService,
    private instructorService: InstructorService
  ) {}

  async ngOnInit() {
    this.currentUserId = this.storageService.getCurrentUserId();

    await this.instructorService
      .getByUserId(this.currentUserId)
      .subscribe((result: any) => {
        this.id = result.data[0].id;
        this.getData();
      });
  }

  getData() {
    console.log(this.id);
    this.courseService.getByInstructorId(this.id).subscribe((result: any) => {
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
