import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Divider from "../Divider";
import Form from "react-bootstrap/Form";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContacUs = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [contactSuccess, setContactSuccess] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((preState) => ({ ...preState, [name]: value }));
    setContactSuccess(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setContactSuccess(true);

    alert(input.name + "\n" + input.email + "\n"  + input.message + "\n" + input.phoneNumber);
    // Here you can perform form validation and backend logic
    // For now, let's just log the input
    //  setError(error.response.data) use this in catch block
  };

  return (
    <div className="about Contact-us">
      <div className="container">
        <div className="text-center commontop">
          <h4 className="m-0">Get in Touch</h4>
          <Divider />
        </div>

        <div
          className="row"
          style={{ alignItems: "center", paddingTop: "3rem" }}
        >
          {/* <!-- contact us form --> */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12 commontop text-left">
            {contactSuccess &&<div className="col col-12  p-3" style={{background:"aliceblue"}}> 
              <div className="btn-close float-end" onClick={()=>setContactSuccess(false)}></div>
              <div>Thank you for Contact us!</div>
            </div>}
            <Form onSubmit={handleClick}>
              <Form.Group className="inputPlusIcon my-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  name="name"
                  required
                />
                <PersonIcon className="iconStyle" />
              </Form.Group>

              <Form.Group
                className="inputPlusIcon my-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  required
                />
                <EmailIcon className="iconStyle" />
              </Form.Group>

              <Form.Group className="inputPlusIcon my-3">
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  onChange={handleChange}
                  required
                />

                <LocalPhoneIcon className="iconStyle" />
              </Form.Group>

              <Form.Group className="inputPlusIcon my-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  onChange={handleChange}
                  aria-label="With textarea"
                  rows="5"
                  spellCheck="false"
                  placeholder="Enter your Message here"
                  style={{ resize: "none" }}
                />
                <EmailIcon className="iconStyle" style={{ top: "5px" }} />
              </Form.Group>

              <button type="submit" className="px-4 py-3 dish-btn w-100 my-4 ">
                Send Message
              </button>
              {/* {err && <p className="text-danger">{err}</p>} */}
            </Form>
          </div>
          {/* <!-- contact us form End --> */}
          {/* <!-- google map End --> */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
            <div style={{ height: "500px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APPGoogleApi }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={39.622796628960124} //39.622796628960124, -77.67389752719437
                  lng={-77.67389752719437}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContacUs;
