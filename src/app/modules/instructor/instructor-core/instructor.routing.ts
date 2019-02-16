import { Routes, RouterModule } from '@angular/router';
import { InstructorComponent } from './instructor.component';

export const childRoutes: Routes = [
  {
    path: 'instructor-dashboard',
    component: InstructorComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        loadChildren: './../instructor-dashboard/index/index.module#IndexModule'
      },

      {
        path: 'messege',
        loadChildren:
          './../instructor-dashboard/messege/messege.module#MessegeModule'
      },
      {
        path: 'password',
        loadChildren:
          './../instructor-dashboard/password/password.module#PasswordModule'
      },
      {
        path: 'result',
        loadChildren:
          './../instructor-dashboard/result/result.module#ResultModule'
      },
      {
        path: 'course-material',
        loadChildren:
          './../instructor-dashboard/course-material/course-material.module#CourseMaterialModule'
      },
      {
        path: 'post',
        loadChildren: './../instructor-dashboard/post/post.module#PostModule'
      },
      {
        path: 'student',
        loadChildren:
          './../instructor-dashboard/student/student.module#StudentModule'
      },
      {
        path: 'course',
        loadChildren:
          './../instructor-dashboard/course/course.module#CourseModule'
      },
      {
        path: 'profile',
        loadChildren:
          './../instructor-dashboard/profile/profile.module#ProfileModule'
      }
    ]
  }
];

export const routing = RouterModule.forChild(childRoutes);
