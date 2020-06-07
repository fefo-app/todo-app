import { Store, Todo, VisibilityFilters } from "../../types";

export const getTodoList = (store: Store): string[] =>
  store ? store.allIds : [];

export const getTodoById = (store: Store, id: string): Todo =>
  store ? { ...store.byIds[id], id } : ({} as Todo);

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store: Store): Todo[] =>
  getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (
  store: Store,
  visibilityFilter: VisibilityFilters
) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VisibilityFilters.Completed:
      return allTodos.filter((todo) => todo.completed);
    case VisibilityFilters.Incomplete:
      return allTodos.filter((todo) => !todo.completed);
    case VisibilityFilters.All:
    default:
      return allTodos;
  }
};
