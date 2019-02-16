import { ResultComponent } from './result.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './result.routing';
import { SharedModule } from '../../student-shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [CommonModule, SharedModule, NgxEchartsModule, routing],
  declarations: [ResultComponent]
})
export class ResultModule {}
