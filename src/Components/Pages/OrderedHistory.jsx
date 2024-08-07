import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { Appstate } from "../../App";

const OrderedHistory = () => {
  const [orderedHistory, setOrderedHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setCartItems, subTotal, setFormattedSubTotal,handleClose } =
    useContext(Appstate);
  const data = JSON.parse(localStorage.getItem("Orders"));
  useEffect(() => {
    if (data) {
      setOrderedHistory(data);
      setLoading(false);
    }
  }, []);
  const reOrder = (index) => {
    let p = subTotal;
    console.log(subTotal);
    
    p = Number(p) + Number(data[index].subTotal);
    const reOrderItems = data[index].orderItems;
    setCartItems((pre) => [...pre, ...reOrderItems]);
    setFormattedSubTotal(p);
    handleClose("cart");
  };

  return (
    <Col>
      <div className="overview">
        <h5>ordered history</h5>
        <div className="orderHistory px-3 py-2 bg-light">
          {loading ? (
            <Loading />
          ) : !orderedHistory ? (
            <div>You have not PLace any Order yet</div>
          ) : (
            orderedHistory.map((o, i) => {
              return (
                <Row className="mb-2 border-bottom" key={i}>
                  <Col xs={6} sm={6} md={3} lg={3} className="mb-2">
                    {o.orderId}
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={3}
                    lg={3}
                    className="mb-2 text-primary"
                  >
                    {o.orderStatus}
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3} className="mb-2">
                    <button
                      className="btn btn-warning text-light"
                      onClick={() => reOrder(i)}
                    >
                      {" "}
                      Re Order
                    </button>
                  </Col>
                  <Col xs={6} sm={6} md={3} lg={3} className="mb-2">
                    <Link to={`/view-ordered-history/${i}`}>
                      <button className="btn btn-primary text-light">
                        View
                      </button>
                    </Link>
                  </Col>
                </Row>
              );
            })
          )}
          {/* <Row className="mb-2 border-bottom">
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2">{"00007"}</Col>
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2">{"pending"}</Col>
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2"> 
                <button className="btn btn-warning text-light"> Re Order</button>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}  className="mb-2">
            <Link to={"/view-ordered-history/123"}><button className="btn btn-primary text-light">View</button></Link>
            </Col>
         </Row>
         <Row className="mb-2 border-bottom">
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2">{"Order ID"}</Col>
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2">{"pending"}</Col>
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2"> 
                <button className="btn btn-warning text-light"> Re Order</button>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}  className="mb-2">
            <Link to={"/view-ordered-history/123"}><button className="btn btn-primary text-light">View</button></Link>
            </Col>
         </Row>
          */}
        </div>
      </div>
    </Col>
  );
};

export default OrderedHistory;
