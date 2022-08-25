import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IComments } from '../../interfaces/comments.interface';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  form!: FormGroup;
  @Output() createCommentOutput = new EventEmitter<IComments>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      body: this.fb.control('')
    })
  }

  onSubmit() {
    this.createCommentOutput.emit(this.form.value);
    this.form.reset();
    console.log(this.form.value);
  }
}
