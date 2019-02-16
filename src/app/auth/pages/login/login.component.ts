import { StorageService } from './../../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

// import { CmsService } from '../../../services/cms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginServerError = {
    show: false,
    message: ''
  };
  type = 'password';
  show = false;
  // cmsLogoImage: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private authService: AuthService // private cmsService: CmsService
  ) {
    this.validateForm = this.fb.group({
      // email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      user_name: ['', [Validators.required]]
    });
  }

  validateForm: FormGroup;
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }

    this.authService.login(value.user_name, value.password).subscribe(
      result => {
        if (result) {
          if (result.data.payload.status != 0) {
            // set token property
            // store username and jwt token in local storage to keep user logged in between page refreshes
            // localStorage.setItem('currentUser', JSON.stringify({username: result.username, token: result.token}));
            localStorage.setItem(
              'currentUser',
              JSON.stringify({
                username: result.data.payload.user_name,
                token: result.data.token
              })
            );
            localStorage.setItem('token', result.data.token);
            this.storageService.set('token', result.data.token);
            // swal.fire('Good job!', 'You clicked the button!', 'success');
            swal({
              title: 'Success!',
              text: 'Login Successful.',
              type: 'success',
              timer: 2000
            });

            // console.log('lll', result.data.payload.accessGroup);
            // this.router.navigate(['/admin-dashboard']);
            this.router.navigate([
              '/' + result.data.payload.accessGroup.name + '-dashboard'
            ]);
          } else {
            swal({
              title: 'Failed!',
              text: 'User not authorized.',
              type: 'error',
              timer: 2000
            });
          }

          // return true to indicate successful login
        } else {
        }
      },
      err => {
        swal({
          title: 'Failed!',
          text: 'Login Failed.',
          type: 'error',
          timer: 2000
        });
        this.loginServerError.show = true;
        this.loginServerError.message = err.error.message;
      }
    );
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }

  getFormControl(user_name) {
    return this.validateForm.controls[user_name];
  }

  userNameServerValidator = (control: FormControl) => {
    return Observable.create(function(observer) {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  };

  ngOnInit() {
    // this.cmsService.getBySectionName("LOGO").subscribe(result => {
    //     this.cmsLogoImage = result[0].data_value;
    // });
  }

  signup() {
    this.router.navigate(['/signup']);
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
