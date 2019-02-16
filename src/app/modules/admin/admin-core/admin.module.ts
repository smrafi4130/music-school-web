import { PopoverModule } from 'ngx-popover';
import { NotificationService } from './../../../services/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './admin.routing';

import { LayoutModule } from './../admin-shared/layout.module';
import { SharedModule } from './../admin-shared/shared.module';

/* components */
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    routing,
    PopoverModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {}
