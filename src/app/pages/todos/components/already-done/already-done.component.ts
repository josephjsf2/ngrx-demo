import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item.model';
import { TodoService } from '../../services/todo.service';
import { TodoState } from '../../reducers/todo-list.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-already-done',
  templateUrl: './already-done.component.html',
  styleUrls: ['./already-done.component.css']
})
export class AlreadyDoneComponent implements OnInit {

  alreadyDoneList: TodoItem[] = [];

  constructor(private store: Store<TodoState>) { }

  ngOnInit() {
    this.store.select('todoState').subscribe((state: TodoState) => this.alreadyDoneList = state.alreadyDoneList);
  }

}
