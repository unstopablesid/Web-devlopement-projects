
import {getTicket , sum} from './helper';
import { useState } from 'react';

const Lottery = () => {
    let [ticket , setTicket] = useState(getTicket(3));
    let isWinning ="777";
    let BuyTicket = () => {
        setTicket(getTicket(3));
    }
  return (
    <div>
        <h1>Lottery Game</h1>
        <div className='Ticket'>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        </div>
        <button onClick = {BuyTicket}>Play</button>
        <h3>{isWinning && "You Win"}</h3>
        <h3>{}</h3>

        
    </div>
  )
}

export default Lottery
