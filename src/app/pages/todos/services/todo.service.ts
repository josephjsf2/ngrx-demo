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
    this.todoList.push(new TodoItem(newVal));
  }

  deleteItem(index: number) {
    this.todoList.splice(index, 1);
  }

  checkUncompletedItem(index: number) {
    const checkedItems = this.todoList.splice(index, 1)
      .map(item => this.updateCompleteStatus(item));

    this.alreadyList.push(...checkedItems);
  }

  uncheckCompletedItem(index: number) {
    const checkedItems = this.alreadyList.splice(index, 1)
      .map(item => this.updateCompleteStatus(item));

    this.todoList.push(...checkedItems);
  }

  updateCompleteStatus(item: TodoItem): TodoItem {
    item.completed = !item.completed;
    return item;
  }

  checkAllItem() {
    const checkedItems = this.todoList.splice(0, this.todoList.length).map(item => this.updateCompleteStatus(item));
    this.alreadyList.push(...checkedItems);
  }
}
