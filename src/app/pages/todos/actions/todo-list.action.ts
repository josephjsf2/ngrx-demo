import { Action } from '@ngrx/store';

export enum TodoListActionType {
  AddTodoItem = 'ADD_TODO_ITEM',
  CheckUncompleteItem = 'CHECK_UNCOMPLETE_ITEM',
  CheckCompleteItem = 'CHECK_COMPLETE_ITEM',
  CheckAllItems = 'CHECK_ALL_ITEMS'
}

export class AddTodoItemAction implements Action {
  readonly type = TodoListActionType.AddTodoItem;
  constructor(public payload: string) { }
}

export class CheckUncompleteItemAction implements Action {
  readonly type = TodoListActionType.CheckUncompleteItem;
  constructor(public payload: number) { }
}

export class CheckCompleteItemAction implements Action {
  readonly type = TodoListActionType.CheckCompleteItem;
  constructor(public payload: number) { }
}

export class CheckAllItemsAction implements Action {
  readonly type = TodoListActionType.CheckAllItems;
}

export type TodoListAction = AddTodoItemAction
  | CheckUncompleteItemAction
  | CheckCompleteItemAction
  | CheckAllItemsAction;
