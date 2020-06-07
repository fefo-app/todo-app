export interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

export interface Store {
  allIds: string[];
  byIds: Record<string, Todo>;
}

export enum VisibilityFilters {
  Completed = "completed",
  Incomplete = "incomplete",
  All = "all",
}
