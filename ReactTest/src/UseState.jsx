import React, { useState } from 'react'


const UseState = () => {
  
  const [counter, setCounter] = useState(0)

  const[inputValue, setInputValue] = useState('Rafael')
  
  function handleClick() {
  setCounter(counter + 1  )
  }

let changeInput = (event) => {
  setInputValue(event.target.value)
}

  return (
    
    <>
      <h1>UseState</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Add one more</button>
      <br /><br />
      <input placeholder='something' onChange={changeInput}/>
      <br />
      {inputValue}
      <hr />
    </>
  ) 
}

export default UseState