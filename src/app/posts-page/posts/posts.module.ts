import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { PostsContainerComponent } from './container/posts-container.component';
import { PostsFacadeService } from './facade/posts-facade.service';
import { PostsApiService } from './api/posts-api.service';
import { PostsRoutingModule } from './posts-routing.module';
import { MaterialModule } from 'src/widgets/material/material.module';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { CommentsModule } from '../comments/comment.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostsContainerComponent,
    CreatePostComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CommentsModule
  ],
  exports: [
    PostsComponent,
    PostsContainerComponent,
    CreatePostComponent,
    SinglePostComponent
  ],
  providers: [
    PostsApiService,
    PostsFacadeService
  ]
})
export class PostsModule { }
