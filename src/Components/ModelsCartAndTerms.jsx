import React, { useState, useContext, useEffect, useCallback } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import Divider from "./Divider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Appstate } from "../App";
import { Link } from "react-router-dom";
import ImageWithLoader from "./ImageWithLoader";

const increDecrement = (number, setNumber, operator) => {
  let q;
  if (operator === "-") {
    q = number.quantity - 1;
    if (number.quantity > 1) setNumber({ ...number, quantity: q });
  } else if (operator === "+") {
    q = number.quantity + 1;
    setNumber({ ...number, quantity: q });
  }
};

// My Cart component
const Mycart = ({ sh, remove, inc, dec, clear }) => {
  const { setCartItems, cartItems, handleClose } = useContext(Appstate);
  const increment = (i) => {
    const updatedItems = [...cartItems];
    updatedItems[i].quantity = updatedItems[i].quantity + 1;
    setCartItems(updatedItems);
  };
  const decrement = (i) => {
    const updatedItems = [...cartItems];
    updatedItems[i].quantity = updatedItems[i].quantity + 1;
    setCartItems(updatedItems);
  };
  const clearBag = () => {
    setCartItems([]);
  };

  return (
    <Offcanvas
      show={sh}
      onHide={() => handleClose("cart")}
      placement="end"
      className="Mycart"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>My Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          "Cart is Empty"
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="wrap-one" key={index}>
                <h2>
                  {item.name}
                  <span>
                    <small>{"(span text)"}</small>
                  </span>
                </h2>
                <div className="price">
                  <span>{item.price}</span>
                  <span>{"(Quantity " + item.quantity + " )"}</span>
                </div>
                <ul className="itemsList p-0 mt-2">
                  <li>
                  {item.category === "signature" && item.ingrediants.map((e,i)=>
                  <span key={i}>{e.selected && e.name}</span>
                  )}
                </li>
               {item.specialInstruct && <li>
                  <strong>Special instructions: </strong>
                  <span>{item.specialInstruct}</span>
                </li>}
                </ul>
                <hr className="my-2" />
                {/* increament and decreament buttons */}
                <div className="d-flex justify-content-between align-items-center px-3">
                  <button
                    className="btn-circle d-flex"
                    onClick={() => {
                      decrement(index);
                    }}
                  >
                    <RemoveIcon style={{ fontSize: "25px" }} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn-circle d-flex"
                    onClick={() => increment(index)}
                  >
                    <AddIcon style={{ fontSize: "25px" }} />
                  </button>
                </div>
                <hr className="my-2" />
                <div className="row my-2">
                  <div className="col-6 px-1">
                    <button
                      className="btn dish-btn w-100"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  {/* <div className="col-6 px-1">
                      <button className="btn dish-btn w-100">Change</button>
                    </div> */}
                  <div className="col-6 px-1">
                    <button className="btn dish-btn w-100">Update</button>
                  </div>
                </div>
                <hr />
              </div>
            ))}

            <div className="cart-foot-btn">
              <Link to={"/cart"}>
                <button className="btn cartbtn">Go To Checkout {"$375"}</button>
              </Link>
              <Link to={"/"}>
                <button className="btn cartbtn">Add More items</button>
              </Link>
              <button className="btn cartbtn" onClick={clearBag}>
                Clear Bag
              </button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

// Add to cart button component
const AddToCart = ({ sh }) => {
  const { setCartItems, cartItems, AddToCartItem, handleClose } =
    useContext(Appstate);
  const [item, setItem] = useState(AddToCartItem);

  useEffect(() => {
    setItem(AddToCartItem);
    
  }, [AddToCartItem]);

  const funcToAddInCart = () => {
    const it = { ...item };
    const date = new Date().getDate();
    it.id = date;
    console.log(item);
    const updatedCartItems = [...cartItems, it];
    setCartItems(updatedCartItems);
    handleClose("cart");
    handleClose();
  };
  const handleIngrediant = (i, value) => {
    const it = {...item};
    it.ingrediants[i].selected = value;
    setItem(it);
    console.log(item);
  }

  return (
    <Modal
      show={sh}
      onHide={() => handleClose()}
      centered
      className="text-black text-center"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="px-0">
        <div>
          <ImageWithLoader
            src={`${item.image}`}
            alt={item.name}
            width={120}
            height={120}
          />
        </div>
        <div className="text-light bg-black px-3 d-flex justify-content-between align-items-center my-2">
          <h4>{item.name}</h4>
          <span>${item.price}</span>
        </div>
        {/* signature wrap ingrediants start */}
        <div>
        {item.category === "signature" && (
          <div>
            <input type="text" name="mealFor" className="input-feild" />
            <p>
              *Ingredients can be unchecked if you don't want them in your wrap
              and you can also add special instructions.
            </p>
            {/* check ingrediant inputs */}
            {item.ingrediants.map((e, i) => (
              <div key={i}>
                <input type="checkbox"  id={e.name} defaultChecked={e.selected} onChange={(event)=>{handleIngrediant(i,event.currentTarget.checked)}}/>
                <label htmlFor={e.name}>{e.name}</label>
              </div>
            ))}
            <input type="text" name="specialInstruct" className="input-feild" />
          </div>
        )}
        </div>
        {/* signature wrap ingrediants end */}

        <hr />
        <div className="d-flex justify-content-between align-items-center px-3">
          <button
            className="btn-circle"
            onClick={() => {
              increDecrement(item, setItem, "-");
            }}
          >
            <RemoveIcon />
          </button>
          <span>{item.quantity}</span>
          <button
            className="btn-circle"
            onClick={() => increDecrement(item, setItem, "+")}
          >
            <AddIcon />
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn dish-btn"
          onClick={funcToAddInCart}
        >
          Add To Cart
        </button>
      </Modal.Footer>
    </Modal>
  );
};

// Terms And Condition component
const TermsAndCondition = React.memo(({ show, setShow }) => {
  const handleClose = useCallback(() => setShow(false), [setShow]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      style={{ maxHeight: "550px", overflowY: "auto" }}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="text-center text-black">
        <h4>Terms &amp; Conditions</h4>
        <Divider />
        <div className="thanks-content">
          <h4>Terms of Use</h4>
          <p>
            Welcome to the Hummus grill Sites! We built our website and app to
            share information about our company, our restaurants, and our foods;
            to make guides available that show you how to make delicious food at
            home; to provide updates related to our company; and to allow you to
            purchase our food.
          </p>
          <h4>Privacy</h4>
          <p>
            We value your privacy. Please review our privacy policy, which is
            incorporated into these terms, to understand our privacy practices.
          </p>
          <h4>Trademarks</h4>
          <p>
            Hummus grill™ and the Hummus grill logo are registered trademarks of
            Hummus grill Group, Inc. You may not use, copy, reproduce,
            republish, upload, post, transmit, distribute, or modify these
            trademarks in any way, including in advertising or publicity
            pertaining to distribution of materials on the Sites, without our
            prior written permission. All other names, logos, product and
            service names, designs and slogans that may appear on the Sites are
            the trademarks of their respective owners and may not be used,
            copied, reproduced, republished, uploaded, posted, transmitted,
            distributed, or modified without express permission from the
            respective owner. The use of Hummus grill trademarks on any other
            website is not allowed. We prohibit the use of any of our trademarks
            as a “hot” link on or to any other website unless establishment of
            such a link is approved in advance.
          </p>
          <h4>Other Intellectual Property Rights</h4>
          <p>
            The Sites and all content, features and functionality (including but
            not limited to all information, software, text, displays, images,
            graphics, photographs, illustrations, video and audio, and the
            design, selection and arrangement thereof) (“Content”) are owned by
            Hummus grill Group, Inc., its licensors, agents, or Content
            providers. The Sites and all Content are protected by U.S. and
            international copyright, trademark, trade dress, patent, trade
            secret and other intellectual property or proprietary rights laws.
          </p>
          <h4>You also agree not to:</h4>
          <p>
            Use the Sites in any manner or take any action that could, in our
            sole discretion, disable, overburden, impose an unreasonable or
            disproportionately large load, damage, or impair the Sites or
            interfere with any other party's use of the Sites. Use any robot,
            spider, scraper or other automatic device, process or means to
            access the Sites for any purpose, including monitoring or copying
            any of the material on the Sites. Use any device, software, routine,
            or take any other action that interferes or attempts to interfere
            with the proper working of the Sites or any activities conducted on
            or through the Sites. Introduce any viruses, trojan horses, worms,
            logic bombs or other material which is malicious or technologically
            harmful. Bypass, or attempt to bypass, any measures we may use to
            prevent or restrict access to the Sites or otherwise gain
            unauthorized access to, interfere with, damage or disrupt any parts
            of the Sites, the server on which the Sites are stored, or any
            server, computer or database connected to the Sites. Attack our
            Sites via a denial-of-service attack or a distributed
            denial-of-service attack.
          </p>
          <h4>Text Messaging</h4>
          <p>
            By providing a cell phone to us you represent and warrant that you
            are the owner or authorized primary user of the device and you
            expressly consent to receiving text messages from Hummus grill from
            time to time, including messages about products that you have
            ordered and promotional messages. If you no longer wish to receive
            these messages, please contact us at [insert email address] or reply
            “STOP” to the text message. Your carrier may charge you standard
            text messaging rates for each message sent or received.
          </p>
          <h4>Feedback</h4>
          <p>
            We welcome your comments and suggestions regarding our Sites and the
            information, products and services we make available here. Contact
            us at info@hummusgrill.net to provide feedback.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
});

export default Mycart;
export { TermsAndCondition, AddToCart };
