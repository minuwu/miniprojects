import TicketNumber from './TicketNumber.jsx'

export default function Ticket({ticket = [0, 0, 0]}){
    return (
       <>
       {
        ticket.map((ticketNumber, idx)=>
         <TicketNumber ticketNumber={ticketNumber} key={idx} />
        )
       }
       </>
    )
}