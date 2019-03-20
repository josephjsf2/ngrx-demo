import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() index: number;
  @Input() todoItem: TodoItem;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onItemChecked() {
    !this.todoItem.completed ?
      this.todoService.checkItem(this.index) :
      this.todoService.uncheckItem(this.index);
  }

}
