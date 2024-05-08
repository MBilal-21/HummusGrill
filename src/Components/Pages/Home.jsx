import React, { useEffect, useState } from "react";
import banner1 from "../../Assets/banner-1.jpg";
import banner2 from "../../Assets/banner-2.jpg";
import banner3 from "../../Assets/banner-3.jpg";
import banner4 from "../../Assets/banner-4.jpg";
import logo from "../../Assets/logo.png";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dishes from "./Dishes";
import { Link, Outlet } from "react-router-dom";
import OurMenu from "./OurMenu";
import Newsletter from "../Newsletter";
import SignatureWrap from "../SignatureWrap";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Carousel
          data-bs-theme="dark"
          controls={false}
          indicators={false}
          style={{ zIndex: -1 }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 homeImageSlides"
              src={banner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 homeImageSlides"
              src={banner2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 homeImageSlides"
              src={banner3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 homeImageSlides"
              src={banner4}
              alt="forth slide"
            />
          </Carousel.Item>
        </Carousel>
        <Container className="homeTextContainer">
          <img src={logo} alt="logo" className="img-fluid" />
          <h4>SAVE TIME, ORDER ONLINE!</h4>
          <h4>MON-SUN :11:00 AM TO 9:00 PM</h4>
          <h4>LAST ONLINE ORDER: 8:45 PM</h4>
          <a href={"#ourMenu"}>
            <Button className="btnHome" variant="outline-warning">
              Today's menu
            </Button>
          </a>
        </Container>
      </div>
      {/* Button + images create bowl and wrap and signature wrap */}
      <Dishes />
      {/* Signature wrap items */}
      <SignatureWrap/>
      {/* our menu section */}
      <OurMenu/>
      <Newsletter/>
    </>
  );
};

export default Home;
