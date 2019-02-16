import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './password.component';

const childRoutes: Routes = [
  {
    path: '',
    component: PasswordComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
