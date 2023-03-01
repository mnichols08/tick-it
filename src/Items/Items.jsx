import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../firebase'
import Item from './Item'
import AddItem from './AddItem'


function Items({}) {

    const [searchField, setSearchField] = useState([])
    const [openAddItemModal, setOpenAddItemModal] = useState(false)
    const [items, setItems] = useState([]);
    let filteredItems
     try {
    filteredItems = items.map(item => item.data).data.filter((o) =>
      Object.keys(o).some((k) => {

        if (o[k] !== null)
          return o[k]
            .toString()
            .toLowerCase()
            .includes(searchField.toString().toLowerCase());
        })
      );
    } catch {
     filteredItems = items.filter(item => 
                                          item.data.title.toString().toLowerCase().includes(searchField.toString().toLowerCase()) ||
                                          item.data.description && item.data.description.toString().toLowerCase().includes(searchField.toString().toLowerCase()) ||
                                          item.data.phone && item.data.phone.toString().toLowerCase().includes(searchField.toString().toLowerCase()) ||
                                          item.data.partNumber && item.data.partNumber.toString().toLowerCase().includes(searchField.toString().toLowerCase())
                                         )
}
filteredItems = filteredItems.sort((a, b) => (a.data.name > b.data.name) ? 1 : -1 );
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  
    useEffect(() => {
      const itemColRef = query(collection(db, 'items'))
      onSnapshot(itemColRef, (snapshot) => {
        setItems(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    },[])
  
    return (
     <section>
<div className='tickIt__container'>
<input
          className="searchBar"
          type="text"
          placeholder="Search Items"
          onChange={handleChange}
        />
        <br />
<button 
  onClick={() => setOpenAddItemModal(true)}>
  Add item +
</button>
<div className='tickIt__boxes'>

  {filteredItems.map((item) => (
    <Item
      id={item.id}
      key={item.id}
      lineCode={item.data.lineCode}
      partNumber={item.data.partNumber}
      core={item.data.core}
      cost={item.data.cost}
      freight={item.data.freight}
      interchange={item.data.interchange}
      QoH={item.data.QoH}
      onOrder={item.data.onOrder}
      imgs={item.data.imgs}
      src={item.data.src}
      title={item.data.title} 
      description={item.data.description}
    />
  ))}

</div>
</div>

{openAddItemModal &&
<AddItem onClose={() => setOpenAddItemModal(false)} open={openAddItemModal}/>
}
</section>

    )
  }
  
  export default Items