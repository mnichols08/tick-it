import { useState } from "react";
import Modal from "../Modal";
import "./customerItem.css";
import NewTicket from "../Tickets/AddTicket";
import Tickets from '../Tickets/Tickets'
function CustomerItem({ onClose, open, name, phone, address, id }) {
  const [openAddTicketModal, setOpenAddTicketModal] = useState(false);
  return (
    <Modal modalLable="Customer" onClose={onClose} open={open}>
      <div className="customerItem">
        <h2>name: {name}</h2>
        <h2>phone: {phone}</h2>
        <address>{address}</address>
        <h3>Tickets</h3>
        <Tickets id={id} />
      </div>
      {openAddTicketModal && (
        <NewTicket
          id={id}
          onClose={() => setOpenAddTicketModal(false)}
          open={openAddTicketModal}
        />
      )}
    </Modal>
  );
}

export default CustomerItem;
