import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comment.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    PostsModule,
    CommentsModule
  ],
  exports: [
    
  ],
  providers: [
    
  ]
})
export class PostsPageModule { }
