import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../../services/auth.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [AuthService, UserService]
})
export class ProfileComponent implements OnInit {
  data: any;
  currentUserInfo: any;
  currentUserWithAccess: any;
  avatarImgSrc: string = 'assets/images/FREE-PROFILE-AVATARS.png';
  userName: string = 'Folisise Chosielie';
  userPost: string = 'Musician, Player';
  validateForm: FormGroup;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      contact_no: ['', [Validators.required]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }

  async ngOnInit() {
    this.currentUserInfo = this.authService.getCurrentUserInfo();

    // await this.userService
    //   .getById(this.currentUserInfo.id)
    //   .subscribe((result: any) => {
    //     console.log(result);
    //     this.currentUserWithAccess = result.data;
    //     console.log(this.currentUserWithAccess);
    //   });
    await this.userService
      .getById(this.currentUserInfo.id)
      .subscribe(result => {
        this.data = result;
        // console.log('helpp', this.data);
        this.validateForm.patchValue(this.data.data);
      });
  }

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    const formData: FormData = new FormData();
    formData.append('email', value.email);
    formData.append('first_name', value.first_name);
    formData.append('last_name', value.last_name);
    formData.append('contact_no', value.contact_no);
    formData.append('address', value.address);
    formData.append('gender', value.gender);
    this.userService
      .update(this.currentUserInfo.id, {
        email: value.email,
        first_name: value.first_name,
        last_name: value.last_name,
        contact_no: value.contact_no,
        address: value.address,
        gender: value.gender
      })
      .subscribe(() => {
        window.location.reload();
        this.router.navigate(['/admin-dashboard/profile']);
      });
  };
}
