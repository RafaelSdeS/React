import React, { useLayoutEffect, useRef, useEffect   } from 'react'

const UseLayoutEffect = () => {

  const inpRef = useRef(null)

  useLayoutEffect(() => {
    console.log(inpRef.current.value)
  }, [])

  useEffect(() => {
    inpRef.current.value = 'Hello' 
  }, [])

  return (
    <>
    <hr />
    <h1>UseLayoutEffect</h1>
    <input ref={inpRef} value='Rafael' />
    </>
  )
}

export default UseLayoutEffect