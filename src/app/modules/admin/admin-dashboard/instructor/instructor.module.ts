import { SharedModule } from './../../admin-shared/shared.module';
import { InstructorUpdateComponent } from './update/update.component';
import { InstructorCreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { InstructorReadComponent } from './read/read.component';
import { InstructorRoutingModule } from './instructor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    InstructorRoutingModule,
    SharedModule
  ],
  declarations: [
    InstructorReadComponent,
    InstructorCreateComponent,
    InstructorUpdateComponent
  ]
})
export class InstructorModule {}
