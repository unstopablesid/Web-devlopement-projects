import { useState } from 'react'
import '/src/Styles/Count.css'
const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1> You Clicked {count} Times</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button> 
        <button onClick={() => setCount(count+10)}>Add 10</button> 
        <br />
        <button onClick={() => setCount(count - 1)}>Decrement</button> 
        <br />
        <button onClick={() => {
            setCount(0)
        }}>Reset</button>
    </div>
  )
}

export default Count
