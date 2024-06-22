import { createContext, useState } from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import ResetPassword from "./Components/Pages/ResetPassword";
import Mycart, { AddToCart } from "./Components/ModelsCartAndTerms";
import Footer from "./Components/Footer";
import CreateBowl from "./Components/Pages/CreateBowl";
import ContacUs from "./Components/Pages/ContacUs";
import CheckOut from "./Components/Pages/CheckOut";
import Dashboard from "./Components/Pages/Dashboard";
import "./Assets/icofont/icofont.min.css"
// import axios from 'axios';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <AddToCart />
      <Mycart />
      <Outlet />
      <Footer />
    </div>
  );
};

const Appstate = createContext();

function App() {
  
  const [showMycart, setShowMycart] = useState(false);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [AddToCartItem, setAddToCartItem] = useState({});
  let [cartItems, setCartItems] = useState([]);

  return (
    <Appstate.Provider
      value={{
        setShowMycart,
        showMycart,
        showAddToCart,
        setShowAddToCart,
        AddToCartItem,
        setAddToCartItem,
        cartItems,
        setCartItems,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/menu" element={<Home />}/>
          <Route path="/signature-wrap" element={<Home />} />
          <Route path="/create-bowl" element={<CreateBowl />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContacUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordreset" element={<ResetPassword />} />
          <Route path="/cart" element={<CheckOut />} />
          <Route
            path="*"
            element={
              <>
                NO route is present <Link to="/">Go to Home</Link>
              </>
            }
          />
        </Route>
      </Routes>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
