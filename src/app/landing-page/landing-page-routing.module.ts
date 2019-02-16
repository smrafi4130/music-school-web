import { PostpageComponent } from './post-page/post-page.component';
import { AlreadyLoggedInGuard } from './../auth/core/guard/AlreadyLoggedIn.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '' /* /dashboard/ */,
    component: HomepageComponent
  },
  {
    path: 'post' /* /dashboard/ */,
    component: PostpageComponent
  },
  {
    path: 'auth',
    loadChildren: './../auth/core/auth.module#AuthModule',
    canActivate: [AlreadyLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule {}
