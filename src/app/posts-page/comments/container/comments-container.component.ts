import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsFacadeService } from '../facade/comments-facade.service';
import { IComments } from '../interfaces/comments.interface';

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.scss']
})
export class CommentsContainerComponent implements OnInit {
  comments: IComments[] = [];

  constructor(private commentsFacadeService: CommentsFacadeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCommentsById(postId);
  }

  getCommentsById(id: number) {
    this.commentsFacadeService.getCommentsById(id).subscribe((comments: IComments[]) => {
      this.comments = comments
    })
  }

  postComment(comment: IComments) {
    this.commentsFacadeService.postComment(comment).subscribe((comment: IComments) => {
      this.comments.push(comment);
    })
  }

}
