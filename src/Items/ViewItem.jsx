import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ViewItem() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const getDocSnap = async () => await getDoc(doc(db, "items", id)).then(doc => setItem(doc.data()))
  useEffect(() => {
    getDocSnap()
    
  }, []);
  return (
    <section className="tickIt__container">
   
   <div className='item__body'>
        <h5>{item.title}</h5>
        <h6>{item.description}</h6>
        {item.partNumber ? <><h6>Part Number: </h6><p>{item.lineCode ? `${item.lineCode}_${item.partNumber}`: item.partNumber}</p></> : <></>}
        {item.cost ? <><h6>Cost of Item: </h6><p>${item.cost}</p></> : <></>}
        {item.core ? <><h6>Cost of Core: </h6><p>${item.core}</p></> : <></>}
        {item.freight ? <><h6>Cost of Freight: </h6><p>${item.freight}</p></> : <></>}
        {item.interchange ? <><h6>Known Interchange Numbers: </h6><p>{item.interchange}</p></> : <></>}
        {item.QoH ? <><h6>Quantity on Hand: </h6><p>{item.QoH}</p></> : <></>}
        {item.onOrder ? <><h6>Quantity on Order: </h6><p>{item.onOrder}</p></> : <></>}
        {item.imgs ? <div className="images">{item.imgs.split(',').map(img => <img src={img} alt='test' />)}</div> : <></>}
        {item.src ? <a href={item.src}>Link to a source </a> : <></>}
        </div>
      
    </section>
  );
}

export default ViewItem;
