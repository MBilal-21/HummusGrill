import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import SectionHeader from "../SectionHeader";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link, useLocation } from "react-router-dom";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import person from "../../Assets/person.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const OrderedHistory = () => {
  const [orderedHistory, setOrderedHistory] = useState([]);
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('Orders'));
    setOrderedHistory(data);
  },[])
  return (
    <Col>
      <div className="overview">
        <h5>ordered history</h5>
        <div className="orderHistory px-3 py-2 bg-light">
        {orderedHistory.map((o,i)=>{
         return (
         <Row className="mb-2 border-bottom" key={i}>
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2">{o.orderId}</Col>
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2 text-primary">{o.orderStatus}</Col>
            <Col xs={6} sm={6} md={3} lg={3} className="mb-2"> 
                <button className="btn btn-warning text-light"> Re Order</button>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}  className="mb-2">
            <Link to={`/view-ordered-history/${i}`}><button className="btn btn-primary text-light">View</button></Link>
            </Col>
         </Row>
        )})}
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
