import React from 'react'
import { useGetState, useAddTodo } from './context'

function App() {
  return (
    <div className='App'>
      <SecondComponent />
    </div>
  )
}

const SecondComponent = () => {
  const state = useGetState()
  const addTodo = useAddTodo()

  const handleAddTodo = () => {
    addTodo('New Todo')
  }
  return (
    <div>
      <button onClick={handleAddTodo}>Add A Todo</button>
      {state.map((e1) => (
        <p key={e1}>{e1}</p>
      ))}
    </div>
  )
}

export default App
