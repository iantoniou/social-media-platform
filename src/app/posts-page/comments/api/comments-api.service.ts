import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComments } from '../interfaces/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsApiService {

  apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getCommentsById(id: number): Observable<IComments[]> {
    return this.http.get<IComments[]>(this.apiUrl + `?postId=${id}`);
  }

  postComment(comment: IComments): Observable<IComments> {
    return this.http.post<IComments>(this.apiUrl, comment);
  }
}
