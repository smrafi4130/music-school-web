import { PostComponent } from './own-post/post.component';
import { PostUpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostReadComponent } from './read/read.component';
import { PostCreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all-post',
        component: PostReadComponent
      },
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
        path: 'manage-post',
        component: PostReadComponent
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
export class PostRoutingModule {}
