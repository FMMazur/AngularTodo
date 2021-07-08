import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from 'src/app/model/list';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-edit-list-name-modal',
  templateUrl: './edit-list-name-modal.component.html',
  styleUrls: ['./edit-list-name-modal.component.scss']
})
export class EditListNameModalComponent implements OnInit {
  formData = this.fb.group({
    name: this.fb.control(this.list.name, [Validators.required, Validators.min(3)]),
  });

  constructor(
    private dialogRef: MatDialogRef<EditListNameModalComponent>,
    private listsService: ListsService,
    private fb: FormBuilder,
    @Inject (MAT_DIALOG_DATA) public list: List,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { name } = this.formData.value;
    const list: List = {
      ...this.list,
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

