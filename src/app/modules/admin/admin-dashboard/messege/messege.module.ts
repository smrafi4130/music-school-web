import { SelectModule } from 'ng2-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessegeComponent } from './messege.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './messege.routing';
import { SharedModule } from '../../admin-shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing,
    FormsModule,
    SelectModule,
    ReactiveFormsModule
  ],
  declarations: [MessegeComponent]
})
export class MessegeModule {}
