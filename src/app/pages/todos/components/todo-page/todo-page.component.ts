import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoState } from '../../reducers/todo-list.reducer';
import { Store } from '@ngrx/store';

import * as TodoListAction from '../../actions/todo-list.action';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  @ViewChild('newItem') newItem: ElementRef;

  constructor(private todoService: TodoService, private store: Store<TodoState>) { }

  ngOnInit() {
  }

  addItem() {
    if (!this.newItem.nativeElement.value) {
      return;
    }
    this.store.dispatch(new TodoListAction.AddTodoItemAction(this.newItem.nativeElement.value));
    this.newItem.nativeElement.value = '';
  }

  completeAllItems() {
    this.store.dispatch(new TodoListAction.CheckAllItemsAction());
  }

}
