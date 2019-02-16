import { ResultComponent } from './result.component';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [
  {
    path: '',
    component: ResultComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
