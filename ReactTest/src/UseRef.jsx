import React, { useRef } from 'react'

const UseRef = () => {
  const inputRef = useRef(null)

  const onClick = () => {
   inputRef.current.focus()
   inputRef.current.value = ''
  }

  return (
    <>
      <hr />
      <h1>UseRef</h1>
      <h2>Change here</h2>
      <input type='text' placeholder='Something' ref={inputRef}/>
      <button onClick={onClick}>Change</button>
    </>
  )
}

export default UseRef