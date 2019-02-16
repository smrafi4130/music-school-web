import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { UserService } from '../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [AuthService, UserService]
})
export class PasswordComponent implements OnInit {
  type = 'password';
  show = false;
  hashedPassword: any;
  currentUser: any;
  data: any;
  current_user_id: any;
  password = new FormControl('', [Validators.required]);
  new_password = new FormControl('', [Validators.required]);
  confirm_password = new FormControl('', [Validators.required]);
  passwordField = document.querySelector('#password');

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.current_user_id = this.authService.getCurrentUserId();
    console.log(this.currentUser.user_name);
    // console.log(this.new_password);
  }

  async submit() {
    this.hashedPassword = await bcrypt.hashSync(this.new_password.value, 8);

    console.log(this.password.value);

    console.log(this.hashedPassword);
    this.authService
      .login(this.currentUser.user_name, this.password.value)
      .subscribe(result => {
        this.data = result;
        console.log('password matched');

        this.userService
          .update(this.current_user_id, {
            password: this.hashedPassword
          })
          .subscribe(result => {
            swal({
              title: 'Success!',
              text: 'Password Changed Successfully.',
              type: 'success',
              timer: 2000
            });
            console.log('password update succesful', result);
          });
        // notification
        this.authService.logout();
        this.router.navigate(['/']);
      });
  }

  toggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
