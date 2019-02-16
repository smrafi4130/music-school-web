import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

export const childRoutes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        loadChildren: './../admin-dashboard/index/index.module#IndexModule'
      },
      {
        path: 'instructor',
        loadChildren:
          './../admin-dashboard/instructor/instructor.module#InstructorModule'
      },
      {
        path: 'messege',
        loadChildren:
          './../admin-dashboard/messege/messege.module#MessegeModule'
      },
      {
        path: 'result',
        loadChildren: './../admin-dashboard/result/result.module#ResultModule'
      },
      {
        path: 'password',
        loadChildren:
          './../admin-dashboard/password/password.module#PasswordModule'
      },
      {
        path: 'course-material',
        loadChildren:
          './../admin-dashboard/course-material/course-material.module#CourseMaterialModule'
      },
      {
        path: 'post',
        loadChildren: './../admin-dashboard/post/post.module#PostModule'
      },
      {
        path: 'student',
        loadChildren:
          './../admin-dashboard/student/student.module#StudentModule'
      },
      {
        path: 'course',
        loadChildren: './../admin-dashboard/course/course.module#CourseModule'
      },
      {
        path: 'profile',
        loadChildren:
          './../admin-dashboard/profile/profile.module#ProfileModule'
      }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
