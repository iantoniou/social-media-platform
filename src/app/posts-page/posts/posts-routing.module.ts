import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsContainerComponent } from './container/posts-container.component';

const routes: Routes = [
  {
    path: '',
    component: PostsContainerComponent
  },
  {
    path: ':id',
    component: SinglePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }