import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { List } from 'src/app/model/list';
import { ListsService } from 'src/app/services/lists.service';
import { AddListComponent } from './add-list/add-list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  // TODO: teste da lista
  lists: List[] = [
    {
      id: 1,
      name: 'to do',
    },
    {
      id: 2,
      name: 'doing',
    },
    {
      id: 3,
      name: 'done',
    },
  ];

  constructor(
    private listsService: ListsService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.lists = this.listsService.getAll();
  }

  addList() {
    const dialogRef = this.matDialog.open(AddListComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.lists = this.listsService.getAll();
      }
    });
  }
}
