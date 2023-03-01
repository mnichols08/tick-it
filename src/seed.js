import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { db } from "./firebase";
import customers from "./seedcustomers";


function Customers() {
    const trimmedDB = customers.sort((a, b) => 0.5 - Math.random()).slice(0,50);
    const seedDatabase = async (src) => 
        src.map(async customer => 
            await addDoc(collection(db, 'customers'), {
                name: customer.name,
                phone: customer.phone,
                address: customer.address,
                lookup: customer.lookup,
                created: Timestamp.now()
              })
        )
        
    
  return (
    <section>
      <div className="tickIt__container">
        <label>Seed Database</label>
        <button onClick={seedDatabase(customers)} >Full Seed</button><br></br>
        <button onClick={seedDatabase(trimmedDB)} >Partial and Random Seed</button>
      </div>
    </section>
  );
}

export default Customers;
