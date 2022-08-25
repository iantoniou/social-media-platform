import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsApiService } from '../api/posts-api.service';
import { IPosts } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsFacadeService {

  constructor(private postsApiService: PostsApiService) { }

  getPosts(): Observable<IPosts[]> {
    return this.postsApiService.getPosts();
  }

  getPostById(id: number): Observable<IPosts> {
    return this.postsApiService.getPostById(id);
  }

  createPost(req: IPosts): Observable<IPosts> {
    return this.postsApiService.createPost(req);
  }
}
