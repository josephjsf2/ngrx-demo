import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: TodoItem[] = [];
  alreadyList: TodoItem[] = [];

  constructor() {
    this.todoList = [
      new TodoItem('Take out the trash'),
      new TodoItem('Buy bread'),
      new TodoItem('Teach penguins to fly')
    ];
  }

  addItem(newVal: string) {
  }

  deleteItem(index: number) {
  }

  checkItem(index: number) {

  }

  uncheckItem(index: number) {

  }


  checkAllItem() {

  }
}
