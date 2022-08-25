import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUsers } from '../../interfaces/users.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              @Optional() private dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.data.id],
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
    console.log('edit form: ', this.form.value);
  }

}
