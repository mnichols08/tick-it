import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Customer from "./Customer";
import AddCustomer from "./AddCustomer";

function Customers() {
  const [searchField, setSearchField] = useState([]);
  const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.data.name.toLowerCase().includes(searchField) ||
      customer.data.name.includes(searchField) ||
      customer.data.phone.includes(searchField) ||
      customer.data.address.toLowerCase().includes(searchField) ||
      customer.data.address.includes(searchField)
  );
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
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
    <section>
      <div className="tickIt__container">
        <input
          className="searchBar"
          type="text"
          placeholder="Search Customers"
          onChange={handleChange}
        />

        <div className="tickIt__boxes">
          {filteredCustomers.map((customer) => (
            <Customer
              name={customer.data.name}
              phone={customer.data.phone}
              address={customer.data.address}
              tickets={customer.data.tickets}
              id={customer.id}
              key={customer.id}
            />
          ))}
        </div>  
        <button onClick={() => setOpenAddCustomerModal(true)}>
          Create Customer +
        </button>
      </div>

      {openAddCustomerModal && (
        <AddCustomer
          onClose={() => setOpenAddCustomerModal(false)}
          open={openAddCustomerModal}
        />
      )}
    </section>
  );
}

export default Customers;
