import React  from 'react';

import Toast from 'react-bootstrap/Toast';

function DismissibleExample({message, showA, setShowA}) {

  const toggleShowA = () => setShowA(!showA);

  return (
    <div style={{position:"absolute", top:"1rem", right:"0.5rem", zIndex:1000, maxWidth:"400px"}}>
      <div className="mb-2">
       
        <Toast show={showA} onClose={toggleShowA} style={{background:"#ff000080"}}>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    
    </div>
  );
}

export default DismissibleExample;