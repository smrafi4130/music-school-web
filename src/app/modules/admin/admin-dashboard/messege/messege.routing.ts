import { MessegeComponent } from './messege.component';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
  {
    path: '',
    component: MessegeComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
