import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsFacadeService } from '../../facade/posts-facade.service';
import { IPosts } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  posts$!: Observable<IPosts>;

  constructor(private postsFacadeService: PostsFacadeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.posts$ = this.postsFacadeService.getPostById(postId);
  }

}
