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
  providers: [UserService, AuthService]
})
export class StudentReadComponent implements OnInit {
  currentUserInfo: any;
  currentUserWithAccess: any;
  data: any;
  _isSpinning: boolean = true;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.getData();
  }

  async getData() {
    this.currentUserInfo = this.authService.getCurrentUserInfo();

    await this.userService
      .getAll(this.currentUserInfo.id)
      .subscribe((result: any) => {
        this.data = result.data;
        this._isSpinning = false;
      });
  }

  delete(id: any) {
    this.userService.delete(id).subscribe((result: any) => {
      this.getData();
    });
  }
}
