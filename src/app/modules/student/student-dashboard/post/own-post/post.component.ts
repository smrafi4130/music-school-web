import { StorageService } from './../../../../../services/storage.service';
import { PostService } from './../../../../../services/post.service';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-own-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService, StorageService]
})
export class PostComponent implements OnInit {
  data: any;
  user_id: any;

  constructor(
    private postService: PostService,
    private storageService: StorageService
  ) {}
  async ngOnInit() {
    this.user_id = this.storageService.getCurrentUserId();
    this.postService.postByUser(this.user_id).subscribe((result: any) => {
      this.data = result.data;
      console.log(this.data);
    });
  }
}
