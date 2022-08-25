import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPosts } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  form!: FormGroup;
  @Output() createPostOutput = new EventEmitter<IPosts>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control(''),
      body: this.fb.control('')
    })
  }

  onSubmit() {
    this.createPostOutput.emit(this.form.value);
    this.form.reset();
    console.log(this.form.value);
  }

}
