import swal from 'sweetalert2';
import { AuthService } from './../../../../../services/auth.service';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../../services/student.service';
import { UserService } from '../../../../../services';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-student-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  providers: [UserService, AuthService, StudentService]
})
export class StudentReadComponent implements OnInit {
  currentUserInfo: any;
  currentUserWithAccess: any;
  data: any;
  _isSpinning: boolean = true;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private studentService: StudentService
  ) {}

  async ngOnInit() {
    this.getData();
  }

  async getData() {
    this.currentUserInfo = this.authService.getCurrentUserInfo();

    // await this.userService
    //   .getAll(this.currentUserInfo.id)
    //   .subscribe((result: any) => {
    //     this.data = result.data;
    //     this._isSpinning = false;
    //   });

    await this.studentService.getAll().subscribe((result: any) => {
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
        this.studentService.delete(id).subscribe((result: any) => {
          this.getData();
        });
        swal('Deleted!', 'Student has been deleted.', 'success');
      }
    });
  }
}
