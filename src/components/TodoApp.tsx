import React, { useState, useReducer, Reducer } from 'react'
import { AddTodo, TodoList, VisibilityFilters } from './index'
import {
  addTodo as addTodoAction,
  toggleTodo as toggleTodoAction,
  getTodosByVisibilityFilter,
  AddTodoAction,
  ToggleTodoAction,
  generateTodoReducer,
  initialState,
  TodoAction
} from '../store'
import { VisibilityFilters as Filters, Store } from '../types'
import styled from 'styled-components'
import { BrowserStore } from '../localStore'

export interface ToggleAppProps {
  addTodo?: AddTodoAction
  toggleTodo?: ToggleTodoAction
  title: string
}

const StylesWrapper = styled.section`
  background-color: rgba(27, 27, 27, 1);
  color: ghostwhite;
  font-size: 100%;
  height: calc(100% - 72px);
  padding: 36px;
  width: calc(100% - 72px);
`

export function TodoApp({
  addTodo = addTodoAction,
  toggleTodo = toggleTodoAction,
  title
}: ToggleAppProps) {
  const storedStore = BrowserStore.get(title)
  const [filter, setFilter] = useState(Filters.All)
  const [state, distpatch] = useReducer<Reducer<Store, TodoAction>>(
    generateTodoReducer(title),
    storedStore || initialState
  )
  const todos = getTodosByVisibilityFilter(state, filter)

  const handleAddTodo = (newTodo: string) => distpatch(addTodo(newTodo))
  const handleToggleTodo = (id: string) => distpatch(toggleTodo(id))

  return (
    <StylesWrapper>
      <h1>{title}</h1>
      <AddTodo addTodo={handleAddTodo} />
      <VisibilityFilters filter={filter} setFilter={setFilter} />
      <TodoList toggleTodo={handleToggleTodo} todos={todos} />
    </StylesWrapper>
  )
}

export default TodoApp
