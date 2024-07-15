import { useState } from 'react'
import Ticket from './Ticket.jsx'
import {ticketGeneration, sumIsFifteen} from './helper.js'

export default function Lottery({ticketLength = 3, winCondition = sumIsFifteen}){
    let [ticket, setTicket] = useState(ticketGeneration(ticketLength));
    let newTicket =() =>{
        setTicket(ticketGeneration(ticketLength));
    }
    let ticketWin = winCondition(ticket);
    return (
        <>
        <button onClick={newTicket}>New Ticket [+]</button> 
        <br></br><br></br>
        <Ticket ticket={ticket}/>
        <br></br>
        {ticketWin && <h3>Congrats! You Won!</h3>}
        </>
    )
}