import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<IUsers> {
    return this.http.delete<IUsers>(this.apiUrl + `/${id}`);
  }

  editUser(user: IUsers): Observable<IUsers> {
    return this.http.put<IUsers>(this.apiUrl + `/${user.id}`, user);
  }

  postUser(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(this.apiUrl, user);
  }
}
