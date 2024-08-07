import React, { useContext, useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import { Link, useParams } from "react-router-dom";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const ThanksCheckOut = () => {
   const {orderId} = useParams();
  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="text-center about">
      <div>
      <SectionHeader heading={"Thank You"} />
      <div className="mt-4">
        <ShoppingBasketOutlinedIcon
          color="success"
          style={{ fontSize: "100px" }}
        />
        <h2>
          Congratulations.
          <br />
          Your order was Completed Successfully.
        </h2>
        <div>
          <p className="fs-5" style={{ color:"gray"}}>
            <span style={{lineHeight:"3rem", fontWeight:"bold"}}> Hi {userName?.firstName + " "+userName?.lastName} </span> , <br />
            We have received your order. <br /> You Can Pick your order in 15 to
            30 min. <br />
            <span style={{lineHeight:"3rem", }}>Your Order ID: {orderId}</span>
          </p>
        </div>

        <Link to={"/"}>
          <button className="btn dish-btn btn-wide ">Go to Home</button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ThanksCheckOut;
