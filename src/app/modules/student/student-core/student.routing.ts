import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';

export const childRoutes: Routes = [
  {
    path: 'student-dashboard',
    component: StudentComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        loadChildren: './../student-dashboard/index/index.module#IndexModule'
      },

      {
        path: 'messege',
        loadChildren:
          './../student-dashboard/messege/messege.module#MessegeModule'
      },
      {
        path: 'password',
        loadChildren:
          './../student-dashboard/password/password.module#PasswordModule'
      },
      {
        path: 'result',
        loadChildren: './../student-dashboard/result/result.module#ResultModule'
      },
      {
        path: 'course-material',
        loadChildren:
          './../student-dashboard/course-material/course-material.module#CourseMaterialModule'
      },
      {
        path: 'post',
        loadChildren: './../student-dashboard/post/post.module#PostModule'
      },
      {
        path: 'student',
        loadChildren:
          './../student-dashboard/student/student.module#StudentModule'
      },
      {
        path: 'course',
        loadChildren: './../student-dashboard/course/course.module#CourseModule'
      },
      {
        path: 'profile',
        loadChildren:
          './../student-dashboard/profile/profile.module#ProfileModule'
      }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
