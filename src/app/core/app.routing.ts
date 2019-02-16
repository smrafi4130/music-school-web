import { GroupGuard } from './../auth/core/guard/group.guard';
import { Routes, RouterModule } from '@angular/router';
import { AlreadyLoggedInGuard } from './../auth/core/guard/AlreadyLoggedIn.guard';

const appRoutes: Routes = [
  {
    path: 'admin-dashboard',
    loadChildren: './../modules/admin/admin-core/admin.module#AdminModule',
    data: { role: 'admin' },
    canActivate: [GroupGuard]
  },
  {
    path: 'instructor-dashboard',
    loadChildren:
      './../modules/instructor/instructor-core/instructor.module#InstructorModule',
    data: { role: 'instructor' },
    canActivate: [GroupGuard]
  },
  {
    path: 'student-dashboard',
    redirectTo: 'student-dashboard',
    data: { role: 'student' },
    canActivate: [GroupGuard]
  },

  {
    path: 'auth',
    loadChildren: './../auth/core/auth.module#AuthModule',
    canActivate: [AlreadyLoggedInGuard]
  },
  // {
  //   path: '',
  //   redirectTo: 'auth',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: './../landing-page/landing-page.module#LandingPageModule'
  },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
