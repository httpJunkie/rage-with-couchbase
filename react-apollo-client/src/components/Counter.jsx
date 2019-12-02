import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const incrementCount = (event) => {
    let eventIncoming = event
    debugger
    setCount((c) => c + 1)
  }
  return <button onClick={incrementCount}>{count}</button>
}