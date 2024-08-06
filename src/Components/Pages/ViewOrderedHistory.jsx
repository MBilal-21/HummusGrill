import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loading from "../Loading";
const ViewOrderedHistory = () => {
  const { orderid } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(()=>{
    const orders = JSON.parse(localStorage.getItem("Orders"));
   return orders ? orders[orderid] : null;
  });
  useEffect(() => {

    let d = JSON.parse(localStorage.getItem("Orders"));
    if (d[orderid]) {
      setData(d[orderid]);
      setLoading(false)
    }
  }, []);
  return (
    <div className="about" style={{ background: "#f1f1f1" }}>
      {loading? <Loading/>:<Container>
        <SectionHeader heading={"Order Details"} />
        <div>
        { data.placeData.specialInstructions && <p> <strong>Remark:</strong> {data.placeData.specialInstructions}</p>}
         {data.placeData.pickupDate && <p> <strong>Pickup date:</strong> {data.placeData.pickupDate}</p>}
        </div>
        <div className="d-flex gap-2 align-items-center">
       <Link to={-1}> <button className="btn btn-primary d-flex align-items-center"><ArrowBackIcon style={{fontSize:"20px"}}/> &nbsp;Back </button></Link>
        <div className="bg-warning text-white p-2 rounded">Order ID : {data.orderId}</div>
        </div>
        <div className="view-order-body">
          { data.orderItems.map((item, index) => (
            <div key={index}>
              <Row className="view-content">
                <Col sm={12} md={3}>
                  <img src={item.image} alt={item.name} width={100} />
                </Col>
                <Col sm={12} md={6} className="text-start">
                  <h2>{item.name}</h2>
                  <p>{item.about}</p>

                  <ul className="itemsList p-0 mt-2">
                    <li>
                      {item.category === "signature" &&
                        item.ingrediants.map((ingrediant, i) => (
                          <span key={i}>
                            {ingrediant.selected && ingrediant.name + ", "}
                          </span>
                        ))}
                      {item.category === "createMeal" &&
                        item.ingrediants.map((ingrediant, i) => {
                          return (
                            <ul key={i} style={{listStyleType:"disc" }}>
                              <li  style={{ textDecorationLine: "underline", fontSize:"1.3rem" }}>
                                {ingrediant.name}
                              </li>
                              <ul  style={{listStyleType:"circle" }}>
                                {" "}
                                {ingrediant.skipAll ? (
                                  <li style={{ fontWeight: "bold" }}>
                                    skipped {ingrediant.name}
                                  </li>
                                ) : (
                                  ingrediant.items.map((e, index) => (
                                    <React.Fragment key={e.id + index}>
                                      {e.selected && (
                                        <>
                                          {" "}
                                          <li><strong> {e.name}</strong></li>
                                          <ul  style={{listStyleType:"disc" }}>
                                            <li>Quantity : 1</li>
                                            <li>
                                              Extra Price{" : "}
                                              {e.price
                                                ? parseFloat(e.price).toFixed(2)
                                                : "0.00"}
                                            </li>
                                          </ul>
                                        </>
                                      )}{" "}
                                      {e.addExtra && (
                                        <>
                                          <li><strong> {"Extra" + e.name}</strong></li>
                                          <ul>
                                            <li>Quantity : 1</li>
                                            <li>
                                              Extra Price{" : "}
                                              {e.ExtraPrice
                                                ? parseFloat(
                                                    e.ExtraPrice
                                                  ).toFixed(2)
                                                : "0.00"}
                                            </li>
                                          </ul>
                                        </>
                                      )}{" "}
                                    </React.Fragment>
                                  ))
                                )}
                              </ul>
                            </ul>
                          );
                        })}
                    </li>
                  </ul>
                </Col>
                <Col sm={12} md={3}>
                  <div>
                    <span className="text-success">
                      {"(Quantity " + item.quantity + " )"}
                    </span>{" "}
                    <br />
                    <span className="text-warning">
                      $
                      {parseFloat(
                        Number(item.price) * Number(item.quantity)
                      ).toFixed(2)}
                    </span>
                  </div>
                </Col>
              </Row>
              <hr />
            </div>
          ))}
          <Row className="text-secondary">
            <Col xs={12} sm={6}  className="text-start ">
              <strong>Order Date: </strong> {data?.orderDate}
            </Col>
            <Col xs={12} sm={6} className="text-end">
              <span>
                <strong>Sub Total:</strong> ${data.subTotal}
                <br />
                <strong>Sales tax :</strong> ${data.taxes}
                <br />
                <strong> Total:</strong> ${data.total}
              </span>
            </Col>
          </Row>
        </div>
      </Container>}
    </div>
  );
};

export default ViewOrderedHistory;
