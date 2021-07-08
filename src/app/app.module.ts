import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogComponent } from './components/todo/dialog/dialog.component';
import { ListComponent } from './components/todo/list/list.component';
import { AddCardModalComponent } from './components/todo/add-card-modal/add-card-modal.component';
import { BoardComponent } from './components/board/board.component';
import { AddListComponent } from './components/board/add-list/add-list.component';
import { EditListNameModalComponent } from './components/todo/edit-list-name-modal/edit-list-name-modal.component';

import 'prismjs';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-css.min.js';
import 'prismjs/components/prism-git.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogComponent,
    ListComponent,
    AddCardModalComponent,
    BoardComponent,
    AddListComponent,
    EditListNameModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MarkdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
