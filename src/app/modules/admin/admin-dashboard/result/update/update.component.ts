import { FormControl, Validators } from '@angular/forms';
import { ResultService } from './../../../../../services/result.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentCourseService } from './../../../../../services/studentcourse.service';
import { Component, OnInit } from '@angular/core';

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
      .getById(this.student_id)
      .subscribe((result: any) => {
        this.data = result.data;
        // console.log(this.data);
        // this.course_id = result.data[0].course_id;
        // console.log('this', this.course_id);
      });
  }

  save(id) {
    this.studentCourseService
      .update(this.student_id, {
        marks: this.marks.value
      })
      .subscribe((result: any) => {
        this.router.navigate(['/admin-dashboard/result/result-read', id]);
        // console.log(result);
      });
  }
}
