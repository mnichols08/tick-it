import Modal from "../Modal"
import {useState} from 'react'
import './addCustomer.css'
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddCustomer({onClose, open}) {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false)

  /* function to add new customer to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'customers'), {
        name: name,
        phone: phone,
        address: address,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div><button 
    onClick={() => setOpenAddCustomerModal(true)}>
    Add customer +
  </button>
  <Modal mod
    alLable='Add Customer' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addCustomer' name='addCustomer'>
        <input 
          type='text' 
          name='name' 
          onChange={(e) => setName(e.target.value)} 
          value={name}
          placeholder='Enter name'/>
          <input 
          type='number' 
          name='phone' 
          onChange={(e) => setPhone(e.target.value)} 
          value={phone}
          placeholder='Enter phone number'/>
        <textarea 
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Enter customer address'
          value={address}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
    </div>
  )
}

export default AddCustomer;
