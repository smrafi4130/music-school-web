import { Howl, Howler } from 'howler';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SharedModule } from './../shared/shared.module';
import { TrendingPostComponent } from './post-page/components/trending-post/trending-post.component';
import { PostItemComponent } from './post-page/components/post-item/post-item.component';
import { OwlCarouselComponent } from './post-page/components/owl-carousel/owl-carousel.component';
import { MostPopularComponent } from './post-page/components/most-popular/most-popular.component';
import { LatestPostComponent } from './post-page/components/latest-post/latest-post.component';
import { PostpageComponent } from './post-page/post-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { UiModule } from '../shared/ui.module';
import { ModalModule } from 'ngx-modal';

import {
  SwiperModule,
  SWIPER_CONFIG,
  SwiperConfigInterface
} from 'ngx-swiper-wrapper';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'post', component: PostpageComponent }
];

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UiModule,
    SwiperModule,
    SharedModule,
    ModalModule,
    SlideshowModule,
  ],
  declarations: [
    HomepageComponent,
    PostpageComponent,
    LatestPostComponent,
    MostPopularComponent,
    OwlCarouselComponent,
    PostItemComponent,
    TrendingPostComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class LandingPageModule {}
