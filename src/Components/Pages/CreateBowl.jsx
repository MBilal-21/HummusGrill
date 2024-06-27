import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import CreateBag from "../CreateBag";
import CreateChoiceItems from "../CreateChoiceItems";

const CreateBowl = () => {
useEffect(()=>{
  console.log("create bowl");
},[])
  return (
    <Container className=" createSection">
      <CreateChoiceItems />
      <CreateBag />
      <div className="container-bg-clr intruction col-sm-8 col-xs-8 offset-md-1 offset-sm-1">
        <div className="my-2 fs-4">Special Intruction</div>
        <input type="text" placeholder="Type Here......." />
      </div>
    </Container>
  );
};

export default CreateBowl;
