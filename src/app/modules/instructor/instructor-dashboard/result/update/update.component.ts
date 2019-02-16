import { FormControl, Validators } from '@angular/forms';
import { ResultService } from './../../../../../services/result.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentCourseService } from './../../../../../services/studentcourse.service';
import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-result-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [StudentCourseService, ResultService]
})
export class ResultUpdateComponent implements OnInit {
  // bool: boolean = true;
  data: any;
  result: any;
  course_id: any;
  student_id: any;
  marks = new FormControl('', [Validators.required, Validators.maxLength(15)]);

  constructor(
    private studentCourseService: StudentCourseService,
    // private resultService: ResultService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.student_id = +params['id'];
      // console.log('hi', this.id);
    });
    await this.studentCourseService
      .getByStudentId(this.student_id)
      .subscribe((result: any) => {
        this.data = result.data;
        this.course_id = result.data[0].course_id;
        // console.log('this', this.course_id);
      });
  }

  save() {
    this.studentCourseService
      .update(this.student_id, {
        marks: this.marks.value
      })
      .subscribe((result: any) => {
        this.router.navigate([
          '/instructor-dashboard/result/result-read',
          this.course_id
        ]);
        this.router.navigate;
        console.log(result);
      });
  }
}
