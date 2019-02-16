import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile.routing';
import { SharedModule } from '../../../admin/admin-shared/shared.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule {}
