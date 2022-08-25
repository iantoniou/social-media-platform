import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              @Optional() private dialogRef: MatDialogRef<CreateUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.data.name],
      username: [this.data.username],
      email: [this.data.email],
      address: this.fb.group({
        street: [this.data.address?.street]
      }),
      company: this.fb.group({
        name: [this.data.company?.name]
      })
    })
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
    console.log('create form: ', this.form.value);
  }

}
