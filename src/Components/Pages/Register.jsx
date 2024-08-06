import React, { useContext, useEffect, useState } from "react";
import Divider from "../Divider";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InputMask from "react-input-mask";
import { TermsAndCondition } from "../ModelsCartAndTerms";

import Button from "react-bootstrap/Button";
import { Appstate } from "../../App";

const Register = () => {
  const [showTerms, setShowTerms] = useState(false);
  const handleShow = () => setShowTerms(true);
  const [err, setError] = useState(null);
  const [matchPass, setmatchPass] = useState(true);
  const [passLengthErr, setPassLengthErr] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "", // Added phoneNumber field
    address: "", // Added address field
    orderStatus: true, // Added status field
    promoMsg: true, // Changed promo-msg to promoMsg
    agreeTerms: false, // Added agreeTerms field
    image: "",
  });
  const n = useNavigate();
  const { userState, setUserState } =  useContext(Appstate);

  useEffect(() => {
    if (userState) {
      n("/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;
    if (type === "radio") {
      if (value === "true") {
        newValue = true;
      } else {
        newValue = false;
      }
    }

    setInput((preState) => ({ ...preState, [name]: newValue }));
    if (name === "password" || name === "repeatPassword") {
      setmatchPass(true);
    }
    setError(null);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if(input.password.length < 6){
      setPassLengthErr(true);
      return;
    }
    if (input.password !== input.repeatPassword) {
      setmatchPass(false);
    } else {
      setmatchPass(true);
      if (
        window.confirm(
          `Registration will be succesfull or error email found \n ${
            input.firstName + "\n" + input.email
          }`
        )
      ) {
        setError(null);
        try {
          localStorage.setItem("user", JSON.stringify(input));
          setUserState(true);
          navigate("/");
        } catch (error) {
          setError(error);
        }
      } else {
        setError("The Error will be show here!");
      }
      // Here you can perform form validation and backend logic
      // For now, let's just log the input
      //  setError(error.response.data) use this in catch block
    }
  };

  return (
    <div className="registerDiv">
      <TermsAndCondition setShow={setShowTerms} show={showTerms} />
      <Container className="text-black py-5">
        <div className="text-center commontop">
          <h4>CREATE AN ACCOUNT</h4>
          <Divider />
        </div>
        <div className="registerContainer p-3  m-auto col-sm-12 col-md-6 offset-sm-0 offset-md-3 offset-lg-3">
          <div className="text-left">
            <h5 className="text-center">Register</h5>
            <p>
              Do You have an account? So <Link to={"/login"}> login</Link> And
              starts less than a minute
            </p>
          </div>
          <Form onSubmit={handleClick}>
            <Form.Group className="inputPlusIcon mb-3">
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                required
              />
              <PersonIcon className="iconStyle" />
            </Form.Group>
            <Form.Group className="inputPlusIcon mb-3">
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                required
              />
              <PersonIcon className="iconStyle" />
            </Form.Group>
            <Form.Group
              className="inputPlusIcon mb-3"
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
            <Form.Group className="inputPlusIcon mb-3">
              <InputMask
                className="form-control"
                mask="999 999 9999"
                maskChar={"_"}
                placeholder={"___ ___ ____"}
                onChange={handleChange}
                name="phoneNumber"
                required
              />
              <LocalPhoneIcon className="iconStyle" />
            </Form.Group>
            <Form.Group className="inputPlusIcon mb-3">
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={handleChange}
                name="address"
                required
              />
              <HomeIcon className="iconStyle" />
            </Form.Group>
            <div>

            {passLengthErr && (
                <p className="m-0 text-danger">Minimum length of password should be 6</p>
              )}
            <Form.Group
              className="inputPlusIcon mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Control
                type="password"
                placeholder="PASSWORD"
                onChange={handleChange}
                name="password"
                required
              />
              <LockIcon className="iconStyle" />
            </Form.Group>
            </div>
            <div>
              {!matchPass && (
                <p className="m-0 text-danger">Password does not match</p>
              )}
              <Form.Group className="inputPlusIcon mb-3">
                <Form.Control
                  type="password"
                  placeholder="REPEAT PASSWORD"
                  onChange={handleChange}
                  name="repeatPassword"
                  required
                />
                <LockIcon className="iconStyle" />
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <p>Online Order status updates via Sms</p>
              <label className="mx-2">
                <Form.Check
                  inline
                  name="orderStatus"
                  type={"radio"}
                  value={true}
                  onChange={handleChange}
                  defaultChecked
                />
                Yes
              </label>
              <label className="mx-2">
                <Form.Check
                  inline
                  name="orderStatus"
                  type={"radio"}
                  value={false}
                  onChange={handleChange}
                />
                No
              </label>
            </Form.Group>
            <Form.Group className="mb-3">
              <p>
                Would you like to receive our exclusive promotion updates via
                SMS?
              </p>
              <label className="mx-2">
                <Form.Check
                  inline
                  name="promoMsg"
                  type="radio"
                  value={true}
                  onChange={handleChange}
                  defaultChecked
                />
                Yes
              </label>
              <label className="mx-2">
                <Form.Check
                  inline
                  name="promoMsg"
                  type="radio"
                  value={false}
                  onChange={handleChange}
                />
                No
              </label>
            </Form.Group>
            <Form.Group>
              <Form.Check
                inline
                type={"checkbox"}
                id="terms"
                onChange={handleChange}
                name="agreeTerms"
                required
              />
              <label htmlFor="terms"> By signing up I agree with </label>{" "}
              <Button
                variant="none"
                style={{
                  border: "none",
                  color: "#f0c713",
                  boxShadow: "none",
                  padding: 0,
                }}
                onClick={handleShow}
              >
                terms & conditions.
              </Button>
            </Form.Group>

            <button type="submit" className="px-4 py-1 dish-btn my-4">
              Sign up
            </button>
            {err && <p className="text-danger">{err}</p>}
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
