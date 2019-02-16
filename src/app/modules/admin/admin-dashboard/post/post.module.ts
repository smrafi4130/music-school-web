import { SharedModule } from './../../admin-shared/shared.module';
import { PostRoutingModule } from './post-routing.module';
import { PostUpdateComponent } from './update/update.component';
import { PostCreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { PostReadComponent } from './read/read.component';
import { PostComponent } from './own-post/post.component';
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    PostRoutingModule,
    SharedModule,
    ImageUploadModule.forRoot(),
  ],
  declarations: [
    PostCreateComponent,
    PostReadComponent,
    PostUpdateComponent,
    PostComponent
  ]
})
export class PostModule {}
