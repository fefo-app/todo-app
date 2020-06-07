import React, { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import { Add } from '@styled-icons/material-outlined/Add'

const StylesWrapper = styled.form`
  input,
  button {
    background-color: #4c4c4c;
    border: none;
    color: white;
    font-weight: bold;
    height: 24px;
    padding: 0 8px;
  }

  input {
    border-radius: 20px 0 0 20px;
    font-size: 80%;
    line-height: 80%;
  }

  button {
    background: teal;
    color: white;
    border-radius: 0 20px 20px 0;
  }
`

export interface AddTodoProps {
  addTodo?: (newTodo: string) => void
  placeholder?: string
}

export function AddTodo({ addTodo, placeholder }: AddTodoProps) {
  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      const form = e.target as HTMLFormElement
      addTodo && addTodo(form.todo.value)
      form.reset()
    },
    [addTodo]
  )

  return (
    <StylesWrapper onSubmit={onSubmit}>
      <input name='todo' placeholder={placeholder} />
      <button className='add-todo' type='submit'>
        <Add size={24} />
      </button>
    </StylesWrapper>
  )
}
