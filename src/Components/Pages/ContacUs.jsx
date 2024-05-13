import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import Divider from '../Divider'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContacUs = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };


  
    const [err, setError] = useState(null);
    const [input, setInput] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      phoneNumber: "", // Added phoneNumber field
      address: "", // Added address field
      status: "", // Added status field
      promoMsg: "", // Changed promo-msg to promoMsg
      agreeTerms: false, // Added agreeTerms field
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setInput((preState) => ({ ...preState, [name]: newValue }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        // Here you can perform form validation and backend logic
        // For now, let's just log the input
        //  setError(error.response.data) use this in catch block
      };
      
  return (
    <div className="about Contact-us">
    <div className="container">
    <div className="text-center commontop">
          <h4 className='m-0'>Get in Touch</h4>
          <Divider />
        </div>
      
      <div className="row" style={{ alignItems: "center", paddingTop:"50px" }}>
        {/* <!-- contact us form --> */}
        <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12 commontop text-left">
        <Form onSubmit={handleClick} >
            <Form.Group className="inputPlusIcon my-3">
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="Name"
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
                onChange={handleChange}
                name="phoneNumber"
                required
              />
           
              <LocalPhoneIcon className="iconStyle" />
            </Form.Group>
           
            <Form.Group className="inputPlusIcon my-3">
            <Form.Control as="textarea" aria-label="With textarea" rows="5" spellCheck="false" placeholder='Enter your Message here' style={{resize:"none"}} />
            <EmailIcon className="iconStyle" style={{top:"5px"}} />
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
        <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:  process.env.REACT_APPGoogleApi }}
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
  )
}

export default ContacUs




