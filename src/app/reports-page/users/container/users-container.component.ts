import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersFacadeService } from '../facade/users-facade.service';
import { IUsers } from '../interfaces/users.interface';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  users: IUsers[] = [];
  dataSource!: MatTableDataSource<IUsers>;

  constructor(private usersFacadeService: UsersFacadeService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersFacadeService.getUsers().subscribe((users: IUsers[]) => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
    })
  }

  deleteUser(id: number) {
    this.usersFacadeService.deleteUser(id).subscribe();
  }

  editUser(user: IUsers) {
    this.usersFacadeService.editUser(user).subscribe(() => {
      let index = this.dataSource.data.findIndex((item) => item.id === user.id);
      this.dataSource.data[index] = user;
      this.dataSource._updateChangeSubscription();
    });
  }

  postUser(user: IUsers) {
    this.usersFacadeService.postUser(user).subscribe((user: IUsers) => {
      user.id = this.users.length + 1;
      this.users.push(user);
      this.dataSource._updateChangeSubscription();
    })
  }


}
