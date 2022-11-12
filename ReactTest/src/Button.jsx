import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle)
    }
  }))

  return (
    <>
    <button>Button Child</button>
    {toggle && <p>Text here</p>}
    </>
  )
})

export default Button