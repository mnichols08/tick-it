import './note.css'
import {useState} from 'react'
import EditNote from './EditNote'
import { doc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase'

function Note({id, title, description, completed, cId, tId}) {
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to delete a document from firstore */ 
  const handleDelete = async () => {
    const noteDocRef = doc(db, 'customers', cId, 'tickets', tId, 'notes', id)
    try{
      await deleteDoc(noteDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
   
      <div className='note__body'>
        <h5>{title}</h5>
        <h6>{description}</h6>
        <div className='note__buttons'>
          <div className='note__deleteNedit'>
            <button 
              className='note__editButton' 
              onClick={() => setOpen({...open, edit : true})}>
              Edit
            </button>
            <button className='note__deleteButton' onClick={handleDelete}>Delete</button>
          </div>
        </div>

      {open.edit &&
        <EditNote 
          onClose={handleClose} 
          toEditTitle={title} 
          toEditDescription={description} 
          open={open.edit}
          id={id}
          cId={cId}
          tId={tId} />
      }

    </div>
  )
}

export default Note