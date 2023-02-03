import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Tickets from "../Tickets/Tickets";
import NewTicket from "../Tickets/AddTicket";

function ViewCustomer() {
  const { id } = useParams();
  const [openAddTicketModal, setOpenAddTicketModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  let customer = customers.filter((c) => c.id === id);
  /* function to get all customers from firestore in realtime */
  useEffect(() => {
    const customerColRef = query(
      collection(db, "customers"),
      orderBy("name", "desc")
    );
    onSnapshot(customerColRef, (snapshot) => {
      setCustomers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <section className="tickIt__container">
      {customer.map((customerProfile) => (
        <>
          <div className="customerItem">
            <label>Name:</label><h2>{customerProfile.data.name}</h2>
            <label>Phone:</label><h2> {customerProfile.data.phone}</h2>
            <label>Address:</label><address>{customerProfile.data.address}</address>
            <Tickets id={customerProfile.id} />
          </div>
          {openAddTicketModal && (
            <NewTicket
              id={customerProfile.data.id}
              onClose={() => setOpenAddTicketModal(false)}
              open={openAddTicketModal}
            />
          )}
        </>
      ))}
    </section>
  );
}

export default ViewCustomer;
