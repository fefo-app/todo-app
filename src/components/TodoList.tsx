import React from 'react'
import styled from 'styled-components'
import { TodoItem } from './Todo'
import { Todo } from '../types'

export interface TodoListProps {
  todos: Todo[]
  toggleTodo: (id: string) => void
}

const StylesWrapper = styled.ul`
  margin: 1rem;
  padding: 0;
  text-align: left;
  list-style: none;
`

export const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
  <StylesWrapper>
    {todos && todos.length
      ? todos.map((todo) => {
          return (
            <TodoItem
              toggleTodo={toggleTodo}
              key={`todo-${todo.id}`}
              todo={todo}
            />
          )
        })
      : 'No todos, yay!'}
  </StylesWrapper>
)
