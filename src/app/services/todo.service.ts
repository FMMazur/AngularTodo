import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { DB_NAME } from '../utils';

const DB_TODOS = `${DB_NAME}-todos`;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  pickFromStorage = true;
  todos: Todo[] = [];

  constructor() {
    this.todos = this.getAll();
  }

  getAll(): Todo[] {
    if (this.todos.length <= 0 && this.pickFromStorage) {
      this.todos = JSON.parse(localStorage.getItem(DB_TODOS) || '[]');
      this.pickFromStorage = false;
    }

    return this.todos;
  }

  getById(id: number): Todo | undefined {
    return this.todos.filter((todo) => todo.id === id).pop();
  }

  getByListId(listId: number): Todo[] {
    return this.todos.filter((todo) => todo.listId === listId);
  }

  upsert(todo: Todo): Todo {
    if (todo.id === -1 || this.todos.length === 0) {
      todo.id = this.todos.length;
      this.todos.push(todo);
      console.log(this.todos);
    } else {
      let idx = this.todos.findIndex((todoSaved) => todo.id === todoSaved.id);
      if (idx !== -1) {
        this.todos[idx] = todo;
      } else {
        this.todos.push(todo);
      }
    }

    this.save();

    return todo;
  }

  delete(id: number): Todo | undefined {
    let todo: Todo | undefined;

    let idx = this.todos.findIndex((todo) => todo.id === id);

    if (idx !== -1){
      todo = this.todos.splice(idx, 1).pop();
      this.save();
    }
      

    return todo;
  }

  deleteAllByListId(listId: number): Todo[] {
    let toRemove = this.todos.filter((todo) => todo.listId === listId);
    this.todos = this.todos.filter((todo) => todo.listId !== listId);
    this.save();

    return toRemove;
  }

  save() {
    localStorage.setItem(DB_TODOS, JSON.stringify(this.todos));
  }
}
