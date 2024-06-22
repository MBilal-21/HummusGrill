import React from "react";
import Collapse from "react-bootstrap/Collapse";
import ItemsMap from "./ItemsMap";
import Container from "react-bootstrap/Container";
import Divider from "./Divider";
import { ItemList } from "../itemsList/items";

function SignatureWrap({ open }) {
  const SignatureItems = ItemList[0].Signature;
  return (
    <>
      <Container>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div className=" text-center">
              <hr className="theline" />
              <h4>Signature Wrap</h4>
              <Divider />
              <p>Come and try us, we promise you will not be disappointed!</p>
            </div>
            <ItemsMap items={SignatureItems}/>
          </div>
        </Collapse>
      </Container>
    </>
  );
}

export default SignatureWrap;
