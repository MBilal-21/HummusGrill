import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputMask from "react-input-mask";

const CheckOut = () => {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          md={12}
          lg={8}
          // className="text-center"
          style={{ border: "1px solid grey" }}
        >
          <form>
            <Row className="checkOutRows">
              <Col md={3}>
                <span>Method</span>
              </Col>
              <Col md={9}>
                <input
                  type="radio"
                  name="method"
                  id="method"
                  value={"Pickup"}
                />
                <label htmlFor="method">Pick up</label>
              </Col>
            </Row>
            <Row  className="checkOutRows">
              <Col md={3}>
                <span>Pickup Time</span>
              </Col>
              <Col md={9}>
                <Row>
                <Col md={12}>
                <input
                  type="radio"
                  name="method"
                  id="pickup1"
                  value={"15to30min"}
                  />
                <label htmlFor="pickup1">15 to 30 minutes</label>
                </Col>
                <Col md={12}>
                <input
                  type="radio"
                  name="method"
                  id="pickup2"
                  value={"Pickup"}
                  />
                <label htmlFor="pickup2">Schedule for later</label>
                </Col>
                <Col md={12}>
                <input type="datetime-local" name="" id="" />
                </Col>
                  </Row>
              </Col>
            </Row>
          
          {/* Get order update text message start */}
            <Row  className="checkOutRows">
              <Col md={3}>
                <span>Get order update text message</span>
              </Col>
              <Col md={9}>
                <Row>
                <Col md={12}>
                <input
                  type="radio"
                  name="orderUpdate"
                  id="orderUpdate1"
                  value={"yes"}
                  />
                <label htmlFor="orderUpdate1">Yes</label>
                </Col>
                <Col md={12}>
                <input
                  type="radio"
                  name="orderUpdate"
                  id="orderUpdate2"
                  value={"no"}
                  />
                <label htmlFor="orderUpdate2">No</label>
                </Col>
                <Col md={12}>
                <div style={{color:"blue"}}>Message & data rates may apply</div>
                </Col>
                  </Row>
              </Col>
            </Row>
          {/* Get order update text message end */}

            {/* Cell Number start*/}
            <Row  className="checkOutRows">
              <Col md={3}>
                <span>Cell Number</span>
              </Col>
              <Col md={9}>
                <Row>
                
              <Col md={12}>
              <InputMask
                
                mask="999-999-9999"
                maskChar={"_"}
                placeholder={"___ ___ ____"}
                // onChange={handleChange}
                name="phoneNumber"
                required
              />
              </Col>
           
                <Col md={12}>
                <div style={{color:"blue"}}>Message & data rates may apply</div>
                </Col>
                  </Row>
              </Col>
            </Row>
            {/* Cell Number end*/}

            <Row className="checkOutRows">
              <Col md={3}>
                <span>Special instructions</span>
              </Col>
              <Col md={9}>
                <textarea
                className="form-control"
                  name="specialInstructions"
                  placeholder="Special instructions"
                  rows={5}
                  // onChange={handleChange}
                  // value={values.specialInstructions}

                />
              </Col>
            </Row>
            <Row className="checkOutRows">
              <Col md={3}>
                <span>Payment</span>
              </Col>
              <Col md={9}>
                <input
                  type="radio"
                  name="payment"
                  id="payment"
                  value={"payment"}
                />
                <label htmlFor="payment">Payment at Resturent</label>
              </Col>
            </Row>
            
            

          </form>
          <Row>
            <Col xs={12} md={12} lg={12} className="text-center"></Col>
          </Row>
        </Col>
        <Col xs={12} md={12} lg={4} className="text-center"></Col>
      </Row>
    </Container>
  );
};

export default CheckOut;
