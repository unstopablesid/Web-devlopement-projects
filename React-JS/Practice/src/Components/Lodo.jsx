import React from 'react'

const Lodo = () => {
    const [moves , setMoves] = React.useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0
    })
  return (
    <div>
      <p>Game Begin</p>
      <div className='board'>
        <p>Blue move = {moves.blue}</p>
        <button style={{backgroundColor:"blue" , color:"black"}} onClick={() => setMoves(prevMoves => ({ ...prevMoves, blue: prevMoves.blue + 1 }))}>+1</button>
        <p>Yellow move = {moves.yellow}</p>
        <button style={{backgroundColor:"yellow", color:"black"}} onClick={() => setMoves(prevMoves => ({ ...prevMoves, yellow: prevMoves.yellow + 1 }))}>+1</button>
        <p>Green move = {moves.green}</p>
        <button style={{backgroundColor:"green", color:"black"}} onClick={() => setMoves(prevMoves => ({ ...prevMoves, green: prevMoves.green + 1 }))}>+1</button>
        <p >Red move = {moves.red}</p>
        <button style={{backgroundColor:"red", color:"black"}} onClick={() => setMoves(prevMoves => ({ ...prevMoves, red: prevMoves.red + 1 }))}>+1</button>
      </div>
    </div>
  )
}

export default Lodo
