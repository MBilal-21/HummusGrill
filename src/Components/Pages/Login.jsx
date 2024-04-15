// Importing necessary dependencies and hooks from React
import React, { useEffect, useState } from "react";

// Importing the Divider component
import Divider from "../Divider";

// Importing the Container component from react-bootstrap
import Container from "react-bootstrap/Container";
// Importing the Link component from react-router-dom
import { Link } from "react-router-dom";
// Importing the Form component from react-bootstrap
import Form from "react-bootstrap/Form";
// Importing the LockIcon from @mui/icons-material
import LockIcon from "@mui/icons-material/Lock";

// Importing the EmailIcon from @mui/icons-material
import EmailIcon from "@mui/icons-material/Email";

// Defining the Login functional component
const Login = () => {
  // Initializing state for error and input using useState hook
  const [err, setError] = useState(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // Using useEffect hook to log the input state whenever it changes
  useEffect(() => {
    // console.log(input);
  }, [input]);

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
          <h4>Login To Your Account</h4>
          <Divider />
        </div>
        <div className="registerContainer p-3  m-auto col-sm-12 col-md-6 offset-sm-0 offset-md-3 offset-lg-3">
          <div className="text-left">
            <h5 className="text-center">Login</h5>
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
            <div className="d-flex justify-content-between">
              <Form.Group>
                <Form.Check
                  inline
                  type={"checkbox"}
                  id="rememberme"
                  onChange={handleChange}
                  name="rememberMe"
                />
                <label htmlFor="rememberme"> Remember Me</label>
              </Form.Group>
              <Link to={"/passwordreset"}>Forget Password?</Link>
            </div>
            <button type="submit" className="px-4 py-1 dish-btn my-4">
              Login
            </button>
            {err && <p className="text-danger">{err}</p>}
          </Form>
        </div>
      </Container>
    </div>
  );
};

// Exporting the Login component
export default Login;
