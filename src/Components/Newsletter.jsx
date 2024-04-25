import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";


const Newsletter = () => {

  const [Input, setInput] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((preState) => ({ ...preState, [name]: value }));
  };

 // Defining the handleClick function to handle form submission
 const handleClick = async (e) => {
  e.preventDefault();
// write your logic you will get data through variable Input
};

  return (
   
      <Container className='container-bg-clr row m-auto newsletter'>
        <div className='col-md-6 col-xs-12  text-center news-div-1' >
          <h4 style={{fontSize:"24px", fontWeight:600}}>NEWSLETTER</h4>
          <p>Join Our News Letter and Marketing Correspondence<br/> We'll send you news and offers.</p>
        </div>
        <div className='col-md-6 col-xs-12  news-div-2'>
        <Form onSubmit={handleClick}>

            <Form.Group
              className="inputPlusIcon" 
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="email"
           className='w-100'
                placeholder="Email"
                onChange={handleChange}
                name="email"
                required
              />
           
            </Form.Group>
            <button type="submit" className="dish-btn btn  border">
              Send
            </button>
              </Form>
        </div>
      </Container>
   
  )
}

export default Newsletter
