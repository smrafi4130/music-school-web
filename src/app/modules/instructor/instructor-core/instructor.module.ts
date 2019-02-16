import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './instructor.routing';

import { LayoutModule } from './../instructor-shared/layout.module';
import { SharedModule } from './../instructor-shared/shared.module';

/* components */
import { InstructorComponent } from './instructor.component';

@NgModule({
  imports: [CommonModule, LayoutModule, SharedModule, routing],
  declarations: [InstructorComponent]
})
export class InstructorModule {}
