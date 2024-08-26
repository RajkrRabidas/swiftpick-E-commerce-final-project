import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Components/ShowLogin/LoginSingup';
import Footer from './Components/Footer/Footer';
import Order from './Components/Order/Order';
import MyOrders from './Pages/MyOrders';
import BuyProduct from './Pages/BuyProduct';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div id="main" className="mx-auto">
      <BrowserRouter>
      {showLogin ? <LoginSingup setShowLogin={setShowLogin}/> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:categoryName" element={<Shopcategory />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/Order" element={<Order/>} />
          {/* <Route path="/Verify" element={<Verify />} /> */}
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/buy" element={<BuyProduct/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
