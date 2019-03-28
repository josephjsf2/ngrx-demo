import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';
import { TodoState } from '../../reducers/todo-list.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoItem[] = [];

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
    this.store.select('todoState').subscribe((state: TodoState) => this.todoList = state.todoList);
  }

}
