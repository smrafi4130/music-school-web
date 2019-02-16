import { ImageUploadModule } from 'angular2-image-upload';
import { SharedModule } from './../../instructor-shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostUpdateComponent } from './update/update.component';
import { PostCreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { PostComponent } from './own-post/post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    PostRoutingModule,
    SharedModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [PostCreateComponent, PostUpdateComponent, PostComponent]
})
export class PostModule {}
