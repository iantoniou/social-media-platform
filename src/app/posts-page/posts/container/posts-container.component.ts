import { Component, OnInit } from '@angular/core';
import { PostsFacadeService } from '../facade/posts-facade.service';
import { IPosts } from '../interfaces/posts.interface';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {
  posts: IPosts[] = [];

  constructor(private postsFacadeService: PostsFacadeService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsFacadeService.getPosts().subscribe((posts: IPosts[]) => {
      this.posts = posts
    })
  }

  createPost(req: IPosts) {
    this.postsFacadeService.createPost(req).subscribe((post: IPosts) => {
      this.posts.push(post);
    })
  }

}
