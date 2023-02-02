import Modal from "../Modal"
import {useState} from 'react'
import './editTicket.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase'

function EditTicket({open, onClose, toEditVehicle, toEditParts, toEditContact, toEditInvoice, cId, tId}) {

  const [vehicle, setVehicle] = useState(toEditVehicle)
  const [parts, setParts] = useState(toEditParts)
  const [contact, setContact] = useState(toEditContact)
  const [invoice, setInvoice] = useState(toEditInvoice)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const ticketDocRef = doc(db, 'customers', cId, 'tickets', tId)
    try{
      await updateDoc(ticketDocRef, {
        vehicle: vehicle,
        parts: parts,
        contact: contact,
        invoice: invoice
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Ticket' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTicket'>
        <input placeholder="Vehicle or Title" type='text' name='vehicle' onChange={(e) => setVehicle(e.target.value)} value={vehicle}/>
        <textarea placeholder="Parts needed or description" name="parts" onChange={(e) => setParts(e.target.value)} value={parts}></textarea>
        <input placeholder="Contact Name" type='text' name='contact' onChange={(e) => setContact(e.target.value)} value={contact}/>
        <input placeholder="Invoice Number" type='number' name='invoice' onChange={(e) => setInvoice(e.target.value)} value={invoice}/>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTicket
