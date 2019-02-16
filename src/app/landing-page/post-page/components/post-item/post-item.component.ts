import { PostService } from './../../../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  providers: [PostService]
})
export class PostItemComponent implements OnInit {
  postData: any;
  currentData: any;
  image = [
    './../../../../../assets/images/0zgS8TXVXx0.jpg',
    './../../../../../assets/images/7b_Kgqr956Y.jpg',
    './../../../../../assets/images/H5BLz_4lJqg.jpg',
    './../../../../../assets/images/c_5aUOJ-A8c.jpg',
    './../../../../../assets/images/pHwrlGEIxs8.jpg',
    './../../../../../assets/images/9uWblAxO308.jpg',
    './../../../../../assets/images/Dp91Gclv2_A.jpg',
    './../../../../../assets/images/HwhJ3xgf77Y.jpg'
  ];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll().subscribe((result: any) => {
      this.postData = result.data;
      console.log(result.data);
    });
  }

  openModal(modal, id) {
    this.postService.getById(id).subscribe((result: any) => {
      this.currentData = result.data;
      console.log(this.currentData);
    });
    modal.open();
  }
  closeModal(modal) {
    modal.close();
  }
}
