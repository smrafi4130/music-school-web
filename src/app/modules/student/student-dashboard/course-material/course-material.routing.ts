import { Routes, RouterModule } from '@angular/router';
import { CourseMaterialComponent } from './course-material.component';

const childRoutes: Routes = [
  {
    path: '',
    component: CourseMaterialComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
