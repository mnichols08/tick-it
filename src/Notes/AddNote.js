import Modal from "../Modal"
import {useState} from 'react'
import './addNote.css'
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddNote({onClose, open, cId, tId}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new note to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'customers',cId, 'tickets', tId, 'notes'), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Note' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addNote' name='addNote'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter note decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddNote
