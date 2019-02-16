// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../../services/post.service';
import { StorageService } from '../../../../../services/storage.service';
import swal from 'sweetalert2';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-post-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  providers: [PostService]
})
export class PostReadComponent implements OnInit {
  data: any;
  user_id: any;

  constructor(private postService: PostService) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.postService.getAll().subscribe((result: any) => {
      this.data = result.data;
      // console.log(this.data);
    });
  }

  delete(id: any) {
    console.log(id);
    this.postService.delete(id).subscribe((result: any) => {
      swal({
        title: 'Success!',
        text: 'Post Deleted.',
        type: 'success',
        timer: 2000
      });
      this.getData();
    });
  }
}
