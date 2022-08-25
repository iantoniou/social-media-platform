import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from 'src/widgets/material/material.module';
import { LoaderService } from './services/loader.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    SidenavComponent
  ],
  providers: [
    LoaderService
  ]
})
export class SharedModule { }
