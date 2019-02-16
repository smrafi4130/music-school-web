import { InstructorUpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorReadComponent } from './read/read.component';
import { InstructorCreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all-instructor',
        component: InstructorReadComponent
      },
      // {
      //   path: 'details/:id',
      //   component: InstructorReadComponent
      // },
      {
        path: 'create-instructor',
        component: InstructorCreateComponent
      },
      {
        path: 'update/:id',
        component: InstructorUpdateComponent
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
export class InstructorRoutingModule {}
