import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPosts } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() post!: IPosts; 

  constructor() { }

  ngOnInit(): void {
  }
}
