import { Injectable } from '@angular/core';
import { List } from '../model/list';

import { DB_NAME } from '../utils';
import { TodoService } from './todo.service';

const DB_LISTS = `${DB_NAME}-lists`;

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  pickFromStorage = true;
  lists: List[] = [];

  constructor(private todoService: TodoService) {}

  getAll(): List[] {
    if (this.lists.length <= 0 && this.pickFromStorage) {
      let lists = localStorage.getItem(DB_LISTS) || '[]';
      this.lists = JSON.parse(lists);
      this.pickFromStorage = false;
    }

    return this.lists;
  }

  getById(id: number): List | undefined {
    return this.lists.filter((list) => list.id === id).pop();
  }

  upsert(list: List): List {
    if (list.id === -1 || this.lists.length === 0) {
      list.id = this.lists.length;
      this.lists.push(list);
    } else {
      let idx = this.lists.findIndex((listSaved) => list.id === listSaved.id);
      if (idx !== -1) {
        this.lists[idx] = list;
      } else {
        this.lists.push(list);
      }
    }

    this.save();

    return list;
  }

  delete(id: number): List | undefined {
    let list: List | undefined;

    let idx = this.lists.findIndex((list) => list.id === id);

    if (idx !== -1) {
      list = this.lists.splice(idx, 1).pop();
      this.todoService.deleteAllByListId(list!.id);
    }

    this.save();

    return list;
  }

  save() {
    localStorage.setItem(DB_LISTS, JSON.stringify(this.lists));
  }
}
