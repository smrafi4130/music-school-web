import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/FREE-PROFILE-AVATARS.png';
  userName: string = 'Folisise Chosielie';
  userPost: string = 'Musician, Player';

  constructor() {}

  ngOnInit() {}
}
