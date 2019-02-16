import { FileHolder, UploadMetadata } from 'angular2-image-upload';
import { FileUploadService } from './../../../../../services/fileUpload.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../../../../services/post.service';
// import { InstructorService } from './../../../services/instructor.service';
// import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../../services/storage.service';
// import { UserService } from '../../../services';

@Component({
  selector: 'app-post-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [PostService, FileUploadService]
})
export class PostUpdateComponent implements OnInit {
  defaultContent = '';
  content: any;
  user_id: any;
  validateForm: FormGroup;
  id: any;
  data: any;
  image: any;

  constructor(
    private router: Router,
    private postService: PostService,
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {
    this.validateForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      attachment: ['', [Validators.required]]
    });
  }

  async ngOnInit() {
    this.user_id = this.storageService.getCurrentUserId();
    await this.route.params.subscribe(params => {
      this.id = +params['id'];
      // console.log('hi', this.id);
    });

    await this.postService.getById(this.id).subscribe(result => {
      this.data = result;
      // console.log(this.data);
      this.validateForm.patchValue(this.data.data);
    });
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

    formData.append('title', value.post_title);
    formData.append('description', value.post_description);
    formData.append('user_id', this.user_id);
    this.fileUploadService.uploadImage(formData).subscribe(result => {
      this.postService
        .update(this.id, {
          title: value.title,
          description: value.description,
          attachment: result.url,
          user_id: this.user_id
        })
        .subscribe((result: any) => {
          this.router.navigate(['/instructor-dashboard/post/my-post']);

          // console.log(result);
        });
    });
  };
}
