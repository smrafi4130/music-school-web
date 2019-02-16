import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './password.routing';
import { SharedModule } from '../../student-shared/shared.module';
import { PasswordComponent } from './password.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PasswordComponent]
})
export class PasswordModule {}
