import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todos/components/todo-list/todo-list.component';
import { TodoItemComponent } from './pages/todos/components/todo-item/todo-item.component';
import { TodoPageComponent } from './pages/todos/components/todo-page/todo-page.component';
import { AlreadyDoneComponent } from './pages/todos/components/already-done/already-done.component';
import { StoreModule } from '@ngrx/store';
import { todoListReducer } from './pages/todos/reducers/todo-list.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoPageComponent,
    AlreadyDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ todoState: todoListReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
