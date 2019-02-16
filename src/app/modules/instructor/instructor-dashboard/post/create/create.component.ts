import { FileUploadService } from './../../../../../services/fileUpload.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StorageService } from './../../../../../services/storage.service';
import { PostService } from './../../../../../services/post.service';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UploadMetadata, FileHolder } from 'angular2-image-upload';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-post-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [PostService, StorageService, FileUploadService]
})
export class PostCreateComponent implements OnInit {
  defaultContent = '';
  content: any;
  user_id: any;
  validateForm: FormGroup;
  image: any;
  data: any;
  constructor(
    private router: Router,
    private postService: PostService,
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private storageService: StorageService
  ) {
    this.validateForm = this.fb.group({
      post_title: ['', [Validators.required]],
      post_description: ['', [Validators.required]],
      attachment: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.user_id = this.storageService.getCurrentUserId();
  }

  onRemoved = (file: FileHolder) => {
    this.image = undefined;
    // this.ImageFileOkc(false);
  };

  onBeforeUpload = (metadata: UploadMetadata) => {
    this.image = metadata.file;
    console.log(metadata);
    return metadata;
  };

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    const formData: FormData = new FormData();
    formData.append('image', this.image, this.image.name);

    // console.log(this.image);

    this.fileUploadService.uploadImage(formData).subscribe(result => {
      console.log(result);

      this.postService
        .create({
          title: value.post_title,
          description: value.post_description,
          attachment: result.url,
          user_id: this.user_id
        })
        .subscribe((result: any) => {
          this.router.navigate(['/instructor-dashboard/post/my-post']);

          console.log(result);
        });
    });
  };
}
