import React from 'react'
import cx from 'classnames'
import { Todo } from '../types'
import styled from 'styled-components'

export interface TodoProps {
  todo: Todo
  toggleTodo: (id: string) => void
}

const StylesWrapper = styled.li`
  font-family: monospace;
  cursor: pointer;
  line-height: 1.5;

  .todo-item__text--completed {
    text-decoration: line-through;
    color: lightgray;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: teal;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
export const TodoItem = ({ todo, toggleTodo }: TodoProps) => (
  <StylesWrapper >
    <label className='container'>
      <span
        className={cx(
          'todo-item__text',
          todo && todo.completed && 'todo-item__text--completed'
        )}
      >
      {todo.content}
    </span>
      <input onChange={() => toggleTodo(todo.id)} type='checkbox' checked={todo && todo.completed}/>
      <span className='checkmark'/>
    </label>


  </StylesWrapper>
)

// export default Todo;
export default TodoItem
