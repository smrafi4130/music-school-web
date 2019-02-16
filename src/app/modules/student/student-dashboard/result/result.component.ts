import { StudentCourseService } from './../../../../services/studentcourse.service';
import { AuthService } from './../../../../services/auth.service';
import { CourseService } from './../../../../services/course.service';
import { InstructorService } from './../../../../services/instructor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-read',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [StudentCourseService, InstructorService, AuthService]
})
export class ResultComponent implements OnInit {
  data: any;
  currentUserId: any;
  constructor(
    private authService: AuthService,
    private studentCourseService: StudentCourseService
  ) {}

  async ngOnInit() {
    this.currentUserId = this.authService.getCurrentUserId();
    await this.studentCourseService
      .getAll()
      .subscribe((result: any) => {
        this.data = result.data;
        console.log(this.data);
        // console.log(this.currentUserId);
      });
  }
}
