import { CourseUpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseReadComponent } from './read/read.component';
import { CourseCreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all-course',
        component: CourseReadComponent
      },
      // {
      //   path: 'details/:id',
      //   component: InstructorReadComponent
      // },
      {
        path: 'create-course',
        component: CourseCreateComponent
      },
      {
        path: 'update/:id',
        component: CourseUpdateComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CourseRoutingModule {}
