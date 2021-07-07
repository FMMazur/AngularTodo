import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { MatDialog  } from '@angular/material/dialog';
import { DialogComponent } from './components/todo/dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';

  mockTodoList = [
    {
      id: 0,
      listId: 1,
      userId: 1,
      title: 'test',
      description: 'test',
    },
    {
      id: 1,
      listId: 2,
      userId: 1,
      title: 'test 2 esse titulo é grande de proposito por isso devemos ter em mente que tá dando certo ou não, e pelo visto não está dando certo pelo que vimos',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 2,
      listId: 3,
      userId: 1,
      title: 'test 3',
      description: 'test 3',
    },
    {
      id: 3,
      listId: 4,
      userId: 1,
      title: 'test 4',
      description: 'test 4',
    },
    {
      id: 4,
      listId: 5,
      userId: 1,
      title: 'test 5',
      description: 'test 5',
    },
    {
      id: 5,
      listId: 6,
      userId: 1,
      title: 'test 6',
      description: 'test 6',
    },
    {
      id: 6,
      listId: 7,
      userId: 1,
      title: 'test 7',
      description: 'test 7',
    },
  ];

  constructor(todoService: TodoService) {
    // for (const todo of this.mockTodoList) {
    //   todoService.upsert(todo);
    // }
  }

  ngOnInit(): void {}

  
}
