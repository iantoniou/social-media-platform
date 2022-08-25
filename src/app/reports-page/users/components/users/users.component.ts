import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IUsers } from '../../interfaces/users.interface';
import { CreateUserComponent } from '../create-user/create-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'address', 'company', 'actions'];
  @Input() dataSource!: MatTableDataSource<IUsers>;
  @Output() editUserOutput = new EventEmitter<IUsers>();
  @Output() createUserOutput = new EventEmitter<IUsers>();
  @Output() deleteUserOutput = new EventEmitter<number>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editRow(row: any) {
    let dialogRef = this.dialog.open(EditUserComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      this.editUserOutput.emit(result);
    })
  }

  deleteRow(id: number) {
    let index = this.dataSource.data.findIndex((item) => item.id === id);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
    this.deleteUserOutput.emit(id);
    console.log(id)
  }

  createUser() {
    let dialogRef = this.dialog.open(CreateUserComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
      this.createUserOutput.emit(result);
    })
  }

}
