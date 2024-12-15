import React from 'react'
import { useState } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
      <h1>Clicked {count} times</h1>
      <button onClick={() => { setCount(count + 1) }}>increase</button>
      <button onClick={() => { setCount(count - 1) }}>decrease</button>
      <br />
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
    </div>
  )
}

export default Demo
