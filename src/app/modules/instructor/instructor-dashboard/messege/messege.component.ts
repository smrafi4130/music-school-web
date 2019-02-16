import { UserService } from './../../../../services/user.service';
import { NotificationService } from './../../../../services/notification.service';
import swal from 'sweetalert2';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from './../../../../services/message.service';
import { StorageService } from './../../../../services/storage.service';
import { AuthService } from './../../../../services/auth.service';
import { AccessGroupService } from './../../../../services/access-group.service';
import { CourseService } from './../../../../services/course.service';
import { CourseMaterialService } from './../../../../services/courseMaterial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messege-read',
  templateUrl: './messege.component.html',
  styleUrls: ['./messege.component.scss'],
  providers: [MessageService, UserService, StorageService, NotificationService]
})
export class MessegeComponent {
  currentUserId: any;

  data: any;
  items: any = [];
  result: any;
  selectedUser: any;
  material: any;
  message = new FormControl('', [Validators.required]);
  sentMessage: any;
  receivedMessage: any;
  currentUserName: any;
  constructor(
    private userService: UserService,
    private storageServcie: StorageService,
    private messageService: MessageService,
    private notificationService: NotificationService
  ) {}

  async ngOnInit() {
    this.currentUserId = this.storageServcie.getCurrentUserId();
    this.currentUserName = this.storageServcie.getCurrentUser();
    console.log('this', this.currentUserName.user_name);
    // console.log(this.currentUserId);
    await this.messageService
      .messageByCurrentUser(this.currentUserId)
      .subscribe((result: any) => {
        this.sentMessage = result.data;
        console.log(result.data);
      });

    await this.messageService
      .messageToCurrentUser(this.currentUserId)
      .subscribe((result: any) => {
        this.receivedMessage = result.data;
        console.log(result.data);
      });
    await this.userService.getAll().subscribe((result: any) => {
      // console.log(result);
      result.data.forEach(element => {
        this.items.push({ label: element.user_name, value: element.id });
      });
    });
  }

  public refreshValue(value: any) {
    console.log(this.selectedUser);
  }

  send() {
    // console.log(this.currentUserId, this.selectedUser, this.message.value);
    this.messageService
      .create({
        sender_id: this.currentUserId,
        receiver_id: this.selectedUser,
        message: this.message.value
      })
      .subscribe((result: any) => {
        swal({
          title: 'Success!',
          text: 'Message Send Succesfully',
          type: 'success',
          timer: 2000
        });
        this.notificationService
          .create({
            user_id: this.selectedUser,
            notification:
              this.currentUserName.user_name + '  send you a message',
            status: '1'
          })
          .subscribe((result: any) => {});
      });
  }

  ngOnDestroy(): void {}
}
