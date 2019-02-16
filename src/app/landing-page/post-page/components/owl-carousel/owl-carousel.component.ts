import { PostService } from './../../../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { SwiperConfig, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss'],
  providers: [PostService]
})
export class OwlCarouselComponent implements OnInit {
  imageSources = [
    './../../../../../assets/images/carousel/r2HthctfubY.jpg',
    './../../../../../assets/images/carousel/ELC0hD4AwB0.jpg',
    './../../../../../assets/images/carousel/O2S_Xfdzgho.jpg',
    './../../../../../assets/images/carousel/bXjqPckmLD8.jpg',
    './../../../../../assets/images/carousel/cB10K2ugb-4.jpg'
  ];
  constructor() {}

  ngOnInit() {}
}
