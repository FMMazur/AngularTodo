import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../../../model/todo';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.scss']
})
export class AddCardModalComponent {

  formData: any;

  constructor(
    public dialogRef: MatDialogRef<AddCardModalComponent>,
    @Inject (MAT_DIALOG_DATA) public listId: number,
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      title: new FormControl(
        '',
        Validators.compose([Validators.required, , Validators.min(3)])
      ),
      description: new FormControl(
        ''
      ),
    });
  }

  onSubmit() {
    const todo: Todo = {
      title: this.formData.value.title,
      description: this.formData.value.description,
      listId: this.listId,
      id: -1,
      userId: 1,
      done: false
    }

    try {
      this.todoService.upsert(todo);
    }
    catch(err) {
      console.error(err);
    }

    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
