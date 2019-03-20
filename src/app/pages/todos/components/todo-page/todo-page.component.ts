import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  @ViewChild('newItem') newItem: ElementRef;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addItem() {
    if (!this.newItem.nativeElement.value) {
      return;
    }
    this.todoService.addItem(this.newItem.nativeElement.value);
    this.newItem.nativeElement.value = '';
  }

  completeAllItems() {
    this.todoService.checkAllItem();
  }

}
