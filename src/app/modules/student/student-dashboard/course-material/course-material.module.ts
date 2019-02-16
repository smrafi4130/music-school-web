import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './course-material.routing';
import { SharedModule } from '../../student-shared/shared.module';
import { CourseMaterialComponent } from './course-material.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    SelectModule,
    FormsModule
    // FormModule
  ],
  declarations: [CourseMaterialComponent]
})
export class CourseMaterialModule {}
