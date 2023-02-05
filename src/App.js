import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, where, limit } from "firebase/firestore";
import { db } from "./firebase";
import "./tickIt.css";
import Header from "./Header";
import Footer from "./Footer";

function App({ Element }) {
    const [searchField, setSearchField] = useState([]);
  const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  /* function to get all customers from firestore in realtime */
  useEffect(() => {
    const customerColRef = query(
      collection(db, "customers"),
      limit(25)
    );
    
    onSnapshot(customerColRef, (snapshot) => {
      setCustomers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });  
  }, [ ]);
  return (
    <div className="app tickIt">
      <Header />
      <Element customers={customers}/>
      <Footer />
    </div>
  );
}

export default App;
