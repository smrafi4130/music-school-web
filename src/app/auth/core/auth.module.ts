import { StorageService } from './../../services/storage.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';

import { SignupComponent } from '../pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../../modules/admin/admin-dashboard/ui.module';

// return false;
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //   { path: 'student', component: StudentReadComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [StorageService],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule {}
