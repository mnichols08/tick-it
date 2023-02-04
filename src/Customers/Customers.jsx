import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot, where, limit } from "firebase/firestore";
import { db } from "../firebase";
import Customer from "./Customer";
import AddCustomer from "./AddCustomer";

function Customers() {
  const [searchField, setSearchField] = useState([]);
  const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [filter, setFilter] = useState([]);
  
  let filteredCustomers
     try {
    filteredCustomers = customers.map(customer => customer.data).data.filter((o) =>
      Object.keys(o).some((k) => {

        if (o[k] !== null)
          return o[k]
            .toString()
            .toLowerCase()
            .includes(searchField.toString().toLowerCase());
        })
      );
    } catch {
     filteredCustomers = customers.filter(customer => 
                                          customer.data.name.toString().toLowerCase().includes(searchField.toString().toLowerCase()) ||
                                          customer.data.lookup && customer.data.lookup.toString().toLowerCase().includes(searchField.toString().toLowerCase()) ||
                                          customer.data.phone && customer.data.phone.toString().toLowerCase().includes(searchField.toString().toLowerCase()) ||
                                          customer.data.address && customer.data.address.toString().toLowerCase().includes(searchField.toString().toLowerCase())
                                         )
}
filteredCustomers = filteredCustomers.sort((a, b) => (a.data.name > b.data.name) ? 1 : -1 );
  
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  /* function to get all customers from firestore in realtime */
  useEffect(searchField => {
    const customerColRef = query(
      collection(db, "customers"),
      limit(10)
    );
    
    onSnapshot(customerColRef, (snapshot) => {
      setCustomers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
        setFilter(searchField)
      );
    });
    
  }, []);
  return (
    <section>
    {console.log(filter)}
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
              lookup={customer.data.lookup}
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
