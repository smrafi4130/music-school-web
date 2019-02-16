import { Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StudentCourseService } from '../../../../../services/studentcourse.service';

@Component({
  selector: 'app-result-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  providers: [StudentCourseService]
})
export class ResultReadComponent implements OnInit {
  // bool: boolean = true;
  data: any;
  result: any;
  course_id: any;
  marks = new FormControl('', [Validators.required, Validators.maxLength(15)]);

  constructor(
    private studentCourseService: StudentCourseService,
    // private resultService: ResultService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.course_id = +params['id'];
      // console.log('hi', this.id);
    });
    this.studentCourseService
      .getByCouseId(this.course_id)
      .subscribe((result: any) => {
        this.data = result.data;
        console.log(this.data);
      });
  }

}
