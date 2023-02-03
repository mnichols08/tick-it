import Modal from "../Modal"
import {useState} from 'react'
import './editCustomer.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase'

function EditCustomer({open, onClose, toEditName, toEditPhone, toEditAddress, id}) {

  const [name, setName] = useState(toEditName)
  const [phone, setPhone] = useState(toEditPhone)
  const [address, setAddress] = useState(toEditAddress)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const customerDocRef = doc(db, 'customers', id)
    try{
      await updateDoc(customerDocRef, {
        name: name,
        phone: phone,
        address: address
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Customer' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editCustomer'>
        <input type='text' name='name' onChange={(e) => setName(e.target.value)} value={name}/>
        <input type='number' name='phone' onChange={(e) => setPhone(e.target.value)} value={phone}/>
        <textarea onChange={(e) => setAddress(e.target.value)} value={address}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditCustomer
