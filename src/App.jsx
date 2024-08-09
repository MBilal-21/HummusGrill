import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { Route, Routes, Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login.jsx";
import ResetPassword from "./Components/Pages/ResetPassword";
import Mycart, { AddToCart } from "./Components/ModelsCartAndTerms";
import Footer from "./Components/Footer";
import CreateMeal from "./Components/Pages/CreateBowl";
import ContacUs from "./Components/Pages/ContacUs";
import CheckOut from "./Components/Pages/CheckOut.jsx";
import Dashboard from "./Components/Pages/Dashboard.jsx";
import "./Assets/icofont/icofont.min.css";
import ThanksCheckOut from "./Components/Pages/ThanksCheckOut.jsx";
import Profile from "./Components/Pages/Profile.jsx";
import OrderedHistory from "./Components/Pages/OrderedHistory.jsx";
import ViewOrderedHistory from "./Components/Pages/ViewOrderedHistory.jsx";
import ScrollToTop from "./Components/ScrollToUpBtn.jsx";
export const Appstate = createContext();

const Layout = ({
  showAddToCart,
  showMycart,
  rm,
  increment,
  decrement,
  clearBag,
  logout,
  userState,
}) => {
  

  return (
    <div
      style={{
        height: "100dvh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Navbar logout={logout} userState={userState} />
      <main>
        <AddToCart sh={showAddToCart} />
        <Mycart
          sh={showMycart}
          remove={rm}
          increment={increment}
          decrement={decrement}
          clearBag={clearBag}
        />
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [showMycart, setShowMycart] = useState(false);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [AddToCartItem, setAddToCartItem] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0.0);
  const [userState, setUserState] = useState(false);
  const navigate = useNavigate();
  const loc = useLocation().pathname;

  const localuser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {

    if (localuser) {
      setUserState(true);
    }

    window.addEventListener('beforeunload', () => {
      localStorage.clear();
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.clear();
      });
    };
  }, [localuser]);

  const LoginFunction = async (userID, onError) => {
    try {
      const u = JSON.parse(localStorage.getItem("user"));
      if (!u || u.email !== userID.email)
        throw new Error("User does not exist!");
      if (u.password !== userID.password) {
        throw new Error("Invalid Password");
      }
      setUserState(true);
      if (loc === "/login" || loc === "/register") {
        navigate("/");
      }else{
        navigate(-1);
      }
    } catch (error) {
      onError(error.message);
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUserState(false);
    navigate("/login");
  };

  const setFormattedSubTotal = (value) => {
    setSubTotal(parseFloat(value).toFixed(2));
  };
  const removeitem = (index) => {
    const updatedItems = [...cartItems];
    let totalprice = subTotal;
    const itemToRemove = updatedItems[index];
    let p = Number(itemToRemove.price) * Number(itemToRemove.quantity);
    totalprice -= p;
    updatedItems.splice(index, 1);
    setFormattedSubTotal(totalprice);
    setCartItems(updatedItems);
  };

  const increment = (i) => {
    let totalprice = parseFloat(subTotal);
    const updatedItems = [...cartItems];
    updatedItems[i].quantity = updatedItems[i].quantity + 1;
    totalprice += updatedItems[i].price;
    setFormattedSubTotal(totalprice);
    setCartItems(updatedItems);
  };

  const decrement = (i) => {
    if (cartItems[i].quantity > 1) {
      let totalprice = parseFloat(subTotal);
      const updatedItems = [...cartItems];
      updatedItems[i].quantity = updatedItems[i].quantity - 1;
      totalprice -= updatedItems[i].price;
      setFormattedSubTotal(totalprice);
      setCartItems(updatedItems);
    }
  };

  const clearBag = () => {
    setCartItems([]);
    setFormattedSubTotal(0.0);
  };

  const handleClose = useCallback((c) => {
    if (c === "cart") setShowMycart((prev) => !prev);
    else setShowAddToCart((prev) => !prev);
  }, []);

  const contextValue = useMemo(
    () => ({
      handleClose,
      AddToCartItem,
      setAddToCartItem,
      cartItems,
      setCartItems,
      subTotal,
      setFormattedSubTotal,
      userState,
      setUserState,
    }),
    [handleClose, AddToCartItem, cartItems, userState, subTotal]
  );

  return (
    <Appstate.Provider value={contextValue}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              showAddToCart={showAddToCart}
              showMycart={showMycart}
              rm={removeitem}
              increment={increment}
              decrement={decrement}
              clearBag={clearBag}
              logout={logout}
              userState={userState}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="ordered-history" element={<OrderedHistory />} />
          </Route>
          <Route
            path="view-ordered-history/:orderid"
            element={<ViewOrderedHistory />}
          />
          <Route path="/menu" element={<Home />} />
          <Route path="/signature-wrap" element={<Home />} />
          <Route path="/create-meal/:index" element={<CreateMeal />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContacUs />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login LoginFunction={LoginFunction} />}
          />
          <Route path="/passwordreset" element={<ResetPassword />} />
          <Route path="/checkout/:orderId" element={<ThanksCheckOut />} />
          <Route
            path="/cart"
            element={
              <CheckOut
                rm={removeitem}
                subTotal={subTotal}
                setSubTotal={setFormattedSubTotal}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="*"
            element={
              <>
                <div className="d-flex justify-center align-items-center flex-column">
                  <div className="text-danger fs-1">Error 404</div>
                  <Link to="/" className="text-warning fs-3 link">
                    Go to Home
                  </Link>
                </div>
              </>
            }
          />
        </Route>
      </Routes>
    </Appstate.Provider>
  );
}

export default App;
