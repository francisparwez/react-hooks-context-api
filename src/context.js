import React, { createContext, useContext, useState } from 'react'

export const TodosContext = createContext()

const TodosContextProvider = (props) => {
  const [state, setState] = useState(['Wash The Dishes'])

  return (
    <TodosContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}

export const useGetState = () => {
  const { state } = useContext(TodosContext)
  return state
}

export const useAddTodo = () => {
  const { setState } = useContext(TodosContext)
  return (todoName) => {
    setState((prev) => [...prev, todoName])
  }
}

export default TodosContextProvider
