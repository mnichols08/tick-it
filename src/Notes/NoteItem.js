import Modal from "../Modal"
import './noteItem.css'

function NoteItem({onClose, open, title, description}) {

  return (
    <Modal modalLable='Note' onClose={onClose} open={open}>
      <div className='noteItem'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Modal>
  )
}

export default NoteItem
