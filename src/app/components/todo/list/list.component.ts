import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ListsService } from 'src/app/services/lists.service';

import { AddCardModalComponent } from '../add-card-modal/add-card-modal.component';
import { DialogComponent } from '../dialog/dialog.component';
import { EditListNameModalComponent } from '../edit-list-name-modal/edit-list-name-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild('list') listRef!: ElementRef<HTMLDivElement>;

  @Input('name') name: string = '';
  @Input('listId') id: number = 0;
  todos: Todo[] = [];

  constructor(
    public todoService: TodoService,
    public listsService: ListsService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getByListId(this.id);
  }

  openAddCardModal() {
    const dialogRef = this.matDialog.open(AddCardModalComponent, {
      width: '400px',
      data: this.id,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.todos = this.todoService.getByListId(this.id);
    });
  }

  openInfoDialog(todo: Todo): void {
    const dialogRef = this.matDialog.open(DialogComponent, {
      height: '400px',
      width: '650px',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.todos = this.todoService.getByListId(this.id);
    });
  }

  openEditListNameModal() {
    this.matDialog.open(EditListNameModalComponent, {
      width: '300px',
      data: {id: this.id, name: this.name}
    });
  }

  deleteList() {
    if (window.confirm('Are you sure you want to delete?')) {
      this.listsService.delete(this.id);
    }
  }

  toggleCardStatus(todo: Todo) {
    this.todoService.upsert({...todo, done: !todo.done});
    this.todos = this.todoService.getByListId(this.id);
  }

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      event.container.data[event.currentIndex].listId = parseInt(
        event.container.id.replace(/\D/g, '')
      );

      this.todoService.upsert(event.container.data[event.currentIndex]);
    }
  }
}
