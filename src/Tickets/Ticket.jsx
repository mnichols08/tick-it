import "./ticket.css";
import { useState } from "react";
import TicketItem from "./TicketItem";
import EditTicket from "./EditTicket";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import NewNote from "../Notes/AddNote";
import Notes from '../Notes/Notes'

function Ticket({ cId, id, vehicle, parts, contact, invoice, completed }) {
  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  /* function to update firestore */
  const handleChange = async () => {
    const ticketDocRef = doc(db, "customers", cId, "tickets", id);
    try {
      await updateDoc(ticketDocRef, {
        completed: checked,
      });
    } catch (err) {
      alert(err);
    }
  };

  /* function to delete a document from firstore */
  const handleDelete = async () => {
    const ticketDocRef = doc(db, "customers", cId, "tickets", id);
    try {
      await deleteDoc(ticketDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={`ticket ${checked && "ticket--borderColor"}`}>
      <div>
        <input
          id={`checkbox-${id}`}
          className="checkbox-custom"
          name="checkbox"
          checked={checked}
          onChange={handleChange}
          type="checkbox"
        />
        <label
          htmlFor={`checkbox-${id}`}
          className="checkbox-custom-label"
          onClick={() => setChecked(!checked)}
        ></label>
      </div>
      <div className="ticket__body">
        <h2>{vehicle}</h2>
        <p>{parts}</p>
        <h3>{contact}</h3>
        <h4>{invoice}</h4>
        <Notes cId={cId} tId={id} />
        {openAddNoteModal && (
        <NewNote
          cId={cId}
          tId={id}
          onClose={() => setOpenAddNoteModal(false)}
          open={openAddNoteModal}
        />
      )}
        <div className="ticket__buttons">
          <div className="ticket__deleteNedit">
            <button
              className="ticket__editButton"
              onClick={() => setOpen({ ...open, edit: true })}
            >
              Edit
            </button>
            <button className="ticket__deleteButton" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>

      {open.edit && (
        <EditTicket
          onClose={handleClose}
          toEditVehicle={vehicle}
          toEditParts={parts}
          toEditContact={contact}
          toEditInvoice={invoice}
          open={open.edit}
          cId={cId}
          tId={id}
        />
      )}
    </div>
  );
}

export default Ticket;
