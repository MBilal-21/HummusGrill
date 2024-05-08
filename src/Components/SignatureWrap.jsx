import React ,{ useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ItemsMap from './ItemsMap'
import Container from "react-bootstrap/Container";
import { useLocation } from 'react-router-dom';
import Divider from './Divider';

function SignatureWrap() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const scrollSignature = useRef(null);
    const executeScroll = () => {
        scrollSignature.current.scrollIntoView();
        console.log(scrollSignature.current);
    }
    
    useEffect(()=>{
      if(location.pathname === "/signature-wrap"){ 
        executeScroll();
        setOpen(true);

      }else{
        setOpen(false);
    }
    },[location])

  return (
    <>
    
      <Container ref={scrollSignature}>
      <Collapse in={open}  >
        <div id="example-collapse-text"  >
        <div className=" text-center">
        <hr  className="theline"/>
        <h4>Signature Wrap</h4>
        <Divider />
        <p>Come and try us, we promise you will not be disappointed!</p>
      </div>
         <ItemsMap/>
        </div>
      </Collapse>
      
      </Container>
    </>
  );
}

export default SignatureWrap;
