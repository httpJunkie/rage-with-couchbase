import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => setCount(counter => counter +1)
  return <button onClick={incrementCount}>{count}</button>
}

export default Counter