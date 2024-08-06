import React  from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function DismissibleExample({message, showA, setShowA}) {

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row style={{position:"absolute", top:"1rem", right:"0.5rem", zIndex:1000}}>
      <Col md={6} className="mb-2">
       
        <Toast show={showA} onClose={toggleShowA} style={{background:"#ff000080"}}>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
    
    </Row>
  );
}

export default DismissibleExample;