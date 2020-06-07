export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}

export interface TodoAction {
  type: TodoActions;
  payload: TodoActionPayload;
}
export type TodoActionPayload = AddTodoPayload | ToggleTodoPayload;
export interface AddTodoPayload {
  id: string;
  content: string;
  completed: boolean;
}

export interface ToggleTodoPayload {
  id: string;
}

export type AddTodoAction = (
  content: string
) => {
  type: TodoActions.ADD_TODO;
  payload: AddTodoPayload;
};

export type ToggleTodoAction = (
  content: string
) => {
  type: TodoActions.TOGGLE_TODO;
  payload: ToggleTodoPayload;
};
