import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-already-done',
  templateUrl: './already-done.component.html',
  styleUrls: ['./already-done.component.css']
})
export class AlreadyDoneComponent implements OnInit {

  alreadyDoneList: TodoItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.alreadyDoneList = this.todoService.alreadyList;
  }

}
