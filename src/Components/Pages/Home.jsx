import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../Assets/banner-1.jpg";
import banner2 from "../../Assets/banner-2.jpg";
import banner3 from "../../Assets/banner-3.jpg";
import banner4 from "../../Assets/banner-4.jpg";
import logoIcon from "../../Assets/logo-icon.png";
import SignatureWrap from "../SignatureWrap";
import Newsletter from "../Newsletter";
import OurMenu from "./OurMenu";
import Dishes from "./Dishes";

const Home = () => {
  const [openSignature, setOpenSignature] = useState(false);
  const location = useLocation();
  const scrollref = useRef(null);
  const executeScroll = () => scrollref.current.scrollIntoView();

  useEffect(() => {
    if (
      location.pathname.startsWith("/menu") ||
      location.pathname.startsWith("/signature-wrap")
    ) {
      executeScroll();
    }
    location.pathname.startsWith("/signature-wrap")
      ? setOpenSignature(true)
      : setOpenSignature(false);
  }, [location]);

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
          <img src={logoIcon} alt="logo" className="img-fluid" />
          <h4>SAVE TIME, ORDER ONLINE!</h4>
          <h4>MON-SUN :11:00 AM TO 9:00 PM</h4>
          <h4>LAST ONLINE ORDER: 8:45 PM</h4>
          <Link to={"/menu"}>
            <Button className="btnHome" variant="outline-warning">
              Today's menu
            </Button>
          </Link>
        </Container>
      </div>
      {/* Button + images create bowl and wrap and signature wrap */}
      <Dishes />
      <div ref={scrollref}></div>
      {/* Signature wrap items */}
      <SignatureWrap open={openSignature} />
      {/* our menu section */}
      <OurMenu />
      <Newsletter />
    </>
  );
};

export default Home;
