import "./tickIt.css";
import Header from "./Header";
import Footer from "./Footer";

function App({ Element, customers }) {
   
  return (
    <div className="app tickIt">
      <Header />
      <Element customers={customers}/>
      <Footer />
    </div>
  );
}

export default App;
