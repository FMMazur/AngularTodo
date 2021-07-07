import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { List } from 'src/app/model/list';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent implements OnInit {
  formData = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.min(3)]),
  });

  constructor(
    private dialogRef: MatDialogRef<AddListComponent>,
    private listsService: ListsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { name } = this.formData.value;
    const list: List = {
      id: -1,
      name,
    };

    try {
      this.listsService.upsert(list);
    } catch (err) {
      console.error(err);
    }

    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
