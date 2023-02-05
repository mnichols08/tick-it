import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot, where, limit } from "firebase/firestore";
import { db } from "../firebase";
import Customer from "./Customer";
import AddCustomer from "./AddCustomer";

function Customers({customers}) {

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
          {customers.map((customer) => (
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
