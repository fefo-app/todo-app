import {
  TodoActions,
  TodoAction,
  AddTodoPayload,
  ToggleTodoPayload,
} from "../actionTypes";
import { Todo } from "../../types";
import { BrowserStore } from '../../localStore'

export const initialState = {
  allIds: [] as string[],
  byIds: {} as Record<string, Todo>,
};

function reducer(state = initialState, action: TodoAction) {
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      const { id, content, completed } = action.payload as AddTodoPayload;
      if (content) {
        return {
          ...state,
          allIds: [...state.allIds, id],
          byIds: {
            ...state.byIds,
            [id]: {
              id,
              content,
              completed,
            },
          },
        };
      } else {
        return state
      }
    }
    case TodoActions.TOGGLE_TODO: {
      const { id } = action.payload as ToggleTodoPayload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}

export function generateTodoReducer(namespace: string) {
  return (state = initialState, action: TodoAction) => {
    const newState = reducer(state, action);
    BrowserStore.set(namespace, newState)
    return newState
  }
}
