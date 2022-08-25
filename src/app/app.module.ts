import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { MaterialModule } from 'src/widgets/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsPageModule } from './posts-page/posts-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportsPageModule } from './reports-page/reports-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    PostsPageModule,
    ReactiveFormsModule,
    ReportsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
