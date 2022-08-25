import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/widgets/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsApiService } from './api/comments-api.service';
import { CommentsFacadeService } from './facade/comments-facade.service';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsContainerComponent } from './container/comments-container.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';



@NgModule({
  declarations: [
    CommentsComponent,
    CommentsContainerComponent,
    CreateCommentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentsComponent,
    CommentsContainerComponent
  ],
  providers: [
    CommentsApiService,
    CommentsFacadeService
  ]
})
export class CommentsModule { }
