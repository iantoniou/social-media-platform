import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4';
  apiUrlPostById: string = 'https://jsonplaceholder.typicode.com/posts'

  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<IPosts> {
    return this.http.get<IPosts>(this.apiUrlPostById + `/${id}`);
  }

  createPost(req: IPosts): Observable<IPosts> {
    return this.http.post<IPosts>(this.apiUrl, req);
  }
}
