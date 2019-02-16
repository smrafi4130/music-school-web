import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './student.routing';

import { LayoutModule } from './../student-shared/layout.module';
import { SharedModule } from './../student-shared/shared.module';

/* components */
import { StudentComponent } from './student.component';

@NgModule({
  imports: [CommonModule, LayoutModule, SharedModule, routing],
  declarations: [StudentComponent]
})
export class StudentModule {}
