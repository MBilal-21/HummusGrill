import React from "react";
import createBowl from "../../Assets/createBowl.jpeg";
import createWrap from "../../Assets/createWrap.jpg";
import signatureWrap from "../../Assets/signatureWrap.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import SectionHeader from "../SectionHeader";

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
        <SectionHeader heading={"BUILD YOUR OWN MEAL"} about={"Create your Meal to fit your taste."}/>
        <Dish link={"/create-bowl"} img={createBowl} btn={"Craete a Bowl"} />
        <Dish link={"/create-wrap"} img={createWrap} btn={"Craete a Wrap"} />
        <Dish link={"/signature-wrap"} img={signatureWrap} btn={"Signature Wraps"} />
      </Row>
    </Container>
  );
};


export default Dishes;
