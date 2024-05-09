import "./tickIt.css";
import Header from "./Header";
import Footer from "./Footer";
function App({ Element }) {
  return (
    <div className="app tickIt">
      <Header />
      <Element />
      <Footer />
    </div>
  );
}

export default App;
