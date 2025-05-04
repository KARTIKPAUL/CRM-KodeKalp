import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react';

function TicketItem({ ticket }) {
  return (
    <div className='ticket'>
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status} text-green-600`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
      <Eye className='mr-2' size={16} /> {/* Add icon here */}
        View
      </Link>
    </div>
  )
}

export default TicketItem
