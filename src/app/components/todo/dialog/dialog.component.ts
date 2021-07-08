import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarkdownService } from 'ngx-markdown'
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  enableEdit = false;
  model = {
    title: this.data.title,
    description: this.data.description,
  };

  constructor(
    public todoService: TodoService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) {}

  ngOnInit(): void {
  }

  deleteCard() {
    if (window.confirm('Are you sure you want to delete?')) {
      this.todoService.delete(this.data.id);
      this.dialogRef.close();
    }
  }

  edit() {
    this.enableEdit = true;
  }

  save() {
    if (!this.canSave())
      return;

    let todo = {
      ...this.data,
      ...this.model
    };

    this.todoService.upsert(todo);

    this.data = todo;
    this.enableEdit = false;
  }

  canSave() {
    return this.model.title !== '';
  }

  close() {
    this.dialogRef.close();
  }
}
