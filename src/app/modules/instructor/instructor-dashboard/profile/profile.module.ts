import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile.routing';
import { SharedModule } from '../../../instructor/instructor-shared/shared.module';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
