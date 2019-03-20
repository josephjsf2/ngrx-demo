import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './pages/todos/components/todo-list/todo-list.component';
import { TodoPageComponent } from './pages/todos/components/todo-page/todo-page.component';

const routes: Routes = [
  {
    path: 'list',
    component: TodoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
