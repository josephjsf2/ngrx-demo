import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';
import { TodoService } from '../../services/todo.service';
import { Store } from '@ngrx/store';
import { TodoState } from '../../reducers/todo-list.reducer';
import * as TodoListActions from '../../actions/todo-list.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() index: number;
  @Input() todoItem: TodoItem;

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
  }

  onItemChecked() {
    !this.todoItem.completed ?
      this.store.dispatch(new TodoListActions.CheckUncompleteItemAction(this.index)) :
      this.store.dispatch(new TodoListActions.CheckCompleteItemAction(this.index));
  }

}
