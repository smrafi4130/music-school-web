import { PostComponent } from './own-post/post.component';
import { PostUpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'my-post',
        component: PostComponent
      },
      {
        path: 'update/:id',
        component: PostUpdateComponent
      },
      {
        path: 'create-post',
        component: PostCreateComponent
      },
      {
        path: '**',
        redirectTo: 'my-post',
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
export class PostRoutingModule {}
