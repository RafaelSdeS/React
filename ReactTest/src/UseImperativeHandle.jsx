import React, {useRef} from 'react'
import Button from './Button'

const UseImperativeHandle = () => {
  const buttonRef = useRef(null)

  return (

    <>
      <hr />
      <h1>UseImperativeHandle</h1>
      <button onClick={() => {buttonRef.current.alterToggle()}}>Button from parent</button>
      <Button ref={buttonRef}/>
      <hr />
    </>
  )
}

export default UseImperativeHandle