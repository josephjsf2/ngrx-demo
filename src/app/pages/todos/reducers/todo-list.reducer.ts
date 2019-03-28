import { TodoItem } from '../models/todo-item.model';
import { TodoListActionType, TodoListAction } from '../actions/todo-list.action';

export class TodoState {
  todoList: TodoItem[];
  alreadyDoneList: TodoItem[];
}

const initState: TodoState = {
  todoList: [
    new TodoItem('Take out the trash'),
    new TodoItem('Buy bread'),
    new TodoItem('Teach penguins to fly')
  ],
  alreadyDoneList: [],
};


export function todoListReducer(state: TodoState = initState, action: TodoListAction) {
  switch (action.type) {
    case TodoListActionType.AddTodoItem:
      return {
        ...state,
        todoList: [...state.todoList, new TodoItem(action.payload)]
      };
    case TodoListActionType.CheckUncompleteItem:
      const checkedItems = state.todoList.splice(action.payload, 1)
        .map(item => updateCompleteStatus(item));
      return {
        ...state,
        todoList: [...state.todoList],
        alreadyDoneList: [...state.alreadyDoneList, ...checkedItems]
      };
    case TodoListActionType.CheckCompleteItem:

      const uncheckedItems = state.alreadyDoneList.splice(action.payload, 1)
        .map(item => updateCompleteStatus(item));
      return {
        ...state,
        todoList: [...state.todoList, ...uncheckedItems],
        alreadyDoneList: [...state.alreadyDoneList]
      };
    case TodoListActionType.CheckAllItems:

      return {
        ...state,
        todoList: [],
        alreadyDoneList: [
          ...state.alreadyDoneList.map(item => updateCompleteStatus(item)),
          ...state.todoList.map(item => updateCompleteStatus(item))]
      }
    default: return state;
  }
}

function updateCompleteStatus(todoItem: TodoItem) {
  todoItem.completed = !todoItem.completed;
  return todoItem;
}
