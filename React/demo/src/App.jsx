import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Clicked {count} times</h1>
      <button onClick={() => { setCount(count + 1) }}>increase</button>
      <button onClick={() => { setCount(count - 1) }}>decrease</button>
      <br />
      <button onClick={()=>{setCount(count == 0)}}>Reset</button>
    </div>

  )
}

export default App
