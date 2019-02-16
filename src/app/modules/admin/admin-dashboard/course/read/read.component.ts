import swal from 'sweetalert2';
import { CourseService } from './../../../../../services/course.service';
import { AuthService } from './../../../../../services/auth.service';
import { AccessGroupService } from './../../../../../services/access-group.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services';
@Component({
  selector: 'app-course-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  providers: [AuthService, UserService, CourseService, AccessGroupService]
})
export class CourseReadComponent implements OnInit {
  currentUserInfo: any;
  currentUserWithAccess: any;
  data: any;
  _isSpinning: boolean = true;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private accessGroupService: AccessGroupService,
    private courseService: CourseService
  ) {}

  async ngOnInit() {
    this.getData();
  }

  async getData() {
    this.currentUserInfo = this.authService.getCurrentUserInfo();

    await this.userService
      .getById(this.currentUserInfo.id)
      .subscribe((result: any) => {
        this.accessGroupService
          .getById(result.data.access_group_id)
          .subscribe((result: any) => {
            this.currentUserWithAccess = result;
          });
      });

    this.courseService.getAll().subscribe((result: any) => {
      this.data = result.data;
      this._isSpinning = false;
    });
  }

  delete(id: any) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        this.courseService.delete(id).subscribe((result: any) => {
          this.getData();
        });
        swal('Deleted!', 'Course has been deleted.', 'success');
      }
    });
  }

  ngOnDestroy(): void {}
}
