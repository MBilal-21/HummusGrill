import React from "react";
import createBowl from "../../Assets/createBowl.jpeg";
import createWrap from "../../Assets/createWrap.jpg";
import signatureWrap from "../../Assets/signatureWrap.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Divider from "../Divider";

const Dish = (props) => {
  return (
    <div
      className="col-sm-6"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <div className="build-img">
        <Link to={props.link}>
          <div
            className="bg-img"
            style={{ backgroundImage: `url(${props.img})` }}
          ></div>
        </Link>
        <div className="build-overlay">
          <Link to={props.link} className="btn link btn-theme btn-wide dish-btn">
            {" "}
            {props.btn}
          </Link>
        </div>
      </div>
    </div>
  );
};
const Dishes = () => {
  return (
    <Container>
      <Row className="dishes">
        <div className="col-sm-12 commontop text-center text-light">
          <h4>BUILD YOUR OWN MEAL</h4>
          <Divider/>
          <p>Create your Meal to fit your taste.</p>
        </div>
        <Dish link={"create-bowl"} img={createBowl} btn={"Craete a Bowl"} />
        <Dish link={"create-bowl"} img={createWrap} btn={"Craete a Wrap"} />
        <Dish link={"create-bowl"} img={signatureWrap} btn={"Signature Wraps"} />
      </Row>
    </Container>
  );
};


export default Dishes;
