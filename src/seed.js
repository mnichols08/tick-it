import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { db } from "./firebase";
import customers from "./seedcustomers";

function Customers() {
//     const seedDatabase = async () => 
//         customers.map(async customer => 
//             await addDoc(collection(db, 'customers'), {
//                 name: customer.Name,
//                 phone: customer.Phone,
//                 address: customer.Address,
//                 lookup: customer.Lookup,
//                 created: Timestamp.now()
//               })
//         )
        
    
//   return (
//     <section>
//       <div className="tickIt__container">
//         <label>Seed Database</label>
//         <button onClick={seedDatabase} >Seed</button>
//       </div>
//     </section>
//   );
}

export default Customers;
