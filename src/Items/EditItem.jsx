import Modal from "../Modal"
import {useState} from 'react'
import './editItem.css'
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import {db} from '../firebase'

function EditItem({open, onClose, toEditTitle, toEditDescription, toEditPartNumber, toEditLineCode, id, toEditCost, toEditCore, toEditFreight, toEditInterchange, toEditQoH, toEditOnOrder, toEditImgs, toEditSrc }) {

  const [title, setTitle] = useState(toEditTitle)
  const [lineCode, setLineCode] = useState(toEditLineCode)
  const [partNumber, setPartNumber] = useState(toEditPartNumber)
  const [description, setDescription] = useState(toEditDescription)
  const [core, setCore] = useState(toEditCore)
  const [cost, setCost] = useState(toEditCost)
  const [freight, setFreight] = useState(toEditFreight)
  const [interchange, setInterchange] = useState(toEditInterchange)
  const [QoH, setQoH] = useState(toEditQoH)
  const [onOrder, setOnOrder] = useState(toEditOnOrder)
  const [imgs, setImgs] = useState(toEditImgs)
  const [src, setSrc] = useState(toEditSrc)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const itemDocRef = doc(db, 'items', id)
    try{
      await updateDoc(itemDocRef, {
        title: title && title.length > 0 ? title : null,
        description: description && description.length > 0 ? description : null,
        lineCode: lineCode && lineCode.length > 0 ? lineCode : null,
        partNumber: partNumber && partNumber.length > 0 ? partNumber : null,
        core: core && core.length > 0 ? core : null,
        cost: cost && cost.length > 0 ? cost : null,
        freight: freight && freight.length > 0 ? freight : null,
        interchange: interchange && interchange.length > 0 ? interchange : null,
        QoH: QoH && QoH.length > 0 ? QoH : null,
        onOrder: onOrder && onOrder.length > 0 ? onOrder : null,
        imgs: imgs && imgs.length > 0 ? imgs : null,
        src: src && src.length > 0 ? src : null,
        lastEdit: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLable='Edit Item' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editItem'>
        {title && title.length > 0 ? <label htmlFor="title">Title</label> : <></>}<input type='text' placeholder='Enter a title' name='title' onChange={(e) => setTitle(e.target.value)} value={title}/>
        {description && description.length > 0 ? <label htmlFor="description">Description</label> : <></>}<textarea placeholder='Describe the item' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        {lineCode && lineCode.length > 0 ? <label htmlFor="lineCode">Line Code</label> : <></>}<input type='text' placeholder="Line Code" name='lineCode' onChange={(e) => setLineCode(e.target.value)} value={lineCode}/>
        {partNumber && partNumber.length > 0 ? <label htmlFor="partNumber">Part Number</label> : <></>}<input type='text' placeholder="Part Number" name='partNumber' onChange={(e) => setPartNumber(e.target.value)} value={partNumber}/>
        {core && core.length > 0 ?  <label htmlFor="core">Core Cost</label> : <></> }<input type='number' placeholder="Core Cost" name='core' onChange={(e) => setCore(e.target.value)} value={core}/>
        {cost && cost.length > 0 ? <label htmlFor="cost">Item Cost</label> : <></>}<input type='number' placeholder="Item Cost" name='cost' onChange={(e) => setCost(e.target.value)} value={cost}/>
        {freight && freight.length > 0 ? <label htmlFor="freight">Freight Cost</label> : <></>}<input type='number' placeholder="Freight Cost" name='freight' onChange={(e) => setFreight(e.target.value)} value={freight}/>
        {interchange && interchange.length > 0 ? <label htmlFor="interchange">Known Interchange Numbers</label> : <></>}<input type='number' placeholder="Known Interchange Numbers" name='interchange' onChange={(e) => setInterchange(e.target.value)} value={interchange}/>
        {QoH && QoH.length > 0 ? <label htmlFor="QoH">Quantity on Hand</label>: <></>}<input type='number' placeholder="Quantity on Hand" name='QoH' onChange={(e) => setQoH(e.target.value)} value={QoH}/>
        {onOrder && onOrder.length > 0 ? <label htmlFor='onOrder'>Quantity on Order</label>: <></>}<input type='number' placeholder="Quantity on Order" name='onOrder' onChange={(e) => setOnOrder(e.target.value)} value={onOrder}/>
        {imgs && imgs.length > 0 ? <label htmlFor='images'>Images</label>: <></>}<input type='text' placeholder="Images" name='images' onChange={(e) => setImgs(e.target.value)} value={imgs}/>
        {src && src.length > 0 ? <label htmlFor="src">Potential Sources</label> : <></>}<input type='text' placeholder="Potential Sources" name='src' onChange={(e) => setSrc(e.target.value)} value={src}/>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditItem

