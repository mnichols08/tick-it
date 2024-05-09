import { useState } from "react";
import './ticketItem.css'
import NewNote from "../Notes/AddNote";
import Notes from '../Notes/Notes'

function TicketItem({onClose, open, cId, tId, vehicle, parts, contact, invoice}) {
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);
  return (
    <div>
      <div className='ticketItem'>
        <h3>{vehicle}</h3>
        <h3>{parts}</h3>
        <h4>{contact}</h4>
        <h4>{invoice}</h4>
        <Notes cId={cId} tId={tId} />
      </div>
      {openAddNoteModal && (
        <NewNote
          cId={cId}
          tId={tId}
          onClose={() => setOpenAddNoteModal(false)}
          open={openAddNoteModal}
        />
      )}
    </div>
  )
  
}

export default TicketItem