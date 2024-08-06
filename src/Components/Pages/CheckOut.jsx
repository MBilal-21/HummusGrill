import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputMask from "react-input-mask";
import SectionHeader from "../SectionHeader";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Appstate } from "../../App";

const NoCheckOut = () => {
  return (
    <div className="text-center">
      <SectionHeader heading={"Sorry"} />
      <div className="mt-4">
        <ShoppingBasketOutlinedIcon
          color="success"
          style={{ fontSize: "100px" }}
        />
        <h2>
          Your Cart is Empty. <br />
          Please add some items to proceed.
        </h2>
        <Link to={"/"}>
          <button className="btn dish-btn btn-wide ">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

const CheckOut = ({ rm}) => {
  const { cartItems,subTotal,setCartItems } = useContext(Appstate);
  const [total, setTotal] = useState(0.0);
  const [taxes, setTaxes] = useState(0.0);
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(false);
  const [requi, setRequi] = useState(false);
  const schedule = useRef();
  const [inputData, setInputData] = useState({
    method:"pickup",
    pickupTime:"15 to 30 min",
    pickupDate:"",
    orderUpdatemsg:true,
    phoneNumber:"",
    specialInstructions:"",
    paymentMethod:"payment at resturent",
  })
  useEffect(() => {
    cartItems.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
    setTaxes(1.6);
    let p = Number(taxes) + Number(subTotal);
    setTotal(parseFloat(p).toFixed(2));
  }, [cartItems]);

 
  const placeOrder = (e) => {
    e.preventDefault();
    let localOrders = localStorage.getItem("Orders");
    let parsedOrders = localOrders ? JSON.parse(localOrders) : [];
    let t = new Date();
    let newoder = {
       orderId: t.getDate() + t.getTime() ,
       orderItems: JSON.parse(JSON.stringify(cartItems)),
       placeData: {...inputData},
       taxes:taxes,
       subTotal: subTotal,
       total: total,
       orderDate: t.toDateString(),
       orderStatus: "pending"
      };
    parsedOrders.push(newoder);
    // Store the updated orders array back to localStorage
    localStorage.setItem("Orders", JSON.stringify(parsedOrders));
    // Clear the cart items (assuming setCartItems is a function that updates the state)
    setCartItems([]);
    // Navigate to the checkout page
    navigate(`/checkout/${newoder.orderId}`);
  };

  const handleChange = (e) =>{
    const { name, value,type, checked } = e.target;
    // const newValue = type === "radio" ? checked : value; 
    setRequi(schedule.current.checked) 
    setInputData((prevData) => ({ ...prevData, [name]: value }));

  }

  return (
    <div className="about">
      <Container>
        {isEmpty ? (
          <NoCheckOut />
        ) : (
          <div>
            <Row>
              <Col md={12}>
                <button
                  className="btn dish-btn d-flex"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <ArrowBackIcon />
                  GO TO BACK
                </button>
              </Col>
              <form onSubmit={placeOrder} >
                <Row>
              <Col
                xs={12}
                md={12}
                lg={8}
                // className="text-center"
                style={{ border: "1px  solid gray" }}
              >
                  <Row className="checkOutRows">
                    <Col md={3}>
                      <span>Method</span>
                    </Col>
                    <Col md={9}>
                      <input
                        type="radio"
                        name="method"
                        id="method"
                        value={"Pickup"}
                        onChange={(e)=>{ handleChange(e)}}
                        defaultChecked
                        readOnly
                      />
                      <label htmlFor="method">Pick up</label>
                    </Col>
                  </Row>
                  <Row className="checkOutRows">
                    <Col md={3}>
                      <span>Pickup Time</span>
                    </Col>
                    <Col md={9}>
                      <Row>
                        <Col md={12}>
                          <input
                            type="radio"
                            name="pickupTime"
                            id="pickup1"
                            value={"15 to 30 min"}
                            onChange={(e)=>{ handleChange(e)}}
                            defaultChecked
                          />
                          <label htmlFor="pickup1">15 to 30 minutes</label>
                        </Col>
                        <Col md={12}>
                          <input
                            type="radio"
                            name="pickupTime"
                            id="pickup2"
                            value={"schedule"}
                            onChange={(e)=>{ handleChange(e)}}
                            ref={schedule}
                            
                          />
                          <label htmlFor="pickup2">Schedule for later</label>
                        </Col>
                        <Col md={12}>
                          <input type="datetime-local" name="pickupDate" onChange={(e)=>{ handleChange(e)}}  required={requi}/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  {/* Get order update text message start */}
                  <Row className="checkOutRows">
                    <Col md={3}>
                      <span>Get order update text message</span>
                    </Col>
                    <Col md={9}>
                      <Row>
                        <Col md={12}>
                          <input
                            type="radio"
                            name="orderUpdatemsg"
                            id="orderUpdate1"
                            value={true}
                            onChange={(e)=>{ handleChange(e)}}
                            defaultChecked
                          />
                          <label htmlFor="orderUpdate1">Yes</label>
                        </Col>
                        <Col md={12}>
                          <input
                            type="radio"
                            name="orderUpdatemsg"
                            id="orderUpdate2"
                            onChange={(e)=>{ handleChange(e)}}
                            value={false}
                          />
                          <label htmlFor="orderUpdate2">No</label>
                        </Col>
                        <Col md={12}>
                          <div style={{ color: "#33AFCB" }}>
                            Message & data rates may apply
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {/* Get order update text message end */}

                  {/* Cell Number start*/}
                  <Row className="checkOutRows">
                    <Col md={3}>
                      <span>Cell Number</span>
                    </Col>
                    <Col md={9}>
                      <Row>
                        <Col md={12}>
                          <InputMask
                            mask="999-999-9999"
                            maskChar={"_"}
                            placeholder={"___-___-____"}
                            onChange={(e)=>{ handleChange(e)}}
                            name="phoneNumber"
                            required
                          />
                        </Col>

                        <Col md={12}>
                          <div style={{ color: "#33AFCB" }}>
                            Message & data rates may apply
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {/* Cell Number end*/}

                  <Row className="checkOutRows">
                    <Col md={3}>
                      <span>Special instructions</span>
                    </Col>
                    <Col md={9}>
                      <textarea
                        className="form-control"
                        name="specialInstructions"
                        placeholder="Special instructions"
                        rows={5}
                        style={{ resize: "none" }}
                        onChange={(e)=>{ handleChange(e)}}
                      />
                    </Col>
                  </Row>
                  {/* payment  */}
                  <Row className="checkOutRows">
                    <Col md={3}>
                      <span>Payment</span>
                    </Col>
                    <Col md={9}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="payment"
                        value={"payment at resturent"}
                        onChange={(e)=>{handleChange(e)}}
                        defaultChecked
                        readOnly
                      />
                      <label htmlFor="payment">Payment at Resturent</label>
                    </Col>
                  </Row>
               
                {/* Summay of items */}
                <Row>
                  <Col xs={12} md={12} lg={12} className=" checkOutRows">
                    Summay
                  </Col>
                  <Col xs={12} md={12} lg={12} className="text-center p-0">
                    <table className="table text-center  SummaryTable">
                      <thead>
                        <tr>
                          <td>NAME</td>
                          <td>PRICE</td>
                          <td>TOTAL</td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((e, i) => {
                          let p = e.price * e.quantity;
                          return (
                            <tr className="checkOutRows" key={i}>
                              <td className="name">{e.name}</td>
                              <td>
                                ${e.price + " "}x{" " + e.quantity}
                              </td>
                              <td>${p.toFixed(2)}</td>
                              <td className="remove">
                                <div
                                  className="btn-close"
                                  aria-label="remove"
                                  onClick={() => rm(i)}
                                ></div>
                              </td>
                            </tr>
                          );
                        })}
                        {/* <tr className="checkOutRows">
                          <td className="name">HummusHummusHummus Grill</td>
                          <td>$85 x 4</td>
                          <td>$340</td>
                          <td className="remove">
                            <div
                              className="btn-close"
                              aria-label="remove"
                            ></div>
                          </td>
                        </tr>
                        <tr className="checkOutRows">
                          <td className="name">HummusHummusHummus Grill</td>
                          <td>$85 x 4</td>
                          <td>$340</td>
                          <td className="remove">
                            <div
                              className="btn-close"
                              aria-label="remove"
                            ></div>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </Col>
                  <Col md={12} className="text-center">
                    <button
                      className=" btn dish-btn btn-wide "
                      type="submit"
                    >
                      Place Order
                    </button>
                    <hr />
                    <table className="table mb-0 text-start">
                      <tbody>
                        <tr style={{ fontWeight: "bold" }}>
                          <td>Subtotal</td>
                          <td>${subTotal}</td>
                        </tr>
                        <tr className="display-1-6-col">
                          <td>Taxes</td>
                          <td>${taxes}</td>
                        </tr>
                        <tr className="display-1-6-col">
                          <td>Total</td>
                          <td>${total}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </Col>
              {/* Order Form Hummus Grill */}
              <Col
                xs={12}
                md={12}
                lg={4}
                style={{
                  border: "1px solid gray",
                  borderWidth: "1px 1px 1px 0px",
                }}
                className="display-orderForm"
              >
                <div>
                  <p> Order From </p>
                  <p>
                    <b>Hummus Grill</b>
                  </p>
                  <div className="text-center p-3">
                    <button
                      className="btn dish-btn btn-wide"
                      type="submit"
                    >
                      Place order
                    </button>
                  </div>
                </div>
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>${subTotal}</td>
                    </tr>
                    <tr>
                      <td>Taxes</td>
                      <td>${taxes}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>${total}</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              </Row>
              </form>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CheckOut;
export { NoCheckOut };
