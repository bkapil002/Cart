import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Item from "./carts/Item";
import Cart from "./carts/Cart";
import Navbar from "./carts/Navbar";
import '../src/App.css'

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (item) => {
    setSelectedItems([...selectedItems, item]);
  };
  

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Item addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart selectedItems={selectedItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
