import { InstructorService } from './../../../../../services/instructor.service';
import { AuthService } from './../../../../../services/auth.service';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services';
// import { UserService } from '../../../services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-instructor-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  providers: [UserService, AuthService, InstructorService]
})
export class InstructorReadComponent implements OnInit {
  default_data: Array<any>;
  currentUserInfo: any;
  currentUserWithAccess: any;
  data: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private instructorService: InstructorService
  ) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.currentUserInfo = this.authService.getCurrentUserInfo();

    // await this.userService.getAllInstructor().subscribe((result: any) => {
    //   this.data = result.data;
    // });

    await this.instructorService.getAll().subscribe((result: any) => {
      this.data = result.data;
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
        this.instructorService.delete(id).subscribe((result: any) => {
          this.getData();
        });
        swal('Deleted!', 'Instructor has been deleted.', 'success');
      }
    });
  }
}
