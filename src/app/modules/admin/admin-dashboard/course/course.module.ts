import { FormModule } from './../../../../shared/pages/form/form.module';
import { SharedModule } from './../../admin-shared/shared.module';
import { CourseUpdateComponent } from './update/update.component';
import { CourseCreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { CourseReadComponent } from './read/read.component';
import { CourseRoutingModule } from './course-routing.module';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    CourseRoutingModule,
    SharedModule,
    FormModule,
    SelectModule
  ],
  declarations: [
    CourseCreateComponent,
    CourseReadComponent,
    CourseUpdateComponent,
    // Ng2SelectComponent
  ]
})
export class CourseModule {}
