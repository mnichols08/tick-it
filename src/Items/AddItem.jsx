import Modal from "../Modal"
import {useState} from 'react'
import './addItem.css'
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddItem({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [lineCode, setLineCode] = useState('')
  const [partNumber, setPartNumber] = useState('')
  const [core, setCore] = useState('')
  const [cost, setCost] = useState('')
  const [freight, setFreight] = useState('')
  const [interchange, setInterchange] = useState('')
  const [QoH, setQoH] = useState('')
  const [onOrder, setOnOrder] = useState('')
  const [imgs, setImgs] = useState('')
  const [src, setSrc] = useState('')
  

  /* function to add new item to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'items'), {
        title: title,
        description: description,
        lineCode: lineCode,
        partNumber: partNumber,
        core: core,
        cost: cost,
        freight: freight,
        interchange: interchange,
        QoH: QoH,
        onOrder: onOrder,
        imgs: imgs,
        src: src,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Item' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addItem' name='addItem'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter item decription'
          value={description}></textarea>
           <input 
          type='text' 
          name='lineCode' 
          onChange={(e) => setLineCode(e.target.value)} 
          value={lineCode}
          placeholder='Line Code'/>
           <input 
          type='number' 
          name='partNumber' 
          onChange={(e) => setPartNumber(e.target.value)} 
          value={partNumber}
          placeholder='Part Number'/>
        <input 
          type='number' 
          name='core' 
          onChange={(e) => setCore(e.target.value)} 
          value={core}
          placeholder='Cost of Core'/>
        <input 
          type='number' 
          name='cost' 
          onChange={(e) => setCost(e.target.value)} 
          value={cost}
          placeholder='Cost of Product'/>
          <input 
          type='number' 
          name='freight' 
          onChange={(e) => setFreight(e.target.value)} 
          value={freight}
          placeholder='Cost of Freight'/>
          <input 
          type='number' 
          name='interchange' 
          onChange={(e) => setInterchange(e.target.value)} 
          value={interchange}
          placeholder='Interchange Numbers'/>
          <input 
          type='number' 
          name='QoH' 
          onChange={(e) => setQoH(e.target.value)} 
          value={QoH}
          placeholder='Quantity on Hand'/>
          <input 
          type='number' 
          name='onOrder' 
          onChange={(e) => setOnOrder(e.target.value)} 
          value={onOrder}
          placeholder='Quantity on Order'/>
          <input 
          type='text' 
          name='imgs' 
          onChange={(e) => setImgs(e.target.value)} 
          value={imgs}
          placeholder='Image url'/>
          <input 
          type='text' 
          name='src' 
          onChange={(e) => setSrc(e.target.value)} 
          value={src}
          placeholder='Enter source'/>
          <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddItem
