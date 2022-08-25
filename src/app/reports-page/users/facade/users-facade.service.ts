import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersApiService } from '../api/users-api.service';
import { IUsers } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {

  constructor(private usersApiService: UsersApiService) { }

  getUsers(): Observable<IUsers[]> {
    return this.usersApiService.getUsers();
  }

  deleteUser(id: number): Observable<IUsers> {
    return this.usersApiService.deleteUser(id);
  }

  editUser(user: IUsers): Observable<IUsers> {
    return this.usersApiService.editUser(user);
  }

  postUser(user: IUsers): Observable<IUsers> {
    return this.usersApiService.postUser(user);
  }
}
