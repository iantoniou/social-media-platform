import { Component, Input, OnInit } from '@angular/core';
import { IComments } from '../../interfaces/comments.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comment!: IComments;

  constructor() { }

  ngOnInit(): void {
  }

}
