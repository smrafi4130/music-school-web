import { CourseService } from './../../../../../services/course.service';
import { AuthService } from './../../../../../services/auth.service';
import { AccessGroupService } from './../../../../../services/access-group.service';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services';
import { StudentCourseService } from './../../../../../services/studentcourse.service';
import { StorageService } from './../../../../../services/storage.service';
import { StudentService } from './../../../../../services/student.service';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-course-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  providers: [StudentCourseService, StorageService, StudentService]
})
export class CourseReadComponent implements OnInit {
  currentUserInfo: any;
  currentUserWithAccess: any;
  data: any;
  studentId: any;
  _isSpinning: boolean = true;

  constructor(
    private studentCourseService: StudentCourseService,
    private storageService: StorageService,
    private studentService: StudentService
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
            this.data = result.data;
            console.log(this.data);
          });
      });
  }

  // delete(id: any) {
  //   this.courseService.delete(id).subscribe((result: any) => {
  //     this.getData();
  //   });
  // }

  ngOnDestroy(): void {}
}
