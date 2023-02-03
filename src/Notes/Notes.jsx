import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../firebase'
import Note from './Note'
import AddNote from './AddNote'


function Notes({cId, tId}) {

    const [openAddNoteModal, setOpenAddNoteModal] = useState(false)
    const [notes, setNotes] = useState([])
  
    /* function to get all notes from firestore in realtime */ 
    useEffect(() => {
      const noteColRef = query(collection(db, 'customers',cId,'tickets', tId, 'notes'), orderBy('created', 'desc'))
      onSnapshot(noteColRef, (snapshot) => {
        setNotes(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    },[])
  
    return (
     <section>
<div className='tickIt__container'>
<button 
  onClick={() => setOpenAddNoteModal(true)}>
  Add note +
</button>
<div className='tickIt__boxes'>

  {notes.map((note) => (
    <Note
      cId={cId}
      tId={tId}
      id={note.id}
      key={note.id}
      completed={note.data.completed}
      title={note.data.title} 
      description={note.data.description}
    />
  ))}

</div>
</div>

{openAddNoteModal &&
<AddNote cId={cId} tId={tId} onClose={() => setOpenAddNoteModal(false)} open={openAddNoteModal}/>
}
</section>

    )
  }
  
  export default Notes