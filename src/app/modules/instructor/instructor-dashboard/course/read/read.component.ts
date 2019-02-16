import { InstructorService } from './../../../../../services/instructor.service';
import { StorageService } from './../../../../../services/storage.service';
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
  providers: [
    AuthService,
    UserService,
    CourseService,
    AccessGroupService,
    InstructorService
  ]
})
export class CourseReadComponent implements OnInit {
  currentUserInfo: any;
  currentUserId: any;
  id: any;
  currentUserWithAccess: any;
  data: any;
  _isSpinning: boolean = true;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private accessGroupService: AccessGroupService,
    private courseService: CourseService,
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
      this.data = result.data;
      // console.log(this.data);
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
