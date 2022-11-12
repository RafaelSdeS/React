import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffect() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {setData(response.data)})
  }, []
  )

  return (
    <>
    <hr />
    <h1>UseEffect</h1>
    <p>{data[10].email}</p>
    </>
  )
}

export default UseEffect