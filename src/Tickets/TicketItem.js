import { useState } from "react";
import Modal from "../Modal"
import './ticketItem.css'
import NewNote from "../Notes/AddNote";
import Notes from '../Notes/Notes'

function TicketItem({onClose, open, cId, tId, vehicle, parts, contact, invoice}) {
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);
  return (
    <Modal modalLable='Ticket' onClose={onClose} open={open}>
      <div className='ticketItem'>
        <h2>{vehicle}</h2>
        <p>{parts}</p>
        <h3>{contact}</h3>
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
    </Modal>
  )
  
}

export default TicketItem