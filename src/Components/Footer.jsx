import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../Assets/logo-white.png";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="row">
          {/* <!-- Footer Widget Start --> */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled contact">
              <li className="d-inline-flex flex-nowrap gap-2 align-items-center">
                <LocationOnIcon className="text-warning fs-6 " />
                11205 John F Kennedy Dr, Hagerstown, MD 21742
              </li>
              <li>
                <a href="tel:+12405136020" className="link d-inline-flex flex-nowrap gap-2 align-items-center">
                  <PhoneIcon className="text-warning fs-6" /> 240-513-6020
                </a>
              </li>
              <li>
                <a href="mailto:info@hummusgrill.net" className="link d-inline-flex flex-nowrap gap-2 align-items-center">
                  <MailIcon className="text-warning fs-6" />{" "}
                  info@hummusgrill.net
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Footer Widget End --> */}
          {/* <!-- Footer Widget Start --> */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <h5>Information</h5>
            <p style={{textAlign:"justify"}}>
              Find out why our customers rave about us. We have been a part of
              the Hagerstown community since 2018. We use only the best
              ingredients, it must be fresh in order to be used in our dishes.
            </p>
            {/* <!-- Footer Widget End --> */}
          </div>

          {/* <!-- Footer Widget Start --> */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <h5>Open Hours</h5>
            <ul className="list-unstyled">
              <li>Monday - Sunday :11.00 AM to 09.00 PM</li>
            </ul>
          </div>
          {/* <!-- Footer Widget End --> */}

          {/* <!-- Footer Widget Start --> */}
          {/* <div className="col-sm-6 col-md-6 col-lg-3"></div> */}
          {/*  Footer Widget End */}
        </div>
      </Container>

      {/*   Copyright Start  */}
      <Container className="copyright container-bg-clr">
        <div className="m-0 d-flex  justify-content-between align-items-center py-3 text-center flex-wrap">
          <div className="">
            <Image src={logo} fluid alt="logo" width={120} />
          </div>
          <div className="order-md-2">
            {/*   Footer Social Start */}
            <ul className="d-flex align-item-center m-0">
              <li><a href="https://www.facebook.com/hummusmd/" target="_blank"  rel="noreferrer" className="link"> <FacebookSharpIcon /></a></li>
              <li><a href="https://www.facebook.com/hummusmd/" target="_blank"  rel="noreferrer" className="link"> <FacebookSharpIcon /></a></li>
              <li><a href="https://www.facebook.com/hummusmd/" target="_blank"  rel="noreferrer" className="link"> <FacebookSharpIcon /></a></li>
            </ul>
            {/*  Footer Social End */}
          </div>
          <div className="m-auto">
            <p className="m-0">
              Copyright © <span>Hummus Grill</span> 2024. All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
      {/* <!--  Copyright End --> */}
    </footer>
  );
};

export default Footer;
