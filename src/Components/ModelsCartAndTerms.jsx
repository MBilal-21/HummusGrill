import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Divider from "./Divider";
import addtoCartImage from '../Assets/Items/MenuItems/menuDesserts1.jpg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Appstate } from "../App";

function Mycart() {
  
  const useAppState = useContext(Appstate);
  const handleClose = () => useAppState.setShowMycart(false);
  return (
    <>
      <Modal show={useAppState.showMycart} onHide={handleClose} className="Mycart text-black" >
        <Modal.Header closeButton>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a centered modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function AddToCart() {
  const [noofItem, setnoofItem] = useState(0);
  
  const useAppState = useContext(Appstate);
  const handleClose = () => useAppState.setShowAddToCart(false);


  return (
    <>
      <Modal show={useAppState.showAddToCart} onHide={handleClose} centered className="text-black text-center">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="px-0">
          <div>
          <img src={addtoCartImage} alt="image To add in cart" width={120}/>
          </div>
       
          <div className="text-light bg-black px-3 d-flex  justify-content-between align-items-center my-2">
            <h4>Name of Item</h4>
            <span>$Price</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center px-3" >
            <button><RemoveIcon/></button>
           <span>{noofItem}</span>
            <button><AddIcon/></button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button type="button"  className="btn  dish-btn">
            Add To Cart
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function TermsAndCondition({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ maxHeight: " 550px", overflowY: "auto" }}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="text-center text-black">
          <h4> Terms &amp; Conditions. </h4>
          <Divider />
          <div className="thanks-content ">
            <h4>Terms of Use</h4>
            <p>
              Welcome to the Hummus grill Sites! We built our website and app to
              share information about our company, our restaurants, and our
              foods; to make guides available that show you how to make
              delicious food at home; to provide updates related to our company;
              and to allow you to purchase our food.
            </p>
            <h4>Privacy</h4>
            <p>
              {" "}
              We value your privacy. Please review our privacy policy, which is
              incorporated into these terms, to understand our privacy
              practices.
            </p>
            <h4>Trademarks</h4>
            <p>
              Hummus grill™ and the Hummus grill logo are registered trademarks
              of Hummus grill Group, Inc. You may not use, copy, reproduce,
              republish, upload, post, transmit, distribute, or modify these
              trademarks in anyway, including in advertising or publicity
              pertaining to distribution of materials on the Sites, without our
              prior written permission. All other names, logos, product and
              service names, designs and slogans that may appear on the Sites
              are the trademarks of their respective owners and may not be used,
              copied, reproduced, republished, uploaded, posted, transmitted,
              distributed, or modified without express permission from the
              respective owner. The use of Hummus grill trademarks on any other
              website is not allowed. We prohibit the use of any of our
              trademarks as a “hot” link on or to any other website unless
              establishment of such a link is approved in advance.
            </p>
            <h4>Other Intellectual Property Rights</h4>
            <p>
              The Sites and all content, features and functionality (including
              but not limited to all information, software, text, displays,
              images, graphics, photographs, illustrations, video and audio, and
              the design, selection and arrangement thereof) (“Content”) are
              owned by Hummus grill Group, Inc., its licensors, agents, or
              Content providers. The Sites and all Content are protected by U.S.
              and international copyright, trademark, trade dress, patent, trade
              secret and other intellectual property or proprietary rights laws.
            </p>
            <h4>You also agree not to:</h4>
            <p>
              Use the Sites in any manner or take any action that could, in our
              sole discretion, disable, overburden, impose an unreasonable or
              disproportionately large load, damage, or impair the Sites or
              interfere with any other party's use of the Sites. Use any robot,
              spider, scraper or other automatic device, process or means to
              access the Sites for any purpose, including monitoring or copying
              any of the material on the Sites. Use any device, software,
              routine, or take any other action that interferes or attempts to
              interfere with the proper working of the Sites or any activities
              conducted on or through the Sites. Introduce any viruses, trojan
              horses, worms, logic bombs or other material which is malicious or
              technologically harmful. Bypass, or attempt to bypass, any
              measures we may use to prevent or restrict access to the Sites or
              otherwise gain unauthorized access to, interfere with, damage or
              disrupt any parts of the Sites, the server on which the Sites are
              stored, or any server, computer or database connected to the
              Sites. Attack our Sites via a denial-of-service attack or a
              distributed denial-of-service attack.
            </p>
            <h4>Text Messaging</h4>
            <p>
              {" "}
              By providing a cell phone to us you represent and warrant that you
              are the owner or authorized primary user of the device and you
              expressly consent to receiving text messages from Hummus grill
              from time to time, including messages about products that you have
              ordered and promotional messages. If you no longer wish to receive
              these messages, please contact us at [insert email address] or
              reply “STOP” to the text message. Your carrier may charge you
              standard text messaging rates for each message sent or received.
            </p>
            <h4>Feedback</h4>
            <p>
              We welcome your comments and suggestions regarding our Sites and
              the information, products and services we make available here.
              Contact us at info@hummusgrill.net to provide feedback.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Mycart;
export { TermsAndCondition, AddToCart };
