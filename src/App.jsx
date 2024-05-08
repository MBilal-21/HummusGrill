import { createContext, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import ResetPassword from "./Components/Pages/ResetPassword";
import Mycart, { AddToCart } from "./Components/ModelsCartAndTerms";
import Footer from "./Components/Footer";
import { Route, Routes, Outlet } from "react-router-dom";

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
  useEffect(() => {
    console.log("renders");
  }, []);
  const [showMycart, setShowMycart] = useState(false);
  const [showAddToCart, setShowAddToCart] = useState(false);

  return (
    <Appstate.Provider
      value={{ setShowMycart, showMycart, showAddToCart, setShowAddToCart }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signature-wrap" element={<Home />} />
          <Route path="/menu" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordreset" element={<ResetPassword />} />
          <Route path="*" element={<>NO route is present</>} />
        </Route>
      </Routes>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
