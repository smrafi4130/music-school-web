import { NotificationService } from './../../../../../services/notification.service';
import { StorageService } from './../../../../../services/storage.service';
import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { PopoverModule } from 'ngx-popover';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
  providers: [NotificationService]
})
export class PagesTopComponent {
  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string;
  userPost: string = 'Musician, Player';
  currentUser: any;
  currentUserId: any;
  sidebarToggle: boolean = true;
  tip: boolean = false;
  data: any;
  id: any;

  constructor(
    private _globalService: GlobalService,
    private storageService: StorageService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.currentUser = this.storageService.getCurrentUser();
    this.currentUserId = this.storageService.getCurrentUserId();
    this.notificationService
      .getByUserId(this.currentUserId)
      .subscribe((result: any) => {
        this.data = result.data;
      });
    // console.log(this.currentUser);
  }
  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(
      data => {
        if (data.ev === 'sidebarToggle') {
          this.sidebarToggle = data.value;
        }
      },
      error => {
        console.log('Error: ' + error);
      }
    );
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);

    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }

  clickPopover() {
    this.data.forEach(element => {
      this.notificationService
        .update(element.id, {
          value: '0'
        })
        .subscribe((result: any) => {});
    });
  }

  test(id: number) {
    this.id = id;
    console.log(this.id);
    this.notificationService
      .update(this.id, {
        value: '0'
      })
      .subscribe((result: any) => {});
    this.ngOnInit();
  }
}
