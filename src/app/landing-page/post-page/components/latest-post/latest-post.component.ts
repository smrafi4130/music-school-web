import { PostService } from './../../../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss'],
  providers: [PostService]
})
export class LatestPostComponent implements OnInit {
  postData: any;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll().subscribe((result: any) => {
      this.postData = result.data[0];
      console.log(this.postData);
    });
  }
}
