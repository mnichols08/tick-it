import Modal from "../Modal"
import {useState} from 'react'
import './addTicket.css'
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'


function AddTicket({onClose, open, cId}) {

  const [vehicle, setVehicle] = useState('')
  const [parts, setParts] = useState('')
  const [contact, setContact] = useState('')

  /* function to add new customer to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'customers', cId, 'tickets'), {
        vehicle: vehicle,
        parts: parts,
        contact: contact,
        completed: false, 
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <Modal modalLable='Add Ticket' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addCustomer' name='addTicket'>
        <input 
          type='text' 
          name='Vehicle' 
          onChange={(e) => setVehicle(e.target.value)} 
          value={vehicle}
          placeholder='Enter Vehicle or Title'/>
          <input 
          type='text' 
          name='Parts' 
          onChange={(e) => setParts(e.target.value)} 
          value={parts}
          placeholder='Enter parts needed or description'/>
          <input 
          type='text' 
          name='Contact' 
          onChange={(e) => setContact(e.target.value)} 
          value={contact}
          placeholder='Who did you talk to?'/>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTicket
