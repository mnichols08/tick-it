import './customer.css'
import {useState} from 'react'
import CustomerItem from './CustomerItem'
import EditCustomer from './EditCustomer'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase'

function Customer({name, phone, address, id, tickets, lookup}) {
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to update firestore */
  // const handleChange = async () => {
  //   const customerDocRef = doc(db, 'customers', id)
  //   try{
  //     await updateDoc(customerDocRef, {
  //       completed: checked
  //     })
  //   } catch (err) {
  //     alert(err)
  //   }
  // }

  /* function to delete a document from firstore */ 
  const handleDelete = async () => {
    const customerDocRef = doc(db, 'customers', id)
    try{
      await deleteDoc(customerDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className={`customer ${ 'customer--borderColor'}`}>
      {/* <div>
        <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked}
          onChange={handleChange}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setChecked(!checked)} ></label>
      </div> */}
      <div className='customer__body'>
        <a href={`/customer/${id}`}><h2>{name}</h2></a>
        <sup>{lookup}</sup>
        <h2>{phone}</h2>
        <address>{address}</address>
        <div className='customer__buttons'>
          <div className='customer__deleteNedit'>
            <button 
              className='customer__editButton' 
              onClick={() => setOpen({...open, edit : true})}>
              Edit
            </button>
            <button className='customer__deleteButton' onClick={handleDelete}>Delete</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <CustomerItem 
          onClose={handleClose}
          name={name} 
          phone={phone}
          address={address}
          tickets={tickets}
          id={id}
          lookup={lookup}
          open={open.view} />
      }

      {open.edit &&
        <EditCustomer 
          onClose={handleClose} 
          toEditName={name} 
          toEditPhone={phone}
          toEditAddress={address}
          toEditTickets={tickets} 
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default Customer