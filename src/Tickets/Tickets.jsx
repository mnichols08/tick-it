import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Ticket from "./Ticket";
import AddTicket from "./AddTicket";

function Tickets({ id }) {
  const [completed, setCompleted] = useState(false);
  const [openAddTicketModal, setOpenAddTicketModal] = useState(false);
  const [tickets, setTickets] = useState([]);
  const handleChange = () =>
    completed === false ? setCompleted(true) : setCompleted(false);
  const filteredTickets = tickets.filter(
    (ticket) => ticket.data.completed === false
  );
  /* function to get all tickets from firestore in realtime */
  useEffect(() => {
    const ticketColRef = query(
      collection(db, "customers", id, "tickets"),
      orderBy("created", "desc")
    );
    onSnapshot(ticketColRef, (snapshot) => {
      setTickets(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <section>
      <div className="tickIt__container">
        <button onClick={() => setOpenAddTicketModal(true)}>
          Add ticket +
        </button>
        <div className="tickIt__boxes">
          <label htmlFor="completed">Show Completed Tasks</label>
          <input name="completed" type="checkbox" onClick={handleChange} />
          {completed
            ? tickets.map((ticket) => (
                <Ticket
                  cId={id}
                  id={ticket.id}
                  key={ticket.id}
                  completed={ticket.data.completed}
                  vehicle={ticket.data.vehicle}
                  parts={ticket.data.parts}
                  contact={ticket.data.contact}
                  invoice={ticket.data.invoice}
                />
              ))
            : filteredTickets.map((ticket) => (
                <Ticket
                  cId={id}
                  id={ticket.id}
                  key={ticket.id}
                  completed={ticket.data.completed}
                  vehicle={ticket.data.vehicle}
                  parts={ticket.data.parts}
                  contact={ticket.data.contact}
                  invoice={ticket.data.invoice}
                />
              ))}
        </div>
      </div>

      {openAddTicketModal && (
        <AddTicket
          cId={id}
          onClose={() => setOpenAddTicketModal(false)}
          open={openAddTicketModal}
        />
      )}
    </section>
  );
}

export default Tickets;
