import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Tickets from "../Tickets/Tickets";
import NewTicket from "../Tickets/AddTicket";

function ViewCustomer() {
  const { id } = useParams();
  const [openAddTicketModal, setOpenAddTicketModal] = useState(false);
  const [customer, setCustomer] = useState([]);
  const getDocSnap = async () => await getDoc(doc(db, "customers", id)).then(doc => setCustomer(doc.data()))
  useEffect(() => {
    getDocSnap()
    
  }, []);
  return (
    <section className="tickIt__container">
   
          <div className="customerItem">
            <label>Name:</label><h2>{customer.name}</h2>
            <label>ID:</label><h2> {customer.lookup}</h2>
            <label>Phone:</label><h2> {customer.phone}</h2>
            <label>Address:</label><address>{customer.address}</address>
            <Tickets id={id} />
          </div>
          {openAddTicketModal && (
            <NewTicket
              id={id}
              onClose={() => setOpenAddTicketModal(false)}
              open={openAddTicketModal}
            />
          )}
      
    </section>
  );
}

export default ViewCustomer;
