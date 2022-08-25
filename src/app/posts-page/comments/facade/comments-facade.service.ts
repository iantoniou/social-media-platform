import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsApiService } from '../api/comments-api.service';
import { IComments } from '../interfaces/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsFacadeService {

  constructor(private commentsApiService: CommentsApiService) { }

  getCommentsById(id: number): Observable<IComments[]> {
    return this.commentsApiService.getCommentsById(id);
  }

  postComment(comment: IComments): Observable<IComments> {
    return this.commentsApiService.postComment(comment);
  }
}
