import { IgxCalendarModule, IgxDialogModule } from 'igniteui-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { SharedModule } from '../../instructor-shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [CommonModule, SharedModule, NgxEchartsModule, routing, IgxCalendarModule, IgxDialogModule],
  declarations: [IndexComponent]
})
export class IndexModule {}
