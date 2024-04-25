import { Appstate } from "../App";
import React, { useState,useContext } from "react";
import logo from "../Assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from '@mui/icons-material/Person';
import Breadcrumbs from "./Breadcrumb";

function BasicExample() {
  const [show, setShow] = useState(true);
  const useAppSate = useContext(Appstate);

  return (
    <>
    <header>
      {/* Upper fixed bar */}
      <div className="top bg-black">
        <Container className="upperFixedBar">
          <a href="tel:+1240-513-6020" className="link ">
            <LocalPhoneIcon className="header-icon" />
            Hotline: 240-513-6020
          </a>

          <ul className="d-flex">
            <li onClick={()=>{ useAppSate.setShowMycart(true);}}>
             
              <ShoppingCartSharpIcon className="header-icon"/> Cart {" "} <span>0</span>
             
            </li>
            <li>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                <PersonIcon className="header-icon"/>  My Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {show ? (
                    <>
                      <Link to={"login"} className="dropdown-item">
                        Login
                      </Link>
                      <Link to={"register"} className="dropdown-item">
                        Register
                      </Link>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item>Dashboard</Dropdown.Item>
                      <Dropdown.Item>LogOut</Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <FacebookOutlinedIcon className="header-icon"/>
            </li>
          </ul>
        </Container>
      </div>
      <div>
        <Navbar
          expand="lg"
          className="NavBar"
          style={{ background: "rgba(19, 18, 18, 0.7)" }}
        >
          <Container>
            <Link to="/" className="flex-full">
              {" "}
              <Navbar.Brand>
                <img
                  src={logo}
                  alt="Hummus-Grill"
                  style={{ maxHeight: "100px" }}
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="menu-link p-0 fs-5"
            >
              Menu
            </Navbar.Toggle>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-warning"
            >
              <MenuIcon className="text-warning" />
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav" className="  flex-grow-0">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
                <Link to="/menu" className="nav-link">
                  MENU
                </Link>
                <NavDropdown title="BUILD YOUR MEAL" id="basic-nav-dropdown">
                  <Link to="create-bowl" className="dropdown-item">
                    CREATE BOWL
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="create-wrap" className="dropdown-item">
                    CREATE WRAP
                  </Link>
                </NavDropdown>
                <Link to="/signature-wrap" className="nav-link">
                  SIGNATURE WRAPS
                </Link>
                <Link to="/order-history" className="nav-link">
                  ORDER HISTORY
                </Link>
                <Link to="about" className="nav-link">
                  ABOUT US
                </Link>
                <Link to="contact" className="nav-link">
                  CONTACT US
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
    <Breadcrumbs/>
    </>
  );
}

export default BasicExample;
