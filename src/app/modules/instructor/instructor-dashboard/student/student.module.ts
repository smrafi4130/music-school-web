import { SharedModule } from './../../instructor-shared/shared.module';
import { StudentUpdateComponent } from './update/update.component';
import { StudentCreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { StudentReadComponent } from './read/read.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    SharedModule
  ],
  declarations: [
    StudentCreateComponent,
    StudentReadComponent,
    StudentUpdateComponent
  ]
})
export class StudentModule {}
