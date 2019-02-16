import { AuthService } from './../../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})
export class RightConfigComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = 'Folisise Chosielie';
  userPost: string = 'Musician, Player';
  isConfigToggle: boolean = false;
  constructor(
    private _globalService: GlobalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  configToggle() {
    this.isConfigToggle = !this.isConfigToggle;
    //this._globalService._sidebarToggleState(!this.isConfigToggle);
    this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
