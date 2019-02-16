import { StudentUpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentReadComponent } from './read/read.component';
import { StudentCreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all-student',
        component: StudentReadComponent
      },
      // {
      //   path: 'details/:id',
      //   component: InstructorReadComponent
      // },
      {
        path: 'create-student',
        component: StudentCreateComponent
      },
      {
        path: 'update/:id',
        component: StudentUpdateComponent
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
export class StudentRoutingModule {}
