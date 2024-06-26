import React, {  useState } from "react";
import Divider from "../Divider";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import EmailIcon from "@mui/icons-material/Email";

const ResetPassword = () => {
  // Initializing state for error and input using useState hook
  const [err, setError] = useState(null);
  const [input, setInput] = useState({
    email: "",
  });

  // Using useEffect hook to log the input state whenever it changes


  // Defining the handleChange function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updating the input state with the new value
    setInput((preState) => ({ ...preState, [name]: value }));
  };

  // Defining the handleClick function to handle form submission
  const handleClick = async (e) => {
    e.preventDefault();
    // Here you can perform form validation and backend logic
    // For now, let's just log the input
    // setError(error.response.data) use this in catch block
  };

  // Returning the JSX for the Login component
  return (
    <div className="registerDiv">
      <Container className="text-black py-5">
        <div className="text-center commontop">
          <h4>Forget Password</h4>
          <Divider />
        </div>
        <div className="registerContainer p-3  m-auto col-sm-12 col-md-6 offset-sm-0 offset-md-3 offset-lg-3">
          <div className="text-left">
            <h5 className="text-center">RESET PASSWORD</h5>
            <p>
              Don't have an account? So <Link to={"/register"}> Register</Link>{" "}
              And starts less than a minute
            </p>
          </div>
          <Form onSubmit={handleClick}>
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
            <button type="submit" className="px-4 py-1 dish-btn my-2">
              Send Password Reset Link
            </button>
            {err && <p className="text-danger">{err}</p>}
          </Form>
        </div>
      </Container>
    </div>
  );
};


export default ResetPassword;
