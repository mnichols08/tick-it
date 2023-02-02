import './note.css'
import {useState} from 'react'
import NoteItem from './NoteItem'
import EditNote from './EditNote'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase'

function Note({id, title, description, completed, cId, tId}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to update firestore */
  const handleChange = async () => {
    const noteDocRef = doc(db, 'customers', cId, 'tickets', tId, 'notes', id)
    try{
      await updateDoc(noteDocRef, {
        completed: checked
      })
    } catch (err) {
      alert(err)
    }
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
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='note__buttons'>
          <div className='note__deleteNedit'>
            <button 
              className='note__editButton' 
              onClick={() => setOpen({...open, edit : true})}>
              Edit
            </button>
            <button className='note__deleteButton' onClick={handleDelete}>Delete</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      

      {open.view &&
        <NoteItem 
          onClose={handleClose} 
          title={title} 
          description={description} 
          open={open.view} />
      }

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