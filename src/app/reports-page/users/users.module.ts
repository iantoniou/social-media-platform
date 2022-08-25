import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UsersContainerComponent } from './container/users-container.component';
import { UsersFacadeService } from './facade/users-facade.service';
import { UsersApiService } from './api/users-api.service';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/widgets/material/material.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/create-user/create-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersContainerComponent,
    EditUserComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersComponent,
    UsersContainerComponent,
    EditUserComponent,
    CreateUserComponent,
  ],
  providers: [
    UsersApiService,
    UsersFacadeService
  ]
})
export class UsersModule { }
