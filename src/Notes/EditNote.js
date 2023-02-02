import Modal from "../Modal"
import {useState} from 'react'
import './editNote.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from '../firebase'

function EditNote({open, onClose, toEditTitle, toEditDescription, id, cId, tId}) {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const noteDocRef = doc(db, 'customers', cId, 'tickets', tId, 'notes', id)
    try{
      await updateDoc(noteDocRef, {
        title: title,
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Note' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editNote'>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value)} value={title}/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditNote
