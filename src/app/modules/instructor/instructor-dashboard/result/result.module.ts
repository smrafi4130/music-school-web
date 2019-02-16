import { FormModule } from '../../../../shared/pages/form/form.module';
import { SharedModule } from '../../instructor-shared/shared.module';
import { ResultUpdateComponent } from './update/update.component';
import { ResultCreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { ResultReadComponent } from './read/read.component';
import { ResultRoutingModule } from './result-routing.module';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    ResultRoutingModule,
    SharedModule,
    FormModule,
    SelectModule
  ],
  declarations: [
    ResultCreateComponent,
    ResultReadComponent,
    ResultUpdateComponent
  ]
})
export class ResultModule {}
