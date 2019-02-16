import { ResultUpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultReadComponent } from './read/read.component';
import { ResultCreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'result-read/:id',
        component: ResultReadComponent
      },
      // {
      //   path: 'details/:id',
      //   component: InstructorReadComponent
      // },
      {
        path: 'result-create',
        component: ResultCreateComponent
      },
      {
        path: 'update/:id',
        component: ResultUpdateComponent
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
export class ResultRoutingModule {}
