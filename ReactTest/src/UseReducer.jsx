import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD':
      return {count: state.count + 1, showText: state.showText}
    case 'toggleShowText':
      return {count: state.count, showText: !state.showText}
    default:
      return state
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 
    {count:0, showText: true})

  return (
    <>
     <h1>UseReducer</h1>
     <h1>{state.count}</h1>
     <button 
     onClick={() => {
      dispatch({type: 'ADD'})
      dispatch({type: 'toggleShowText'})
     }}>
       Click Me
     </button>
     {state.showText && <p>A text aha!</p>}

    </>
  )
}

export default UseReducer