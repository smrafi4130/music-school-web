import { AuthService } from './../../../../../services/auth.service';
import { CourseService } from './../../../../../services/course.service';
import { InstructorService } from './../../../../../services/instructor.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-result-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [CourseService, InstructorService, AuthService]
})
export class ResultCreateComponent implements OnInit {
  data: any;
  currentUserId: any;
  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.currentUserId = this.authService.getCurrentUserId();

    this.courseService.getAll().subscribe((result: any) => {
      this.data = result.data;
      // console.log(this.data);
      // console.log(this.currentUserId);
    });
  }
}
