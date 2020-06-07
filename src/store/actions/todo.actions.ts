import { AddTodoAction, TodoActions, ToggleTodoAction } from "..";

let nextTodoId = 0;

export const addTodo: AddTodoAction = (content: string) => {
  console.debug("addTodo:", content);
  return {
    type: TodoActions.ADD_TODO,
    payload: {
      id: (++nextTodoId).toString(),
      content,
      completed: false,
    },
  };
};

export const toggleTodo: ToggleTodoAction = (id: string) => ({
  type: TodoActions.TOGGLE_TODO,
  payload: { id },
});
