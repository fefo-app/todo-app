import React from 'react'
import 'decoupled-redux/dist/index.css'
import { TodoApp, TodoActions } from 'decoupled-redux'

const App = () => {
  return (
    <>
      <TodoApp title="Default list" />

      <TodoApp
        title="Inverted action list"
        addTodo={(content: string) => {
          const id = Date.now().toString()
          return {
            type: TodoActions.ADD_TODO,
            payload: {
              id,
              content: `[${id}]: ${content.toUpperCase()}`,
              completed: true
            }
          }
        }}
      />
    </>
  )
}

export default App
