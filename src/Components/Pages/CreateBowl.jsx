import React from "react";
import Container from "react-bootstrap/Container";
import CreateBag from "../CreateBag";
import CreateChoiceItems from "../CreateChoiceItems";

const CreateBowl = () => {
  return (
    <Container className=" createSection">
      <CreateChoiceItems />
      <CreateBag />
    </Container>
  );
};

export default CreateBowl;
