import './item.css'
import {useState} from 'react'
import EditItem from './EditItem'
import { doc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase'

function Item({id, title, description, core, cost, lineCode, partNumber, freight, interchange, QoH, onOrder, imgs, src}) {
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to delete a document from firstore */ 
  const handleDelete = async () => {
    const itemDocRef = doc(db, 'items', id)
    try{
      await deleteDoc(itemDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
   
      <div className='item__body'>
        <a href={`/item/${id}`}><h5>{title}</h5></a>
        {partNumber ? <h6>PN: {lineCode ? `${lineCode}_${partNumber}`: partNumber}</h6> : <></>}
        <h6>{description}</h6>
        
        {cost ? <><h6>Cost of Item: </h6><p>${cost}</p></> : <></>}
        {/* {core ? <><h6>Cost of Core: </h6><p>${core}</p></> : <></>}
        {freight ? <><h6>Cost of Freight: </h6><p>${freight}</p></> : <></>}
        {interchange ? <><h6>Known Interchange Numbers: </h6><p>{interchange}</p></> : <></>}
        {QoH ? <><h6>Quantity on Hand: </h6><p>{QoH}</p></> : <></>}
        {onOrder ? <><h6>Quantity on Order: </h6><p>{onOrder}</p></> : <></>}
        {imgs ? <div className="images">{imgs.split(',').map(img => <img src={img} alt='test' />)}</div> : <></>}
        {src ? <a href={src}>Link to a source </a> : <></>} */}
        <div className='item__buttons'>
          <div className='item__deleteNedit'>
            <button 
              className='item__editButton' 
              onClick={() => setOpen({...open, edit : true})}>
              Edit
            </button>
            <button className='item__deleteButton' onClick={handleDelete}>Delete</button>
          </div>
        </div>

      {open.edit &&
        <EditItem 
          onClose={handleClose} 
          toEditTitle={title} 
          toEditDescription={description}
          toEditLineCode={lineCode}
          toEditPartNumber={partNumber}
          key={id}
          toEditCore={core}
          toEditCost={cost}
          toEditfreight={freight}
          toEditInterchange={interchange}
          toEditQoH={QoH}
          toEditOnOrder={onOrder}
          toEditImgs={imgs}
          toEditSrc={src}
          open={open.edit}
          id={id}
           />
      }

    </div>
  )
}

export default Item